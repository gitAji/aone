'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';

const Project5Page = () => {
  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Healthcare App Development for a Telemedicine Provider"
        subtitle="A detailed look at our healthcare app development project for a telemedicine provider."
      />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Project Overview</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          This project involved the development of a secure and compliant mobile application for a telemedicine provider. The app facilitates virtual consultations, prescription management, and health record access.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          We prioritized data security, user privacy, and seamless integration with existing healthcare systems. The app has significantly improved patient access to care and streamlined the telemedicine workflow.
        </p>
      </section>
    </div>
  );
};

export default Project5Page;
