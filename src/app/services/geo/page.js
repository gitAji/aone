'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { FaSearchDollar, FaLightbulb, FaRocket, FaCogs, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Testimonials from "@/components/Testimonials";

const GEOPage = () => {
    const { t } = useLanguage();

    return (
        <div className="service-detail-page bg-slate-50 dark:bg-slate-950 min-h-screen">
            {/* Hero Section */}
            <HeroSection
                title={t('services.geo.title')}
                subtitle={t('services.geo.description')}
            />

            {/* Why Section */}
            <section className="container mx-auto px-6 py-24 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tighter"
                >
                    AI Search Dominance
                </motion.h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-16 max-w-3xl mx-auto font-medium">
                    In the age of neural networks, traditional SEO is expanding into Generative Engine Optimization. 
                    Be the source AI recommends.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <FaRocket className="text-5xl text-rose-500 mb-6" />,
                            title: "AI Visibility",
                            description: "Strategic content structuring for dominance in AI-powered search results and LLM recommendations.",
                        },
                        {
                            icon: <FaChartLine className="text-5xl text-rose-500 mb-6" />,
                            title: "Intent Mastery",
                            description: "Attract users seeking precision answers by aligning your brand with direct, neural-based solutions.",
                        },
                        {
                            icon: <FaShieldAlt className="text-5xl text-rose-500 mb-6" />,
                            title: "Verified Authority",
                            description: "Establish your brand as the primary, verifiable source for AI generative responses in your industry.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="p-10 bg-white dark:bg-slate-900 rounded-3xl shadow-xl hover:shadow-rose-500/5 transition-all duration-300 border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center"
                        >
                            {item.icon}
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 font-medium">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Approach Section */}
            <section className="py-24 bg-slate-900 dark:bg-black text-white border-y border-slate-800">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter">
                                Neural-First Approach
                            </h2>
                            <p className="text-xl text-slate-400 mb-8 font-medium leading-relaxed">
                                Our GEO process starts with deep linguistic analysis to understand how users ask questions. 
                                We then architect content that AI generative engines prioritize.
                            </p>
                            <ul className="space-y-4">
                                {['Linguistic Analysis', 'Semantic Structuring', 'Entity Association', 'Performance Synthesis'].map((step, idx) => (
                                    <li key={idx} className="flex items-center text-slate-200 font-bold">
                                        <div className="w-2 h-2 bg-rose-500 rounded-full mr-4"></div>
                                        {step}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { icon: <FaLightbulb className="text-4xl text-rose-500 mb-4" />, title: "Strategy" },
                                { icon: <FaCogs className="text-4xl text-rose-500 mb-4" />, title: "Creation" },
                                { icon: <FaSearchDollar className="text-4xl text-rose-500 mb-4" />, title: "Optimization" },
                                { icon: <FaChartLine className="text-4xl text-rose-500 mb-4" />, title: "Tracking" },
                            ].map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 bg-slate-800/30 backdrop-blur-sm rounded-3xl border border-slate-800 flex flex-col items-center text-center"
                                >
                                    {item.icon}
                                    <span className="text-lg font-bold uppercase tracking-tight">{item.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials />

            {/* Final CTA Section */}
            <section className="py-24 bg-white dark:bg-slate-950 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>
                
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter uppercase">
                            Future-Proof Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600">Brand</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 font-medium leading-relaxed">
                            Be the source AI recommends. Start optimizing for the future of search today.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                href="/pricing"
                                className="w-full sm:w-auto bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-600 text-white py-5 px-12 rounded-full hover:scale-105 transition-all duration-300 text-xl font-black shadow-xl uppercase tracking-tighter"
                            >
                                Get Started
                            </Link>
                            <Link
                                href="/free-consultation"
                                className="w-full sm:w-auto py-5 px-12 rounded-full border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300 text-xl font-black uppercase tracking-tighter"
                            >
                                Free Consultation
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default GEOPage;