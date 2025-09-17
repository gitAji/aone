'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import Link from 'next/link';

const Project9Page = () => {
  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Tulips Beauty Parlour Website"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Project Overview</h2>
          <p className="text-lg text-gray-700 mb-6">
            This project focused on developing a vibrant and user-friendly online platform for Tulips Beauty Parlour. Our aim was to create a digital space that reflects the parlour&apos;s modern aesthetic, provides easy access to services, and enhances client engagement.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Key features included a comprehensive service menu, an intuitive online booking system, a stunning photo gallery of their work, and client testimonials. We designed the website to be fully responsive, ensuring a seamless experience across all devices and attracting a wider clientele.
          </p>
          <div className="mt-8">
            <Image src="/images/projects/tulips.png" alt="Tulips Beauty Parlour Website" width={1200} height={600} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Data Source Integration & Ingestion</h3>
              <p className="text-gray-700 mb-4">We began by connecting to various data sources and implementing robust data pipelines for automated ingestion, ensuring real-time data availability for analysis.</p>
              <Image src="/images/placeholders/wireframe.png"               alt="Project Wireframe" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Machine Learning Model Development</h3>
              <p className="text-gray-700 mb-4">Our data scientists developed and trained machine learning models for predictive analytics, identifying key trends and forecasting future outcomes based on historical data.</p>
              <Image src="/images/placeholders/ui-ux.png"               alt="UI/UX Design Mockup" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Dashboard UI/UX Design & Development</h3>
              <p className="text-gray-700 mb-4">We designed an intuitive and interactive dashboard interface, focusing on clear data visualizations and customizable reporting features to empower business users.</p>
              <Image src="/images/placeholders/development.png" alt="Development Process" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Deployment & Performance Optimization</h3>
              <p className="text-gray-700 mb-4">The dashboard was deployed on a scalable cloud infrastructure, and performance optimizations were implemented to ensure fast loading times and real-time data updates.</p>
              <Image src="/images/placeholders/testing.png" alt="Deployment" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Key Features & Technologies</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Comprehensive Service Listings with detailed descriptions.</li>
            <li>Integrated Online Booking System for client convenience.</li>
            <li>Visually Appealing Photo Gallery showcasing services and results.</li>
            <li>Responsive Design for optimal viewing on all devices.</li>
            <li>Client Testimonials and Reviews Section.</li>
            <li>Easy-to-Use Contact Forms and Location Map.</li>
            <li>Technologies Used: Next.js, React, Booking API, CMS.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Results & Impact</h2>
          <p className="text-lg text-gray-700 mb-6">
            The new website for Tulips Beauty Parlour led to a **25% increase in online appointments** and a significant boost in client inquiries. The enhanced online presence and user-friendly booking system contributed to improved customer satisfaction and business growth.
          </p>
          <div className="mt-8">
            <Image src="/images/projects/tulips.png" alt="Tulips Beauty Parlour Website" width={1200} height={600} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="cta py-16 bg-gray-200 text-gray-800 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Ready to bloom online?</h2>
          <Link href={`/contact`} className="inline-block bg-gray-800 text-white py-3 px-8 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out text-lg font-semibold shadow-lg">
              Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Project9Page;