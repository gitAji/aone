"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";

const Project4Page = () => {
  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection title="Tulips Beauty Parlour Website" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Project Overview
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            This project is about designing and developing a modern,
            user-friendly website for Tulips Beauty Parlour. The goal was to
            create an engaging online presence that showcases their services,
            allows clients to easily book appointments, and provides essential
            information about the parlour.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            The website features a clean and elegant design that reflects the
            beauty and professionalism of Tulips Beauty Parlour. Key
            functionalities include a comprehensive service menu, an integrated
            online booking system, a photo gallery showcasing their work, and
            client testimonials to build trust with potential customers. The
            site is built using Next.js to ensure fast load times and a
            responsive design that works seamlessly across all devices.
            Additionally, SEO best practices were implemented to enhance the
            parlour's visibility in search engine results, attracting more
            visitors and potential clients.
          </p>
          <div className="mt-8">
            <Image
              src="/images/projects/tulips/cover.png"
              alt="Tulips Beauty Parlour Website"
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
                1. User Research & Analysis
              </h3>
              <p className="text-gray-700 mb-4">
                We conducted in-depth user research, including surveys,
                interviews, and usability tests, to understand user behaviors,
                needs, and pain points with the existing platform.
              </p>
              <Image
                src="/images/projects/tulips/dev.png"
                alt="User Research"
                width={600}
                height={400}
                className="rounded-lg shadow-md mt-4"
              />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Information Architecture & Wireframing
              </h3>
              <p className="text-gray-700 mb-4">
                Based on research, we restructured the platform&apos;s
                information architecture and created detailed wireframes to
                define the new layout and user flows.
              </p>
              <Image
                src="/images/projects/tulips/logo.png"
                alt="Wireframing"
                width={600}
                height={400}
                className="rounded-lg shadow-md mt-4"
              />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                3. UI Design & Prototyping
              </h3>
              <p className="text-gray-700 mb-4">
                Our UI designers crafted a modern, clean, and intuitive visual
                design. Interactive prototypes were developed to simulate the
                user experience before development.
              </p>
              <Image
                src="/images/projects/tulips/ui.png"
                alt="UI Design"
                width={600}
                height={400}
                className="rounded-lg shadow-md mt-4"
              />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Usability Testing & Iteration
              </h3>
              <p className="text-gray-700 mb-4">
                We performed extensive usability testing with real users,
                gathered feedback, and iterated on the designs to ensure optimal
                usability and user satisfaction.
              </p>
              <Image
                src="/images/projects/tulips/dev.png"
                alt="Usability Testing"
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
            Key Features & Improvements
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Comprehensive Service Listings with detailed descriptions.</li>
            <li>Integrated Online Booking System for client convenience.</li>
            <li>
              Visually Appealing Photo Gallery showcasing services and results.
            </li>
            <li>Responsive Design for optimal viewing on all devices.</li>
            <li>Client Testimonials and Reviews Section.</li>
            <li>Easy-to-Use Contact Forms and Location Map.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Results & Impact
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            The new website for Tulips Beauty Parlour led to a **25% increase in
            online appointments** and a significant boost in client inquiries.
            The enhanced online presence and user-friendly booking system
            contributed to improved customer satisfaction and business growth.
          </p>
          <div className="mt-8">
            <Image
              src="/images/projects/tulips/ui.png"
              alt="Tulips Beauty Parlour Website"
              width={1200}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="cta py-16 bg-gray-200 text-gray-800 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Ready to bloom online?</h2>
          <Link
            href={`/contact`}
            className="inline-block bg-gray-800 text-white py-3 px-8 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out text-lg font-semibold shadow-lg"
          >
            Discuss Your Design Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Project4Page;
