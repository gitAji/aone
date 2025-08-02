'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';

const Project9Page = () => {
  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Brand Identity and Website Launch for a Creative Agency"
        subtitle="A detailed look at our brand identity and website launch project for a creative agency."
      />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Project Overview</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          This project involved developing a comprehensive brand identity and launching a new website for a creative agency. We focused on creating a unique visual language and a highly engaging online presence that reflects the agency&apos;s innovative spirit.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Deliverables included logo design, brand guidelines, website design and development, and content creation. The new brand identity and website have significantly enhanced the agency&apos;s market position and client acquisition efforts.
        </p>
      </section>
    </div>
  );
};

export default Project9Page;
