import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { getAdminDb } from '@/lib/firebaseAdmin';
import { createAdminSession, ADMIN_COOKIE_NAME } from '@/lib/adminAuth';

const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 15 * 60 * 1000;

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password are required.' }, { status: 400 });
    }

    const adminDb = getAdminDb();
    const docId = username.toLowerCase();
    const userRef = adminDb.collection('admin_users').doc(docId);
    const userSnap = await userRef.get();

    // Same error for "no such user" and "wrong password" -- never reveal
    // which usernames exist.
    if (!userSnap.exists) {
      return NextResponse.json({ error: 'Invalid username or password.' }, { status: 401 });
    }

    const data = userSnap.data();

    if (data.lockedUntil && data.lockedUntil.toDate() > new Date()) {
      return NextResponse.json({ error: 'Too many failed attempts. Try again in 15 minutes.' }, { status: 429 });
    }

    const valid = await bcrypt.compare(password, data.passwordHash);

    if (!valid) {
      const attempts = (data.failedAttempts || 0) + 1;
      const update = { failedAttempts: attempts };
      if (attempts >= MAX_ATTEMPTS) {
        update.lockedUntil = new Date(Date.now() + LOCKOUT_MS);
        update.failedAttempts = 0;
      }
      await userRef.update(update);
      return NextResponse.json({ error: 'Invalid username or password.' }, { status: 401 });
    }

    await userRef.update({ failedAttempts: 0, lockedUntil: null, lastLoginAt: new Date() });

    const token = await createAdminSession(docId);
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
    console.error('Admin login error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
