"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaWordpress,
  FaMobileAlt,
  FaCloud,
  FaCode,
  FaChartLine,
  FaStar,
} from "react-icons/fa";
import { motion } from "framer-motion"; // Added for subtle animations
import Testimonials from "@/components/Testimonials";
import { useLanguage } from "@/context/LanguageContext";

const WebDevelopmentPage = () => {
  const { t } = useLanguage();
  return (
    <div className="service-detail-page bg-slate-50 dark:bg-slate-950 min-h-screen">
      <HeroSection
        title={t('services.webDev.title')}
        subtitle={t('services.webDev.description')}
      />

      {/* Why Section */}
      <section className="container mx-auto px-6 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tighter"
        >
          {t('services.webDev.whyTitle') || "Why Your Digital Core Matters"}
        </motion.h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-16 max-w-3xl mx-auto font-medium">
          {t('services.webDev.whyDesc') || "Your website is the cornerstone of your digital presence. We create solutions that combine stunning design, seamless functionality, and elite performance to drive growth."}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaMobileAlt className="text-5xl text-rose-500 mb-6" />,
              title: "Responsive Mastery",
              description: "Flawless performance across all devices, from phones to 8K displays.",
            },
            {
              icon: <FaCloud className="text-5xl text-rose-500 mb-6" />,
              title: "Cloud Performance",
              description: "Optimized, serverless architectures built to handle unlimited growth instantly.",
            },
            {
              icon: <FaCode className="text-5xl text-rose-500 mb-6" />,
              title: "Native Solutions",
              description: "Tailored codebases using Next.js and the most advanced frameworks available.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-10 bg-white dark:bg-slate-900 rounded-3xl shadow-xl hover:shadow-rose-500/5 border border-slate-100 dark:border-slate-800 transition-all duration-300"
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-slate-100 dark:bg-slate-900/50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-16 text-center uppercase tracking-tighter"
          >
            Capabilities
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaLaptopCode />,
                title: "Custom Web Applications",
                description: "Deeply custom software built for your specific business logic and workflows.",
              },
              {
                icon: <FaShoppingCart />,
                title: "High-Performance E-commerce",
                description: "Fast, secure online stores optimized for conversion and massive scale.",
              },
              {
                icon: <FaWordpress />,
                title: "Headless CMS Solutions",
                description: "Managing content with ease using modern headless providers like Sanity or Strapi.",
              },
              {
                icon: <FaCode />,
                title: "API & System Integration",
                description: "Connecting your digital core to the tools you already use every day.",
              },
              {
                icon: <FaMobileAlt />,
                title: "Progressive Web Apps",
                description: "Web experiences that feel and perform like native mobile applications.",
              },
              {
                icon: <FaChartLine />,
                title: "Performance Audits",
                description: "Tuning existing sites for Core Web Vitals and top-tier SEO performance.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex flex-col p-8 bg-white dark:bg-slate-950 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-rose-500/30 transition-all duration-300"
              >
                <div className="text-3xl text-rose-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA Section */}
      <section className="py-24 bg-white dark:bg-slate-950 text-center relative overflow-hidden">
        {/* Subtle decorative elements for a 'human' touch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter uppercase">
              Ready to build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600">extraordinary?</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 font-medium leading-relaxed">
              We combine human creativity with elite technology to deliver digital experiences that matter.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/pricing"
                className="w-full sm:w-auto bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-600 text-white py-5 px-12 rounded-full hover:scale-105 transition-all duration-300 text-xl font-black shadow-xl uppercase tracking-tighter"
              >
                Get Started
              </Link>
              <Link
                href="/free-consultation"
                className="w-full sm:w-auto py-5 px-12 rounded-full border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300 text-xl font-black uppercase tracking-tighter"
              >
                Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;
