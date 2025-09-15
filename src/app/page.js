"use client";

import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Link from "next/link";
import Image from "next/image";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaChartLine,
  FaRobot,
  FaCameraRetro,
  FaVideo,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";

// ✅ Reusable Service Card Component
const ServiceCard = ({ href, icon: Icon, title, description, color }) => (
  <Link
    href={href}
    className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
  >
    <Icon
      className={`text-5xl ${color} mb-4 group-hover:brightness-110 transition-colors duration-300`}
    />
    <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors duration-300">
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
      <Services />

      {/* Projects */}
      <Projects />
      {/* Testimonials */}
      <Testimonials />
      {/* Call to Action */}
      <CTA />
    </div>
  );
};

export default HomePage;
