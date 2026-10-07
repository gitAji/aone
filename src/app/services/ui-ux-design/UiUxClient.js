'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { FaPalette, FaUserFriends, FaLightbulb, FaLaptopCode, FaMobileAlt, FaAccessibleIcon, FaChartLine } from 'react-icons/fa';
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Testimonials from "@/components/Testimonials";

const UIUXDesignPage = () => {
    const { t } = useLanguage();

    return (
        <div className="service-detail-page bg-slate-50 dark:bg-slate-950 min-h-screen">
            {/* Hero Section */}
            <HeroSection
                title={t('services.uiux.title')}
                subtitle={t('services.uiux.description')}
            />

            {/* Why Section */}
            <section className="container mx-auto px-6 pt-28 pb-32 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight"
                >
                    The Art &amp; Science of UI/UX
                </motion.h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-16 max-w-2xl mx-auto">
                    User Interface (UI) and User Experience (UX) design are the cornerstones of successful digital products. 
                    We create a seamless journey that delights your audience and achieves business goals.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <FaPalette className="text-3xl text-rose-500" />,
                            title: "Expert UI/UX Design",
                            description: "Elevate your digital products with stunning, user-centric interfaces built through research, prototyping, and rigorous testing.",
                        },
                        {
                            icon: <FaUserFriends className="text-3xl text-rose-500" />,
                            title: "User-Centric Design",
                            description: "Design solutions tailored precisely to your users' needs, behaviors, and desires.",
                        },
                        {
                            icon: <FaLightbulb className="text-3xl text-rose-500" />,
                            title: "Neural Interaction",
                            description: "Transform complex challenges into intuitive and delightful user journeys.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.12 }}
                            className="group relative p-10 bg-white dark:bg-slate-900 rounded-3xl shadow-md hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-500 border border-slate-100 dark:border-slate-800 hover:-translate-y-2 flex flex-col items-center text-center overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">{item.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Design Process Section */}
            <section className="py-24 bg-slate-900 dark:bg-black text-white border-y border-slate-800">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-tighter"
                    >
                        Our Design Workflow
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <FaLightbulb className="text-4xl text-rose-500 mb-4" />, title: "Discovery Phase", desc: "Understanding users, goals, and market landscape through in-depth analysis." },
                            { icon: <FaLaptopCode className="text-4xl text-rose-500 mb-4" />, title: "Systemic Prototyping", desc: "Creating low-fidelity wireframes and interactive prototypes for visual validation." },
                            { icon: <FaPalette className="text-4xl text-rose-500 mb-4" />, title: "Visual Language", desc: "Developing a cohesive visual identity, including typography and UI kits." },
                            { icon: <FaMobileAlt className="text-4xl text-rose-500 mb-4" />, title: "Neural Interaction", desc: "Designing intuitive animations and micro-interactions for ultimate delight." },
                            { icon: <FaAccessibleIcon className="text-4xl text-rose-500 mb-4" />, title: "Usability Audits", desc: "Conducting rigorous user testing to iterate for perfect platform usability." },
                            { icon: <FaChartLine className="text-4xl text-rose-500 mb-4" />, title: "Engineering Support", desc: "Collaborating with dev teams for pixel-perfect implementation of designs." },
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
                            Design for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600">Future</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 font-medium leading-relaxed">
                            Join elite businesses using user-centric design to capture their audience.
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

export default UIUXDesignPage;