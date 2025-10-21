import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request) {
  try {
    const { fullName, email, phone, companyName, services, projectDescription, budget, timeline } = await request.json();

    // Basic validation
    if (!fullName || !email || !phone || !projectDescription || services.length === 0 || !budget || !timeline) {
      return NextResponse.json({ error: 'All required fields must be filled.' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('quote_requests')
      .insert([
        {
          full_name: fullName,
          email,
          phone,
          company_name: companyName,
          services_of_interest: services,
          project_description: projectDescription,
          estimated_budget: budget,
          desired_timeline: timeline,
        },
      ]);

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json({ error: 'Failed to save quote request.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Quote request received successfully!', data }, { status: 200 });
  } catch (error) {
    console.error('Error processing quote request:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
