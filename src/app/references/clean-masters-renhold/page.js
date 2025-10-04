"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation'; // Import hooks
import projects from "@/app/data/projects"; // Import projects data
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import icons

const Project3Page = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Extract current project ID from pathname (e.g., /references/clean-masters-renhold -> clean-masters-renhold)
  const currentProjectId = pathname.split('/').pop();

  // Find the index of the current project
  const currentIndex = projects.findIndex(p => p.id === currentProjectId);

  // Determine previous and next projects
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  console.log("Current Project ID:", currentProjectId);
  console.log("Current Index:", currentIndex);
  console.log("Previous Project:", prevProject);
  console.log("Next Project:", nextProject);

  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection title="Clean masters Renhold Website" />

      

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
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Brand Discovery & Strategy
              </h3>
              <p className="text-gray-700 mb-4">
                We conducted workshops and interviews to understand the
                agency&apos;s values, mission, and target audience, laying the
                foundation for a unique brand strategy.
              </p>
              <Image
                src="/images/projects/cleanmasters/wireframe.png"
                alt="Clean Masters Renhold Website Wireframe"
                width={600}
                height={400}
                className="rounded-lg shadow-md mt-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Visual Identity Design
              </h3>
              <p className="text-gray-700 mb-4">
                Our design team crafted a sleek, intuitive, and secure user
                interface, focusing on ease of use for complex financial
                operations. Interactive prototypes were developed for user
                testing.
              </p>
              <Image
                src="/images/projects/cleanmasters/cover.png"
                alt="Visual Identity"
                width={600}
                height={400}
                className="rounded-lg shadow-md mt-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Secure Development
              </h3>
              <p className="text-gray-700 mb-4">
                The app was built with a strong emphasis on security, utilizing
                encryption, secure APIs, and robust backend infrastructure to
                protect sensitive financial data.
              </p>
              <Image
                src="/images/projects/cleanmasters/dev.png"
                alt="Development"
                width={600}
                height={400}
                className="rounded-lg shadow-md mt-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Testing & Compliance
              </h3>
              <p className="text-gray-700 mb-4">
                Extensive testing was conducted to ensure functionality,
                usability, and performance across devices, along with compliance
                checks to meet industry standards.
              </p>
              <Image
                src="/images/projects/cleanmasters/test.png"
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
            Key Features & Deliverables
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>New logo design</li>
            <li>SEO Optimization for better search engine ranking.</li>
            <li>Responsive Design for seamless access on any device.</li>
            <li>Detailed Service list that company offers</li>
            <li>Client Testimonials Section for social proof.</li>
            <li>Integrated Contact Forms and Location Map.</li>
            <li>Technologies Used: HTML,CSS and Javascript.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Results & Impact
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            The new website significantly enhanced Clean Masters Renhold&apos;s
            online presence, leading to a 40% increase in web traffic and a 25%
            boost in service inquiries within the first three months
            post-launch. The intuitive design and streamlined booking process
            improved user engagement and customer satisfaction, solidifying the
            company&apos;s reputation as a trusted cleaning service provider in
            their market.
          </p>
          <div className="mt-8 mx-auto">
            <Image
              src="/images/projects/cleanmasters/cover.png"
              alt="Clean Masters Renhold Website Wireframe"
              width={800}
              height={400}
              className="rounded-lg shadow-lg"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section className="cta py-16 bg-gray-200 text-gray-800 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">
            Ready to enhance your beauty business?
          </h2>
          <Link
            href={`/free-consultation`}
            className="btn-gradient-primary"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Project3Page;
