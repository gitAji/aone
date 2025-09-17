"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";

const Project3Page = () => {
  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection title="Clean masters Renhold Website" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Project Overview
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            This project is involves in creating a modern, user-friendly website
            for cleaning company who offers a range of cleaning services for
            residential and commercial clients. The goal was to design an
            engaging platform that effectively showcases the company&apos;s
            services, highlights customer testimonials, and provides an easy way
            for potential clients to request quotes or book services online.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Key features included a contact form for service inquiries, a
            detailed service menu, customer testimonials section, and a blog for
            cleaning tips and industry news. The website was built using
            Html,CSS and Javascript to ensure fast load times and a responsive
            design that works seamlessly across all devices. We also integrated
            SEO best practices to improve the site&apos;s visibility on search
            engines, helping to attract more visitors and potential clients.
            Overall, the project aimed to create a professional online presence
            that reflects the quality and reliability of Clean Masters
            Renhold&apos;s services.
          </p>
          <div className="mt-8">
            <Image
              src="/images/projects/cleanmasters/project3.png"
              alt="Clean Masters Renhold Website Wireframe"
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
          <div className="mt-8">
            <Image
              src="/images/projects/cleanmasters/result.png"
              alt="Clean Masters Renhold Website Wireframe"
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
            Ready to enhance your beauty business?
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

export default Project3Page;
