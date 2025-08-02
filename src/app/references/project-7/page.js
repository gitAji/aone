'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';

const Project7Page = () => {
  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="E-commerce Platform Redesign"
        subtitle="A detailed look at our e-commerce platform redesign project."
      />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Project Overview</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          This project involved a complete redesign and re-platforming of a large-scale e-commerce website. We focused on improving user experience, optimizing conversion rates, and enhancing the overall visual appeal.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Key features included a new product catalog, streamlined checkout process, personalized recommendations, and integration with various third-party services. The project resulted in a significant increase in sales and customer satisfaction.
        </p>
      </section>
    </div>
  );
};

export default Project7Page;
