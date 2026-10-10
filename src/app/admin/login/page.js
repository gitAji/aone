'use client';

import React, { Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaLock, FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/lib/firebase';

function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState('');
  const [isGoogleSubmitting, setIsGoogleSubmitting] = useState(false);

  const goToDestination = () => {
    const redirectTo = searchParams.get('redirect') || '/admin';
    router.push(redirectTo);
    router.refresh();
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleSubmitting(true);
    setError('');

    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      const idToken = await result.user.getIdToken();

      const response = await fetch('/api/admin/google-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken }),
      });
      const data = await response.json();

      if (response.ok) {
        goToDestination();
      } else {
        setError(data.error || 'Google sign-in failed.');
      }
    } catch (err) {
      // User closing the popup throws too -- don't show a scary error for that.
      if (err?.code !== 'auth/popup-closed-by-user' && err?.code !== 'auth/cancelled-popup-request') {
        // Surface the actual Firebase error code (e.g. auth/operation-not-allowed
        // if the Google provider isn't enabled yet, auth/unauthorized-domain if
        // this domain isn't in Firebase's authorized-domains list) instead of a
        // dead-end generic message -- this is exactly the detail needed to tell
        // "CSP blocked the script" apart from "provider not enabled" apart from
        // "domain not authorized".
        setError(err?.code ? `Google sign-in failed: ${err.code}` : 'Google sign-in failed.');
      }
    } finally {
      setIsGoogleSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 py-12 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-rose-400/20 to-amber-300/15 blur-[90px] dark:from-rose-500/10 dark:to-transparent pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-rose-400/15 to-amber-300/10 blur-[90px] dark:from-amber-500/5 dark:to-transparent pointer-events-none" />

      <div className="relative w-full max-w-sm bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-2xl shadow-slate-900/5 dark:shadow-black/40 p-8 sm:p-10">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-amber-500 text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-rose-500/20 text-xl">
          <FaLock />
        </div>
        <h1 className="text-2xl font-black text-slate-900 dark:text-white mb-1.5 text-center uppercase tracking-tight">Admin Login</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 text-center">Restricted access &mdash; Aone team only</p>

        {error && (
          <div className="mb-6 px-4 py-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-sm font-medium break-words">
            {error}
          </div>
        )}

        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={isGoogleSubmitting}
          className="w-full flex items-center justify-center gap-3 px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-sm shadow-sm hover:shadow-md hover:border-rose-500/40 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
        >
          <FaGoogle className="text-rose-500 text-base" />
          {isGoogleSubmitting ? 'Signing in...' : 'Sign in with Google'}
        </button>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 dark:bg-slate-950" />}>
      <AdminLoginForm />
    </Suspense>
  );
}
