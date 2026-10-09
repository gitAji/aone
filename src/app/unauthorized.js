'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLock, FaHome, FaSignInAlt } from 'react-icons/fa';

// Rendered by Next.js when `unauthorized()` (from 'next/navigation') is
// called in a Server Component, Server Action, or Route Handler -- e.g.
// a signed-out visitor hitting a page that requires auth. Requires
// experimental.authInterrupts in next.config.js.
export default function Unauthorized() {
    return (
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
            <main className="flex justify-center items-center min-h-[90vh] px-6 pt-32 pb-24 md:pt-40 md:pb-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-xl w-full text-center p-8 md:p-12 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl"
                >
                    <div className="w-20 h-20 bg-rose-500/10 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-8">
                        <FaLock className="text-4xl" />
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tighter mb-4 uppercase">
                        401 -- Sign In Required
                    </h1>
                    <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-10 leading-relaxed font-bold">
                        You need to be signed in to view this page.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                        <Link
                            href="/admin/login"
                            className="flex-1 py-4 bg-slate-950 dark:bg-white text-white dark:text-slate-900 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all"
                        >
                            <FaSignInAlt className="text-xs" />
                            Sign In
                        </Link>
                        <Link
                            href="/"
                            className="flex-1 py-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                        >
                            <FaHome className="text-xs" />
                            Go Back Home
                        </Link>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
