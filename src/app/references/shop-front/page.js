"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";

const Project8Page = () => {
  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection title="Shop-front theme" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Project Overview
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            This project involved designing and developing a modern,
            user-friendly website for Shop front theme. The goal was to create a
            theme for corner-shops that can use the theme for their business in
            cheap price. The website features a clean and elegant design that
            can portrays the products and services of the corner shop.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            The key functionalities included an interactive product display, an
            intuitive online ordering system, and a gallery to highlight the
            shop offerings. We aimed to create a digital platform that truly
            reflects the quality and convenience of using the Shop-front theme.
          </p>
          <div className="mt-8">
            <Image
              src="/images/projects/shopfront/shop-front.png"
              alt="Saray Beauty Parlour Website"
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
                1. Conceptualization & Planning
              </h3>
              <p className="text-gray-700 mb-4">
                We began with brainstorming sessions to define the theme
                &apos;shop-front&apos;s concept, target audience, and unique
                selling points. This phase involved market research and
                competitor analysis to ensure the theme would stand out in the
                marketplace.
              </p>
              <Image
                src="/images/projects/shopfront/plan.png"
                alt="Project Wireframe"
                width={600}
                height={400}
                className="rounded-lg shadow-md mt-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Design & Asset Creation
              </h3>
              <p className="text-gray-700 mb-4">
                The design team created high-fidelity mockups and prototypes to
                visualize the theme layout, color scheme, and typography. Custom
                graphics and icons were developed to enhance the visual appeal
                and user experience.
              </p>
              <Image
                src="/images/projects/shopfront/cover.png"
                alt="UI/UX Design Mockup"
                width={600}
                height={400}
                className="rounded-lg shadow-md mt-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Development & Prototyping
              </h3>
              <p className="text-gray-700 mb-4">
                Our development team translated the designs into a fully
                functional theme &apos;shop-front&apos; using modern web
                technologies. We focused on responsiveness, performance
                optimization, and cross-browser compatibility to ensure a
                seamless user experience.
              </p>
              <Image
                src="/images/projects/shopfront/dev.png"
                alt="Development"
                width={600}
                height={400}
                className="rounded-lg shadow-md mt-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Testing, Optimization & Launch
              </h3>
              <p className="text-gray-700 mb-4">
                Comprehensive testing was conducted to identify and fix any bugs
                or usability issues. We optimized the theme for speed and SEO
                best practices before the official launch.
              </p>
              <Image
                src="/images/projects/shopfront/testing.png"
                alt="Testing & Launch"
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
            Key Features & Technologies
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Responsive Design for optimal viewing on all devices.</li>
            <li>Interactive Product Display with high-quality images.</li>
            <li>Intuitive Online Ordering System for easy purchases.</li>
            <li>Customizable Layout Options to suit different shop needs.</li>
            <li>SEO Optimization for better search engine visibility.</li>
            <li>
              Built with modern web technologies including React and Tailwind
              CSS.
            </li>
            <li>
              Integration with popular e-commerce platforms for seamless
              transactions.
            </li>
            <li>
              Comprehensive Documentation and Support for easy setup and
              customization.
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
            The launch of the Shop-front theme has been met with positive
            feedback from users and industry experts alike. The theme&apos;s
            user-friendly design and robust features have helped numerous
            corner-shops establish a strong online presence, leading to
            increased customer engagement and sales. The project has not only
            enhanced the digital footprint of small businesses but also set a
            new standard for affordable, high-quality web themes in the market.
          </p>
          <div className="mt-8">
            <Image
              src="/images/projects/shopfront/cover.png"
              alt="Project Results"
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
            Ready to enhance your beauty business?
          </h2>
          <Link
            href={`/free-consultation`}
            className="inline-block bg-gray-800 text-white py-3 px-8 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out text-lg font-semibold shadow-lg"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Project8Page;
