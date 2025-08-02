'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';

const WebDevelopmentPage = () => {
  return (
    <div className="service-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Web Development"
        subtitle="We build modern, responsive, and user-friendly websites."
      />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Web Development Services</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We build modern, responsive, and user-friendly websites that are tailored to your business needs. Our web development services include custom website design, e-commerce solutions, content management systems, and web application development.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          We use the latest technologies and best practices to ensure your website is not only visually appealing but also highly functional, secure, and optimized for performance. We focus on creating engaging online experiences that drive results for your business.
        </p>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;
