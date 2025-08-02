'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { FaCameraRetro, FaLightbulb, FaMagic, FaUsers, FaImage, FaVideo } from 'react-icons/fa';

const PhotographyPage = () => {
  return (
    <div className="service-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Photography"
        subtitle="Capturing moments, telling stories, and creating visual legacies with professional photography."
      />

      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">The Power of Professional Photography</h2>
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
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Photography Services</h2>
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

      <section className="cta py-16 bg-blue-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Ready to capture your story in stunning visuals?</h2>
          <Link href="/contact" className="inline-block bg-white text-blue-700 py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 ease-in-out text-lg font-semibold shadow-lg">
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PhotographyPage;