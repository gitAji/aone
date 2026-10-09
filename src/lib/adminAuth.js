import { SignJWT, jwtVerify } from 'jose';

export const ADMIN_COOKIE_NAME = 'admin_session';
const SESSION_DURATION = '8h';

// Edge-compatible (jose, not Node's crypto) so the same verify function
// works in both middleware.js (edge runtime) and ordinary route handlers.
function getSecretKey() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error('ADMIN_SESSION_SECRET is not configured -- admin sessions cannot be signed or verified without it.');
  }
  return new TextEncoder().encode(secret);
}

export async function createAdminSession(username) {
  return new SignJWT({ sub: username, role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(SESSION_DURATION)
    .sign(getSecretKey());
}

// Fails closed: any error (missing secret, expired/tampered token) returns
// null rather than throwing, so a misconfigured deployment locks admin
// routes out instead of silently letting requests through.
export async function verifyAdminSession(token) {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, getSecretKey());
    return payload;
  } catch {
    return null;
  }
}
