'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';

const DigitalMarketingPage = () => {
  return (
    <div className="service-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Digital Marketing"
        subtitle="We help you reach your target audience and grow your business."
      />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Digital Marketing Services</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We help businesses reach their target audience, generate leads, and drive sales through comprehensive digital marketing strategies. Our services include SEO, SEM, social media marketing, content marketing, and email marketing.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          We stay up-to-date with the latest digital trends and technologies to ensure your brand stands out in the crowded online landscape. Our data-driven approach ensures measurable results and continuous improvement.
        </p>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;
