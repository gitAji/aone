'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { FaPaintBrush, FaLightbulb, FaBullhorn, FaUsers, FaChartLine, FaRegLightbulb, FaRocket } from 'react-icons/fa';
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Testimonials from "@/components/Testimonials";

const BrandingPage = () => {
  const { t } = useLanguage();
  return (
    <div className="service-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title={t('services.branding.title')}
        subtitle={t('services.branding.description')}
      />

      <section className="container mx-auto px-4 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 mb-12 uppercase tracking-tighter"
        >
          Why Strong Branding Matters
        </motion.h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
          In a crowded marketplace, a strong brand is your most valuable asset. It&apos;s more than just a logo; it&apos;s the essence of your business, communicating your values, personality, and promise to your audience. Effective branding builds trust, fosters loyalty, and sets you apart from the competition.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaLightbulb className="text-5xl text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Builds Recognition</h3>
            <p className="text-gray-700">Makes your business instantly recognizable and memorable to your target audience.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaBullhorn className="text-5xl text-red-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fosters Trust & Credibility</h3>
            <p className="text-gray-700">A professional brand instills confidence and positions you as a reliable authority.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaUsers className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Attracts Ideal Customers</h3>
            <p className="text-gray-700">Connects with your audience on an emotional level, attracting those who align with your values.</p>
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
          Our Branding Process
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>Our branding journey begins with a deep understanding of your vision, values, and target market. We collaborate closely with you to unearth your unique brand story and define your core message.</p>
            <p>From conceptualization and design to comprehensive brand guidelines and implementation strategies, we ensure every element of your brand identity is meticulously crafted to create a cohesive, impactful, and memorable presence across all platforms.</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <FaRegLightbulb className="text-4xl text-yellow-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900">Brand Strategy</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <FaPaintBrush className="text-4xl text-red-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900">Visual Identity</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <FaChartLine className="text-4xl text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900">Brand Guidelines</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <FaRocket className="text-4xl text-green-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900">Launch & Growth</h3>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-24 bg-gradient-to-br from-fuchsia-600 to-pink-600 text-white text-center rounded-3xl mx-4 mb-16 shadow-2xl overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter"
          >
            Define Your Future Brand
          </motion.h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90 font-medium">
            Join the elite businesses using digital-first branding to dominate their market.
          </p>
          <Link
            href="/request-quote"
            className="inline-block bg-white text-fuchsia-600 py-4 px-10 rounded-full hover:scale-105 transition-transform duration-300 text-xl font-black shadow-2xl uppercase tracking-tight"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BrandingPage;