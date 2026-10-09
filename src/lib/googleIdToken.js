import { importX509, jwtVerify, decodeProtectedHeader } from 'jose';

// Verifies a Firebase Auth ID token (the JWT returned after a client-side
// signInWithPopup(auth, new GoogleAuthProvider())) WITHOUT the Admin SDK --
// deliberately, since FIREBASE_SERVICE_ACCOUNT_KEY isn't configured on this
// deployment. Firebase documents this exact manual-verification approach as
// an alternative to the Admin SDK: fetch Google's public certs for the
// securetoken service account, pick the one matching the token's `kid`, and
// verify signature + standard claims ourselves with jose (already a
// dependency for our own admin session JWTs).
const CERTS_URL = 'https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com';
const FIREBASE_PROJECT_ID = 'aone-98ccf'; // matches src/lib/firebase.js's firebaseConfig.projectId

let certsCache = null;
let certsCacheExpiresAt = 0;

async function getCerts() {
  if (certsCache && Date.now() < certsCacheExpiresAt) return certsCache;
  const res = await fetch(CERTS_URL);
  if (!res.ok) throw new Error(`Failed to fetch Google certs: ${res.status}`);
  certsCache = await res.json();
  // Google's response sends its own cache-control max-age; a fixed 1h
  // floor is a safe, simple fallback without parsing that header.
  certsCacheExpiresAt = Date.now() + 60 * 60 * 1000;
  return certsCache;
}

// Returns the verified payload (including `email`, `email_verified`, `sub`)
// on success, or null on any failure -- fails closed, same convention as
// verifyAdminSession in adminAuth.js.
export async function verifyGoogleIdToken(idToken) {
  if (!idToken) return null;
  try {
    const { kid } = decodeProtectedHeader(idToken);
    if (!kid) return null;

    const certs = await getCerts();
    const pem = certs[kid];
    if (!pem) return null;

    const publicKey = await importX509(pem, 'RS256');
    const { payload } = await jwtVerify(idToken, publicKey, {
      issuer: `https://securetoken.google.com/${FIREBASE_PROJECT_ID}`,
      audience: FIREBASE_PROJECT_ID,
    });

    if (!payload.email || !payload.email_verified) return null;
    return payload;
  } catch {
    return null;
  }
}
