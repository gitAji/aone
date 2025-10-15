'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { FaSearchDollar, FaLightbulb, FaRocket, FaCogs, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import Testimonials from "@/components/Testimonials";

const GEOPage = () => {
  return (
    <div className="service-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Generative Engine Optimization (GEO)"
      />

      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Why Generative Engine Optimization?</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
          In the age of AI, how people search for information is changing. Generative Engine Optimization (GEO) is the practice of optimizing your content to be found and recommended by AI-powered search engines and chatbots. It's about creating content that not only ranks high but also provides direct, accurate, and helpful answers to user queries.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaRocket className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Increase Visibility</h3>
            <p className="text-gray-700">Appear in AI-powered search results and recommendations.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaChartLine className="text-5xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Drive Qualified Traffic</h3>
            <p className="text-gray-700">Attract users who are looking for direct answers and solutions.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaShieldAlt className="text-5xl text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Build Authority</h3>
            <p className="text-gray-700">Become a trusted source of information in your industry.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Approach to GEO</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>Our GEO process starts with understanding your target audience and the questions they ask. We then analyze your existing content and identify opportunities to create new, AI-friendly content that directly answers those questions.</p>
            <p>We focus on creating high-quality, informative, and engaging content that is optimized for both users and AI. Our team of experts will help you create a content strategy that will position you as a leader in your industry and drive long-term growth.</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <FaLightbulb className="text-4xl text-yellow-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900">Content Strategy</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <FaCogs className="text-4xl text-red-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900">Content Creation</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <FaSearchDollar className="text-4xl text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900">Content Optimization</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <FaChartLine className="text-4xl text-green-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900">Performance Tracking</h3>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default GEOPage;