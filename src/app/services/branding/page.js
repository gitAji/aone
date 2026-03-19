'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { FaPaintBrush, FaLightbulb, FaBullhorn, FaUsers, FaChartLine, FaRegLightbulb, FaRocket } from 'react-icons/fa';
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Testimonials from "@/components/Testimonials";

const BrandingPage = () => {
    const { t } = useLanguage();

    return (
        <div className="service-detail-page bg-slate-50 dark:bg-slate-950 min-h-screen">
            {/* Hero Section */}
            <HeroSection
                title={t('services.branding.title')}
                subtitle={t('services.branding.description')}
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
                    Why Strong Branding Matters
                </motion.h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-16 max-w-3xl mx-auto font-medium">
                    In a crowded marketplace, a strong brand is your most valuable asset. It's the essence of your business, 
                    communicating your values and promise to your audience while building lasting trust.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <FaLightbulb className="text-5xl text-rose-500 mb-6" />,
                            title: "Instant Recognition",
                            description: "Makes your business instantly recognizable and memorable to your target audience through cohesive design.",
                        },
                        {
                            icon: <FaBullhorn className="text-5xl text-rose-500 mb-6" />,
                            title: "Trust & Authority",
                            description: "A professional and premium brand instills confidence and positions you as a reliable industry authority.",
                        },
                        {
                            icon: <FaUsers className="text-5xl text-rose-500 mb-6" />,
                            title: "Emotional Connection",
                            description: "Connects with your audience on a deeper level, attracting ideal clients who align with your core values.",
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

            {/* Our Branding Process */}
            <section className="py-24 bg-slate-900 dark:bg-black text-white border-y border-slate-800">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-tighter"
                    >
                        Our Branding Process
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="text-xl text-slate-400 leading-relaxed space-y-8 font-medium">
                            <p>Our branding journey begins with a deep understanding of your vision, values, and target market. We collaborate closely with you to unearth your unique brand story.</p>
                            <p>From conceptualization and design to comprehensive brand guidelines, we ensure every element of your identity is meticulously crafted for maximum impact.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { icon: <FaRegLightbulb className="text-3xl text-rose-500 mb-3" />, title: "Brand Strategy" },
                                { icon: <FaPaintBrush className="text-3xl text-rose-500 mb-3" />, title: "Visual Identity" },
                                { icon: <FaChartLine className="text-3xl text-rose-500 mb-3" />, title: "Guidelines" },
                                { icon: <FaRocket className="text-3xl text-rose-500 mb-3" />, title: "Launch" },
                            ].map((step, i) => (
                                <div key={i} className="flex flex-col items-center p-8 bg-slate-800/20 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-rose-500/50 transition-all duration-300">
                                    {step.icon}
                                    <h3 className="text-lg font-bold text-white text-center">{step.title}</h3>
                                </div>
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
                            Ready to define your <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600">identity?</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 font-medium leading-relaxed">
                            Create a brand that resonates in the AI era. Let's start the conversation.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                href="/request-quote"
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

export default BrandingPage;