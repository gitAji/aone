"use client";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import CountUp from "react-countup";
import { FaLaptopCode, FaPaintBrush, FaChartLine, FaRobot, FaCameraRetro, FaVideo } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection
        title="Creating digital experiences that inspire."
        isHomePage={true}
      />

      <section className="services-overview py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Comprehensive Digital Services</h2>
        <div className="services-content-container container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              href={`/services/web-development`}
              className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <FaLaptopCode className="text-5xl text-blue-600 mb-4 group-hover:text-blue-700 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors duration-300">Web Development</h3>
              <p className="text-gray-700 text-base leading-relaxed">We build modern, responsive, and user-friendly websites.</p>
            </Link>
            <Link
              href={`/services/branding`}
              className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <FaPaintBrush className="text-5xl text-green-600 mb-4 group-hover:text-green-700 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-green-800 transition-colors duration-300">Branding</h3>
              <p className="text-gray-700 text-base leading-relaxed">We create strong, memorable, and impactful brands.</p>
            </Link>
            <Link
              href={`/services/digital-marketing`}
              className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <FaChartLine className="text-5xl text-yellow-600 mb-4 group-hover:text-yellow-700 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-yellow-800 transition-colors duration-300">Digital Marketing</h3>
              <p className="text-gray-700 text-base leading-relaxed">We help you reach your target audience and grow your business.</p>
            </Link>
            <Link
              href={`/services/ai-automations`}
              className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <FaRobot className="text-5xl text-indigo-600 mb-4 group-hover:text-indigo-700 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-800 transition-colors duration-300">AI Automations</h3>
              <p className="text-gray-700 text-base leading-relaxed">We build AI-powered automations to streamline your business processes.</p>
            </Link>
            <Link
              href={`/services/photography`}
              className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <FaCameraRetro className="text-5xl text-pink-600 mb-4 group-hover:text-pink-700 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-pink-800 transition-colors duration-300">Photography</h3>
              <p className="text-gray-700 text-base leading-relaxed">We capture stunning images that tell your story.</p>
            </Link>
            <Link
              href={`/services/videography`}
              className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <FaVideo className="text-5xl text-teal-600 mb-4 group-hover:text-teal-700 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-teal-800 transition-colors duration-300">Videography</h3>
              <p className="text-gray-700 text-base leading-relaxed">We create compelling videos that engage your audience.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="featured-projects py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Featured Projects</h2>
        <div className="project-gallery flex overflow-x-hidden whitespace-nowrap animate-scroll">
          <ProjectCard
            title="E-commerce Platform Redesign"
            imageUrl="/images/projects/project1.jpeg"
            projectLink={`/references/project-1`}
          />
          <ProjectCard
            title="Mobile App Development for a FinTech Startup"
            imageUrl="/images/projects/project2.jpeg"
            projectLink={`/references/project-2`}
          />
          <ProjectCard
            title="Brand Identity and Website Launch for a Creative Agency"
            imageUrl="/images/projects/project3.jpeg"
            projectLink={`/references/project-3`}
          />
          <ProjectCard
            title="SaaS Platform UI/UX Overhaul"
            imageUrl="/images/projects/project4.jpeg"
            projectLink={`/references/project-1`}
          />
          <ProjectCard
            title="Healthcare App Development for a Telemedicine Provider"
            imageUrl="/images/projects/project5.jpeg"
            projectLink={`/references/project-2`}
          />
          <ProjectCard
            title="Educational Portal Redesign for a University"
            imageUrl="/images/projects/project1.jpeg"
            projectLink={`/references/project-3`}
          />
          {/* Duplicated cards for continuous loop */}
          <ProjectCard
            title="E-commerce Platform Redesign"
            imageUrl="/images/projects/project2.jpeg"
            projectLink={`/references/project-1`}
          />
          <ProjectCard
            title="Mobile App Development for a FinTech Startup"
            imageUrl="/images/projects/project3.jpeg"
            projectLink={`/references/project-2`}
          />
          <ProjectCard
            title="Brand Identity and Website Launch for a Creative Agency"
            imageUrl="/images/projects/project4.jpeg"
            projectLink={`/references/project-3`}
          />
          <ProjectCard
            title="SaaS Platform UI/UX Overhaul"
            imageUrl="/images/projects/project5.jpeg"
            projectLink={`/references/project-1`}
          />
          <ProjectCard
            title="Healthcare App Development for a Telemedicine Provider"
            imageUrl="/images/projects/project1.jpeg"
            projectLink={`/references/project-2`}
          />
          <ProjectCard
            title="Educational Portal Redesign for a University"
            imageUrl="/images/projects/project2.jpeg"
            projectLink={`/references/project-3`}
          />
        </div>
      </section>

      <section className="testimonials-section py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">What Our Clients Say</h2>
        <div className="testimonials-grid container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="testimonial-item bg-gray-50 p-8 rounded-lg shadow-md flex flex-col justify-between">
            <p className="review-text text-lg italic text-gray-700 mb-6">
              "The team at AOne is simply the best. They are professional, knowledgeable, and dedicated to helping their clients succeed."
            </p>
            <p className="client-name text-right font-semibold text-gray-900">
              - John Doe, CEO of Acme Inc.
            </p>
          </div>
          <div className="testimonial-item bg-gray-50 p-8 rounded-lg shadow-md flex flex-col justify-between">
            <p className="review-text text-lg italic text-gray-700 mb-6">
              "I have been working with AOne for over a year now, and I am consistently impressed with their level of service and expertise."
            </p>
            <p className="client-name text-right font-semibold text-gray-900">
              - Jane Smith, Marketing Manager at XYZ Corp.
            </p>
          </div>
          <div className="testimonial-item bg-gray-50 p-8 rounded-lg shadow-md flex flex-col justify-between">
            <p className="review-text text-lg italic text-gray-700 mb-6">
              "AOne has been instrumental in helping us achieve our marketing goals. We are very happy with the results."
            </p>
            <p className="client-name text-right font-semibold text-gray-900">
              - Peter Jones, CEO of 123 LLC
            </p>
          </div>
        </div>
      </section>

      <section className="cta py-16 bg-blue-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Ready to start your next project?</h2>
          <Link href={`/contact`} className="inline-block bg-white text-blue-700 py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 ease-in-out text-lg font-semibold shadow-lg">
              Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
