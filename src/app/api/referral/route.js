import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

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

    return NextResponse.json({
      message: 'Referral submitted successfully!',
      id: docRef.id
    }, { status: 200 });
  } catch (error) {
    console.error('Error processing referral:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
