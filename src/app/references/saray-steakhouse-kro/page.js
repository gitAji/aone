"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";

const Project2Page = () => {
  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection title="Saray SteakHouse Reasturant Website" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Project Overview
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            This project involved desiging and developing a modern website for
            resturant in Oslo Norway. The goal was to create an engaging
            platform that showcases the restaurant&apos;s menu, ambiance, and
            unique dining experience to attract both locals and tourists. We
            started off with a logo design and branding to reflect the
            restaurant &apos;s uniques identity. The website features a sleek
            and intuitive design, making it easy for users to navigate and find
            information. Key functionalities included an online reservation
            system, menu display with high-quality images, location map, and
            customer reviews. The project was built using Next.js for a fast and
            responsive user experience, along with a headless CMS to allow easy
            content management for the restaurant staff. we also managed the
            website&apos;s SEO to improve its visibility on search engines,
            helping to attract more visitors and potential customers.we also
            integrated social media links to enhance engagement and promote
            special offers and events.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Key functionalities included an interactive menu display, an
            intuitive table booking system, and a gallery to highlight the
            restaurant&apos;s ambiance. We aimed to create a digital platform
            that truly reflects the quality and elegance of Saray Steakhouse.
          </p>
          <div className="mt-8">
            <Image
              src="/images/projects/saray/project2.png"
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
                1. Discovery & Strategy
              </h3>
              <p className="text-gray-700 mb-4">
                We started by understanding the fintech landscape, target users,
                and regulatory requirements. This involved detailed strategy
                sessions and defining the app&apos;s core functionalities.
              </p>
              <Image
                src="/images/projects/saray/dev.png"
                alt="Strategy"
                width={600}
                height={400}
                className="rounded-lg shadow-md mt-4"
              />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                2. UI/UX Design & Prototyping
              </h3>
              <p className="text-gray-700 mb-4">
                Our design team crafted a sleek, intuitive, and secure user
                interface, focusing on ease of use for complex financial
                operations. Interactive prototypes were developed for user
                testing.
              </p>
              <Image
                src="/images/projects/saray/ui.png"
                alt="UI/UX Design"
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
                src="/images/projects/saray/plan.png"
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
                Extensive security audits and compliance testing (e.g., PCI DSS)
                were performed. Rigorous functional and performance testing
                ensured a bug-free and high-performing application.
              </p>
              <Image
                src="/images/projects/saray/test.png"
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
            Key Features & Technologies
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>
              Age-Appropriate Educational Content across various subjects.
            </li>
            <li>Interactive Games and Quizzes for engaging learning.</li>
            <li>
              Parental Dashboard for progress monitoring and content control.
            </li>
            <li>Reward System and Gamification to motivate learners.</li>
            <li>Safe and Secure Environment with content filtering.</li>
            <li>Cross-Platform Accessibility (Web, Tablet, Mobile).</li>
            <li>
              Technologies Used: React, Next.js, Firebase, Educational APIs.
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
            The Kids Learning Portal received enthusiastic feedback from both
            children and parents, praising its engaging content and
            user-friendly design. It led to a **30% increase in daily active
            users** and a **25% improvement in learning engagement** among
            children. The platform successfully created a fun and effective
            learning environment.
          </p>
          <div className="mt-8">
            <Image
              src="/images/projects/saray/result.png"
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

export default Project2Page;
