"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation"; // Import hooks
import projects from "@/app/data/projects"; // Import projects data
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons

const Project6Page = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Extract current project ID from pathname (e.g., /references/rent-my-property-uk -> rent-my-property-uk)
  const currentProjectId = pathname.split("/").pop();

  // Find the index of the current project
  const currentIndex = projects.findIndex((p) => p.id === currentProjectId);

  // Determine previous and next projects
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection title="Rent My Property UK" />

      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {prevProject ? (
          <Link href={prevProject.projectLink} passHref>
            <button className="flex items-center text-gray-800 hover:text-blue-600 transition-colors duration-300">
              <FaArrowLeft className="mr-2" /> {prevProject.title}
            </button>
          </Link>
        ) : (
          <div /> // Empty div to maintain spacing
        )}
        {nextProject ? (
          <Link href={nextProject.projectLink} passHref>
            <button className="flex items-center text-gray-800 hover:text-blue-600 transition-colors duration-300">
              {nextProject.title} <FaArrowRight className="ml-2" />
            </button>
          </Link>
        ) : (
          <div /> // Empty div to maintain spacing
        )}
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            {projects[currentIndex]?.title} - Project Overview
          </h2>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-lg text-gray-700 mb-6">
            This project focused on developing a comprehensive online presence
            for Rent My Property UK, a property management service. Our goal was
            to create a user-friendly and visually appealing website that would
            facilitate property listings, inquiries, and bookings.
          </p>
          <p className="text-lg text-gray-700 mb-6"></p>
          <div className="mt-8 mx-auto">
            <Image
              src="/images/projects/rentmyproperty/cover.png"
              alt="rent my property uk"
              width={1200}
              height={600}
              className="rounded-lg shadow-lg"
              sizes="100vw"
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
                1. Requirements Gathering & User Needs Assessment
              </h3>
              <p className="text-gray-700 mb-4">
                We started by engaging with the client to understand their
                business model, target audience, and specific needs for the
                property management platform. This phase included user surveys
                and stakeholder interviews to gather comprehensive requirements.
              </p>
              <Image
                src="/images/projects/rentmyproperty/plan.png"
                alt="User Needs Assessment"
                width={600}
                height={400}
                className="rounded-lg shadow-md mt-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                2. UI/UX Redesign & Prototyping
              </h3>
              <p className="text-gray-700 mb-4">
                The design team created wireframes and interactive prototypes to
                visualize the new user interface. Emphasis was placed on
                intuitive navigation, clear property listings, and a seamless
                booking process.
              </p>
              <Image
                src="/images/projects/rentmyproperty/ui.png"
                alt="UI/UX Redesign"
                width={600}
                height={400}
                className="rounded-lg shadow-md mt-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Development & Feature Implementation
              </h3>
              <p className="text-gray-700 mb-4">
                Our development team built the website using modern web
                technologies, ensuring it was responsive and optimized for
                performance. Key features included property search filters,
                detailed listings, user accounts, and a secure booking system.
              </p>
              <Image
                src="/images/projects/rentmyproperty/logo.png"
                alt="Development"
                width={600}
                height={400}
                className="rounded-lg shadow-md mt-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Accessibility & Performance Testing
              </h3>
              <p className="text-gray-700 mb-4">
                Rigorous testing was conducted to ensure the website met
                accessibility standards and performed well across all devices
                and browsers. User feedback was incorporated to refine the user
                experience further.
              </p>
              <Image
                src="/images/projects/rentmyproperty/cover.png"
                alt="Testing"
                width={600}
                height={400}
                className="rounded-lg shadow-md mt-4"
                sizes="(max-width: 768px) 100vw, 50vw"
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
            <li>Responsive Design for optimal viewing on all devices.</li>

            <li>Detailed Property Listings with descriptions and amenities.</li>
            <li>
              High-Resolution Photo Gallery showcasing ambiance and dishes.
            </li>
            <li>SEO Optimization for local search visibility.</li>
            <li>
              Integration with Restaurant Management Systems (if applicable).
            </li>
            <li>Technologies Used: WordPress (headless CMS).</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Results & Impact
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            The revamped Rent My Property UK website successfully enhanced the
            user experience, leading to increased user engagement and higher
            booking rates. The client reported positive feedback from users
            regarding the ease of navigation and the clarity of property
            information. Overall, the project significantly contributed to the
            client&apos;s business growth and online presence.
          </p>
          <div className="mt-8">
            <Image
              src="/images/projects/rentmyproperty/rentmypropertyuk.png"
              alt="Saray Steakhouse Website"
              width={1200}
              height={600}
              className="rounded-lg shadow-lg"
              sizes="100vw"
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
            href={`/request-quote`}
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
