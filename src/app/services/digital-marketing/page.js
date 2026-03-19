'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { FaSearch, FaShareAlt, FaEnvelopeOpenText, FaChartLine, FaBullhorn, FaUsers } from 'react-icons/fa';
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Testimonials from "@/components/Testimonials";

const DigitalMarketingPage = () => {
    const { t } = useLanguage();

    return (
        <div className="service-detail-page bg-slate-50 dark:bg-slate-950 min-h-screen">
            {/* Hero Section */}
            <HeroSection
                title={t('services.marketing.title')}
                subtitle={t('services.marketing.description')}
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
                    Why Digital Marketing is Essential
                </motion.h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-16 max-w-3xl mx-auto font-medium">
                    In today&apos;s digital-first world, a strong online presence is non-negotiable. 
                    It&apos;s about reaching the right people, at the right time, with the right message.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <FaUsers className="text-5xl text-rose-500 mb-6" />,
                            title: "Targeted Reach",
                            description: "Connect with your ideal customers based on demographics, interests, and real-time behavior.",
                        },
                        {
                            icon: <FaChartLine className="text-5xl text-rose-500 mb-6" />,
                            title: "Measurable ROI",
                            description: "Track every campaign, analyze performance, and optimize for maximum return on investment.",
                        },
                        {
                            icon: <FaBullhorn className="text-5xl text-rose-500 mb-6" />,
                            title: "Market Authority",
                            description: "Expand your brand's visibility and establish yourself as an industry leader through storytelling.",
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

            {/* Our Digital Marketing Services */}
            <section className="py-24 bg-slate-900 dark:bg-black text-white border-y border-slate-800">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-tighter"
                    >
                        Our Strategic Services
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                        {[
                            { icon: <FaSearch className="text-4xl text-rose-500 mb-4" />, title: "SEO Strategy", desc: "Improve your organic search rankings and drive more qualified traffic to your website." },
                            { icon: <FaShareAlt className="text-4xl text-rose-500 mb-4" />, title: "Social Marketing", desc: "Build a strong social presence, engage with your audience, and generate qualified leads." },
                            { icon: <FaEnvelopeOpenText className="text-4xl text-rose-500 mb-4" />, title: "Email Automation", desc: "Nurture leads, build customer loyalty, and drive conversions with automated campaigns." },
                            { icon: <FaChartLine className="text-4xl text-rose-500 mb-4" />, title: "Content Creation", desc: "Create high-value content that attracts, informs, and converts your target audience." },
                            { icon: <FaBullhorn className="text-4xl text-rose-500 mb-4" />, title: "Paid Performance", desc: "Maximize your performance with precisely targeted pay-per-click campaigns." },
                            { icon: <FaUsers className="text-4xl text-rose-500 mb-4" />, title: "AI Analytics", desc: "Gain deep insights into your campaign performance with AI-driven reporting." },
                        ].map((service, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center p-10 bg-slate-800/20 backdrop-blur-sm rounded-3xl border border-slate-800 hover:border-rose-500/50 transition-all duration-300 text-center"
                            >
                                {service.icon}
                                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                                <p className="text-slate-400 font-medium leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
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
                            Accelerate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600">Growth</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 font-medium leading-relaxed">
                            Join the elite businesses using AI-driven marketing strategies to dominate their market.
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

export default DigitalMarketingPage;
