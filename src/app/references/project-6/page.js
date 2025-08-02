'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import Link from 'next/link';

const Project6Page = () => {
  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Educational Portal Redesign"
        subtitle="Modernizing an online educational portal, enhancing its usability and accessibility for students and educators."
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Project Overview</h2>
          <p className="text-lg text-gray-700 mb-6">
            This project involved a comprehensive redesign of an existing online educational portal. The primary objective was to modernize the platform&apos;s appearance, improve its usability for both students and educators, and ensure accessibility for a diverse user base. We aimed to create a more engaging and efficient learning environment.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our work included revamping the user interface, optimizing content presentation, and implementing new features such as interactive quizzes, progress tracking, and a personalized learning dashboard. We focused on creating a seamless and intuitive experience that would encourage active participation and improve learning outcomes. The redesign also ensured full responsiveness across various devices.
          </p>
          <div className="mt-8">
            <Image src="/images/projects/project1.jpeg" alt="Educational Portal Redesign" width={1200} height={600} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. User Needs Assessment</h3>
              <p className="text-gray-700 mb-4">We conducted surveys and interviews with students and educators to identify their needs, challenges, and preferences for an online learning platform.</p>
              <Image src="/images/placeholders/wireframe.png" alt="User Needs Assessment" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. UI/UX Redesign & Prototyping</h3>
              <p className="text-gray-700 mb-4">Our design team created a modern, intuitive, and accessible user interface, focusing on clear navigation and engaging content presentation. Interactive prototypes were developed for feedback.</p>
              <Image src="/images/placeholders/ui-ux.png" alt="UI/UX Redesign" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Development & Feature Implementation</h3>
              <p className="text-gray-700 mb-4">The development team implemented the new design and integrated features like interactive quizzes, progress tracking, and a personalized learning dashboard.</p>
              <Image src="/images/placeholders/development.png" alt="Development" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Accessibility & Performance Testing</h3>
              <p className="text-gray-700 mb-4">Rigorous testing was performed to ensure the portal was accessible to all users and optimized for fast loading times and smooth performance across devices.</p>
              <Image src="/images/placeholders/testing.png" alt="Testing" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Key Features & Enhancements</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Intuitive User Interface for an improved learning experience.</li>
            <li>Personalized Learning Paths and Progress Tracking.</li>
            <li>Interactive Content Integration (quizzes, multimedia).</li>
            <li>Accessibility Compliance (WCAG 2.1 AA).</li>
            <li>Performance Optimization for fast loading times.</li>
            <li>Robust Admin Dashboard for educators.</li>
            <li>Technologies Used: React, Next.js, Moodle, SCORM.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Results & Impact</h2>
          <p className="text-lg text-gray-700 mb-6">
            The redesigned educational portal received positive feedback from both students and educators. Student engagement increased by **25%**, and the platform&apos;s accessibility improvements led to a **significant increase in usage by students with disabilities**. The modernized interface and new features created a more dynamic and effective learning environment.
          </p>
          <div className="mt-8">
            <Image src="/images/placeholders/results.png" alt="Project Results" width={1200} height={600} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="cta py-16 bg-blue-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Ready to enhance your educational platform?</h2>
          <Link href={`/contact`} className="inline-block bg-white text-blue-700 py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 ease-in-out text-lg font-semibold shadow-lg">
              Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Project6Page;
