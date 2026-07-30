import { NextResponse } from 'next/server';
import { getAdminDb } from '@/lib/firebaseAdmin';

// Statuses the client is allowed to set while a customer is still filling
// out the multi-step order form. 'completed' is deliberately excluded --
// only the Stripe webhook (checkout.session.completed, which has actually
// verified payment) may set that. 'agreement_signed' is excluded too --
// only order/create sets that, alongside the signed agreement record.
// Without this allowlist, anyone could POST here directly with
// status:'completed' and mark an arbitrary order paid.
const CLIENT_SETTABLE_STATUSES = new Set(['draft', 'awaiting_payment', 'cancelled']);

export async function POST(req) {
    try {
        const { orderId, step, selectedPack, addons, formData, billingInterval, status, totalAmount, agreementUrl } = await req.json();

        if (!orderId) {
            return NextResponse.json({ error: 'Missing orderId' }, { status: 400 });
        }

        const adminDb = getAdminDb();

        // Merge data - only update fields the caller actually provided
        const data = {
            lastUpdated: new Date().toISOString(),
        };

        if (step !== undefined) data.currentStep = step;
        if (status !== undefined) {
            if (CLIENT_SETTABLE_STATUSES.has(status)) {
                data.status = status;
            } else {
                console.warn(`order/sync: ignored disallowed status "${status}" for order ${orderId}`);
            }
        }
        if (selectedPack) data.package = selectedPack;
        if (addons) data.addons = addons;
        if (formData) data.formData = formData;
        if (billingInterval) data.billingInterval = billingInterval;
        if (totalAmount !== undefined) data.totalAmount = totalAmount;
        if (agreementUrl !== undefined) data.agreementUrl = agreementUrl;

        await adminDb.collection('orders').doc(orderId).set(data, { merge: true });

        return NextResponse.json({ success: true, orderId });
    } catch (err) {
        console.error('Order Sync Error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const orderId = searchParams.get('order_id');

    if (!orderId) {
        return NextResponse.json({ error: 'Missing order_id' }, { status: 400 });
    }

    try {
        const adminDb = getAdminDb();
        const docSnap = await adminDb.collection('orders').doc(orderId).get();

        if (docSnap.exists) {
            return NextResponse.json({ success: true, data: docSnap.data() });
        } else {
            return NextResponse.json({ error: 'Order not found' }, { status: 404 });
        }
    } catch (err) {
        console.error('Order Fetch Error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
