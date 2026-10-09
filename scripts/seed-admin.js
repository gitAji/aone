#!/usr/bin/env node
// One-time setup: creates or resets an admin_users record with a bcrypt
// hash of the given password. The username/password are read from
// environment variables only -- never hardcode them here, so a credential
// never ends up committed to git history.
//
// Usage (run once, wherever FIREBASE_SERVICE_ACCOUNT_KEY is available --
// e.g. locally with your own copy of that key, or a one-off invocation in
// your deployment environment):
//
//   ADMIN_SEED_USERNAME=admin \
//   ADMIN_SEED_PASSWORD='your-password' \
//   FIREBASE_SERVICE_ACCOUNT_KEY='<the same JSON key the app already uses>' \
//   node scripts/seed-admin.js

const bcrypt = require('bcryptjs');
const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

async function main() {
  const username = process.env.ADMIN_SEED_USERNAME;
  const password = process.env.ADMIN_SEED_PASSWORD;
  const rawKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

  if (!username || !password) {
    console.error('Set ADMIN_SEED_USERNAME and ADMIN_SEED_PASSWORD before running this script.');
    process.exit(1);
  }
  if (password.length < 8) {
    console.error('Password must be at least 8 characters.');
    process.exit(1);
  }
  if (!rawKey) {
    console.error('FIREBASE_SERVICE_ACCOUNT_KEY is not set.');
    process.exit(1);
  }

  if (getApps().length === 0) {
    initializeApp({ credential: cert(JSON.parse(rawKey)) });
  }
  const db = getFirestore();

  const passwordHash = await bcrypt.hash(password, 12);
  const docId = username.toLowerCase();

  await db.collection('admin_users').doc(docId).set({
    username: docId,
    passwordHash,
    failedAttempts: 0,
    lockedUntil: null,
    createdAt: new Date(),
    lastLoginAt: null,
  }, { merge: true });

  console.log(`Admin user "${docId}" created/updated in admin_users.`);
  process.exit(0);
}

main().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
