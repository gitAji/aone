import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Basic validation
    if (!subject || !message) {
      return NextResponse.json({ error: 'Subject and Message are required.' }, { status: 400 });
    }

    const docRef = await addDoc(collection(db, 'feedback_submissions'), {
      full_name: name,
      email,
      subject,
      message,
      created_at: serverTimestamp(),
    });

    return NextResponse.json({
      message: 'Feedback received successfully!',
      id: docRef.id
    }, { status: 200 });
  } catch (error) {
    console.error('Error processing feedback:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
