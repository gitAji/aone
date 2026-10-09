import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyAdminSession, ADMIN_COOKIE_NAME } from '@/lib/adminAuth';
import { getAdminDb } from '@/lib/firebaseAdmin';

// Not covered by middleware.js (its matcher is /admin/:path*, not
// /api/admin/:path*), so this route re-verifies the session itself --
// same check src/app/admin/page.js does server-side.
async function requireAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  return verifyAdminSession(token);
}

const PER_COLLECTION_LIMIT = 50;

// Each form writes to its own Firestore collection with its own field
// names (see the individual /api/<form>/route.js handlers) -- this maps
// each collection to a normalized { type, title, name, email, summary }
// shape so the admin UI can render one unified list.
const SOURCES = [
  {
    collection: 'contact_messages',
    type: 'contact',
    label: 'Contact',
    map: (d) => ({ name: d.full_name, email: d.email, summary: d.subject }),
  },
  {
    collection: 'consultation_requests',
    type: 'consultation',
    label: 'Consultation',
    map: (d) => ({ name: d.full_name, email: d.email, summary: d.company_name || d.biggest_challenge }),
  },
  {
    collection: 'job_applications',
    type: 'application',
    label: 'Job Application',
    map: (d) => ({ name: d.name, email: d.email, summary: d.role }),
  },
  {
    collection: 'quote_requests',
    type: 'quote',
    label: 'Quote Request',
    map: (d) => ({ name: d.full_name, email: d.email, summary: d.project_description }),
  },
  {
    collection: 'referrals',
    type: 'referral',
    label: 'Referral',
    map: (d) => ({ name: d.referrer_name, email: d.referrer_email, summary: `Referred ${d.referred_name || '—'}` }),
  },
  {
    collection: 'support_requests',
    type: 'support',
    label: 'Support Ticket',
    map: (d) => ({ name: d.full_name, email: d.email, summary: `[${d.priority || 'n/a'}] ${d.subject || ''}` }),
  },
  {
    collection: 'feedback_submissions',
    type: 'feedback',
    label: 'Feedback',
    map: (d) => ({ name: d.full_name, email: d.email, summary: d.subject }),
  },
  {
    collection: 'design_requirements',
    type: 'design_requirements',
    label: 'Design Requirements',
    map: (d) => ({ name: d.full_name, email: d.email, summary: d.company_name || d.project_description }),
  },
  {
    collection: 'seo_audit_requests',
    type: 'seo_audit',
    label: 'Free SEO Audit',
    map: (d) => ({ name: d.email, email: d.email, summary: d.url }),
  },
  {
    collection: 'orders',
    type: 'order',
    label: 'Order',
    map: (d) => ({
      name: d.formData?.name || d.formData?.fullName || '—',
      email: d.formData?.email || '—',
      summary: `${d.package || 'package'} -- ${d.status || 'unknown'}${d.totalAmount ? ` -- ${d.totalAmount} NOK` : ''}`,
    }),
    // orders writes createdAt as an ISO string, not a Firestore Timestamp.
    createdAtField: 'createdAt',
  },
];

function toIsoString(value) {
  if (!value) return null;
  if (typeof value === 'string') return value;
  if (typeof value.toDate === 'function') return value.toDate().toISOString();
  return null;
}

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
      SOURCES.map(async (source) => {
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
