import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req) {
    if (!stripe) {
        console.error('Stripe is not configured. STRIPE_SECRET_KEY is missing.');
        return NextResponse.json({ error: 'Stripe is not configured' }, { status: 500 });
    }
    try {
        const { 
            orderId, 
            package: selectedPack, 
            addons, 
            billingInterval, 
            formData, 
            appliedDiscount = 0, 
            discountCode = '',
            subscription_data: clientSubscriptionData // Trial details calculated by frontend
        } = await req.json();

        // Calculate total amount in NOK (Stripe expects amount in subunits like øre/cents)
        const { packages } = await import('@/app/data/packages');

        let addonCost = 0;
        if (addons && addons.length > 0) {
            addonCost = packages
                .filter(p => p.isAddon && addons.includes(p.id))
                .reduce((sum, p) => sum + (billingInterval === 'monthly' ? p.monthlyPrice : p.price), 0);
        }

        const baseAmount = (billingInterval === 'monthly' ? selectedPack.monthlyPrice : selectedPack.price);
        const totalAmount = Math.max(0, baseAmount + addonCost - appliedDiscount);

        // Use pre-defined Stripe Price ID from package if it exists, otherwise use inline price_data
        const priceId = billingInterval === 'monthly' ? selectedPack.monthlyStripePriceId : selectedPack.stripePriceId;

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card', 'klarna'], // Added Klarna for better Norway conversion
            line_items: [
                {
                    ...(priceId ? { price: priceId } : {
                        price_data: {
                            currency: 'nok',
                            product_data: {
                                name: `${selectedPack.name} - ${billingInterval === 'monthly' ? 'Monthly Plan' : 'Standard Plan'}`,
                                description: `Order ID: ${orderId}${addons.length > 0 ? ' (Includes Custom Add-ons)' : ''}. ${formData.commitment}-month commitment.`,
                            },
                            unit_amount: totalAmount * 100, // Convert to subunits (øre)
                            ...(billingInterval === 'monthly' ? { recurring: { interval: 'month' } } : {})
                        },
                    }),
                    quantity: 1,
                },
            ],
            mode: billingInterval === 'monthly' ? 'subscription' : 'payment',
            ...(billingInterval === 'monthly' ? {
                subscription_data: clientSubscriptionData || {}
            } : {}),
            success_url: `${req.nextUrl.origin}/order?step=4&order_id=${orderId}&status=success`,
            cancel_url: `${req.nextUrl.origin}/order?step=3&order_id=${orderId}&status=cancel`,
            customer_email: formData.email,
            metadata: {
                orderId,
                packageId: selectedPack.id,
                businessName: formData.businessName,
                customerName: formData.name
            },
        });

        // Update Firestore with comprehensive order & customer details
        try {
            const { db } = await import('@/lib/firebase');
            const { doc, setDoc } = await import('firebase/firestore');
            const orderRef = doc(db, 'orders', orderId);
            
            await setDoc(orderRef, {
                orderId,
                customerId: formData.email, // Using email as a temporary unique identifier
                customerName: formData.name,
                customerEmail: formData.email,
                businessInfo: {
                    name: formData.businessName,
                    orgNumber: formData.orgNumber || '',
                    address: formData.address,
                    city: formData.city,
                    zip: formData.zip
                },
                packageDetails: {
                    id: selectedPack.id,
                    name: selectedPack.name,
                    price: selectedPack.price,
                    monthlyPrice: selectedPack.monthlyPrice
                },
                addons: addons,
                billingInterval: billingInterval,
                discount: {
                    code: discountCode,
                    amount: appliedDiscount
                },
                totalAmount: totalAmount,
                status: 'awaiting_payment',
                stripeSessionId: session.id,
                createdAt: new Date().toISOString(),
                lastUpdated: new Date().toISOString()
            }, { merge: true });
        } catch (dbErr) {
            console.error('Firestore record creation failed:', dbErr);
        }

        return NextResponse.json({ url: session.url });
    } catch (err) {
        console.error('--- STRIPE CONFIGURATION / CHECKOUT ERROR ---');
        console.error('Message:', err.message);
        console.error('Stack Trace:', err.stack);
        if (err.type === 'StripeAuthenticationError') {
             console.error('AUTHENTICATION ERROR: Your STRIPE_SECRET_KEY might be invalid or not live.');
        }
        return NextResponse.json({ 
            error: err.message,
            diagnostic: 'Check your server logs for the full stack trace.'
        }, { status: 500 });
    }
}
