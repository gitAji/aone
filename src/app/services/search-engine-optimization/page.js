'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { FaSearch, FaChartLine, FaGlobe, FaCogs, FaMapMarkerAlt, FaLightbulb } from 'react-icons/fa';
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Testimonials from "@/components/Testimonials";

const SearchEngineOptimizationPage = () => {
    const { t } = useLanguage();

    return (
        <div className="service-detail-page bg-slate-50 dark:bg-slate-950 min-h-screen">
            {/* Hero Section */}
            <HeroSection
                title={t('services.seo.title')}
                subtitle={t('services.seo.description')}
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
                    Why SEO is Crucial
                </motion.h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-16 max-w-3xl mx-auto font-medium">
                    In the vast digital landscape, SEO is the compass that guides customers to your doorstep. 
                    It&apos;s about visibility, credibility, and sustainable, long-term growth.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <FaSearch className="text-5xl text-rose-500 mb-6" />,
                            title: "Elite Visibility",
                            description: "Appear higher in search results, making it effortless for potential customers to find your brand.",
                        },
                        {
                            icon: <FaChartLine className="text-5xl text-rose-500 mb-6" />,
                            title: "Sustainable Growth",
                            description: "Attract consistent, high-quality organic traffic that converts into loyal, long-term customers.",
                        },
                        {
                            icon: <FaGlobe className="text-5xl text-rose-500 mb-6" />,
                            title: "Market Credibility",
                            description: "Top rankings build instant trust and position your brand as a leading industry authority.",
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

            {/* Comprehensive SEO Services */}
            <section className="py-24 bg-slate-900 dark:bg-black text-white border-y border-slate-800">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-tighter"
                    >
                        Precision SEO Services
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <FaLightbulb className="text-4xl text-rose-500 mb-4" />, title: "Keyword Intelligence", desc: "Identifying high-impact keywords that your audience is actively searching for." },
                            { icon: <FaCogs className="text-4xl text-rose-500 mb-4" />, title: "On-Page Mastery", desc: "Optimizing content, meta tags, and technical structure for perfect crawlability." },
                            { icon: <FaGlobe className="text-4xl text-rose-500 mb-4" />, title: "Authority Building", desc: "Building premium backlinks that enhance your domain's reputation and power." },
                            { icon: <FaCogs className="text-4xl text-rose-500 mb-4" />, title: "Technical Excellence", desc: "Ensuring your website foundation is flawless for search engine indexing." },
                            { icon: <FaMapMarkerAlt className="text-4xl text-rose-500 mb-4" />, title: "Local Domination", desc: "Helping local businesses capture nearby customers with hyper-targeted local SEO." },
                            { icon: <FaChartLine className="text-4xl text-rose-500 mb-4" />, title: "Neural Analytics", desc: "Deep tracking of rankings and conversions with detailed, actionable insights." },
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
                            Dominate Search <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600">Results</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 font-medium leading-relaxed">
                            Join elite businesses using AI-enhanced SEO to capture the market and search traffic.
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

export default SearchEngineOptimizationPage;
