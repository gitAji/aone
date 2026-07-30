import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Lazy singleton -- getAdminDb() is only ever called from inside a request
// handler, never at module load time. Next.js imports every route module
// during build/page-data collection, so throwing here unconditionally would
// take down the whole build the instant FIREBASE_SERVICE_ACCOUNT_KEY is
// unset (e.g. in local dev), the same way an eager `new Stripe(undefined)`
// would.
let adminDb = null;

export function getAdminDb() {
    if (adminDb) return adminDb;

    if (getApps().length === 0) {
        const raw = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
        if (!raw) {
            throw new Error(
                'FIREBASE_SERVICE_ACCOUNT_KEY is not configured -- server-side Firestore writes (orders, webhooks) cannot run without it.'
            );
        }
        let serviceAccount;
        try {
            serviceAccount = JSON.parse(raw);
        } catch (err) {
            throw new Error('FIREBASE_SERVICE_ACCOUNT_KEY is not valid JSON: ' + err.message);
        }
        initializeApp({ credential: cert(serviceAccount) });
    }

    adminDb = getFirestore();
    return adminDb;
}
