'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';

const PhotographyPage = () => {
  return (
    <div className="service-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Photography"
        subtitle="We capture stunning images that tell your story."
      />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Photography Services</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We offer professional photography services to capture stunning visuals that tell your brand&apos;s story. From product photography and corporate headshots to event coverage and lifestyle shoots, we deliver high-quality images that make an impact.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our experienced photographers use state-of-the-art equipment and creative techniques to ensure every shot is perfect. We work closely with you to understand your vision and bring it to life through captivating imagery.
        </p>
      </section>
    </div>
  );
};

export default PhotographyPage;
