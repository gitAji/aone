'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import Link from 'next/link';

const Project1Page = () => {
  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Saray Steakhouse Website"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Project Overview</h2>
          <p className="text-lg text-gray-700 mb-6">
            This project focused on developing a comprehensive online presence for Saray Steakhouse, a premium restaurant. Our goal was to create a visually appealing and highly functional website that would enhance customer experience, streamline online reservations, and showcase their exquisite menu.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Key functionalities included an interactive menu display, an intuitive table booking system, and a gallery to highlight the restaurant's ambiance. We aimed to create a digital platform that truly reflects the quality and elegance of Saray Steakhouse.
          </p>
          <div className="mt-8">
            <Image src="/images/projects/project1.png" alt="E-commerce Platform Redesign" width={1200} height={600} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Discovery & Planning</h3>
              <p className="text-gray-700 mb-4">We began with in-depth consultations to understand the client&apos;s business, target audience, and pain points with the existing platform. This phase involved market research, competitor analysis, and defining project scope and objectives.</p>
              <Image src="/images/placeholders/wireframe.png" alt="Wireframe" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Wireframing & UI/UX Design</h3>
              <p className="text-gray-700 mb-4">Based on the discovery phase, we created wireframes and interactive prototypes to visualize the new user flows and interface. Our UI/UX team focused on creating an intuitive and aesthetically pleasing design.</p>
              <Image src="/images/placeholders/ui-ux.png" alt="UI/UX Design" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Development & Integration</h3>
              <p className="text-gray-700 mb-4">Our development team brought the designs to life, building a robust and scalable e-commerce platform. This included integrating payment gateways, shipping APIs, and CRM systems.</p>
              <Image src="/images/placeholders/development.png" alt="Development" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Testing & Deployment</h3>
              <p className="text-gray-700 mb-4">Rigorous testing was conducted across various devices and browsers to ensure functionality, performance, and responsiveness. After successful testing, the platform was securely deployed.</p>
              <Image src="/images/placeholders/testing.png" alt="Testing" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Key Features & Technologies</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Interactive Menu Display with high-quality images.</li>
            <li>Online Table Booking System for seamless reservations.</li>
            <li>Responsive Design for optimal viewing on all devices.</li>
            <li>High-Resolution Photo Gallery showcasing ambiance and dishes.</li>
            <li>SEO Optimization for local search visibility.</li>
            <li>Integration with Restaurant Management Systems (if applicable).</li>
            <li>Technologies Used: Next.js, React, Node.js, WordPress (headless CMS).</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Results & Impact</h2>
          <p className="text-lg text-gray-700 mb-6">
            The new website significantly enhanced Saray Steakhouse's online presence, leading to a **20% increase in online reservations** and improved customer engagement. The visually appealing design and user-friendly interface received positive feedback, contributing to a stronger brand image and increased customer satisfaction.
          </p>
          <div className="mt-8">
            <Image src="/images/projects/saraystange.png" alt="Saray Steakhouse Website" width={1200} height={600} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="cta py-16 bg-gray-200 text-gray-800 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Ready to elevate your restaurant's online presence?</h2>
          <Link href={`/contact`} className="inline-block bg-gray-800 text-white py-3 px-8 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out text-lg font-semibold shadow-lg">
              Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Project1Page;
