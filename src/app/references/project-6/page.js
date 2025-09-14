"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";

const Project6Page = () => {
  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection title="Rent My peroperty " />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Project Overview
          </h2>
          <p className="text-lg text-gray-700 mb-6"></p>
          <p className="text-lg text-gray-700 mb-6">
            A Website Development for Property agent in the UK to list their
            properties for rent and sale. The website features a clean and
            modern design, easy navigation, and a user-friendly interface. It
            includes sections for property listings, agent profiles, contact
            information, and a blog for real estate tips and market updates. The
            website is built using Next.js for optimal performance and SEO,
            ensuring fast load times and a seamless user experience across all
            devices. The project also involved integrating a content management
            system (CMS) to allow the client to easily update property listings
            and blog posts.
          </p>
          <p className="text-lg text-gray-700 mb-6"></p>
          <div className="mt-8">
            <Image
              src="/images/projects/rentmyproperty/cover.png"
              alt="rental property website"
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
                1. Requirements & User Needs Assessment
              </h3>
              <p className="text-gray-700 mb-4">
                we collaborated closely with the client to gather detailed
                requirements, ensuring the app met all relevant regulations and
                compliance standards. we use public API to get latest news about
                property updates and government forms to the site so that user
                can get latest updates.
              </p>
              <Image
                src="/images/projects/rentmyproperty/dev.png"
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
                The design team created wireframes and interactive prototypes to
                visualize the new user interface, focusing on enhancing user
                experience and accessibility.
              </p>
              <Image
                src="/images/projects/rentmyproperty/ui.png"
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
                src="/images/projects/rentmyproperty/cover.png"
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
                Rigorous testing was conducted to ensure the website was
                accessible to all users and performed optimally across various
                devices and browsers.
              </p>
              <Image
                src="/images/projects/rentmyproperty/test.png"
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
            <li>Responsive Design for optimal viewing on all devices.</li>
            <li>
              High-Resolution Photo Gallery showcasing ambiance and dishes.
            </li>
            <li>SEO Optimization for local search visibility.</li>
            <li>
              Integration with Restaurant Management Systems (if applicable).
            </li>
            <li> property listing with search </li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Results & Impact
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            The redesigned website led to a significant increase in user
            engagement, longer visit durations, and higher conversion rates for
            property inquiries. The client reported positive feedback from users
            regarding the improved navigation and overall user experience.
          </p>
          <div className="mt-8">
            <Image
              src="/images/projects/rentmypropertyuk.png"
              alt="Results and Impact"
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
