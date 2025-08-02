'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';

const VideographyPage = () => {
  return (
    <div className="service-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Videography"
        subtitle="We create compelling videos that engage your audience."
      />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Videography Services</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We produce high-quality video content that captivates your audience and effectively conveys your message. Our videography services include concept development, scriptwriting, filming, editing, and post-production.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Whether you need a corporate video, a promotional ad, an event highlight reel, or engaging social media content, our team brings your vision to life with professional-grade videography that stands out.
        </p>
      </section>
    </div>
  );
};

export default VideographyPage;
