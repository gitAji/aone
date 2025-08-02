'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import Link from 'next/link';

const Project1Page = () => {
  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="E-commerce Platform Redesign"
        subtitle="A comprehensive overhaul of an existing e-commerce platform to enhance user experience and boost sales."
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Project Overview</h2>
          <p className="text-lg text-gray-700 mb-6">
            This project involved a complete redesign and re-platforming of a large-scale e-commerce website. Our goal was to create a modern, intuitive, and high-performing online store that would significantly improve user engagement and conversion rates. We focused on streamlining the user journey, enhancing visual appeal, and optimizing for mobile responsiveness.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Key features included a new product catalog system, integrated payment gateways, personalized user dashboards, and advanced search functionalities. We worked closely with the client&apos;s team to ensure the new platform aligned perfectly with their business objectives and brand identity.
          </p>
          <div className="mt-8">
            <Image src="/images/projects/project1.jpeg" alt="E-commerce Platform Redesign" width={1200} height={600} className="rounded-lg shadow-lg" />
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
            <li>Responsive Design for seamless experience across all devices.</li>
            <li>Intuitive User Interface for effortless navigation and product discovery.</li>
            <li>Secure Payment Gateway integration with multiple options.</li>
            <li>Scalable Architecture built for high traffic and future expansions.</li>
            <li>SEO Optimization for improved search engine visibility.</li>
            <li>Personalized User Experience with recommendations and wishlists.</li>
            <li>Technologies Used: Next.js, React, Node.js, MongoDB, Stripe API.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Results & Impact</h2>
          <p className="text-lg text-gray-700 mb-6">
            The redesigned e-commerce platform led to a **30% increase in conversion rates** and a **25% reduction in bounce rate** within the first three months post-launch. User feedback was overwhelmingly positive, highlighting the improved usability and modern aesthetics. The scalable architecture also ensured smooth performance during peak traffic periods.
          </p>
          <div className="mt-8">
            <Image src="/images/placeholders/results.png" alt="Project Results" width={1200} height={600} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="cta py-16 bg-blue-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Ready to transform your e-commerce presence?</h2>
          <Link href={`/contact`} className="inline-block bg-white text-blue-700 py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 ease-in-out text-lg font-semibold shadow-lg">
              Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Project1Page;
