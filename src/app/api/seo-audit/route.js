import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { sendAdminNotification } from '@/lib/mail';

export async function POST(request) {
  try {
    const { url, email } = await request.json();

    if (!url || !email) {
      return NextResponse.json({ error: 'Website URL and email are required.' }, { status: 400 });
    }

    const docRef = await addDoc(collection(db, 'seo_audit_requests'), {
      url,
      email,
      status: 'new',
      created_at: serverTimestamp(),
    });

    await sendAdminNotification({
      subject: `New Free SEO Audit Request: ${url}`,
      text: `
        A new free SEO audit was requested.

        Website: ${url}
        Email: ${email}
      `,
    });

    return NextResponse.json({
      message: 'SEO audit request received successfully!',
      id: docRef.id,
    }, { status: 200 });
  } catch (error) {
    console.error('Error processing SEO audit request:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
