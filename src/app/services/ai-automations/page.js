'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { FaRobot, FaLightbulb, FaRocket, FaCogs, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Testimonials from "@/components/Testimonials";

const AIAutomationsPage = () => {
    const { t } = useLanguage();

    return (
        <div className="service-detail-page bg-slate-50 dark:bg-slate-950 min-h-screen">
            {/* Hero Section */}
            <HeroSection
                title={t('services.ai.title')}
                subtitle={t('services.ai.description')}
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
                    Why AI Automations?
                </motion.h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-16 max-w-3xl mx-auto font-medium">
                    Optimizing operations, reducing costs, and enhancing human potential. 
                    Delegating repetitive tasks to intelligent systems frees your talent for strategy.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <FaRocket className="text-5xl text-rose-500 mb-6" />,
                            title: "Boost Efficiency",
                            description: "Automate mundane tasks, accelerate workflows, and achieve more with less effort.",
                        },
                        {
                            icon: <FaChartLine className="text-5xl text-rose-500 mb-6" />,
                            title: "Drive Growth",
                            description: "Leverage data-driven insights and predictive analytics to make smarter business decisions.",
                        },
                        {
                            icon: <FaShieldAlt className="text-5xl text-rose-500 mb-6" />,
                            title: "Enhance Accuracy",
                            description: "Minimize human error and ensure consistent, high-quality output across all operations.",
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-center lg:text-left">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter"
                            >
                                Our Neural Strategy
                            </motion.h2>
                            <div className="space-y-6 text-xl text-slate-400 font-medium leading-relaxed">
                                <p>Our process begins with a deep dive into your current operations to identify key areas where AI can deliver the most impact. We don&apos;t just implement technology; we craft bespoke solutions.</p>
                                <p>From consultation and strategy development to custom AI model training and deployment, we guide you through every step of the transformation.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { icon: <FaLightbulb className="text-3xl text-rose-500 mb-4" />, title: "Discovery & Strategy" },
                                { icon: <FaCogs className="text-3xl text-rose-500 mb-4" />, title: "Custom Development" },
                                { icon: <FaRobot className="text-3xl text-rose-500 mb-4" />, title: "Integration & Deployment" },
                                { icon: <FaChartLine className="text-3xl text-rose-500 mb-4" />, title: "Monitoring & Analytics" },
                            ].map((step, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 bg-slate-800/20 backdrop-blur-sm rounded-3xl border border-slate-800 hover:border-rose-500/50 transition-all duration-300 flex flex-col items-center lg:items-start"
                                >
                                    {step.icon}
                                    <h3 className="text-lg font-bold text-white transition-colors">{step.title}</h3>
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
                            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600">Automate?</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 font-medium leading-relaxed">
                            Join the elite businesses using human-AI synergy to streamline everything.
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

export default AIAutomationsPage;
