import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Parse service account from env var
const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY
    ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
    : null;

if (getApps().length === 0) {
    if (serviceAccount) {
        initializeApp({
            credential: cert(serviceAccount)
        });
    } else {
        // If no service account, try initializing with default credentials (e.g. on GCP)
        // or log warning
        console.warn("Warning: FIREBASE_SERVICE_ACCOUNT_KEY not set. Backend ops may fail.");
        initializeApp();
    }
}

const db = getFirestore();

export { db };
