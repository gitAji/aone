'use client';

import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import { motion } from 'framer-motion';
import { FaSearch, FaChartBar, FaRocket, FaCheckCircle } from 'react-icons/fa';

const FreeSEOAudit = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally handle the form submission
        setSubmitted(true);
    };

    return (
        <div className="bg-slate-50 dark:bg-[#020617] min-h-screen">
            <HeroSection 
                title="Free SEO Audit" 
                subtitle="Get a comprehensive analysis of your website's search performance and actionable insights to dominate your market." 
            />
            
            <main className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.h2 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tighter"
                        >
                            What's included in your <span className="text-rose-500">Free Audit?</span>
                        </motion.h2>
                        
                        <div className="space-y-8">
                            {[
                                {
                                    icon: <FaSearch className="text-2xl text-rose-500" />,
                                    title: "Keyword Performance",
                                    desc: "Analyze your current rankings and identify high-potential keywords you're missing."
                                },
                                {
                                    icon: <FaChartBar className="text-2xl text-rose-500" />,
                                    title: "Technical SEO Check",
                                    desc: "We scan for site speed issues, broken links, and mobile responsiveness."
                                },
                                {
                                    icon: <FaRocket className="text-2xl text-rose-500" />,
                                    title: "Competitor Analysis",
                                    desc: "See how you stack up against your biggest rivals and where you can win."
                                }
                            ].map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 shadow-lg flex items-center justify-center border border-slate-100 dark:border-slate-800">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400 font-medium">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-rose-500 to-indigo-600 rounded-[2.5rem] blur-2xl opacity-20"></div>
                        <div className="relative bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-2xl">
                            {!submitted ? (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight text-center mb-8">
                                        Request Your Audit
                                    </h3>
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Website URL</label>
                                        <input 
                                            type="url" 
                                            required 
                                            placeholder="https://yourwebsite.com"
                                            className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition-all font-medium"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Work Email</label>
                                        <input 
                                            type="email" 
                                            required 
                                            placeholder="you@company.com"
                                            className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition-all font-medium"
                                        />
                                    </div>
                                    <button 
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-rose-500 to-indigo-600 text-white font-black py-4 rounded-xl uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-rose-500/25"
                                    >
                                        Run Free Audit
                                    </button>
                                    <p className="text-[10px] text-center text-slate-400 font-medium">
                                        No credit card required. Our experts will manually review your site.
                                    </p>
                                </form>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/20">
                                        <FaCheckCircle className="text-4xl" />
                                    </div>
                                    <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter">Request Received!</h3>
                                    <p className="text-slate-600 dark:text-slate-400 font-medium mb-8">
                                        Our SEO elite team is now scanning your website. You'll receive your comprehensive report via email within 24 hours.
                                    </p>
                                    <button 
                                        onClick={() => setSubmitted(false)}
                                        className="text-rose-500 font-black uppercase tracking-widest text-sm hover:underline"
                                    >
                                        Submit another site
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default FreeSEOAudit;
