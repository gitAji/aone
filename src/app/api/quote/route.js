import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { sendAdminNotification } from '@/lib/mail';

export async function POST(request) {
  try {
    const { name, email, phone, company, services, projectDescription, budget, timeline } = await request.json();

    // Basic validation
    if (!name || !email || !phone || !projectDescription || services.length === 0 || !budget || !timeline) {
      return NextResponse.json({ error: 'All required fields must be filled.' }, { status: 400 });
    }

    const docRef = await addDoc(collection(db, 'quote_requests'), {
      full_name: name,
      email,
      phone,
      company_name: company,
      services_of_interest: services,
      project_description: projectDescription,
      estimated_budget: budget,
      desired_timeline: timeline,
      created_at: serverTimestamp(),
    });

    // Send Admin Notification
    await sendAdminNotification({
      subject: `New Quote Request: ${name}`,
      text: `
        A new quote request has been submitted.
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Company: ${company || 'N/A'}
        Services: ${services ? services.join(', ') : 'None selected'}
        Project Description: ${projectDescription}
        Budget: ${budget}
        Timeline: ${timeline}
      `
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
