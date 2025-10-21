import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request) {
  try {
    const { name, email, websiteURL, message } = await request.json();

    // Basic validation
    if (!name || !email || !websiteURL) {
      return NextResponse.json({ error: 'Name, Email, and Website URL are required.' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('seo_audit_requests')
      .insert([
        {
          name,
          email,
          website_url: websiteURL,
          message,
        },
      ]);

    if (error) {
      console.error('Supabase insert error for SEO audit form:', error);
      return NextResponse.json({ error: 'Failed to submit SEO audit request.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'SEO audit request submitted successfully!', data }, { status: 200 });
  } catch (error) {
    console.error('Error processing SEO audit form:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
