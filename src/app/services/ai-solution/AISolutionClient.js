'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { FaHeadset, FaCogs, FaRobot, FaChartBar, FaDatabase, FaSync, FaPlug, FaLanguage, FaMagic } from 'react-icons/fa';
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Testimonials from "@/components/Testimonials";

const AISolutionClient = () => {
  const { t } = useLanguage();

  return (
    <div className="service-detail-page bg-slate-50 dark:bg-slate-950 min-h-screen">
      <HeroSection
        title={t('services.aiSolution.title')}
        subtitle={t('services.aiSolution.description')}
      />

      {/* Why Section */}
      <section className="container mx-auto px-6 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tighter"
        >
          Why an AI Solution
        </motion.h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-16 max-w-3xl mx-auto font-medium">
          Static forms and manual processes are dead. Chatbots, automations, and agents work together around the clock -- qualifying leads, answering questions, and completing tasks without waiting on a human.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaHeadset className="text-5xl text-rose-500 mb-6" />,
              title: "24/7 Intelligent Support",
              description: "Never miss a lead or support ticket again. Your AI agent works with human-like empathy while you sleep.",
            },
            {
              icon: <FaCogs className="text-5xl text-rose-500 mb-6" />,
              title: "Boost Efficiency",
              description: "Automate mundane tasks and accelerate workflows to achieve more with less effort.",
            },
            {
              icon: <FaChartBar className="text-5xl text-rose-500 mb-6" />,
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
              className="p-10 bg-white dark:bg-slate-900 rounded-3xl shadow-xl hover:shadow-rose-500/5 border border-slate-100 dark:border-slate-800 transition-all duration-300"
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-slate-900 dark:bg-black text-white border-y border-slate-800">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-tighter"
          >
            Everything in the AI Solution
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <FaHeadset className="text-4xl text-rose-500 mb-4" />, title: "AI Chatbots & Virtual Agents", desc: "24/7 conversational support trained on your business data, for sales, support, and lead qualification." },
              { icon: <FaRobot className="text-4xl text-rose-500 mb-4" />, title: "Autonomous AI Agents", desc: "Agents that complete multi-step tasks on their own, not just answer questions." },
              { icon: <FaCogs className="text-4xl text-rose-500 mb-4" />, title: "Workflow Automation", desc: "Connect your CRM, invoicing, and support tools into self-running pipelines." },
              { icon: <FaMagic className="text-4xl text-rose-500 mb-4" />, title: "Custom AI Integrations", desc: "Embed GPT and LLM-powered logic directly into your internal tools and dashboards." },
              { icon: <FaDatabase className="text-4xl text-rose-500 mb-4" />, title: "Data & Document Processing", desc: "Automatically extract, structure, and route data from invoices, forms, and emails." },
              { icon: <FaSync className="text-4xl text-rose-500 mb-4" />, title: "CRM & Lead Routing", desc: "Qualify, score, and route incoming leads to the right team member the moment they arrive." },
              { icon: <FaChartBar className="text-4xl text-rose-500 mb-4" />, title: "Automated Reporting", desc: "Turn raw business data into live dashboards and scheduled reports." },
              { icon: <FaLanguage className="text-4xl text-rose-500 mb-4" />, title: "Multilingual Support", desc: "Fluent in over 50 languages, including hyper-natural Norwegian and English." },
              { icon: <FaPlug className="text-4xl text-rose-500 mb-4" />, title: "Third-Party Integrations", desc: "Plug into the tools you already use -- Zapier, Make, Slack, Google Workspace." },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
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

      <Testimonials />

      {/* Final CTA Section */}
      <section className="py-24 bg-white dark:bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />

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
              Join the businesses using chatbots, automation, and AI agents to streamline everything.
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

export default AISolutionClient;
