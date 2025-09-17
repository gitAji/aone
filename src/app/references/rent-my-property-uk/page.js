"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";

const Project6Page = () => {
  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection title="Rent My Property UK" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Project Overview
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            This project focused on developing a comprehensive online presence
            for Rent My Property UK, a property management service. Our goal was
            to create a user-friendly and visually appealing website that would
            facilitate property listings, inquiries, and bookings.
          </p>
          <p className="text-lg text-gray-700 mb-6"></p>
          <div className="mt-8">
            <Image
              src="/images/projects/saraystange.png"
              alt="Saray Steakhouse Website"
              width={1200}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                1. User Needs Assessment
              </h3>
              <p className="text-gray-700 mb-4">
                We conducted surveys and interviews with students and educators
                to identify their needs, challenges, and preferences for an
                online learning platform.
              </p>
              <Image
                src="/images/placeholders/wireframe.png"
                alt="User Needs Assessment"
                width={600}
                height={400}
                className="rounded-lg shadow-md mt-4"
              />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                2. UI/UX Redesign & Prototyping
              </h3>
              <p className="text-gray-700 mb-4">
                Our design team created a modern, intuitive, and accessible user
                interface, focusing on clear navigation and engaging content
                presentation. Interactive prototypes were developed for
                feedback.
              </p>
              <Image
                src="/images/placeholders/ui-ux.png"
                alt="UI/UX Redesign"
                width={600}
                height={400}
                className="rounded-lg shadow-md mt-4"
              />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Development & Feature Implementation
              </h3>
              <p className="text-gray-700 mb-4">
                The development team implemented the new design and integrated
                features like interactive quizzes, progress tracking, and a
                personalized learning dashboard.
              </p>
              <Image
                src="/images/placeholders/development.png"
                alt="Development"
                width={600}
                height={400}
                className="rounded-lg shadow-md mt-4"
              />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Accessibility & Performance Testing
              </h3>
              <p className="text-gray-700 mb-4">
                Rigorous testing was performed to ensure the portal was
                accessible to all users and optimized for fast loading times and
                smooth performance across devices.
              </p>
              <Image
                src="/images/placeholders/testing.png"
                alt="Testing"
                width={600}
                height={400}
                className="rounded-lg shadow-md mt-4"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Key Features & Enhancements
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Interactive Menu Display with high-quality images.</li>
            <li>Online Table Booking System for seamless reservations.</li>
            <li>Responsive Design for optimal viewing on all devices.</li>
            <li>
              High-Resolution Photo Gallery showcasing ambiance and dishes.
            </li>
            <li>SEO Optimization for local search visibility.</li>
            <li>
              Integration with Restaurant Management Systems (if applicable).
            </li>
            <li>
              Technologies Used: Next.js, React, Node.js, WordPress (headless
              CMS).
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Results & Impact
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            The new website significantly enhanced Saray Steakhouse&apos;s
            online presence, leading to a **20% increase in online
            reservations** and improved customer engagement. The visually
            appealing design and user-friendly interface received positive
            feedback, contributing to a stronger brand image and increased
            customer satisfaction.
          </p>
          <div className="mt-8">
            <Image
              src="/images/projects/saraystange.png"
              alt="Saray Steakhouse Website"
              width={1200}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="cta py-16 bg-gray-200 text-gray-800 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">
            Ready to elevate your restaurant&apos;s online presence?
          </h2>
          <Link
            href={`/contact`}
            className="inline-block bg-gray-800 text-white py-3 px-8 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out text-lg font-semibold shadow-lg"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Project6Page;
