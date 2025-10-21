'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { FaSearch, FaShareAlt, FaEnvelopeOpenText, FaChartLine, FaBullhorn, FaUsers, FaArrowDown } from 'react-icons/fa';
import Testimonials from "@/components/Testimonials";

const DigitalMarketingPage = () => {
  return (
    <div className="service-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Digital Marketing"
        description="Driving online growth and maximizing your reach through strategic digital marketing campaigns."
      />
      <div className="flex justify-center py-8 bg-gray-50">
        <FaArrowDown className="text-gray-700 text-3xl animate-bounce" />
      </div>

      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Why Digital Marketing is Essential</h2>
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
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Digital Marketing Services</h2>
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
    </div>
  );
};

export default DigitalMarketingPage;
