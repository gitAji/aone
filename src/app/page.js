"use client";

import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const DynamicServices = dynamic(() => import("@/components/Services"));
const DynamicProjects = dynamic(() => import("@/components/Projects"));
const DynamicTestimonials = dynamic(() => import("@/components/Testimonials"));
const DynamicCTA = dynamic(() => import("@/components/CTA"));

// ✅ Reusable Service Card Component
const ServiceCard = ({ href, icon: Icon, title, description, color }) => (
  <Link
    href={href}
    className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
  >
    <Icon
      className={`text-5xl ${color} mb-4 group-hover:brightness-110 transition-colors duration-300`}
    />
    <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-purple-800 transition-colors duration-300">
      {title}
    </h3>
    <p className="text-gray-700 text-base leading-relaxed">{description}</p>
  </Link>
);

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div id="hero-section">
        <HeroSection isHomePage={true} />
      </div>
      {/* Services */}
      <div id="services-section">
        <DynamicServices limit={6} />
      </div>
      {/* Projects */}
      <div id="projects-section">
        <DynamicProjects />
      </div>
      {/* Testimonials */}
      <div id="testimonials-section">
        <DynamicTestimonials />
      </div>
      {/* Call to Action */}
      <div id="cta-section">
        <DynamicCTA />
      </div>

      <Link href="/ai-chat">
        <button
          className="fixed right-8 top-1/2 transform -translate-y-1/2 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 z-50"
          aria-label="AI Assistant"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default HomePage;