"use client";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/app/data/projects.js";
import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";
import {
  FaServer,
  FaLightbulb,
  FaSearch,
  FaCogs,
  FaImage,
  FaVideo,
} from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection
        title="Creating digital experiences that inspire."
        isHomePage={true}
      />

      <section className="services-overview py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Our Comprehensive Digital Services
        </h2>
        <div className="services-content-container container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link
              href={`/services/web-development`}
              className="group w-full md:w-1/2 lg:col-span-1 p-8 transition-all duration-300 flex flex-col items-center text-center hover:bg-gray-200"
            >
              <FaServer className="text-5xl text-black mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Web Development
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                We build modern, responsive, and user-friendly websites.
              </p>
            </Link>
            <Link
              href={`/services/branding`}
              className="group w-full md:w-1/2 lg:col-span-1 p-8 transition-all duration-300 flex flex-col items-center text-center hover:bg-gray-200"
            >
              <FaLightbulb className="text-5xl text-black mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Branding
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                We create strong, memorable, and impactful brands.
              </p>
            </Link>
            <Link
              href={`/services/digital-marketing`}
              className="group w-full md:w-1/2 lg:col-span-1 p-8 transition-all duration-300 flex flex-col items-center text-center hover:bg-gray-200"
            >
              <FaSearch className="text-5xl text-black mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Digital Marketing
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                We help you reach your target audience and grow your business.
              </p>
            </Link>
            <Link
              href={`/services/ai-automations`}
              className="group w-full md:w-1/2 lg:col-span-1 p-8 transition-all duration-300 flex flex-col items-center text-center hover:bg-gray-200"
            >
              <FaCogs className="text-5xl text-black mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                AI Automations
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                We build AI-powered automations to streamline your business
                processes.
              </p>
            </Link>
            <Link
              href={`/services/photography`}
              className="group w-full md:w-1/2 lg:col-span-1 p-8 transition-all duration-300 flex flex-col items-center text-center hover:bg-gray-200"
            >
              <FaImage className="text-5xl text-black mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Photography
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                We capture stunning images that tell your story.
              </p>
            </Link>
            <Link
              href={`/services/videography`}
              className="group w-full md:w-1/2 lg:col-span-1 p-8 transition-all duration-300 flex flex-col items-center text-center hover:bg-gray-200"
            >
              <FaVideo className="text-5xl text-black mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Videography
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                We create compelling videos that engage your audience.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="featured-projects py-16 bg-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Work
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            A Glimpse into Our Proudest Moments
          </p>
        </div>
        <div className="scrolling-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                subtitle={project.subtitle}
                imageUrl={project.imageUrl}
                projectLink={project.projectLink}
              />
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <Link
            href={`/references`}
            className="inline-block bg-gray-800 text-white py-3 px-8 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out text-lg font-semibold shadow-lg"
          >
            View All Projects
          </Link>
        </div>
      </section>

      <section className="testimonials-section py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          What Our Clients Say
        </h2>
        <div className="testimonials-grid container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="testimonial-item bg-gray-100 p-8 rounded-lg shadow-md flex flex-col justify-between">
            <p className="review-text text-lg italic text-gray-800 mb-6">
              &quot;Excellent designs that made our website look more
              professional. All the gaps were filled with highest prerequisites.
              100% endorsed and a good choice for restaurant businesses.&quot;
            </p>
            <p className="client-name text-right font-semibold text-gray-900 flex items-center justify-end">
              <Image
                src="/images/clients/clean.png"
                alt="Clean Masters Renhold Logo"
                width={50}
                height={40}
                className="h-12 w-12 mr-2 grayscale-logo"
              />
              Clean Masters Renhold
            </p>
          </div>
          <div className="testimonial-item bg-gray-100 p-8 rounded-lg shadow-md flex flex-col justify-between">
            <p className="review-text text-lg italic text-gray-800 mb-6">
              &quot;Saray Steakhouse, and arguably one of the best places for
              grabbing the all-in-one bundle for web solutions. Unquestionably a
              5 stars digital firm with huge potential.&quot;
            </p>
            <p className="client-name text-right font-semibold text-gray-900 flex items-center justify-end">
              <Image
                src="/images/clients/saraysange.png"
                alt="Saray Steakhouse Logo"
                width={50}
                height={40}
                className="h-12 w-12 mr-2 grayscale-logo"
              />
              Saray Steakhouse
            </p>
          </div>
          <div className="testimonial-item bg-gray-100 p-8 rounded-lg shadow-md flex flex-col justify-between">
            <p className="review-text text-lg italic text-gray-800 mb-6">
              &quot;A website that is visually appealing, easy to use, and
              provides a good user experience can help to increase customer
              engagement and drive conversions.&quot;
            </p>
            <p className="client-name text-right font-semibold text-gray-900 flex items-center justify-end">
              <Image
                src="/images/clients/shop-front.png"
                alt="Go Local Logo"
                width={50}
                height={40}
                className="h-12 w-12 mr-2 grayscale-logo"
              />
              Go Local
            </p>
          </div>
        </div>
      </section>

      <section className="cta py-16 bg-gray-200 text-gray-800 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">
            Ready to start your next project?
          </h2>
          <Link
            href={`/contact`}
            className="inline-block bg-gray-800 text-white py-3 px-8 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out text-lg font-semibold shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
