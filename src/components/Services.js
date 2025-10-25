import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaChartLine,
  FaRobot,
  FaCameraRetro,
  FaVideo,
  FaSearchDollar,
  FaObjectGroup,
} from "react-icons/fa";

const ServiceCard = ({ href, icon: Icon, title, description, color }) => {
  return (
    <Link
      href={href}
      className="group block p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
    >
      <Icon
        className={`text-4xl ${color} mb-3 group-hover:brightness-110 transition-colors duration-300`}
      />
      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-800 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </Link>
  );
};

const ServicesSection = ({ limit }) => {
  const services = [
    {
      href: "/services/web-development",
      icon: FaLaptopCode,
      title: "Web Development",
      description: "Crafting modern, responsive, and intuitive websites that provide seamless user experiences.",
      color: "text-blue-600",
    },
    {
      href: "/services/branding",
      icon: FaPaintBrush,
      title: "Branding",
      description: "Building strong, memorable, and impactful brand identities that resonate with your audience.",
      color: "text-green-600",
    },
    {
      href: "/services/digital-marketing",
      icon: FaChartLine,
      title: "Digital Marketing",
      description: "Executing targeted digital marketing strategies to help you reach your audience and drive growth.",
      color: "text-yellow-600",
    },
    {
      href: "/services/ai-automations",
      icon: FaRobot,
      title: "AI Automations",
      description: "Implementing AI-powered automations to streamline your business processes and boost efficiency.",
      color: "text-indigo-600",
    },
    {
      href: "/services/geo",
      icon: FaSearchDollar,
      title: "Generative Engine Optimization",
      description: "Optimizing your content for AI-driven search engines and conversational chatbots.",
      color: "text-cyan-600",
    },
    {
      href: "/services/ui-ux-design",
      icon: FaObjectGroup,
      title: "UI/UX Design",
      description: "Designing intuitive, user-friendly interfaces that enhance engagement and satisfaction.",
      color: "text-purple-600",
    },
    {
      href: "/services/photography",
      icon: FaCameraRetro,
      title: "Photography",
      description: "Capturing stunning, high-quality images that tell your story and showcase your brand.",
      color: "text-pink-600",
    },
    {
      href: "/services/videography",
      icon: FaVideo,
      title: "Videography",
      description: "Producing professional, engaging videos that captivate your audience and convey your message.",
      color: "text-red-600",
    },
  ];

  const servicesToDisplay = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-12 bg-gray-50" aria-labelledby="our-work">
      <header className="text-center mb-10">
        <h2
          id="our-work"
          className="text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-indigo-600"
        >
          What We Do
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore our comprehensive suite of services designed to elevate your business in the digital landscape.
        </p>
      </header>
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesToDisplay.map((service) => (
          <ServiceCard key={service.href} {...service} />
        ))}
      </div>
      {limit && (
        <div className="text-center mt-12">
          <Link href="/services" passHref>
            <Button size="lg">View All Services</Button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
