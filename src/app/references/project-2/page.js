'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';

const Project2Page = () => {
  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Mobile App Development for a FinTech Startup"
        subtitle="A detailed look at our mobile app development project for a FinTech startup."
      />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Project Overview</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          This project involved the development of a secure and user-friendly mobile application for a FinTech startup. The app provides users with tools for personal finance management, budgeting, and investment tracking.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          We focused on robust security features, intuitive UI/UX, and seamless integration with banking APIs. The app has received positive feedback for its ease of use and comprehensive features, helping users manage their finances effectively.
        </p>
      </section>
    </div>
  );
};

export default Project2Page;
