import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Basic validation
    if (!subject || !message) {
      return NextResponse.json({ error: 'Subject and Message are required.' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('feedback_submissions')
      .insert([
        {
          full_name: name,
          email,
          subject,
          message,
        },
      ]);

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json({ error: 'Failed to save feedback.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Feedback received successfully!', data }, { status: 200 });
  } catch (error) {
    console.error('Error processing feedback:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
