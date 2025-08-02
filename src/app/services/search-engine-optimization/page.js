'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';

const SearchEngineOptimizationPage = () => {
  return (
    <div className="service-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Search Engine Optimization"
        subtitle="Improve your online visibility and rank higher on search engines"
      />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Search Engine Optimization Services</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We help businesses improve their online visibility and rank higher on search engines like Google. Our SEO strategies include keyword research, on-page optimization, off-page optimization, technical SEO, and local SEO.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our team of SEO experts stays up-to-date with the latest algorithm changes and industry best practices to ensure your website gets the organic traffic it deserves. We focus on sustainable SEO practices that deliver long-term results.
        </p>
      </section>
    </div>
  );
};

export default SearchEngineOptimizationPage;
