import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req) {
    try {
        const { orderId, package: selectedPack, addons, billingInterval, formData } = await req.json();

        // Calculate total amount in NOK (Stripe expects amount in subunits like øre/cents)
        // In a production app, you'd fetch this from a real database
        const { packages } = await import('../../../data/packages');

        let addonCost = 0;
        if (addons && addons.length > 0) {
            addonCost = packages
                .filter(p => p.isAddon && addons.includes(p.id))
                .reduce((sum, p) => sum + p.price, 0);
        }

        const baseAmount = (billingInterval === 'monthly' ? selectedPack.monthlyPrice : selectedPack.price);
        const totalAmount = baseAmount + addonCost;

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'nok',
                        product_data: {
                            name: `${selectedPack.name} - ${billingInterval === 'monthly' ? 'Monthly Plan' : 'Standard Plan'}`,
                            description: `Order ID: ${orderId}${addons.length > 0 ? ' (Includes Custom Add-ons)' : ''}`,
                        },
                        unit_amount: totalAmount * 100, // Convert to subunits (øre)
                        ...(billingInterval === 'monthly' ? { recurring: { interval: 'month' } } : {})
                    },
                    quantity: 1,
                },
            ],
            mode: billingInterval === 'monthly' ? 'subscription' : 'payment',
            success_url: `${req.nextUrl.origin}/order?step=4&order_id=${orderId}&status=success`,
            cancel_url: `${req.nextUrl.origin}/order?step=3&order_id=${orderId}&status=cancel`,
            customer_email: formData.email,
            metadata: {
                orderId,
                packageId: selectedPack.id,
            },
        });

        // Update Firestore to ensure price and state are persisted before redirect
        try {
            const { db } = await import('@/lib/firebase');
            const { doc, setDoc } = await import('firebase/firestore');
            const orderRef = doc(db, 'orders', orderId);
            await setDoc(orderRef, {
                totalAmount: totalAmount,
                package: selectedPack,
                addons: addons,
                billingInterval: billingInterval,
                formData: formData,
                status: 'awaiting_payment',
                lastUpdated: new Date().toISOString()
            }, { merge: true });
        } catch (dbErr) {
            console.error('Firestore update failed in Stripe route:', dbErr);
        }

        return NextResponse.json({ url: session.url });
    } catch (err) {
        console.error('Stripe Checkout Error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
