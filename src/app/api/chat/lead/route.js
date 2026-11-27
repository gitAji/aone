import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { sendAdminNotification } from '@/lib/mail';

// Captured when the chat widget can't reach the (laptop-hosted) support agent
// -- same "name + email, we'll follow up" fallback the rest of the site uses
// for its lead-capture forms (see api/consultation/route.js).
export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    const docRef = await addDoc(collection(db, 'chat_leads'), {
      name,
      email,
      message: message || '',
      created_at: serverTimestamp(),
    });

    await sendAdminNotification({
      subject: `New Chat Lead: ${name}`,
      text: `
        The AI chat widget was offline, so a visitor left their details instead.

        Name: ${name}
        Email: ${email}
        Message: ${message || 'N/A'}
      `,
    });

    return NextResponse.json({ message: 'Lead captured successfully!', id: docRef.id }, { status: 200 });
  } catch (error) {
    console.error('Error processing chat lead:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
