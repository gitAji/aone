import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyAdminSession, ADMIN_COOKIE_NAME } from '@/lib/adminAuth';
import { getAdminDb } from '@/lib/firebaseAdmin';
import { getSourceByType } from '@/lib/submissionSources';

async function requireAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  return verifyAdminSession(token);
}

// Firestore Timestamp fields don't survive JSON.stringify as useful data
// (they'd serialize to {}) -- convert any at any depth to ISO strings so
// the client gets a plain, editable JSON document.
function serialize(value) {
  if (value === null || value === undefined) return value;
  if (typeof value.toDate === 'function') return value.toDate().toISOString();
  if (Array.isArray(value)) return value.map(serialize);
  if (typeof value === 'object') {
    const out = {};
    for (const key in value) out[key] = serialize(value[key]);
    return out;
  }
  return value;
}

export async function GET(request, { params }) {
  const session = await requireAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { type, id } = await params;
  const source = getSourceByType(type);
  if (!source) {
    return NextResponse.json({ error: 'Unknown submission type.' }, { status: 400 });
  }

  let adminDb;
  try {
    adminDb = getAdminDb();
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 503 });
  }

  try {
    const docRef = adminDb.collection(source.collection).doc(id);
    const snap = await docRef.get();
    if (!snap.exists) {
      return NextResponse.json({ error: 'Not found.' }, { status: 404 });
    }
    return NextResponse.json({
      id: snap.id,
      type: source.type,
      typeLabel: source.label,
      data: serialize(snap.data()),
    });
  } catch (error) {
    console.error('Error fetching submission:', error);
    return NextResponse.json({ error: 'Failed to fetch submission.' }, { status: 500 });
  }
}

// Shallow merge-update: only top-level fields the client sends are
// touched, matching how every /api/<form>/route.js write already shapes
// these documents (flat key/value, no deep nesting the UI needs to edit).
// `id`, `type`, and any created_at/createdAt timestamp are stripped so an
// edit can never overwrite when the record was originally created.
export async function PATCH(request, { params }) {
  const session = await requireAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { type, id } = await params;
  const source = getSourceByType(type);
  if (!source) {
    return NextResponse.json({ error: 'Unknown submission type.' }, { status: 400 });
  }

  let adminDb;
  try {
    adminDb = getAdminDb();
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 503 });
  }

  try {
    const body = await request.json();
    const updates = { ...body };
    delete updates.id;
    delete updates.type;
    delete updates.created_at;
    delete updates.createdAt;

    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ error: 'No editable fields in request.' }, { status: 400 });
    }

    const docRef = adminDb.collection(source.collection).doc(id);
    const snap = await docRef.get();
    if (!snap.exists) {
      return NextResponse.json({ error: 'Not found.' }, { status: 404 });
    }

    await docRef.update(updates);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating submission:', error);
    return NextResponse.json({ error: 'Failed to update submission.' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const session = await requireAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { type, id } = await params;
  const source = getSourceByType(type);
  if (!source) {
    return NextResponse.json({ error: 'Unknown submission type.' }, { status: 400 });
  }

  let adminDb;
  try {
    adminDb = getAdminDb();
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 503 });
  }

  try {
    const docRef = adminDb.collection(source.collection).doc(id);
    const snap = await docRef.get();
    if (!snap.exists) {
      return NextResponse.json({ error: 'Not found.' }, { status: 404 });
    }
    await docRef.delete();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting submission:', error);
    return NextResponse.json({ error: 'Failed to delete submission.' }, { status: 500 });
  }
}
