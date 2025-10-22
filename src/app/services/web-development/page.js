"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import { FaLaptopCode, FaShoppingCart, FaWordpress, FaMobileAlt, FaCloud, FaCode, FaChartLine, FaStar, FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion"; // Added for subtle animations
import Testimonials from "@/components/Testimonials";

const WebDevelopmentPage = () => {
  return (
    <div className="service-detail-page bg-gray-50 min-h-screen">
      {/* Compact Hero Section */}
      <HeroSection
        title="Web Development Solutions"
        description="Crafting responsive, high-performance websites and web applications tailored to your business needs."
      />
      

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-800 mb-8"
        >
          Why Your Website Matters
        </motion.h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-10 max-w-2xl mx-auto">
          Your website is the cornerstone of your digital presence. We create
          solutions that combine stunning design, seamless functionality, and
          performance to drive growth and engagement.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <FaMobileAlt className="text-4xl text-blue-600 mb-4" />,
              title: "Responsive Design",
              description:
                "Flawless performance across all devices, from phones to desktops.",
            },
            {
              icon: <FaCloud className="text-4xl text-green-600 mb-4" />,
              title: "Scalability & Speed",
              description:
                "Optimized websites built to handle growth and high traffic.",
            },
            {
              icon: <FaCode className="text-4xl text-purple-600 mb-4" />,
              title: "Custom Development",
              description:
                "Tailored solutions to meet your unique business needs.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {item.icon}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-12 bg-gray-100">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-800 mb-8 text-center"
        >
          Our Web Development Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <FaLaptopCode className="text-4xl text-blue-600 mb-4" />,
              title: "Custom Website Development",
              description:
                "Unique websites designed to reflect your brand and engage users.",
            },
            {
              icon: <FaShoppingCart className="text-4xl text-green-600 mb-4" />,
              title: "E-commerce Solutions",
              description:
                "Secure, user-friendly online stores to boost sales.",
            },
            {
              icon: <FaWordpress className="text-4xl text-red-600 mb-4" />,
              title: "CMS Development",
              description:
                "Easy-to-manage content systems like WordPress for flexibility.",
            },
            {
              icon: <FaCode className="text-4xl text-purple-600 mb-4" />,
              title: "Web Applications",
              description:
                "Custom apps to streamline processes and enhance interactivity.",
            },
            {
              icon: <FaMobileAlt className="text-4xl text-orange-600 mb-4" />,
              title: "Maintenance & Support",
              description:
                "Ongoing support to keep your site secure and up-to-date.",
            },
            {
              icon: <FaChartLine className="text-4xl text-teal-600 mb-4" />,
              title: "Performance Optimization",
              description:
                "Boost speed, SEO, and user experience with expert optimization.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {service.icon}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="cta py-16 bg-gray-200 text-gray-800 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Transform Your Online Presence?
          </h2>
          <Link
            href="/free-consultation"
            className="inline-block bg-gray-800 text-white py-3 px-8 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out text-lg font-semibold shadow-lg"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;
