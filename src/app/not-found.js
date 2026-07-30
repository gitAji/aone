'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaSearch, FaHome, FaArrowRight, FaFrownOpen } from 'react-icons/fa';

export default function NotFound() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchMessage, setSearchMessage] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        const query = searchQuery.trim().toLowerCase();
        if (!query) return;

        // Smart Redirect Logic based on keywords
        if (query.includes('chat') || query.includes('bot') || query.includes('agent') || query.includes('voice')) {
            router.push('/services/ai-chatbots');
        } else if (query.includes('auto') || query.includes('workflow') || query.includes('sync') || query.includes('ops')) {
            router.push('/services/ai-automations');
        } else if (query.includes('web') || query.includes('develop') || query.includes('code') || query.includes('site') || query.includes('page') || query.includes('design')) {
            router.push('/services/web-development');
        } else if (query.includes('brand') || query.includes('logo') || query.includes('card') || query.includes('visual')) {
            router.push('/services/branding');
        } else if (query.includes('seo') || query.includes('search') || query.includes('rank') || query.includes('google')) {
            router.push('/services/search-engine-optimization');
        } else if (query.includes('market') || query.includes('ad') || query.includes('camp') || query.includes('social')) {
            router.push('/services/digital-marketing');
        } else if (query.includes('photo') || query.includes('video') || query.includes('camera') || query.includes('film') || query.includes('shoot')) {
            router.push('/services/photography');
        } else if (query.includes('geo') || query.includes('perplexity') || query.includes('engine') || query.includes('optimise')) {
            router.push('/services/geo');
        } else if (query.includes('price') || query.includes('cost') || query.includes('pack') || query.includes('pay') || query.includes('sub')) {
            router.push('/pricing');
        } else if (query.includes('contact') || query.includes('call') || query.includes('mail') || query.includes('phone') || query.includes('meet')) {
            router.push('/contact');
        } else if (query.includes('about') || query.includes('who') || query.includes('team') || query.includes('agency') || query.includes('office')) {
            router.push('/about');
        } else {
            // If no match found, show inline "Search not found" message
            setSearchMessage(`We couldn't find a direct page for "${searchQuery}". Redirecting you to our services...`);
            setTimeout(() => {
                router.push('/services');
            }, 3000);
        }
    };

    return (
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
            <main className="flex justify-center items-center min-h-[90vh] px-6 pt-32 pb-24 md:pt-40 md:pb-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-2xl w-full text-center p-8 md:p-12 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl"
                >
                    <div className="w-20 h-20 bg-rose-500/10 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-8">
                        <FaFrownOpen className="text-4xl animate-bounce" />
                    </div>

                    <h1 className="text-4xl sm:text-6xl font-black text-slate-950 dark:text-white tracking-tighter mb-4 uppercase">
                        404 Page Not Found
                    </h1>
                    <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-lg mx-auto mb-10 leading-relaxed font-bold">
                        Oops! It looks like this link doesn’t exist or was moved. Let's find what you are looking for.
                    </p>

                    {/* Premium Search Box */}
                    <form onSubmit={handleSearch} className="mb-10 max-w-lg mx-auto">
                        <div className="flex gap-2 p-2 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-inner focus-within:ring-2 focus-within:ring-slate-900 focus-within:ring-offset-2 dark:focus-within:ring-white transition-all">
                            <input
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    if (searchMessage) setSearchMessage('');
                                }}
                                className="flex-grow bg-transparent border-none rounded-lg text-sm px-4 py-3 text-slate-950 dark:text-white placeholder:text-slate-400 outline-none font-bold"
                                placeholder="Search: 'web dev', 'ai chatbot', 'seo', 'pricing'..."
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all cursor-pointer"
                            >
                                <FaSearch className="text-xs" />
                                Search
                            </button>
                        </div>
                        {searchMessage && (
                            <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest mt-4 animate-pulse">
                                {searchMessage}
                            </p>
                        )}
                    </form>

                    {/* Core Quick Action Links */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                        <Link
                            href="/"
                            className="flex-1 py-4 bg-slate-950 dark:bg-white text-white dark:text-slate-900 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all"
                        >
                            <FaHome className="text-xs" />
                            Go Back Home
                        </Link>
                        <Link
                            href="/services"
                            className="flex-1 py-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                        >
                            View Services
                            <FaArrowRight className="text-[10px]" />
                        </Link>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
