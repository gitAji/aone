'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import Link from 'next/link';

const Project3Page = () => {
  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Brand Identity & Website Launch"
        subtitle="Creating a cohesive brand identity and launching a new responsive website for a growing creative agency."
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Project Overview</h2>
          <p className="text-lg text-gray-700 mb-6">
            This project focused on developing a strong and memorable brand identity for a burgeoning creative agency, followed by the design and launch of their new responsive website. The goal was to visually articulate their unique approach to creativity and innovation, ensuring a consistent and engaging brand presence across all digital touchpoints.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our work encompassed logo design, color palette selection, typography, and comprehensive brand guidelines. The website was built with a focus on showcasing their portfolio, highlighting their services, and providing an intuitive user experience that reflects their creative ethos. We ensured the site was fully responsive and optimized for performance across all devices.
          </p>
          <div className="mt-8">
            <Image src="/images/projects/project3.jpeg" alt="Brand Identity & Website Launch" width={1200} height={600} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Brand Discovery & Strategy</h3>
              <p className="text-gray-700 mb-4">We conducted workshops and interviews to understand the agency&apos;s values, mission, and target audience, laying the foundation for a unique brand strategy.</p>
              <Image src="/images/placeholders/wireframe.png" alt="Brand Strategy" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Visual Identity Design</h3>
              <p className="text-gray-700 mb-4">Our design team crafted a sleek, intuitive, and secure user interface, focusing on ease of use for complex financial operations. Interactive prototypes were developed for user testing.</p>
              <Image src="/images/placeholders/ui-ux.png" alt="Visual Identity" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Secure Development</h3>
              <p className="text-gray-700 mb-4">The app was built with a strong emphasis on security, utilizing encryption, secure APIs, and robust backend infrastructure to protect sensitive financial data.</p>
              <Image src="/images/placeholders/development.png" alt="Development" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Testing & Compliance</h3>
              <p className="text-gray-700 mb-4">Extensive security audits and compliance testing (e.g., PCI DSS) were performed. Rigorous functional and performance testing ensured a bug-free and high-performing application.</p>
              <Image src="/images/placeholders/testing.png" alt="Testing" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Key Features & Deliverables</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Comprehensive Brand Guidelines.</li>
            <li>Custom Responsive Website Design & Development.</li>
            <li>Engaging Portfolio Showcase.</li>
            <li>SEO Best Practices Implementation.</li>
            <li>Content Management System (CMS) Integration.</li>
            <li>Social Media Integration.</li>
            <li>Technologies Used: React, Next.js, Tailwind CSS, Sanity CMS.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Results & Impact</h2>
          <p className="text-lg text-gray-700 mb-6">
            The new brand identity and website significantly enhanced the agency&apos;s market position and client acquisition efforts. They reported a **25% increase in qualified leads** and a **15% improvement in brand recognition** within six months of the launch. The cohesive brand presence resonated well with their target audience.
          </p>
          <div className="mt-8">
            <Image src="/images/placeholders/results.png" alt="Project Results" width={1200} height={600} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="cta py-16 bg-blue-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Ready to elevate your brand?</h2>
          <Link href={`/contact`} className="inline-block bg-white text-blue-700 py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 ease-in-out text-lg font-semibold shadow-lg">
              Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Project3Page;
