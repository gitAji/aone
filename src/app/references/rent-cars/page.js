"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";

const Project7Page = () => {
  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection title="Rent Cars" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Project Overview
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            In this project, We designed and developed a website for Rent cars
            service. The primary objective was to create an engaging and
            user-friendly platform that allows users to easily browse, select,
            and book rental cars online.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Key functionalities included a comprehensive car catalog with
            detailed descriptions and images, an intuitive booking system, and a
            secure payment gateway. The website was built using Next.js to
            ensure fast load times and a responsive design that works seamlessly
            across all devices. Additionally, SEO best practices were
            implemented to enhance the website &#39;s visibility in search
            engine results, attracting more visitors and potential customers.
          </p>
          <div className="mt-8">
            <Image
              src="/images/projects/rentcars/cover.jpeg"
              alt="Rent Cars Website"
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
                1. Needs Assessment & Requirements Gathering
              </h3>
              <p className="text-gray-700 mb-4">
                We collaborated with the client to understand their business
                model, target audience, and specific needs for the booking
                system. This phase included stakeholder interviews and user
                surveys to gather comprehensive requirements.
              </p>
              <Image
                src="/images/projects/rentcars/plan.png"
                alt="Needs Assessment"
                width={600}
                height={400}
                className="rounded-lg shadow-md mt-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                2. System Design & Prototyping
              </h3>
              <p className="text-gray-700 mb-4">
                We created detailed wireframes and prototypes to visualize the
                user interface and user experience. This step ensured that the
                design aligned with user expectations and business goals.
              </p>
              <Image
                src="/images/projects/rentcars/ui.png"
                alt="System Design"
                width={600}
                height={400}
                className="rounded-lg shadow-md mt-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Agile Development & Iteration
              </h3>
              <p className="text-gray-700 mb-4">
                We followed an agile development methodology, building the car
                booking system in iterative sprints, allowing for continuous
                feedback and adjustments to ensure it met evolving business
                needs.
              </p>
              <Image
                src="/images/projects/rentcars/dev.png"
                alt="Development"
                width={600}
                height={400}
                className="rounded-lg shadow-md mt-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                4. User Training & Deployment
              </h3>
              <p className="text-gray-700 mb-4">
                Comprehensive training was provided to the sales team, and the
                CRM was deployed with a phased rollout to ensure a smooth
                transition and minimal disruption to operations.
              </p>
              <Image
                src="/images/projects/rentcars/logo.png"
                alt="Deployment"
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
            Key Features & Benefits
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>
              <strong>Comprehensive Car Catalog:</strong> Detailed listings with
              images, specifications, and pricing to help users make informed
              decisions.
            </li>
            <li>
              <strong>Intuitive Booking System:</strong> A user-friendly
              interface that simplifies the car selection and booking process.
            </li>
            <li>
              <strong>Secure Payment Gateway:</strong> Integration with trusted
              payment providers to ensure safe and seamless transactions.
            </li>
            <li>
              <strong>Responsive Design:</strong> Optimized for all devices,
              providing a consistent experience across desktops, tablets, and
              smartphones.
            </li>
            <li>
              <strong>SEO Optimization:</strong> Implemented best practices to
              improve search engine rankings and attract more visitors.
            </li>
            <li>
              <strong>Customer Support Integration:</strong> Features like live
              chat and FAQ sections to assist users throughout their booking
              journey.
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
            The launch of the Rent Cars website has significantly enhanced the
            client&apos;s online presence and customer engagement. The
            user-friendly design and robust features have led to increased
            bookings and customer satisfaction. The SEO strategies implemented
            have also improved the website&apos;s visibility, attracting a
            broader audience and driving business growth.
          </p>
          <div className="mt-8">
            <Image
              src="/images/projects/rentcars/result.png"
              alt="Rent Cars Website"
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
            Ready to build an engaging learning platform?
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

export default Project7Page;
