'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';

const AIAuomationsPage = () => {
  return (
    <div className="service-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="AI Automations"
        subtitle="We build AI-powered automations to streamline your business processes."
      />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our AI Automations Services</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We help businesses leverage the power of Artificial Intelligence to automate repetitive tasks, streamline workflows, and enhance decision-making. Our AI automation solutions are tailored to your specific needs, ensuring maximum efficiency and return on investment.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          From intelligent chatbots and automated data analysis to predictive modeling and machine learning integrations, our experts design and implement cutting-edge AI solutions that drive innovation and growth.
        </p>
      </section>
    </div>
  );
};

export default AIAuomationsPage;
