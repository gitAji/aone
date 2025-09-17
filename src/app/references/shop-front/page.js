'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import Link from 'next/link';

const Project8Page = () => {
  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Saray Beauty Parlour Website"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Project Overview</h2>
          <p className="text-lg text-gray-700 mb-6">
            This project involved creating a sophisticated online presence for Saray Beauty Parlour, a leading beauty and wellness center. Our objective was to design a visually appealing and user-friendly website that effectively showcases their services, facilitates online bookings, and reflects their brand&apos;s elegance.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Key features included a detailed service menu, an integrated booking system, a portfolio of their work, and client testimonials. We focused on creating a seamless digital experience that enhances the parlour&apos;s reputation and attracts new clients.
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Concept & Game Design</h3>
              <p className="text-gray-700 mb-4">We started by defining the game&apos;s core mechanics, narrative, and target audience. This involved creating detailed game design documents, character concepts, and level layouts.</p>
              <Image
                src="/images/placeholders/wireframe.png"
                alt="Project Wireframe"
                width={600}
                height={400}
                className="rounded-lg shadow-md mt-4"
              />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Art & Asset Creation</h3>
              <p className="text-gray-700 mb-4">Our artists created captivating 2D/3D assets, character models, environments, and animations, ensuring a visually stunning and cohesive game world.</p>
              <Image
                src="/images/placeholders/ui-ux.png"
                alt="UI/UX Design Mockup"
                width={600}
                height={400}
                className="rounded-lg shadow-md mt-4"
              />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Development & Prototyping</h3>
              <p className="text-gray-700 mb-4">The game was developed using agile methodologies, with iterative prototyping and frequent playtesting to refine gameplay and user experience.</p>
              <Image src="/images/placeholders/development.png" alt="Development" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Testing, Optimization & Launch</h3>
              <p className="text-gray-700 mb-4">Extensive testing was performed across various devices. Performance was optimized, and the game was successfully launched on target mobile platforms.</p>
              <Image src="/images/placeholders/testing.png" alt="Testing & Launch" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Key Features & Technologies</h2>
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
            The new website for Saray Beauty Parlour led to a **30% increase in online bookings** and improved client engagement. The enhanced online presence attracted new customers and reinforced the parlour&apos;s image as a modern and professional establishment.
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

export default Project8Page;