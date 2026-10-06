import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

const roundPrice = (value) => {
    let price = Math.ceil(value);
    while (true) {
        const lastDigit = price % 10;
        if (lastDigit === 0 || lastDigit === 9 || lastDigit === 5) {
            return price;
        }
        price++;
    }
};

export async function POST(req) {
    if (!stripe) {
        console.error('Stripe is not configured. STRIPE_SECRET_KEY is missing.');
        return NextResponse.json({ error: 'Stripe is not configured' }, { status: 500 });
    }
    try {
        const {
            orderId,
            package: clientSelectedPack,
            addons,
            billingInterval,
            formData,
            appliedDiscount = 0,
            discountCode = '',
            subscription_data: clientSubscriptionData // Trial details calculated by frontend
        } = await req.json();

        // Calculate total amount in NOK (Stripe expects amount in subunits like øre/cents)
        const { packages, SITE_WIDE_DISCOUNT_RATE, PROMO_CODE_DISCOUNT_RATE, PROMO_CODE } = await import('@/app/data/packages');

        // The client only ever tells us WHICH package/add-ons were picked (by
        // id) -- the price charged always comes from our own canonical
        // packages.js, never from the request body. Previously this trusted
        // selectedPack.price/monthlyPrice verbatim from the client, so anyone
        // could POST here directly with an arbitrary price and get a real,
        // valid Stripe Checkout Session for whatever amount they chose.
        const selectedPack = packages.find(p => p.id === clientSelectedPack?.id);
        if (!selectedPack || selectedPack.isCustom) {
            return NextResponse.json({ error: 'Unknown or non-purchasable package.' }, { status: 400 });
        }

        // An addon's one-time (setup) fee always applies, regardless of the
        // base package's billing interval. Its monthly fee only applies when
        // the base package itself is billed Monthly, since there's no
        // recurring vehicle to attach it to otherwise -- mirrors
        // OrderClient.js's calculateTotal(). Previously this always used
        // (monthly ? p.monthlyPrice : p.price) for every addon, so a pure
        // one-time addon (e.g. GEO, price-only) silently charged 0 on a
        // Monthly order, and a pure-recurring addon (e.g. Maintenance,
        // monthlyPrice-only) silently charged 0 on a one-time order --
        // while the order review page (OrderClient.js) showed a "total"
        // that didn't match either.
        let addonsOneTime = 0;
        let addonsMonthly = 0;
        if (addons && addons.length > 0) {
            const selectedAddons = packages.filter(p => p.isAddon && addons.includes(p.id));
            addonsOneTime = selectedAddons.reduce((sum, p) => sum + p.price, 0);
            addonsMonthly = billingInterval === 'monthly'
                ? selectedAddons.reduce((sum, p) => sum + p.monthlyPrice, 0)
                : 0;
        }

        const baseOneTime = billingInterval === 'once' ? selectedPack.price : 0;
        const baseMonthly = billingInterval === 'monthly' ? selectedPack.monthlyPrice : 0;

        const oneTimeSubtotal = baseOneTime + addonsOneTime;
        const monthlySubtotal = baseMonthly + addonsMonthly;

        // The site-wide flash sale (advertised on every pricing card) applies
        // automatically -- no code needed. A
        // voucher code, if entered, overrides it with the larger rate rather
        // than stacking on top of it.
        const discountRate = discountCode.trim().toUpperCase() === PROMO_CODE ? PROMO_CODE_DISCOUNT_RATE : SITE_WIDE_DISCOUNT_RATE;
        const oneTimeAmount = oneTimeSubtotal > 0 ? roundPrice(Math.max(0, oneTimeSubtotal - oneTimeSubtotal * discountRate)) : 0;
        const monthlyAmount = monthlySubtotal > 0 ? roundPrice(Math.max(0, monthlySubtotal - monthlySubtotal * discountRate)) : 0;
        const potentialDiscount = (oneTimeSubtotal - oneTimeAmount) + (monthlySubtotal - monthlyAmount);
        // "Due today": Stripe bills one-time line items together with the
        // first month on the initial invoice, then just the recurring line
        // item on every renewal after that.
        const totalAmount = oneTimeAmount + monthlyAmount;

        // Stripe supports up to one recurring price plus one one-time price
        // in a single subscription-mode Checkout Session -- the one-time
        // price is billed only on that initial invoice. For a one-time
        // order there's just the single non-recurring line item.
        const lineItems = [];
        if (monthlyAmount > 0) {
            lineItems.push({
                price_data: {
                    currency: 'nok',
                    product_data: {
                        name: `${selectedPack.name} - Monthly Plan`,
                        description: `Order ID: ${orderId}. ${formData.commitment}-month commitment.`,
                    },
                    unit_amount: monthlyAmount * 100, // Convert to subunits (øre)
                    recurring: { interval: 'month' },
                },
                quantity: 1,
            });
        }
        if (oneTimeAmount > 0) {
            lineItems.push({
                price_data: {
                    currency: 'nok',
                    product_data: {
                        name: billingInterval === 'monthly'
                            ? `${selectedPack.name} - One-time Setup${addons.length > 0 ? ' & Add-ons' : ''}`
                            : `${selectedPack.name} - Standard Plan${addons.length > 0 ? ' & Add-ons' : ''}`,
                        description: `Order ID: ${orderId}${addons.length > 0 ? ' (Includes Custom Add-ons)' : ''}.`,
                    },
                    unit_amount: oneTimeAmount * 100,
                },
                quantity: 1,
            });
        }

        if (lineItems.length === 0) {
            return NextResponse.json({ error: 'Order total is zero.' }, { status: 400 });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card', 'klarna'], // Added Klarna for better Norway conversion
            line_items: lineItems,
            mode: billingInterval === 'monthly' ? 'subscription' : 'payment',
            ...(billingInterval === 'monthly' ? {
                subscription_data: clientSubscriptionData || {}
            } : {}),
            success_url: `${req.nextUrl.origin}/order/success?order_id=${orderId}`,
            cancel_url: `${req.nextUrl.origin}/order?step=3&order_id=${orderId}&status=cancel`,
            customer_email: formData.email,
            metadata: {
                orderId,
                packageId: selectedPack.id,
                businessName: formData.businessName,
                customerName: formData.name
            },
        });

        // Update Firestore with comprehensive order & customer details. Uses
        // the Admin SDK (not the public client SDK) since firestore.rules
        // denies direct client access to `orders` -- this route is the only
        // legitimate writer of the pre-payment record, and the webhook below
        // is the only legitimate writer of the post-payment "completed" state.
        try {
            const { getAdminDb } = await import('@/lib/firebaseAdmin');
            const adminDb = getAdminDb();

            await adminDb.collection('orders').doc(orderId).set({
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
                    amount: potentialDiscount
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
