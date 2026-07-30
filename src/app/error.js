'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaExclamationTriangle, FaRedo, FaHome } from 'react-icons/fa';

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Captured Runtime Error:', error);
    }, [error]);

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#020617] flex items-center justify-center px-6 pt-32 pb-24 md:pt-40 md:pb-32 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-xl w-full p-8 md:p-12 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl"
            >
                {/* Warning Pulse Icon */}
                <div className="w-20 h-20 bg-rose-500/10 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                    <FaExclamationTriangle className="text-4xl" />
                </div>

                <h1 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase mb-4 tracking-tight">
                    Something went wrong
                </h1>
                <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm md:text-base leading-relaxed">
                    An unexpected error occurred while rendering this page. Our team has been notified, and we are working to resolve the issue.
                </p>

                {/* Collapsible Error Logs (Monospace) */}
                {error && error.message && (
                    <details className="mb-10 text-left bg-slate-50 dark:bg-slate-800/30 rounded-2xl p-4 border border-slate-100 dark:border-slate-800 cursor-pointer">
                        <summary className="text-[10px] font-black uppercase tracking-wider text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                            Diagnostic Logs
                        </summary>
                        <pre className="mt-3 text-[11px] font-mono text-rose-500 bg-rose-50/50 dark:bg-rose-950/10 p-3 rounded-lg overflow-x-auto whitespace-pre-wrap select-all font-bold">
                            {error.message}
                        </pre>
                    </details>
                )}

                {/* Call to Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => reset()}
                        className="flex-1 py-4 bg-slate-950 dark:bg-white text-white dark:text-slate-900 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all cursor-pointer"
                    >
                        <FaRedo className="text-xs" />
                        Try Again
                    </button>
                    <Link
                        href="/"
                        className="flex-1 py-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                    >
                        <FaHome className="text-xs" />
                        Back to Home
                    </Link>
                </div>
            </motion.div>
        </main>
    );
}
