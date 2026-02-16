'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { FaSearch, FaShareAlt, FaEnvelopeOpenText, FaChartLine, FaBullhorn, FaUsers } from 'react-icons/fa';
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Testimonials from "@/components/Testimonials";

const DigitalMarketingPage = () => {
  const { t } = useLanguage();
  return (
    <div className="service-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title={t('services.marketing.title')}
        subtitle={t('services.marketing.description')}
      />

      <section className="container mx-auto px-4 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 mb-12 uppercase tracking-tighter"
        >
          Why Digital Marketing is Essential
        </motion.h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
          In today&apos;s digital-first world, a strong online presence is non-negotiable for business success. Digital marketing allows you to connect with your target audience precisely, measure your impact accurately, and adapt your strategies for optimal performance. It&apos;s about reaching the right people, at the right time, with the right message.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaUsers className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Targeted Reach</h3>
            <p className="text-gray-700">Connect with your ideal customers based on demographics, interests, and behavior.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaChartLine className="text-5xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Measurable Results</h3>
            <p className="text-gray-700">Track every campaign, analyze performance, and optimize for maximum ROI.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaBullhorn className="text-5xl text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Increased Brand Awareness</h3>
            <p className="text-gray-700">Expand your brand&apos;s visibility and establish authority in your industry.</p>
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
          Our Digital Marketing Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center min-h-[250px] justify-between">
            <FaSearch className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Search Engine Optimization (SEO)</h3>
            <p className="text-gray-700">Improve your organic search rankings and drive more qualified traffic to your website.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center min-h-[250px] justify-between">
            <FaShareAlt className="text-5xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Social Media Marketing</h3>
            <p className="text-gray-700">Build a strong social presence, engage with your audience, and generate leads.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center min-h-[250px] justify-between">
            <FaEnvelopeOpenText className="text-5xl text-red-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Marketing</h3>
            <p className="text-gray-700">Nurture leads, build customer loyalty, and drive conversions with targeted email campaigns.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center min-h-[250px] justify-between">
            <FaChartLine className="text-5xl text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Content Marketing</h3>
            <p className="text-gray-700">Create valuable and engaging content that attracts, informs, and converts your audience.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center min-h-[250px] justify-between">
            <FaBullhorn className="text-5xl text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Paid Advertising (PPC)</h3>
            <p className="text-gray-700">Maximize your ROI with precisely targeted pay-per-click campaigns on various platforms.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center min-h-[250px] justify-between">
            <FaUsers className="text-5xl text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics & Reporting</h3>
            <p className="text-gray-700">Gain deep insights into your campaign performance and make data-driven decisions.</p>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-24 bg-gradient-to-br from-orange-600 to-red-600 text-white text-center rounded-3xl mx-4 mb-16 shadow-2xl overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter"
          >
            Ready to Accelerate Your Growth?
          </motion.h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90 font-medium">
            Join the elite businesses using AI-driven marketing strategies to dominate their market.
          </p>
          <Link
            href="/request-quote"
            className="inline-block bg-white text-orange-600 py-4 px-10 rounded-full hover:scale-105 transition-transform duration-300 text-xl font-black shadow-2xl uppercase tracking-tight"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;
