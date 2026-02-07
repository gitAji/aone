import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export async function POST(req) {
    try {
        const { orderId, step, selectedPack, addons, formData, billingInterval, status, totalAmount } = await req.json();

        if (!orderId) {
            return NextResponse.json({ error: 'Missing orderId' }, { status: 400 });
        }

        const orderRef = doc(db, 'orders', orderId);

        // Merge data - we use setDoc with merge: true to update only provided fields
        const data = {
            lastUpdated: new Date().toISOString(),
            currentStep: step,
            status: status || 'draft'
        };

        if (selectedPack) data.package = selectedPack;
        if (addons) data.addons = addons;
        if (formData) data.formData = formData;
        if (billingInterval) data.billingInterval = billingInterval;
        if (totalAmount !== undefined) data.totalAmount = totalAmount;

        await setDoc(orderRef, data, { merge: true });

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
        const orderRef = doc(db, 'orders', orderId);
        const docSnap = await getDoc(orderRef);

        if (docSnap.exists()) {
            return NextResponse.json({ success: true, data: docSnap.data() });
        } else {
            return NextResponse.json({ error: 'Order not found' }, { status: 404 });
        }
    } catch (err) {
        console.error('Order Fetch Error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
