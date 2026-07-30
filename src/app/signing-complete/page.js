'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaSpinner } from 'react-icons/fa';

function SigningCompleteContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const orderId = searchParams.get('order_id');
    const [status, setStatus] = useState('verifying'); // verifying, success, error

    useEffect(() => {
        // Simulate verification with backend
        const verify = async () => {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setStatus('success');

            // After 3 seconds, redirect to the payment step of the order page
            // Or we can just let the user click a button
        };
        verify();
    }, [orderId]);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl p-10 shadow-2xl border border-slate-100 dark:border-slate-800 text-center">
                <AnimatePresence mode="wait">
                    {status === 'verifying' && (
                        <motion.div
                            key="verifying"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="space-y-6"
                        >
                            <div className="flex justify-center">
                                <FaSpinner className="text-5xl text-rose-500 animate-spin" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Verifying Signature</h2>
                            <p className="text-slate-600 dark:text-slate-400">Please wait while we confirm your agreement with Posten Signering.</p>
                        </motion.div>
                    )}

                    {status === 'success' && (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="space-y-6"
                        >
                            <div className="flex justify-center">
                                <FaCheckCircle className="text-5xl text-emerald-500" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Signature Confirmed</h2>
                            <p className="text-slate-600 dark:text-slate-400">Your agreement is legally binding. You can now proceed to payment.</p>
                            <button
                                onClick={() => router.push(`/order?step=5&order_id=${orderId}`)}
                                className="w-full py-4 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-xl font-bold shadow-lg shadow-rose-500/20 hover:scale-[1.02] transition-all"
                            >
                                Proceed to Payment
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );

}

export default function SigningCompletePage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SigningCompleteContent />
        </Suspense>
    );
}
