import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { getAdminDb } from '@/lib/firebaseAdmin';

// Stripe sends signed POST events here once payment actually happens.
// This is the ONLY place an order is allowed to become status:'completed' --
// checkout/stripe/route.js only ever writes status:'awaiting_payment', and
// order/sync (called from the client throughout the multi-step form) refuses
// to accept 'completed' from a request body. Without this webhook, order
// completion was decided entirely by whether the browser happened to load
// the success page after redirecting from Stripe -- which anyone could
// trigger directly, with or without ever paying.
//
// Register in Stripe Dashboard -> Developers -> Webhooks, pointing at
// https://aone.no/api/webhooks/stripe, subscribed to at least
// checkout.session.completed. Put the resulting signing secret in
// STRIPE_WEBHOOK_SECRET.

export async function POST(request) {
    if (!stripe) {
        console.error('Stripe webhook received but STRIPE_SECRET_KEY is not configured.');
        return NextResponse.json({ error: 'Stripe is not configured' }, { status: 500 });
    }

    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!webhookSecret) {
        console.error('STRIPE_WEBHOOK_SECRET is not configured -- refusing to process unverifiable webhook events.');
        return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 });
    }

    const body = await request.text();
    const signature = request.headers.get('stripe-signature') || '';

    let event;
    try {
        event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
        console.error('Stripe webhook signature verification failed:', err.message);
        return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    try {
        switch (event.type) {
            case 'checkout.session.completed': {
                const session = event.data.object;
                const orderId = session.metadata?.orderId;

                if (!orderId) {
                    // Nothing to key the Firestore write off of -- log and
                    // move on rather than guessing at a document to update.
                    console.error('checkout.session.completed has no metadata.orderId', { sessionId: session.id });
                    break;
                }

                const adminDb = getAdminDb();
                await adminDb.collection('orders').doc(orderId).set({
                    status: 'completed',
                    paymentVerified: true,
                    paidAmount: typeof session.amount_total === 'number' ? session.amount_total / 100 : null,
                    currency: session.currency || null,
                    stripeSessionId: session.id,
                    stripeCustomerId: typeof session.customer === 'string' ? session.customer : session.customer?.id || null,
                    stripeSubscriptionId: typeof session.subscription === 'string' ? session.subscription : session.subscription?.id || null,
                    paidAt: new Date().toISOString(),
                    lastUpdated: new Date().toISOString(),
                }, { merge: true });

                break;
            }

            case 'customer.subscription.deleted': {
                // A monthly-plan order whose subscription later gets
                // cancelled -- not urgent to act on today, but worth a
                // record rather than silently ignoring it.
                const sub = event.data.object;
                console.log('Stripe subscription cancelled:', sub.id);
                break;
            }

            default:
                break;
        }

        return NextResponse.json({ received: true });
    } catch (err) {
        console.error('Stripe webhook handler error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
