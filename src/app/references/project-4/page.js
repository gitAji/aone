'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import Link from 'next/link';

const Project4Page = () => {
  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="SaaS Platform UI/UX Redesign"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Project Overview</h2>
          <p className="text-lg text-gray-700 mb-6">
            This project involved a comprehensive UI/UX redesign of an existing Software-as-a-Service (SaaS) platform. The primary challenge was to simplify complex workflows, enhance visual appeal, and improve overall usability for a diverse user base. Our goal was to create a more intuitive and engaging experience that would lead to increased user adoption and reduced support queries.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            We conducted extensive user research, including usability testing and stakeholder interviews, to identify pain points and opportunities for improvement. The redesign focused on creating a clean, modern aesthetic, optimizing navigation, and implementing consistent design patterns across the platform. The result was a more efficient and enjoyable user experience that significantly boosted user satisfaction.
          </p>
          <div className="mt-8">
            <Image src="/images/projects/project4.png" alt="SaaS Platform UI/UX Redesign" width={1200} height={600} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. User Research & Analysis</h3>
              <p className="text-gray-700 mb-4">We conducted in-depth user research, including surveys, interviews, and usability tests, to understand user behaviors, needs, and pain points with the existing platform.</p>
              <Image src="/images/placeholders/wireframe.png" alt="User Research" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Information Architecture & Wireframing</h3>
              <p className="text-gray-700 mb-4">Based on research, we restructured the platform&apos;s information architecture and created detailed wireframes to define the new layout and user flows.</p>
              <Image src="/images/placeholders/ui-ux.png" alt="Wireframing" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. UI Design & Prototyping</h3>
              <p className="text-gray-700 mb-4">Our UI designers crafted a modern, clean, and intuitive visual design. Interactive prototypes were developed to simulate the user experience before development.</p>
              <Image src="/images/placeholders/development.png" alt="UI Design" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Usability Testing & Iteration</h3>
              <p className="text-gray-700 mb-4">We performed extensive usability testing with real users, gathered feedback, and iterated on the designs to ensure optimal usability and user satisfaction.</p>
              <Image src="/images/placeholders/testing.png" alt="Usability Testing" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Key Features & Improvements</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Streamlined Workflows for reduced user effort.</li>
            <li>Modern Visual Design with a clean and contemporary look.</li>
            <li>Improved Navigation for easy access to features.</li>
            <li>Enhanced Data Visualization for better data comprehension.</li>
            <li>Mobile Responsiveness across various devices.</li>
            <li>Accessibility Compliance for diverse user abilities.</li>
            <li>Technologies Used: Figma, Sketch, Adobe XD, React, Material-UI.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Results & Impact</h2>
          <p className="text-lg text-gray-700 mb-6">
            The UI/UX redesign significantly improved user engagement and satisfaction. The client reported a **20% increase in daily active users** and a **10% reduction in support tickets** related to usability issues. The new design was well-received by the user community, leading to higher retention rates.
          </p>
          <div className="mt-8">
            <Image src="/images/projects/project4.png" alt="Project Results" width={1200} height={600} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="cta py-16 bg-gray-200 text-gray-800 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Ready for a user-centric design?</h2>
          <Link href={`/contact`} className="inline-block bg-gray-800 text-white py-3 px-8 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out text-lg font-semibold shadow-lg">
              Discuss Your Design Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Project4Page;
