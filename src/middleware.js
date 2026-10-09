import { NextResponse } from 'next/server';
import { verifyAdminSession, ADMIN_COOKIE_NAME } from '@/lib/adminAuth';

export const config = {
  matcher: ['/admin/:path*'],
};

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname === '/admin/login') {
    return NextResponse.next();
  }

  const token = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
  const session = await verifyAdminSession(token);

  if (!session) {
    const loginUrl = new URL('/admin/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
