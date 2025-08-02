'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';

const BrandingPage = () => {
  return (
    <div className="service-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Branding"
        subtitle="We create strong, memorable, and impactful brands."
      />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Branding Services</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We help businesses create a strong, memorable, and impactful brand identity that resonates with their target audience. Our branding services cover everything from logo design and visual guidelines to brand strategy and messaging.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          We believe that a powerful brand is the foundation of any successful business. Our team works closely with you to understand your vision and translate it into a cohesive brand experience across all touchpoints.
        </p>
      </section>
    </div>
  );
};

export default BrandingPage;
