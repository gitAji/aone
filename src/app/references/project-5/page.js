'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import Link from 'next/link';

const Project5Page = () => {
  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Healthcare App Development"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Project Overview</h2>
          <p className="text-lg text-gray-700 mb-6">
            This project involved the development of a secure and robust mobile application designed specifically for healthcare providers. The primary goal was to streamline patient data management, improve communication between medical staff, and enhance the overall efficiency of healthcare operations, all while adhering strictly to HIPAA compliance regulations.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Key features included secure patient record access, appointment scheduling, prescription management, and a secure messaging system. We implemented stringent security protocols and data encryption to ensure the privacy and integrity of sensitive patient information. The app was designed to be intuitive and user-friendly, minimizing the learning curve for busy healthcare professionals.
          </p>
          <div className="mt-8">
            <Image src="/images/projects/project5.png" alt="Healthcare App Development" width={1200} height={600} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Requirements & Compliance Analysis</h3>
              <p className="text-gray-700 mb-4">We began with a thorough analysis of HIPAA regulations and client requirements to ensure the app&apos;s design and development adhered to all necessary healthcare standards.</p>
              <Image src="/images/placeholders/wireframe.png" alt="Compliance Analysis" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Secure Architecture Design</h3>
              <p className="text-gray-700 mb-4">Our architects designed a robust and secure backend infrastructure, prioritizing data encryption, access controls, and audit trails to protect sensitive patient information.</p>
              <Image src="/images/placeholders/ui-ux.png" alt="Architecture Design" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Development & Integration</h3>
              <p className="text-gray-700 mb-4">The development team built the app&apos;s features, including secure patient record access and messaging, integrating with existing hospital systems where necessary.</p>
              <Image src="/images/placeholders/development.png" alt="Development" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Security Testing & Deployment</h3>
              <p className="text-gray-700 mb-4">Rigorous security testing, penetration testing, and user acceptance testing were conducted before a secure and compliant deployment to app stores.</p>
              <Image src="/images/placeholders/testing.png" alt="Security Testing" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Key Features & Compliance</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>HIPAA Compliance for all data handling and communication.</li>
            <li>Secure Patient Records with encrypted access.</li>
            <li>Appointment Management and Reminders.</li>
            <li>Secure Messaging for medical staff and patient inquiries.</li>
            <li>Prescription Management System.</li>
            <li>Intuitive User Interface for busy healthcare professionals.</li>
            <li>Technologies Used: Swift (iOS), Kotlin (Android), Firebase, AWS.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Results & Impact</h2>
          <p className="text-lg text-gray-700 mb-6">
            The healthcare app significantly improved the efficiency of patient data management and communication for healthcare providers. It led to a **20% reduction in administrative tasks** and a **15% improvement in patient engagement**. The secure and compliant platform was well-received, enhancing the overall quality of care.
          </p>
          <div className="mt-8">
            <Image src="/images/projects/project5.png" alt="Project Results" width={1200} height={600} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="cta py-16 bg-gray-200 text-gray-800 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Ready to build a secure healthcare solution?</h2>
          <Link href={`/contact`} className="inline-block bg-gray-800 text-white py-3 px-8 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out text-lg font-semibold shadow-lg">
              Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Project5Page;
