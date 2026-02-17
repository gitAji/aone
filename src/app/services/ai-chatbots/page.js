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
        <div className="service-detail-page bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <HeroSection
                title={t('services.chatbot.title')}
                subtitle={t('services.chatbot.description')}
            />

            {/* Why Section */}
            <section className="container mx-auto px-4 py-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-gray-900 mb-8 uppercase tracking-tighter"
                >
                    Why Your AI Agent Matters in 2026
                </motion.h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto font-medium">
                    Static forms are dead. Modern customers expect instant, intelligent, and personalized responses.
                    Our AI agents don&apos;t just &quot;chat&quot;—they solve problems, qualify leads, and close sales.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <FaHeadset className="text-5xl text-rose-600 mb-6" />,
                            title: "24/7 Support",
                            description: "Never miss a lead or support ticket again. Your AI agent works while you sleep.",
                        },
                        {
                            icon: <FaSync className="text-5xl text-blue-600 mb-6" />,
                            title: "Lead Qualification",
                            description: "Instantly qualify prospects and book them into your calendar automatically.",
                        },
                        {
                            icon: <FaUserAstronaut className="text-5xl text-purple-600 mb-6" />,
                            title: "Proactive Engagement",
                            description: "Reach out to users based on their behavior to increase conversion by up to 40%.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col items-center"
                        >
                            {item.icon}
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                            <p className="text-gray-700 font-medium">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Capabilities Section */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black mb-16 text-center uppercase tracking-tighter"
                    >
                        Advanced AI Capabilities
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <FaDatabase className="text-3xl text-rose-500" />,
                                title: "Custom Knowledge Base",
                                desc: "Trained on your specific data, documents, and website content."
                            },
                            {
                                icon: <FaLanguage className="text-3xl text-rose-500" />,
                                title: "Multi-language",
                                desc: "Fluent in over 50 languages, including perfect Norwegian and English."
                            },
                            {
                                icon: <FaSync className="text-3xl text-rose-500" />,
                                title: "CRM Integration",
                                desc: "Seamlessly sync data with HubSpot, Salesforce, or your custom CRM."
                            },
                            {
                                icon: <FaChartBar className="text-3xl text-rose-500" />,
                                title: "Deep Analytics",
                                desc: "Track every conversation and see exactly where your users are converting."
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-rose-500/50 transition-colors"
                            >
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials />

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-br from-rose-600 to-amber-600 text-white text-center rounded-3xl mx-4 mb-16 shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter"
                    >
                        Deploy Your AI Agent Today
                    </motion.h2>
                    <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90 font-medium">
                        Join the elite businesses using AI to dominate their market and unlock 24/7 intelligent engagement.
                    </p>
                    <Link
                        href="/request-quote"
                        className="inline-block bg-white text-rose-600 py-4 px-10 rounded-full hover:scale-105 transition-transform duration-300 text-xl font-black shadow-2xl uppercase tracking-tight"
                    >
                        Get Started
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AIChatbotsPage;
