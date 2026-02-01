import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { sendAdminNotification } from '@/lib/mail';

export async function POST(request) {
  try {
    const { referrerName, referrerEmail, referredName, referredEmail, referredCompany, referredService, additionalNotes } = await request.json();

    // Basic validation
    if (!referrerName || !referrerEmail || !referredName || !referredEmail) {
      return NextResponse.json({ error: 'Referrer Name, Referrer Email, Referred Name, and Referred Email are required.' }, { status: 400 });
    }

    const docRef = await addDoc(collection(db, 'referrals'), {
      referrer_name: referrerName,
      referrer_email: referrerEmail,
      referred_name: referredName,
      referred_email: referredEmail,
      referred_company: referredCompany,
      referred_service: referredService,
      additional_notes: additionalNotes,
      created_at: serverTimestamp(),
    });

    // Send Admin Notification
    await sendAdminNotification({
      subject: `New Referral: ${referrerName} referred ${referredName}`,
      text: `
        A new referral has been submitted.
        
        --- REFERRER ---
        Name: ${referrerName}
        Email: ${referrerEmail}
        
        --- REFERRED PARTY ---
        Name: ${referredName}
        Email: ${referredEmail}
        Company: ${referredCompany || 'N/A'}
        Service: ${referredService || 'N/A'}
        Notes: ${additionalNotes || 'N/A'}
      `
    });

    return NextResponse.json({
      message: 'Referral submitted successfully!',
      id: docRef.id
    }, { status: 200 });
  } catch (error) {
    console.error('Error processing referral:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
