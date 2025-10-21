import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Name, Email, Subject, and Message are required.' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('feedback_submissions') // Submitting to the same table as feedback
      .insert([
        {
          full_name: name,
          email,
          subject,
          message,
        },
      ]);

    if (error) {
      console.error('Supabase insert error for contact form:', error);
      return NextResponse.json({ error: 'Failed to send contact message.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Contact message sent successfully!', data }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
