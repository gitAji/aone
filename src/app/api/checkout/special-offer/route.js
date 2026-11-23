import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { specialOfferPackages } from '@/app/data/specialOfferPackages';

// Dedicated checkout route for the hidden special-offer signup
// (/special-offer), kept separate from /api/checkout/stripe rather than
// extending it -- that route is tightly coupled to packages.js's
// addon/monthly-vs-once model, which doesn't apply here (one flat package,
// yearly billing only, no addons). The Stripe webhook at
// /api/webhooks/stripe is shared: it only keys off session.metadata.orderId
// and an existing Firestore doc at orders/{orderId}, so it needs no changes
// to pick up completions from this route too.
export async function POST(req) {
    if (!stripe) {
        console.error('Stripe is not configured. STRIPE_SECRET_KEY is missing.');
        return NextResponse.json({ error: 'Stripe is not configured' }, { status: 500 });
    }
    try {
        const { orderId, packageId, formData, agreement } = await req.json();

        if (!orderId || !formData?.email || !formData?.businessName) {
            return NextResponse.json({ error: 'Missing required order details.' }, { status: 400 });
        }
        if (!agreement?.accepted || !agreement?.signatureName) {
            return NextResponse.json({ error: 'The Master Services Agreement must be accepted and signed.' }, { status: 400 });
        }

        // Price always comes from our own canonical list, never from the
        // client -- same rule as /api/checkout/stripe.
        const selectedPack = specialOfferPackages.find(p => p.id === packageId);
        if (!selectedPack) {
            return NextResponse.json({ error: 'Unknown package.' }, { status: 400 });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card', 'klarna'],
            line_items: [{
                price_data: {
                    currency: 'nok',
                    product_data: {
                        name: `${selectedPack.name} - Annual Subscription`,
                        description: `Order ID: ${orderId}. Billed yearly, no fixed commitment period.`,
                    },
                    unit_amount: selectedPack.yearlyPrice * 100,
                    recurring: { interval: 'year' },
                },
                quantity: 1,
            }],
            mode: 'subscription',
            success_url: `${req.nextUrl.origin}/order/success?order_id=${orderId}`,
            cancel_url: `${req.nextUrl.origin}/special-offer?order_id=${orderId}&status=cancel`,
            customer_email: formData.email,
            metadata: {
                orderId,
                packageId: selectedPack.id,
                businessName: formData.businessName,
                customerName: formData.name,
                source: 'special_offer',
            },
        });

        try {
            const { getAdminDb } = await import('@/lib/firebaseAdmin');
            const adminDb = getAdminDb();

            await adminDb.collection('orders').doc(orderId).set({
                orderId,
                source: 'special_offer',
                customerId: formData.email,
                customerName: formData.name,
                customerEmail: formData.email,
                businessInfo: {
                    name: formData.businessName,
                    orgNumber: formData.orgNumber || '',
                },
                packageDetails: {
                    id: selectedPack.id,
                    name: selectedPack.name,
                    yearlyPrice: selectedPack.yearlyPrice,
                },
                billingInterval: 'yearly',
                totalAmount: selectedPack.yearlyPrice,
                agreement: {
                    accepted: true,
                    signatureName: agreement.signatureName,
                    language: agreement.language || 'en',
                    acceptedAt: new Date().toISOString(),
                },
                status: 'awaiting_payment',
                stripeSessionId: session.id,
                createdAt: new Date().toISOString(),
                lastUpdated: new Date().toISOString(),
            }, { merge: true });
        } catch (dbErr) {
            console.error('Firestore record creation failed (special-offer):', dbErr);
        }

        return NextResponse.json({ url: session.url });
    } catch (err) {
        console.error('--- SPECIAL OFFER CHECKOUT ERROR ---');
        console.error('Message:', err.message);
        console.error('Stack Trace:', err.stack);
        return NextResponse.json({
            error: err.message,
            diagnostic: 'Check your server logs for the full stack trace.',
        }, { status: 500 });
    }
}
