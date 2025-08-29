'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { FaLaptopCode, FaShoppingCart, FaWordpress, FaMobileAlt, FaCloud, FaCode, FaChartLine } from 'react-icons/fa';

const WebDevelopmentPage = () => {
  return (
    <div className="service-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Web Development"
        subtitle="Building robust, scalable, and visually stunning web solutions tailored to your unique business needs."
      />

      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Why a Powerful Online Presence Matters</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
          Your website is your digital storefront, your primary communication channel, and often the first impression potential customers have of your business. A well-crafted website not only looks great but also performs flawlessly, drives engagement, and converts visitors into loyal customers. We build web solutions that are designed for impact and growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaMobileAlt className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Responsive Design</h3>
            <p className="text-gray-700">Ensuring your website looks and functions perfectly on any device, from desktops to smartphones.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaCloud className="text-5xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalability & Performance</h3>
            <p className="text-gray-700">Building robust and optimized websites that can grow with your business and handle high traffic.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaCode className="text-5xl text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solutions</h3>
            <p className="text-gray-700">Developing bespoke web applications and features tailored precisely to your unique requirements.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Comprehensive Web Development Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
            <FaLaptopCode className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Website Development</h3>
            <p className="text-gray-700">From concept to launch, we build unique websites that reflect your brand and engage your audience.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
            <FaShoppingCart className="text-5xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">E-commerce Solutions</h3>
            <p className="text-gray-700">Powerful and secure online stores designed to maximize sales and provide a seamless shopping experience.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
            <FaWordpress className="text-5xl text-red-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">CMS Development (WordPress, etc.)</h3>
            <p className="text-gray-700">Empowering you with easy-to-use content management systems to update and maintain your site effortlessly.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
            <FaCode className="text-5xl text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Web Application Development</h3>
            <p className="text-gray-700">Building custom web applications to streamline your business processes and enhance user interaction.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
            <FaMobileAlt className="text-5xl text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Website Maintenance & Support</h3>
            <p className="text-gray-700">Ensuring your website remains secure, up-to-date, and performs optimally with ongoing support.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
            <FaChartLine className="text-5xl text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Optimization</h3>
            <p className="text-gray-700">Optimizing your website for speed, SEO, and overall performance to improve user experience and search rankings.</p>
          </div>
        </div>
      </section>

      <section className="cta py-16 bg-gray-200 text-gray-800 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Ready to build your dream website?</h2>
          <Link href="/contact" className="inline-block bg-gray-800 text-white py-3 px-8 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out text-lg font-semibold shadow-lg">
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;