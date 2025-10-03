'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { FaPaintBrush, FaLightbulb, FaBullhorn, FaUsers, FaChartLine, FaRegLightbulb, FaRocket } from 'react-icons/fa';

const BrandingPage = () => {
  return (
    <div className="service-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Branding"
      />

      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Why Strong Branding Matters</h2>
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
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Branding Process</h2>
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

      <section className="cta py-16 bg-gray-200 text-gray-800 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Ready to define your brand&apos;s future?</h2>
          <Link href="/free-consultation" className="inline-block bg-gray-800 text-white py-3 px-8 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out text-lg font-semibold shadow-lg">
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BrandingPage;