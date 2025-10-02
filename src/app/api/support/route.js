import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request) {
  try {
    const { name, email, subject, issueDescription, priority } = await request.json();

    // Basic validation
    if (!name || !email || !subject || !issueDescription || !priority) {
      return NextResponse.json({ error: 'All required fields must be filled.' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('support_requests')
      .insert([
        {
          full_name: name,
          email,
          subject,
          issue_description: issueDescription,
          priority,
        },
      ]);

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json({ error: 'Failed to save support request.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Support request received successfully!', data }, { status: 200 });
  } catch (error) {
    console.error('Error processing support request:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
