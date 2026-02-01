import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(request) {
  try {
    const { fullName, email, phone, companyName, services, projectDescription, budget, timeline } = await request.json();

    // Basic validation
    if (!fullName || !email || !phone || !projectDescription || services.length === 0 || !budget || !timeline) {
      return NextResponse.json({ error: 'All required fields must be filled.' }, { status: 400 });
    }

    const docRef = await addDoc(collection(db, 'quote_requests'), {
      full_name: fullName,
      email,
      phone,
      company_name: companyName,
      services_of_interest: services,
      project_description: projectDescription,
      estimated_budget: budget,
      desired_timeline: timeline,
      created_at: serverTimestamp(),
    });

    return NextResponse.json({
      message: 'Quote request received successfully!',
      id: docRef.id
    }, { status: 200 });
  } catch (error) {
    console.error('Error processing quote request:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
