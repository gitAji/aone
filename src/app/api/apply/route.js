import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { sendAdminNotification } from '@/lib/mail';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, role, experience, portfolioUrl, cvUrl, message } = data;

    // Basic validation
    if (!name || !email || !role || !cvUrl || !message) {
      return NextResponse.json({ error: 'Required fields are missing.' }, { status: 400 });
    }

    // Save to Firestore
    const docRef = await addDoc(collection(db, 'job_applications'), {
      ...data,
      created_at: serverTimestamp(),
      status: 'new'
    });

    // Send Admin Notification
    await sendAdminNotification({
      subject: `New Job Application: ${role} - ${name}`,
      text: `
        You have a new job application for the ${role} position.
        
        Name: ${name}
        Email: ${email}
        Role: ${role}
        Experience: ${experience}
        Portfolio: ${portfolioUrl || 'N/A'}
        CV: ${cvUrl}
        
        Cover Letter Message:
        ${message}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; line-height: 1.6;">
          <h2 style="color: #f43f5e; border-bottom: 2px solid #f43f5e; padding-bottom: 10px;">New Job Application</h2>
          <p><strong>Position:</strong> ${role}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Experience:</strong> ${experience}</p>
          <p><strong>Portfolio/LinkedIn:</strong> <a href="${portfolioUrl}">${portfolioUrl}</a></p>
          <p><strong>CV/Resume:</strong> <a href="${cvUrl}" style="background: #f43f5e; color: white; padding: 5px 10px; text-decoration: none; border-radius: 5px;">View Resume</a></p>
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #f43f5e;">
            <p><strong>Cover Letter:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `
    });

    return NextResponse.json({
      message: 'Application submitted successfully!',
      id: docRef.id
    }, { status: 200 });
  } catch (error) {
    console.error('Error processing job application:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
