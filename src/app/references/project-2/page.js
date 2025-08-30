'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import Link from 'next/link';

const Project2Page = () => {
  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Mobile App Development for Fintech"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Project Overview</h2>
          <p className="text-lg text-gray-700 mb-6">
            This project involved the end-to-end development of a cutting-edge mobile application for a rapidly growing fintech startup. The primary objective was to provide users with a secure, fast, and intuitive platform for managing their finances, making investments, and conducting various financial transactions on the go.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Key functionalities included real-time transaction tracking, personalized financial insights, secure biometric authentication, and seamless integration with banking services. We prioritized robust security measures and a user-friendly interface to ensure a trustworthy and engaging experience for all users.
          </p>
          <div className="mt-8">
            <Image src="/images/projects/project2.png" alt="Mobile App Development for Fintech" width={1200} height={600} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Discovery & Strategy</h3>
              <p className="text-gray-700 mb-4">We started by understanding the fintech landscape, target users, and regulatory requirements. This involved detailed strategy sessions and defining the app&apos;s core functionalities.</p>
              <Image src="/images/placeholders/wireframe.png" alt="Strategy" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. UI/UX Design & Prototyping</h3>
              <p className="text-gray-700 mb-4">Our design team crafted a sleek, intuitive, and secure user interface, focusing on ease of use for complex financial operations. Interactive prototypes were developed for user testing.</p>
              <Image src="/images/placeholders/ui-ux.png" alt="UI/UX Design" width={600} height={400} className="rounded-lg shadow-md mt-4" />
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
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Key Features & Technologies</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Secure Biometric Authentication (Fingerprint/Face ID).</li>
            <li>Real-time Transaction Tracking and Notifications.</li>
            <li>Personalized Financial Insights and Budgeting Tools.</li>
            <li>Seamless API Integrations with Banking Services.</li>
            <li>Cross-Platform Compatibility (iOS & Android).</li>
            <li>Robust Security Protocols and Data Encryption.</li>
            <li>Technologies Used: React Native, Node.js, PostgreSQL, AWS.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Results & Impact</h2>
          <p className="text-lg text-gray-700 mb-6">
            The mobile app received overwhelmingly positive feedback from early users, praising its intuitive interface and robust security. It has significantly streamlined financial management for users, leading to a **40% increase in user engagement** and a **20% growth in new user acquisition** within the first quarter.
          </p>
          <div className="mt-8">
            <Image src="/images/projects/project2.png" alt="Project Results" width={1200} height={600} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="cta py-16 bg-gray-200 text-gray-800 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Ready to innovate in the fintech space?</h2>
          <Link href={`/contact`} className="inline-block bg-gray-800 text-white py-3 px-8 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out text-lg font-semibold shadow-lg">
              Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Project2Page;
