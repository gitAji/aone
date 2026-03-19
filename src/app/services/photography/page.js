'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { FaCameraRetro, FaLightbulb, FaMagic, FaUsers, FaImage, FaVideo } from 'react-icons/fa';
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Testimonials from "@/components/Testimonials";

const PhotographyPage = () => {
    const { t } = useLanguage();

    return (
        <div className="service-detail-page bg-slate-50 dark:bg-slate-950 min-h-screen">
            {/* Hero Section */}
            <HeroSection
                title={t('services.photo.title')}
                subtitle={t('services.photo.description')}
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
                    Visual Excellence
                </motion.h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-16 max-w-3xl mx-auto font-medium">
                    In a world saturated with visuals, elite-quality photography is crucial for making a lasting impact. 
                    We transform ordinary scenes into extraordinary visual narratives.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <FaImage className="text-5xl text-rose-500 mb-6" />,
                            title: "Visual Narrative",
                            description: "Convey your brand&apos;s core values through high-fidelity, compelling imagery.",
                        },
                        {
                            icon: <FaMagic className="text-5xl text-rose-500 mb-6" />,
                            title: "Neural Engagement",
                            description: "Capture attention and increase interaction with stunning, ultra-resolution captures.",
                        },
                        {
                            icon: <FaUsers className="text-5xl text-rose-500 mb-6" />,
                            title: "Professional Authority",
                            description: "Build deep trust and establish your market authority with polished visual assets.",
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

            {/* Services Section */}
            <section className="py-24 bg-slate-900 dark:bg-black text-white border-y border-slate-800">
                <div className="container mx-auto px-6">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-tighter"
                    >
                        Elite Photography Services
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <FaCameraRetro className="text-4xl text-rose-500 mb-4" />, title: "Product Mastery", desc: "Showcasing your products with crisp, enticing imagery that mirrors your brand quality." },
                            { icon: <FaUsers className="text-4xl text-rose-500 mb-4" />, title: "Corporate Portraits", desc: "Professional headshots that radiate confidence, reliability, and approachability." },
                            { icon: <FaVideo className="text-4xl text-rose-500 mb-4" />, title: "High-Expose Events", desc: "Capturing the essence and prestige of your major corporate events and conferences." },
                            { icon: <FaLightbulb className="text-4xl text-rose-500 mb-4" />, title: "Editorial Lifestyle", desc: "Crafting authentic, high-impact campaigns across all digital and print media." },
                            { icon: <FaImage className="text-4xl text-rose-500 mb-4" />, title: "Architectural Focus", desc: "Highlighting structure and space with elite interior and exterior photography." },
                            { icon: <FaCameraRetro className="text-4xl text-rose-500 mb-4" />, title: "Neural Culinary", desc: "Making your creations irresistible through artfully composed, high-resolution imagery." },
                        ].map((service, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -12, scale: 1.02 }}
                                    className="flex flex-col items-center p-10 bg-slate-800/20 backdrop-blur-sm rounded-3xl border border-slate-800 hover:border-rose-500/50 transition-all duration-300 text-center cursor-default group"
                                >
                                    <div className="transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                        {service.icon}
                                    </div>
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
                            Visualize your <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600">Success</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 font-medium leading-relaxed">
                            Join elite businesses using professional imagery to capture their audience and achieve more.
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

export default PhotographyPage;