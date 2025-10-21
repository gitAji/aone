import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request) {
  try {
    const { referrerName, referrerEmail, referredName, referredEmail, referredCompany, referredService, additionalNotes } = await request.json();

    // Basic validation
    if (!referrerName || !referrerEmail || !referredName || !referredEmail) {
      return NextResponse.json({ error: 'Referrer Name, Referrer Email, Referred Name, and Referred Email are required.' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('referrals') // Assuming a 'referrals' table exists in Supabase
      .insert([
        {
          referrer_name: referrerName,
          referrer_email: referrerEmail,
          referred_name: referredName,
          referred_email: referredEmail,
          referred_company: referredCompany,
          referred_service: referredService,
          additional_notes: additionalNotes,
        },
      ]);

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json({ error: 'Failed to save referral.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Referral submitted successfully!', data }, { status: 200 });
  } catch (error) {
    console.error('Error processing referral:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
