'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import Link from 'next/link';

const Project3Page = () => {
  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Saray Beauty Parlour Website"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Project Overview</h2>
          <p className="text-lg text-gray-700 mb-6">
            This project involved creating a sophisticated online presence for Saray Beauty Parlour, a leading beauty and wellness center. Our objective was to design a visually appealing and user-friendly website that effectively showcases their services, facilitates online bookings, and reflects their brand's elegance.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Key features included a detailed service menu, an integrated booking system, a portfolio of their work, and client testimonials. We focused on creating a seamless digital experience that enhances the parlour's reputation and attracts new clients.
          </p>
          <div className="mt-8">
            <Image src="/images/projects/saray.png" alt="Saray Beauty Parlour Website" width={1200} height={600} className="rounded-lg shadow-lg" />
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
            <li>Detailed Service Menu with pricing and descriptions.</li>
            <li>Online Appointment Booking System for convenience.</li>
            <li>Responsive Design for seamless access on any device.</li>
            <li>Before & After Photo Gallery showcasing transformations.</li>
            <li>Client Testimonials Section for social proof.</li>
            <li>Integrated Contact Forms and Location Map.</li>
            <li>Technologies Used: Next.js, React, Booking API, CMS.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Results & Impact</h2>
          <p className="text-lg text-gray-700 mb-6">
            The new website for Saray Beauty Parlour led to a **30% increase in online bookings** and improved client engagement. The enhanced online presence attracted new customers and reinforced the parlour's image as a modern and professional establishment.
          </p>
          <div className="mt-8">
            <Image src="/images/projects/saray.png" alt="Saray Beauty Parlour Website" width={1200} height={600} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="cta py-16 bg-gray-200 text-gray-800 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Ready to enhance your beauty business?</h2>
          <Link href={`/contact`} className="inline-block bg-gray-800 text-white py-3 px-8 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out text-lg font-semibold shadow-lg">
              Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Project3Page;
