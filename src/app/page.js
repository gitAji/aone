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
      <HeroSection isHomePage={true} />
      {/* Services */}
      <DynamicServices />

      {/* Projects */}
      <DynamicProjects />
      {/* Testimonials */}
      <DynamicTestimonials />
      {/* Call to Action */}
      <DynamicCTA />
    </div>
  );
};

export default HomePage;