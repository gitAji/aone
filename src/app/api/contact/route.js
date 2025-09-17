import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    // Create a Nodemailer transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // e.g., smtp.gmail.com
      port: process.env.EMAIL_PORT, // e.g., 587 for TLS, 465 for SSL
      secure: process.env.EMAIL_PORT == 465, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Sender address
      to: 'info@aone.no', // Recipient address
      subject: `Contact Form: ${subject}`, // Subject line
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email.', error: error.message }, { status: 500 });
  }
}
