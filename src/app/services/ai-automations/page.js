'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { FaRobot, FaLightbulb, FaRocket, FaCogs, FaChartLine, FaShieldAlt, FaArrowDown } from 'react-icons/fa';
import Testimonials from "@/components/Testimonials";

const AIAuomationsPage = () => {
  return (
    <div className="service-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="AI Automations"
        description="Streamlining your business operations and enhancing efficiency with intelligent AI-powered automation solutions."
      />
      <div className="flex justify-center py-8 bg-gray-50">
        <FaArrowDown className="text-gray-700 text-3xl animate-bounce" />
      </div>

      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Why AI Automations?</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
          In today&apos;s fast-paced digital landscape, businesses are constantly seeking ways to optimize operations, reduce costs, and enhance customer experiences. AI Automations offer a powerful solution, enabling you to delegate repetitive tasks to intelligent systems, freeing up your human talent for strategic initiatives and creative problem-solving.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaRocket className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Boost Efficiency</h3>
            <p className="text-gray-700">Automate mundane tasks, accelerate workflows, and achieve more with less effort.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaChartLine className="text-5xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Drive Growth</h3>
            <p className="text-gray-700">Leverage data-driven insights and predictive analytics to make smarter business decisions.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaShieldAlt className="text-5xl text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Enhance Accuracy</h3>
            <p className="text-gray-700">Minimize human error and ensure consistent, high-quality output across all operations.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Approach to AI Automations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>Our process begins with a deep dive into your current operations to identify key areas where AI can deliver the most impact. We don&apos;t just implement technology; we craft bespoke solutions that seamlessly integrate with your existing systems and workflows.</p>
            <p>From initial consultation and strategy development to custom AI model training and ongoing support, our team of experts guides you through every step. We ensure your AI automation solutions are scalable, secure, and aligned with your long-term business objectives.</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <FaLightbulb className="text-4xl text-yellow-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900">Discovery & Strategy</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <FaCogs className="text-4xl text-red-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900">Custom Development</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <FaRobot className="text-4xl text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900">Integration & Deployment</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <FaChartLine className="text-4xl text-green-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900">Monitoring & Optimization</h3>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default AIAuomationsPage;
