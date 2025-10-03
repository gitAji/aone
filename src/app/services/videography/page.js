'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { FaVideo, FaFilm, FaLightbulb, FaMicrophoneAlt, FaEdit, FaShareAlt, FaChartLine } from 'react-icons/fa';

const VideographyPage = () => {
  return (
    <div className="service-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Videography"
      />

      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">The Impact of Professional Videography</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            Video is the most powerful medium for storytelling in the digital age. It allows you to connect with your audience on a deeper level, convey complex messages with clarity, and leave a lasting impression. From brand narratives to product showcases, professional videography elevates your content and drives engagement.
          </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaFilm className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Engaging Storytelling</h3>
            <p className="text-gray-700">Craft narratives that resonate with your audience and communicate your message effectively.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaShareAlt className="text-5xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Increased Reach & Engagement</h3>
            <p className="text-gray-700">Boost your online presence and capture attention across social media and digital platforms.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaLightbulb className="text-5xl text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Enhanced Brand Perception</h3>
            <p className="text-gray-700">Position your brand as innovative, professional, and forward-thinking with high-quality video content.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Comprehensive Videography Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
            <FaLightbulb className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Concept Development & Scripting</h3>
            <p className="text-gray-700">From initial ideas to detailed scripts, we help you craft a compelling narrative for your video.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
            <FaVideo className="text-5xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Filming</h3>
            <p className="text-gray-700">Utilizing state-of-the-art equipment and experienced cinematographers to capture stunning footage.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
            <FaEdit className="text-5xl text-red-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Video Editing & Post-Production</h3>
            <p className="text-gray-700">Transforming raw footage into a polished masterpiece with expert editing, color grading, and sound design.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
            <FaMicrophoneAlt className="text-5xl text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Motion Graphics & Animation</h3>
            <p className="text-gray-700">Adding dynamic visual elements and animations to enhance your video&apos;s impact and clarity.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
            <FaShareAlt className="text-5xl text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Distribution Strategy</h3>
            <p className="text-gray-700">Optimizing your video for various platforms and audiences to maximize its reach and effectiveness.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
            <FaChartLine className="text-5xl text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Analysis</h3>
            <p className="text-gray-700">Tracking video performance metrics to provide insights and inform future content strategies.</p>
          </div>
        </div>
      </section>

      <section className="cta py-16 bg-gray-200 text-gray-800 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Ready to tell your story through captivating video?</h2>
          <Link href="/free-consultation" className="inline-block bg-gray-800 text-white py-3 px-8 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out text-lg font-semibold shadow-lg">
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default VideographyPage;