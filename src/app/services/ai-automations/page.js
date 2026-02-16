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
    <div className="service-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title={t('services.ai.title')}
        subtitle={t('services.ai.description')}
      />

      <section className="container mx-auto px-4 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 mb-12 uppercase tracking-tighter"
        >
          Why AI Automations?
        </motion.h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
          In today&apos;s fast-paced digital landscape, businesses are constantly seeking ways to optimize operations, reduce costs, and enhance customer experiences. AI Automations offer a powerful solution, enabling you to delegate repetitive tasks to intelligent systems, freeing up your human talent for strategic initiatives and creative problem-solving.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaRocket className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Boost Efficiency</h3>
            <p className="text-gray-700">Automate mundane tasks, accelerate workflows, and achieve more with less effort.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaChartLine className="text-5xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Drive Growth</h3>
            <p className="text-gray-700">Leverage data-driven insights and predictive analytics to make smarter business decisions.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaShieldAlt className="text-5xl text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Enhance Accuracy</h3>
            <p className="text-gray-700">Minimize human error and ensure consistent, high-quality output across all operations.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-gray-100">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 mb-12 text-center uppercase tracking-tighter"
        >
          Our Approach to AI Automations
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>Our process begins with a deep dive into your current operations to identify key areas where AI can deliver the most impact. We don&apos;t just implement technology; we craft bespoke solutions that seamlessly integrate with your existing systems and workflows.</p>
            <p>From initial consultation and strategy development to custom AI model training and ongoing support, our team of experts guides you through every step. We ensure your AI automation solutions are scalable, secure, and aligned with your long-term business objectives.</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <FaLightbulb className="text-4xl text-yellow-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900">Discovery & Strategy</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <FaCogs className="text-4xl text-red-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900">Custom Development</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <FaRobot className="text-4xl text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900">Integration & Deployment</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <FaChartLine className="text-4xl text-green-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900">Monitoring & Optimization</h3>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-24 bg-gradient-to-br from-blue-600 to-cyan-600 text-white text-center rounded-3xl mx-4 mb-16 shadow-2xl overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter"
          >
            Ready to Automate Your Success?
          </motion.h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90 font-medium">
            Join the elite businesses using AI agents to streamline their workflows and dominate their market.
          </p>
          <Link
            href="/request-quote"
            className="inline-block bg-white text-blue-600 py-4 px-10 rounded-full hover:scale-105 transition-transform duration-300 text-xl font-black shadow-2xl uppercase tracking-tight"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AIAutomationsPage;
