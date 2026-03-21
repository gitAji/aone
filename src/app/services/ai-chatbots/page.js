"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import {
    FaRobot,
    FaCommentDots,
    FaHeadset,
    FaUserAstronaut,
    FaDatabase,
    FaSync,
    FaChartBar,
    FaLanguage,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Testimonials from "@/components/Testimonials";
import { useLanguage } from "@/context/LanguageContext";

const AIChatbotsPage = () => {
    const { t } = useLanguage();

    return (
        <div className="service-detail-page bg-slate-50 dark:bg-slate-950 min-h-screen">
            {/* Hero Section */}
            <HeroSection
                title={t('services.chatbot.title')}
                subtitle={t('services.chatbot.description')}
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
                    Why Your AI Agent Matters
                </motion.h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-16 max-w-3xl mx-auto font-medium">
                    Static forms are dead. Modern customers expect instant, intelligent, and personalized responses.
                    Our AI agents don&apos;t just &quot;chat&quot;—they solve problems, qualify leads, and close sales 24/7.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <FaHeadset className="text-5xl text-rose-500 mb-6" />,
                            title: "24/7 Intelligent Support",
                            description: "Never miss a lead or support ticket again. Your AI agent works with human-like empathy while you sleep.",
                        },
                        {
                            icon: <FaSync className="text-5xl text-rose-500 mb-6" />,
                            title: "Lead Capture & Auth",
                            description: "Instantly qualify prospects and securely book them into your calendar or CRM systems.",
                        },
                        {
                            icon: <FaUserAstronaut className="text-5xl text-rose-500 mb-6" />,
                            title: "Behavioral Engagement",
                            description: "Proactively reach out to users based on their real-time behavior to maximize conversions.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="p-10 bg-white dark:bg-slate-900 rounded-3xl shadow-xl hover:shadow-rose-500/5 transition-all duration-300 border border-slate-100 dark:border-slate-800 flex flex-col items-center"
                        >
                            {item.icon}
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 font-medium">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Capabilities Section */}
            <section className="py-24 bg-slate-900 dark:bg-black text-white border-y border-slate-800">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-tighter"
                    >
                        Advanced Capabilities
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <FaDatabase className="text-3xl text-rose-500" />,
                                title: "Custom Knowledge",
                                desc: "Trained natively on your specific business documentation for perfect accuracy."
                            },
                            {
                                icon: <FaLanguage className="text-3xl text-rose-500" />,
                                title: "Universal Fluency",
                                desc: "Fluent in over 50 languages, including hyper-natural Norwegian and English."
                            },
                            {
                                icon: <FaSync className="text-3xl text-rose-500" />,
                                title: "Deep Integration",
                                desc: "Full read-write access to HubSpot, Salesforce, or your proprietary backends."
                            },
                            {
                                icon: <FaChartBar className="text-3xl text-rose-500" />,
                                title: "Neural Analytics",
                                desc: "Visualize conversation flows and identify exactly where users convert."
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-slate-800/20 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 hover:border-rose-500/50 transition-all duration-300"
                            >
                                <div className="mb-6">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed font-medium">{feature.desc}</p>
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
                            Deploy <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600">Intelligence</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 font-medium leading-relaxed">
                            Upgrade your customer experience with human-like AI agents. Let&apos;s make it happen.
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

export default AIChatbotsPage;
