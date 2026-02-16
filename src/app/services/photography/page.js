'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { FaCameraRetro, FaLightbulb, FaMagic, FaUsers, FaImage, FaVideo } from 'react-icons/fa';
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Testimonials from "@/components/Testimonials";

const PhotographyPage = () => {
  const { t } = useLanguage();
  return (
    <div className="service-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title={t('services.photo.title')}
        subtitle={t('services.photo.description')}
      />

      <section className="container mx-auto px-4 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 mb-12 uppercase tracking-tighter"
        >
          The Power of Professional Photography
        </motion.h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
          In a world saturated with visuals, high-quality photography is crucial for making a lasting impression. Whether it&apos;s for your brand, products, or special events, professional images elevate your message, evoke emotion, and build credibility. We transform ordinary scenes into extraordinary visual narratives.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaImage className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Visual Storytelling</h3>
            <p className="text-gray-700">Convey your brand&apos;s narrative and values through compelling imagery.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaMagic className="text-5xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Enhanced Engagement</h3>
            <p className="text-gray-700">Capture attention and increase interaction with stunning, high-resolution photos.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaUsers className="text-5xl text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Credibility</h3>
            <p className="text-gray-700">Build trust and establish your authority with polished and professional visual assets.</p>
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
          Our Photography Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
            <FaCameraRetro className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Product Photography</h3>
            <p className="text-gray-700">Showcase your products with crisp, clear, and enticing images that drive sales.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
            <FaUsers className="text-5xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Corporate & Headshot Photography</h3>
            <p className="text-gray-700">Professional portraits and team photos that convey confidence and approachability.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
            <FaVideo className="text-5xl text-red-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Event Photography</h3>
            <p className="text-gray-700">Capture the essence and key moments of your corporate events, conferences, or celebrations.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
            <FaLightbulb className="text-5xl text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Lifestyle & Editorial Photography</h3>
            <p className="text-gray-700">Create authentic and engaging visual content for marketing campaigns and publications.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
            <FaImage className="text-5xl text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Architectural & Real Estate Photography</h3>
            <p className="text-gray-700">Highlight the beauty and functionality of spaces with high-quality interior and exterior shots.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
            <FaCameraRetro className="text-5xl text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Food & Beverage Photography</h3>
            <p className="text-gray-700">Make your culinary creations irresistible with mouth-watering and artfully composed images.</p>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-24 bg-gradient-to-br from-amber-600 to-orange-600 text-white text-center rounded-3xl mx-4 mb-16 shadow-2xl overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter"
          >
            Capture Your Story
          </motion.h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90 font-medium">
            Join the elite businesses using professional imagery to dominate their market.
          </p>
          <Link
            href="/request-quote"
            className="inline-block bg-white text-amber-600 py-4 px-10 rounded-full hover:scale-105 transition-transform duration-300 text-xl font-black shadow-2xl uppercase tracking-tight"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PhotographyPage;