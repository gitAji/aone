"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";

const Project5Page = () => {
  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection title="Complete digital solutions for QFS Accountants " />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Project Overview
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            This project involved designing and developing a professional
            website for QFS Accountants, a reputable accounting firm. The
            objective was to create a modern, user-friendly online platform that
            effectively showcases their services, expertise, and client
            testimonials, while also providing easy access to contact
            information and resources for potential clients.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Key features of the website include a clean and intuitive design
            that reflects the professionalism of QFS Accountants, a detailed
            service section outlining their offerings, a blog for sharing
            industry insights and updates, and a contact form for inquiries. The
            website was built using Next.js to ensure fast performance and
            responsiveness across all devices. Additionally, SEO best practices
            were implemented to enhance the             firm&apos;s online visibility and attract
            more potential clients.
          </p>
          <div className="mt-8">
            <Image
              src="/images/projects/QFS/cover.png"
              alt="QFS Accountants Website Cover"
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
                1. Requirements & Compliance Analysis
              </h3>
              <p className="text-gray-700 mb-4">
                We collaborated closely with QFS Accountants to gather detailed
                requirements, ensuring the app met all relevant financial
                regulations and compliance standards.we use public API to get
                latest news about accounting updates and HMRC forms to the site
                so that user can get latest updates.
              </p>
              <Image
                src="/images/projects/QFS/requirements.png"
                alt="Compliance Analysis"
                width={600}
                height={400}
                className="rounded-lg shadow-md mt-4"
              />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Secure Architecture Design
              </h3>
              <p className="text-gray-700 mb-4">
                We designed a robust architecture prioritizing data security,
                user authentication, and secure communication protocols to
                protect sensitive financial information.
              </p>
              <Image
                src="/images/projects/QFS/mood board.png"
                alt="Architecture Design"
                width={600}
                height={400}
                className="rounded-lg shadow-md mt-4"
              />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Development & Integration
              </h3>
              <p className="text-gray-700 mb-4">
                The site was developed using the latest Technologies,
                integrating secure APIs for data handling and ensuring
                compliance with industry standards.
              </p>
              <Image
                src="/images/projects/QFS/dev.png"
                alt="Development"
                width={600}
                height={400}
                className="rounded-lg shadow-md mt-4"
              />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Security Testing & Deployment
              </h3>
              <p className="text-gray-700 mb-4">
                Rigorous security testing, penetration testing, and user
                acceptance testing were conducted before a secure and compliant
                deployment to app stores.
              </p>
              <Image
                src="/images/projects/QFS/test.png"
                alt="Security Testing"
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
            Key Features & Compliance
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Comprehensive Service Catalog with clear pricing.</li>
            <li>Online Booking and Scheduling System for convenience.</li>
            <li>Photo Gallery showcasing before-and-after cleaning results.</li>
            <li>Client Testimonials and Reviews Section.</li>
            <li>Responsive Design for seamless access on any device.</li>
            <li>Integrated Contact Forms and Service Inquiry options.</li>
            <li>Technologies Used: Next.js, React, Booking API, CMS.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Results & Impact
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            The website launch resulted in a significant increase in online
            appointments and client inquiries for QFS Accountants. The
            user-friendly design and integrated booking system enhanced customer
            satisfaction, leading to positive feedback and repeat business.
            Overall, the new website played a crucial role in boosting the firm
            online presence and supporting its growth objectives.
          </p>
          <div className="mt-8">
            <Image
              src="/images/projects/QFS/cover.png"
              alt="QFS Accountants Website Cover"
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
            Ready for a spotless online presence?
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

export default Project5Page;
