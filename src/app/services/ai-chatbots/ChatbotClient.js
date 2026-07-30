"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import {
    FaRobot,
    FaHeadset,
    FaUserAstronaut,
    FaDatabase,
    FaSync,
    FaChartBar,
    FaLanguage,
    FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Testimonials from "@/components/Testimonials";
import { useLanguage } from "@/context/LanguageContext";

const AIChatbotsPage = () => {
    const { t } = useLanguage();

    const whyCards = [
        {
            icon: <FaHeadset className="text-3xl text-rose-500" />,
            title: t('chatbot.why.support.title') || "24/7 Intelligent Support",
            description: t('chatbot.why.support.desc') || "Never miss a lead or support ticket again. Your AI agent works with human-like empathy while you sleep.",
        },
        {
            icon: <FaSync className="text-3xl text-rose-500" />,
            title: t('chatbot.why.leadCapture.title') || "Lead Capture & Auth",
            description: t('chatbot.why.leadCapture.desc') || "Instantly qualify prospects and securely book them into your calendar or CRM systems.",
        },
        {
            icon: <FaUserAstronaut className="text-3xl text-rose-500" />,
            title: t('chatbot.why.engagement.title') || "Behavioral Engagement",
            description: t('chatbot.why.engagement.desc') || "Proactively reach out to users based on their real-time behavior to maximize conversions.",
        },
    ];

    const capabilities = [
        {
            icon: <FaDatabase className="text-2xl text-rose-500" />,
            title: t('chatbot.cap.knowledge.title') || "Custom Knowledge",
            desc: t('chatbot.cap.knowledge.desc') || "Trained natively on your specific business documentation for perfect accuracy.",
        },
        {
            icon: <FaLanguage className="text-2xl text-rose-500" />,
            title: t('chatbot.cap.language.title') || "Universal Fluency",
            desc: t('chatbot.cap.language.desc') || "Fluent in over 50 languages, including hyper-natural Norwegian and English.",
        },
        {
            icon: <FaSync className="text-2xl text-rose-500" />,
            title: t('chatbot.cap.integration.title') || "Deep Integration",
            desc: t('chatbot.cap.integration.desc') || "Full read-write access to HubSpot, Salesforce, or your proprietary backends.",
        },
        {
            icon: <FaChartBar className="text-2xl text-rose-500" />,
            title: t('chatbot.cap.analytics.title') || "Neural Analytics",
            desc: t('chatbot.cap.analytics.desc') || "Visualize conversation flows and identify exactly where users convert.",
        },
    ];

    return (
        <div className="service-detail-page bg-slate-50 dark:bg-slate-950 min-h-screen">

            {/* Hero Section */}
            <HeroSection
                title={t('services.chatbot.title')}
                subtitle={t('services.chatbot.description')}
            />

            {/* ── Why Section ── */}
            <section className="container mx-auto px-6 pt-28 pb-32 text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900 text-rose-600 dark:text-rose-400 text-xs font-bold tracking-widest uppercase"
                >
                    <FaRobot className="text-sm" />
                    {t('chatbot.why.badge') || "Hvorfor det betyr noe"}
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-5 tracking-tight"
                >
                    {t('chatbot.why.title') || "Why Your AI Agent Matters"}
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-16 max-w-2xl mx-auto"
                >
                    {t('chatbot.why.subtitle') || "Static forms are dead. Modern customers expect instant, intelligent, and personalized responses. Our AI agents don't just \"chat\"—they solve problems, qualify leads, and close sales 24/7."}
                </motion.p>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {whyCards.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.12 }}
                            className="group relative p-10 bg-white dark:bg-slate-900 rounded-3xl shadow-md hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-500 border border-slate-100 dark:border-slate-800 hover:-translate-y-2 flex flex-col items-center text-center overflow-hidden"
                        >
                            {/* hover gradient fill */}
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

            {/* ── Capabilities Section ── */}
            <section className="py-28 bg-slate-900 dark:bg-black text-white border-y border-slate-800">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-center tracking-tight"
                    >
                        {t('chatbot.cap.title') || "Advanced Capabilities"}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-center max-w-xl mx-auto mb-16 text-base leading-relaxed"
                    >
                        {t('chatbot.cap.subtitle') || "Everything your business needs to automate intelligently."}
                    </motion.p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {capabilities.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 hover:border-rose-500/50 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="mb-5 w-12 h-12 rounded-xl bg-slate-800 group-hover:bg-rose-950/60 flex items-center justify-center transition-colors duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-3 tracking-tight">{feature.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials />

            {/* ── Final CTA Section ── */}
            <section className="py-28 pb-40 bg-white dark:bg-slate-950 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
                {/* Orbs */}
                <div className="absolute -top-40 left-1/4 w-96 h-96 rounded-full bg-rose-500/5 blur-[80px] pointer-events-none" />
                <div className="absolute -bottom-40 right-1/4 w-80 h-80 rounded-full bg-indigo-500/5 blur-[80px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
                            {t('chatbot.cta.title') || "Deploy"}{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600">
                                {t('chatbot.cta.titleHighlight') || "Intelligence"}
                            </span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-14 leading-relaxed max-w-2xl mx-auto">
                            {t('chatbot.cta.subtitle') || "Upgrade your customer experience with human-like AI agents. Let's make it happen."}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/pricing"
                                className="group relative inline-flex items-center gap-3 w-full sm:w-auto bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-600 text-white py-4 px-10 rounded-full hover:shadow-2xl hover:shadow-rose-500/30 hover:-translate-y-1 transition-all duration-300 text-base font-bold overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    {t('chatbot.cta.primary') || "Get Started"}
                                    <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer z-0" />
                            </Link>
                            <Link
                                href="/free-consultation"
                                className="inline-flex items-center justify-center w-full sm:w-auto py-4 px-10 rounded-full border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 text-base font-bold"
                            >
                                {t('chatbot.cta.secondary') || "Free Consultation"}
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AIChatbotsPage;
