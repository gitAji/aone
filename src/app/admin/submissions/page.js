import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifyAdminSession, ADMIN_COOKIE_NAME } from '@/lib/adminAuth';
import SubmissionsClient from './SubmissionsClient';

// Same defense-in-depth pattern as admin/page.js -- middleware.js already
// gates /admin/:path*, this re-verifies server-side.
export default async function AdminSubmissionsPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  const session = await verifyAdminSession(token);

  if (!session) {
    redirect('/admin/login');
  }

  return <SubmissionsClient />;
}
