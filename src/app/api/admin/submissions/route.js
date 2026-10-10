import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyAdminSession, ADMIN_COOKIE_NAME } from '@/lib/adminAuth';
import { getAdminDb } from '@/lib/firebaseAdmin';
import { getAllSources, toIsoString } from '@/lib/submissionSources';

// Not covered by middleware.js (its matcher is /admin/:path*, not
// /api/admin/:path*), so this route re-verifies the session itself --
// same check src/app/admin/page.js does server-side.
export async function requireAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  return verifyAdminSession(token);
}

const PER_COLLECTION_LIMIT = 50;

export async function GET() {
  const session = await requireAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let adminDb;
  try {
    adminDb = getAdminDb();
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 503 });
  }

  try {
    const results = await Promise.all(
      getAllSources().map(async (source) => {
        const createdAtField = source.createdAtField || 'created_at';
        const snap = await adminDb
          .collection(source.collection)
          .orderBy(createdAtField, 'desc')
          .limit(PER_COLLECTION_LIMIT)
          .get()
          .catch(() => null);

        if (!snap) return [];

        return snap.docs.map((doc) => {
          const data = doc.data();
          const mapped = source.map(data);
          return {
            id: doc.id,
            type: source.type,
            typeLabel: source.label,
            name: mapped.name || '—',
            email: mapped.email || '—',
            summary: mapped.summary || '',
            status: data.status || null,
            createdAt: toIsoString(data[createdAtField]),
          };
        });
      })
    );

    const submissions = results
      .flat()
      .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));

    return NextResponse.json({ submissions });
  } catch (error) {
    console.error('Error fetching admin submissions:', error);
    return NextResponse.json({ error: 'Failed to fetch submissions.' }, { status: 500 });
  }
}
