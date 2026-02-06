import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { sendClientEmail, sendAdminNotification } from '@/lib/mail';

export async function POST(request) {
    try {
        const body = await request.json();
        console.log('Order received:', body);

        const { selectedPack, formData, billingInterval, addons, paymentMethod } = body;

        if (!selectedPack || !formData) {
            return NextResponse.json({ error: 'Missing required data' }, { status: 400 });
        }

        const price = billingInterval === 'monthly' ? selectedPack.monthlyPrice : selectedPack.price;

        // 1. Store in Firestore (The "Sales Agreement")
        const orderData = {
            packageId: selectedPack.id,
            packageName: selectedPack.name,
            price,
            billingInterval,
            addons,
            customer: formData,
            paymentMethod,
            status: 'completed', // In real flow, 'pending' -> 'paid'
            agreementSigned: true, // Simulated
            signedAt: new Date().toISOString(),
            createdAt: new Date().toISOString()
        };



        let orderId = 'MOCK-' + Date.now();
        try {
            const docRef = await addDoc(collection(db, 'orders'), orderData);
            orderId = docRef.id;
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
            orderId: orderId,
            message: 'Order stored and confirmed'
        });

    } catch (error) {
        console.error('Order processing failed:', error);
        return NextResponse.json({ error: 'Order failed' }, { status: 500 });
    }
}
