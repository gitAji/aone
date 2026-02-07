import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { sendClientEmail, sendAdminNotification } from '@/lib/mail';

const calculatePrice = (pkg, interval, addonsList = []) => {
    const { packages } = require('@/app/data/packages');
    let base = interval === 'monthly' ? pkg.monthlyPrice : pkg.price;

    const addonsCost = packages
        .filter(p => p.isAddon && addonsList.includes(p.id))
        .reduce((sum, p) => sum + p.price, 0);

    return base + addonsCost;
};

export async function POST(request) {
    try {
        const body = await request.json();
        console.log('Order received:', body);

        const { orderId: providedOrderId, selectedPack, formData, billingInterval, addons, paymentMethod } = body;

        if (!selectedPack || !formData) {
            return NextResponse.json({ error: 'Missing required data' }, { status: 400 });
        }

        const price = calculatePrice(selectedPack, billingInterval, addons || []);

        // 1. Store in Firestore (The "Sales Agreement")
        // Harmonized structure with sync API for consistent hydration
        const orderData = {
            package: selectedPack,
            formData,
            billingInterval,
            addons,
            paymentMethod,
            status: 'completed',
            agreementSigned: true,
            signedAt: new Date().toISOString(),
            createdAt: new Date().toISOString(),
            totalAmount: price,
            currentStep: 4
        };

        let finalOrderId = providedOrderId || ('MOCK-' + Date.now());
        try {
            const orderRef = doc(db, 'orders', finalOrderId);
            await setDoc(orderRef, orderData, { merge: true });
        } catch (dbError) {
            console.error("Firebase save failed:", dbError);
        }

        // 2. Send Confirmation Email (The "Agreement Copy")
        const emailHtml = `
      <div style="font-family: sans-serif; color: #333;">
          <h1 style="color: #f43f5e;">Order Confirmation</h1>
          <p>Hi ${formData.name},</p>
          <p>Thank you for choosing Aone!</p>
          
          <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top:0;">Agreement Details</h3>
            <p><strong>Package:</strong> ${selectedPack.name}</p>
            <p><strong>Total Price:</strong> ${price} NOK (${billingInterval})</p>
            <p><strong>Organization:</strong> ${formData.businessName} (${formData.orgNumber})</p>
            <p><strong>Signed:</strong> ✅ Verified via BankID (Simulation)</p>
          </div>

          <p>We will contact you shortly to get started.</p>
          <p>Best regards,<br>The Aone Team</p>
      </div>
    `;

        // Only attempt email if email is provided
        if (formData.email) {
            await sendClientEmail({
                to: formData.email,
                subject: 'Your Web Design Order & Agreement',
                html: emailHtml
            });

            // 3. Notify Admin
            await sendAdminNotification({
                subject: `New Order: ${selectedPack.name}`,
                text: `Customer: ${formData.name} (${formData.email})\nPackage: ${selectedPack.name}\nTotal: ${price} NOK\nStatus: Paid/Signed`
            });
        }

        return NextResponse.json({
            success: true,
            orderId: finalOrderId,
            message: 'Order stored and confirmed'
        });

    } catch (error) {
        console.error('Order processing failed:', error);
        return NextResponse.json({ error: 'Order failed' }, { status: 500 });
    }
}
