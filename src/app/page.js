"use client";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Projects from "@/components/Projects";

import projects from "@/app/data/projects.js";
import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaChartLine,
  FaRobot,
  FaCameraRetro,
  FaVideo,
} from "react-icons/fa";



import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection
        title="Creating digital experiences that inspire."
        isHomePage={true}
      />

      <section className="services-overview py-16 bg-gray-100">
        <div className="text-center">
          <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Work
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            A Glimpse into Our Proudest Moments
          </p>
        </div>
        </div>
        <div className="services-content-container container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              href={`/services/web-development`}
              className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <FaLaptopCode className="text-5xl text-blue-600 mb-4 group-hover:text-blue-700 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors duration-300">
                Web Development
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                We build modern, responsive, and user-friendly websites.
              </p>
            </Link>
            <Link
              href={`/services/branding`}
              className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <FaPaintBrush className="text-5xl text-green-600 mb-4 group-hover:text-green-700 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-green-800 transition-colors duration-300">
                Branding
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                We create strong, memorable, and impactful brands.
              </p>
            </Link>
            <Link
              href={`/services/digital-marketing`}
              className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <FaChartLine className="text-5xl text-yellow-600 mb-4 group-hover:text-yellow-700 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-yellow-800 transition-colors duration-300">
                Digital Marketing
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                We help you reach your target audience and grow your business.
              </p>
            </Link>
            <Link
              href={`/services/ai-automations`}
              className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <FaRobot className="text-5xl text-indigo-600 mb-4 group-hover:text-indigo-700 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-800 transition-colors duration-300">
                AI Automations
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                We build AI-powered automations to streamline your business
                processes.
              </p>
            </Link>
            <Link
              href={`/services/photography`}
              className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <FaCameraRetro className="text-5xl text-pink-600 mb-4 group-hover:text-pink-700 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-pink-800 transition-colors duration-300">
                Photography
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                We capture stunning images that tell your story.
              </p>
            </Link>
            <Link
              href={`/services/videography`}
              className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <FaVideo className="text-5xl text-teal-600 mb-4 group-hover:text-teal-700 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-teal-800 transition-colors duration-300">
                Videography
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                We create compelling videos that engage your audience.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Projects />

      

      <section className="testimonials-section py-16 bg-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            what our customers say
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            A Glimpse into Our Proudest Moments
          </p>
        </div>
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
          <Button asChild>
            <Link href={`/contact`}>Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
