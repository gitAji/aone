'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { FaVideo, FaFilm, FaLightbulb, FaMicrophoneAlt, FaEdit, FaShareAlt, FaChartLine } from 'react-icons/fa';
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Testimonials from "@/components/Testimonials";

const VideographyPage = () => {
    const { t } = useLanguage();

    return (
        <div className="service-detail-page bg-slate-50 dark:bg-slate-950 min-h-screen">
            {/* Hero Section */}
            <HeroSection
                title={t('services.video.title')}
                subtitle={t('services.video.description')}
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
                    Cinema-Grade Storytelling
                </motion.h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-16 max-w-3xl mx-auto font-medium">
                    Video is the most powerful medium for storytelling in the digital age. 
                    From brand narratives to product showcases, we elevate your content to drive conversion.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <FaFilm className="text-5xl text-rose-500 mb-6" />,
                            title: "Engaging Narrative",
                            description: "Craft cinematic stories that resonate with your audience and deliver clear messages.",
                        },
                        {
                            icon: <FaShareAlt className="text-5xl text-rose-500 mb-6" />,
                            title: "Global Reach",
                            description: "Boost your presence across all digital platforms with high-impact video assets.",
                        },
                        {
                            icon: <FaLightbulb className="text-5xl text-rose-500 mb-6" />,
                            title: "Brand Authority",
                            description: "Position your brand as a professional leader with elite-quality motion content.",
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
                        Professional Production
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <FaLightbulb className="text-4xl text-rose-500 mb-4" />, title: "Concept & Script", desc: "Crafting the blueprint for your visual masterpiece through detailed scripting." },
                            { icon: <FaVideo className="text-4xl text-rose-500 mb-4" />, title: "Cinematography", desc: "Utilizing state-of-the-art cinematic equipment to capture breathtaking footage." },
                            { icon: <FaEdit className="text-4xl text-rose-500 mb-4" />, title: "Post-Production", desc: "Expert editing, color grading, and sound design for a polished final cut." },
                            { icon: <FaMicrophoneAlt className="text-4xl text-rose-500 mb-4" />, title: "Motion Visuals", desc: "Adding dynamic animations to enhance clarity and visual engagement." },
                            { icon: <FaShareAlt className="text-4xl text-rose-500 mb-4" />, title: "Global Distribution", desc: "Optimizing video assets for maximum reach across all major platforms." },
                            { icon: <FaChartLine className="text-4xl text-rose-500 mb-4" />, title: "Neural Analytics", desc: "Tracking impact and conversion metrics to inform your feature content strategy." },
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
                            Visualize your <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600">Vision</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 font-medium leading-relaxed">
                            Join elite businesses using cinematic videography to captivate their target audience.
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

export default VideographyPage;