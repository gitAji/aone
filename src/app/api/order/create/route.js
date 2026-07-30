import { NextResponse } from 'next/server';
import { getAdminDb } from '@/lib/firebaseAdmin';
import { packages } from '@/app/data/packages';
import { sendClientEmail, sendAdminNotification } from '@/lib/mail';

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

// Base price and add-on prices both come from our own canonical packages.js
// by id -- never from the client-supplied package object -- for the same
// reason as checkout/stripe/route.js: this is a price the business will
// actually invoice against, so it can't be attacker-controlled.
const calculatePrice = (canonicalPkg, interval, addonsList = []) => {
    const base = interval === 'monthly' ? canonicalPkg.monthlyPrice : canonicalPkg.price;

    const addonsCost = packages
        .filter(p => p.isAddon && addonsList.includes(p.id))
        .reduce((sum, p) => sum + p.price, 0);

    return base + addonsCost;
};

export async function POST(request) {
    try {
        const body = await request.json();

        const { orderId: providedOrderId, package: clientSelectedPack, formData, billingInterval, addons, paymentMethod, discountCode = '', agreementUrl } = body;

        if (!clientSelectedPack || !formData) {
            return NextResponse.json({ error: 'Missing required data' }, { status: 400 });
        }

        const selectedPack = packages.find(p => p.id === clientSelectedPack.id);
        if (!selectedPack || selectedPack.isCustom) {
            return NextResponse.json({ error: 'Unknown or non-purchasable package.' }, { status: 400 });
        }

        const rawPrice = calculatePrice(selectedPack, billingInterval, addons || []);
        const potentialDiscount = discountCode.trim().toUpperCase() === 'AONE' ? rawPrice * 0.5 : 0;
        const price = roundPrice(rawPrice - potentialDiscount);

        // 1. Store in Firestore (The "Sales Agreement").
        // This is the "sign the agreement now, arrange payment separately"
        // path (no card is charged here) -- status is deliberately NOT
        // 'completed'. That value is reserved for the Stripe webhook, which
        // is the only thing that has actually verified money changed hands.
        // Conflating "agreement signed" with "paid" here previously let this
        // endpoint mark orders as paid/signed with no payment or signature
        // ever having happened.
        const orderData = {
            package: selectedPack,
            formData,
            billingInterval,
            addons,
            paymentMethod,
            status: 'agreement_signed',
            agreementSigned: true,
            signedAt: new Date().toISOString(),
            createdAt: new Date().toISOString(),
            totalAmount: price,
            currentStep: 4,
            agreementUrl: agreementUrl || null
        };

        let finalOrderId = providedOrderId || ('MOCK-' + Date.now());
        try {
            const adminDb = getAdminDb();
            await adminDb.collection('orders').doc(finalOrderId).set(orderData, { merge: true });
        } catch (dbError) {
            console.error("Firebase save failed:", dbError);
        }

        // 2. Send Confirmation Email (The "Agreement Copy")
        const emailHtml = `
      <div style="font-family: sans-serif; color: #333;">
          <h1 style="color: #f43f5e;">Agreement Received</h1>
          <p>Hi ${formData.name},</p>
          <p>Thank you for choosing Aone!</p>

          <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top:0;">Agreement Details</h3>
            <p><strong>Package:</strong> ${selectedPack.name}</p>
            <p><strong>Total Price:</strong> ${price} NOK (${billingInterval})</p>
            <p><strong>Organization:</strong> ${formData.businessName} (${formData.orgNumber})</p>
            <p><strong>Status:</strong> Agreement received -- payment to be arranged separately</p>
          </div>

          <p>We will contact you shortly to arrange payment and get started.</p>
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
                subject: `New Agreement (Payment Pending): ${selectedPack.name}`,
                text: `Customer: ${formData.name} (${formData.email})\nPackage: ${selectedPack.name}\nTotal: ${price} NOK\nStatus: Agreement signed -- payment NOT yet collected`
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
