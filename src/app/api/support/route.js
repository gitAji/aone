import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { sendAdminNotification } from '@/lib/mail';

export async function POST(request) {
  try {
    const { name, email, subject, issueDescription, priority } = await request.json();

    // Basic validation
    if (!name || !email || !subject || !issueDescription || !priority) {
      return NextResponse.json({ error: 'All required fields must be filled.' }, { status: 400 });
    }

    const docRef = await addDoc(collection(db, 'support_requests'), {
      full_name: name,
      email,
      subject,
      issue_description: issueDescription,
      priority,
      created_at: serverTimestamp(),
    });

    // Send Admin Notification
    await sendAdminNotification({
      subject: `New Support Ticket [${priority}]: ${subject}`,
      text: `
        A new support ticket has been created.
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Priority: ${priority}
        Issue: ${issueDescription}
      `
    });

    return NextResponse.json({
      message: 'Support request received successfully!',
      id: docRef.id
    }, { status: 200 });
  } catch (error) {
    console.error('Error processing support request:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
