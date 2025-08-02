'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';

const Project6Page = () => {
  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Educational Portal Redesign for a University"
        subtitle="A detailed look at our educational portal redesign project for a university."
      />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Project Overview</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          This project involved a complete redesign of an educational portal for a university. The goal was to create a more engaging and user-friendly experience for students, faculty, and administrators.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Key features included a new course catalog, improved student dashboards, enhanced communication tools, and integration with the university&apos;s existing learning management system. The redesign resulted in increased portal usage and positive feedback from the university community.
        </p>
      </section>
    </div>
  );
};

export default Project6Page;
