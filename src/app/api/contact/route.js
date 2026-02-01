import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { sendAdminNotification } from '@/lib/mail';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Name, Email, Subject, and Message are required.' }, { status: 400 });
    }

    const docRef = await addDoc(collection(db, 'contact_messages'), {
      full_name: name,
      email,
      subject,
      message,
      created_at: serverTimestamp(),
    });

    // Send Admin Notification
    await sendAdminNotification({
      subject: `New Contact Message: ${subject}`,
      text: `
        You have a new message from the contact form.
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `
    });

    return NextResponse.json({
      message: 'Contact message sent successfully!',
      id: docRef.id
    }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
