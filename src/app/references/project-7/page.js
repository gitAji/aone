'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import Link from 'next/link';

const Project7Page = () => {
  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Kids Learning Portal Development"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Project Overview</h2>
          <p className="text-lg text-gray-700 mb-6">
            This project focused on developing an interactive and engaging online learning portal specifically designed for children. The primary objective was to create a safe, fun, and educational environment where kids could explore various subjects through games, videos, and interactive lessons.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Key functionalities included age-appropriate content, progress tracking for parents, interactive quizzes, and a reward system to encourage learning. We prioritized a colorful and intuitive user interface to ensure an enjoyable and effective learning experience for young users.
          </p>
          <div className="mt-8">
            <Image src="/images/projects/kidsleraning.png" alt="Kids Learning Portal Development" width={1200} height={600} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Needs Assessment & Requirements Gathering</h3>
              <p className="text-gray-700 mb-4">We conducted in-depth interviews with the sales team and management to understand their current workflows, pain points, and desired functionalities for the new CRM system.</p>
              <Image src="/images/placeholders/wireframe.png" alt="Needs Assessment" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. System Design & Prototyping</h3>
              <p className="text-gray-700 mb-4">Based on the requirements, we designed the CRM architecture, database schema, and user interface. Interactive prototypes were created to visualize the system and gather early feedback.</p>
              <Image src="/images/placeholders/ui-ux.png" alt="System Design" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Agile Development & Iteration</h3>
              <p className="text-gray-700 mb-4">We followed an agile development methodology, building the CRM in iterative sprints, allowing for continuous feedback and adjustments to ensure it met evolving business needs.</p>
              <Image src="/images/placeholders/development.png" alt="Development" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. User Training & Deployment</h3>
              <p className="text-gray-700 mb-4">Comprehensive training was provided to the sales team, and the CRM was deployed with a phased rollout to ensure a smooth transition and minimal disruption to operations.</p>
              <Image src="/images/placeholders/testing.png" alt="Deployment" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Key Features & Benefits</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Age-Appropriate Educational Content across various subjects.</li>
            <li>Interactive Games and Quizzes for engaging learning.</li>
            <li>Parental Dashboard for progress monitoring and content control.</li>
            <li>Reward System and Gamification to motivate learners.</li>
            <li>Safe and Secure Environment with content filtering.</li>
            <li>Cross-Platform Accessibility (Web, Tablet, Mobile).</li>
            <li>Technologies Used: React, Next.js, Firebase, Educational APIs.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Results & Impact</h2>
          <p className="text-lg text-gray-700 mb-6">
            The Kids Learning Portal received enthusiastic feedback from both children and parents, praising its engaging content and user-friendly design. It led to a **30% increase in daily active users** and a **25% improvement in learning engagement** among children. The platform successfully created a fun and effective learning environment.
          </p>
          <div className="mt-8">
            <Image src="/images/projects/kidsleraning.png" alt="Kids Learning Portal Development" width={1200} height={600} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="cta py-16 bg-gray-200 text-gray-800 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Ready to build an engaging learning platform?</h2>
          <Link href={`/contact`} className="inline-block bg-gray-800 text-white py-3 px-8 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out text-lg font-semibold shadow-lg">
              Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Project7Page;
