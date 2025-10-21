
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request) {
  try {
    const {
      fullName,
      email,
      phone,
      companyName,
      servicesOfInterest,
      biggestChallenge,
      preferredTime,
    } = await request.json();

    // Basic validation
    if (!fullName || !email) {
      return NextResponse.json({ error: 'Full Name and Email are required.' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('consultation_requests')
      .insert([
        {
          full_name: fullName,
          email,
          phone,
          company_name: companyName,
          services_of_interest: servicesOfInterest,
          biggest_challenge: biggestChallenge,
          preferred_time: preferredTime,
        },
      ]);

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json({ error: 'Failed to save consultation request.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Consultation request submitted successfully!', data }, { status: 200 });
  } catch (error) {
    console.error('Error processing consultation request:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
