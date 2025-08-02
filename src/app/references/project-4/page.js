'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';

const Project4Page = () => {
  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="SaaS Platform UI/UX Overhaul"
        subtitle="A detailed look at our SaaS platform UI/UX overhaul project."
      />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Project Overview</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          This project involved a comprehensive UI/UX overhaul of an existing SaaS platform. The goal was to improve user engagement, reduce churn, and enhance the overall usability of the application.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          We conducted extensive user research, created new wireframes and prototypes, and implemented a modern design system. The redesign resulted in a significant increase in user satisfaction and a reduction in support requests.
        </p>
      </section>
    </div>
  );
};

export default Project4Page;
