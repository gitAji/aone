import { NextResponse } from 'next/server';
import { verifyGoogleIdToken } from '@/lib/googleIdToken';
import { createAdminSession, ADMIN_COOKIE_NAME } from '@/lib/adminAuth';

// Fail closed: with no allow-list configured, nobody gets in via Google,
// same posture as every other secret-gated piece of this admin system.
function getAllowedEmails() {
  const raw = process.env.ADMIN_ALLOWED_EMAILS || '';
  return raw.split(',').map((e) => e.trim().toLowerCase()).filter(Boolean);
}

export async function POST(request) {
  try {
    const { idToken } = await request.json();
    if (!idToken) {
      return NextResponse.json({ error: 'Missing ID token.' }, { status: 400 });
    }

    const payload = await verifyGoogleIdToken(idToken);
    if (!payload) {
      return NextResponse.json({ error: 'Invalid or expired Google sign-in.' }, { status: 401 });
    }

    const allowedEmails = getAllowedEmails();
    const email = payload.email.toLowerCase();

    if (allowedEmails.length === 0) {
      return NextResponse.json({ error: 'Google sign-in is not configured for this admin panel.' }, { status: 503 });
    }
    if (!allowedEmails.includes(email)) {
      return NextResponse.json({ error: 'This Google account is not authorized for admin access.' }, { status: 403 });
    }

    const token = await createAdminSession(email);
    const response = NextResponse.json({ success: true });
    response.cookies.set(ADMIN_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 8,
      path: '/',
    });
    return response;
  } catch (error) {
    console.error('Google admin login error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
