'use client';

import React, { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaTimesCircle } from 'react-icons/fa';

function SigningCancelledContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const orderId = searchParams.get('order_id');

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl p-10 shadow-2xl border border-slate-100 dark:border-slate-800 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-6"
                >
                    <div className="flex justify-center">
                        <FaTimesCircle className="text-5xl text-rose-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Signing Cancelled</h2>
                    <p className="text-slate-600 dark:text-slate-400">The signing process was not completed. You can try again to finalize your order.</p>
                    <div className="space-y-3">
                        <button
                            onClick={() => router.push(`/order?step=4&order_id=${orderId}`)}
                            className="w-full py-4 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-xl font-bold hover:scale-[1.02] transition-all"
                        >
                            Back to Signing
                        </button>
                        <button
                            onClick={() => router.push('/')}
                            className="w-full py-4 text-slate-500 hover:text-slate-800 dark:hover:text-white font-medium transition-colors"
                        >
                            Return Home
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default function SigningCancelledPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SigningCancelledContent />
        </Suspense>
    );
}
