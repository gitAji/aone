import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifyAdminSession, ADMIN_COOKIE_NAME } from '@/lib/adminAuth';
import AdminDashboardClient from './AdminDashboardClient';

// middleware.js already gates /admin/:path* on a valid session, but this
// page re-verifies server-side rather than trusting that alone -- cheap
// defense in depth, and it's also how the signed-in username gets to the
// client component.
export default async function AdminDashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  const session = await verifyAdminSession(token);

  if (!session) {
    redirect('/admin/login');
  }

  return <AdminDashboardClient username={session.sub} />;
}
