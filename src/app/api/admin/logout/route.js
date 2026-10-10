import { NextResponse } from 'next/server';
import { ADMIN_COOKIE_NAME } from '@/lib/adminAuth';

export async function POST() {
  const response = NextResponse.json({ success: true });
  // Must match the path the cookie was set with (google-login/route.js
  // uses path: '/') -- deleting without it defaults to the request's own
  // path (/api/admin), which writes a *different* cookie instead of
  // clearing the real session, leaving the user still logged in.
  response.cookies.delete({ name: ADMIN_COOKIE_NAME, path: '/' });
  return response;
}
