'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { FaSearch, FaChartLine, FaGlobe, FaCogs, FaMapMarkerAlt, FaLightbulb, FaArrowDown } from 'react-icons/fa';
import Testimonials from "@/components/Testimonials";

const SearchEngineOptimizationPage = () => {
  return (
    <div className="service-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Search Engine Optimization"
        description="Boosting your online visibility and driving organic traffic to your website through expert SEO strategies."
      />
      <div className="flex justify-center bg-gray-50">
        <FaArrowDown className="text-gray-700 text-3xl animate-bounce" />
      </div>

      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Why SEO is Crucial for Your Business</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
          In the vast digital landscape, Search Engine Optimization (SEO) is the compass that guides your customers to your doorstep. It&apos;s about more than just rankings; it&apos;s about visibility, credibility, and sustainable growth. A strong SEO strategy ensures your business is found by those actively looking for your products or services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaSearch className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Increased Visibility</h3>
            <p className="text-gray-700">Appear higher in search results, making it easier for potential customers to find you.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaChartLine className="text-5xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainable Growth</h3>
            <p className="text-gray-700">Attract consistent, high-quality organic traffic that converts into loyal customers.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaGlobe className="text-5xl text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Enhanced Credibility</h3>
            <p className="text-gray-700">Top rankings build trust and position your brand as an industry authority.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Comprehensive SEO Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
            <FaLightbulb className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Keyword Research & Strategy</h3>
            <p className="text-gray-700">Identifying the most relevant and high-impact keywords for your business and audience.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
            <FaCogs className="text-5xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">On-Page SEO Optimization</h3>
            <p className="text-gray-700">Optimizing your website content, meta tags, and structure for search engines.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
            <FaGlobe className="text-5xl text-red-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Off-Page SEO & Link Building</h3>
            <p className="text-gray-700">Building high-quality backlinks and improving your website&apos;s authority and reputation.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
            <FaCogs className="text-5xl text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical SEO Audit & Fixes</h3>
            <p className="text-gray-700">Ensuring your website&apos;s technical foundation is solid for optimal crawling and indexing.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
            <FaMapMarkerAlt className="text-5xl text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Local SEO Optimization</h3>
            <p className="text-gray-700">Helping local businesses rank higher in local search results and attract nearby customers.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
            <FaChartLine className="text-5xl text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Monitoring & Reporting</h3>
            <p className="text-gray-700">Continuous tracking of your SEO performance with detailed reports and actionable insights.</p>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default SearchEngineOptimizationPage;
