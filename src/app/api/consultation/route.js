import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { sendAdminNotification } from '@/lib/mail';

export async function POST(request) {
  try {
    const {
      fullName,
      email,
      phone,
      companyName,
      servicesOfInterest,
      biggestChallenge,
      preferredTime,
    } = await request.json();

    // Basic validation
    if (!fullName || !email) {
      return NextResponse.json({ error: 'Full Name and Email are required.' }, { status: 400 });
    }

    const docRef = await addDoc(collection(db, 'consultation_requests'), {
      full_name: fullName,
      email,
      phone,
      company_name: companyName,
      services_of_interest: servicesOfInterest,
      biggest_challenge: biggestChallenge,
      preferred_time: preferredTime,
      created_at: serverTimestamp(),
    });

    // Send Admin Notification
    await sendAdminNotification({
      subject: `New Consultation Request: ${fullName}`,
      text: `
        A new consultation request has been submitted.
        
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone || 'N/A'}
        Company: ${companyName || 'N/A'}
        Services: ${servicesOfInterest ? servicesOfInterest.join(', ') : 'None selected'}
        Challenge: ${biggestChallenge || 'N/A'}
        Preferred Time: ${preferredTime || 'N/A'}
      `
    });

    return NextResponse.json({
      message: 'Consultation request submitted successfully!',
      id: docRef.id
    }, { status: 200 });
  } catch (error) {
    console.error('Error processing consultation request:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
