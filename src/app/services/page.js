'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { FaLaptopCode, FaPaintBrush, FaChartLine, FaRobot, FaCameraRetro, FaVideo, FaObjectGroup, FaSearch, FaSearchDollar, FaChevronDown } from 'react-icons/fa';
import Testimonials from "@/components/Testimonials";



const ServicesPage = () => {
  return (
    <div className="services-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Our Services"
        subtitle="Explore the range of digital solutions we offer"
        description="Discover our comprehensive suite of digital solutions designed to elevate your brand and drive measurable results."
      />
      <div className="flex justify-center py-8 bg-gray-50">
        <FaChevronDown className="text-gray-700 text-3xl animate-bounce" />
      </div>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Comprehensive Digital Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              href={`/services/web-development`}
              className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <FaLaptopCode className="text-5xl text-blue-600 mb-4 group-hover:text-blue-700 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors duration-300">Web Development</h3>
              <p className="text-gray-700 text-base leading-relaxed">We build modern, responsive, and user-friendly websites.</p>
            </Link>
            <Link
              href={`/services/branding`}
              className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <FaPaintBrush className="text-5xl text-green-600 mb-4 group-hover:text-green-700 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-green-800 transition-colors duration-300">Branding</h3>
              <p className="text-gray-700 text-base leading-relaxed">We create strong, memorable, and impactful brands.</p>
            </Link>
            <Link
              href={`/services/digital-marketing`}
              className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <FaChartLine className="text-5xl text-yellow-600 mb-4 group-hover:text-yellow-700 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-yellow-800 transition-colors duration-300">Digital Marketing</h3>
              <p className="text-gray-700 text-base leading-relaxed">We help you reach your target audience and grow your business.</p>
            </Link>
            <Link
              href={`/services/ai-automations`}
              className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <FaRobot className="text-5xl text-indigo-600 mb-4 group-hover:text-indigo-700 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-800 transition-colors duration-300">AI Automations</h3>
              <p className="text-gray-700 text-base leading-relaxed">We build AI-powered automations to streamline your business processes.</p>
            </Link>
            <Link
              href={`/services/geo`}
              className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <FaSearchDollar className="text-5xl text-cyan-600 mb-4 group-hover:text-cyan-700 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-cyan-800 transition-colors duration-300">GEO</h3>
              <p className="text-gray-700 text-base leading-relaxed">We provide GEO services to help you with your business.</p>
            </Link>
            <Link
              href={`/services/photography`}
              className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <FaCameraRetro className="text-5xl text-pink-600 mb-4 group-hover:text-pink-700 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-pink-800 transition-colors duration-300">Photography</h3>
              <p className="text-gray-700 text-base leading-relaxed">We capture stunning images that tell your story.</p>
            </Link>
            <Link
              href={`/services/videography`}
              className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <FaVideo className="text-5xl text-teal-600 mb-4 group-hover:text-teal-700 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-teal-800 transition-colors duration-300">Videography</h3>
              <p className="text-gray-700 text-base leading-relaxed">We create compelling videos that engage your audience.</p>
            </Link>
            <Link
              href={`/services/ui-ux-design`}
              className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <FaObjectGroup className="text-5xl text-purple-600 mb-4 group-hover:text-purple-700 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-purple-800 transition-colors duration-300">UI/UX Design</h3>
              <p className="text-gray-700 text-base leading-relaxed">We design intuitive and user-friendly interfaces.</p>
            </Link>
            <Link
              href={`/services/search-engine-optimization`}
              className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <FaSearch className="text-5xl text-red-600 mb-4 group-hover:text-red-700 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-red-800 transition-colors duration-300">Search Engine Optimization</h3>
              <p className="text-gray-700 text-base leading-relaxed">We help you rank higher in search results and drive organic traffic.</p>
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default ServicesPage;
