'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { FaMobileAlt, FaCloud, FaCode, FaLaptopCode, FaShoppingCart, FaObjectGroup, FaPaintBrush, FaBook, FaBullhorn } from 'react-icons/fa';
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Testimonials from "@/components/Testimonials";

const WebSolutionClient = () => {
  const { t } = useLanguage();

  return (
    <div className="service-detail-page bg-slate-50 dark:bg-slate-950 min-h-screen">
      <HeroSection
        title={t('services.webSolution.title')}
        subtitle={t('services.webSolution.description')}
      />

      {/* Why Section */}
      <section className="container mx-auto px-6 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tighter"
        >
          Why One Team, One Package
        </motion.h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-16 max-w-3xl mx-auto font-medium">
          Your website, your identity, and your interface are one experience to a visitor -- not three separate vendors. We design and build them together, so nothing is left mismatched or out of sync.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaMobileAlt className="text-5xl text-rose-500 mb-6" />,
              title: "Responsive Mastery",
              description: "Flawless performance across every device, from phones to 8K displays.",
            },
            {
              icon: <FaObjectGroup className="text-5xl text-rose-500 mb-6" />,
              title: "Cohesive Identity",
              description: "Logo, brand system, and interface designed as one visual language, not patched together after the fact.",
            },
            {
              icon: <FaCloud className="text-5xl text-rose-500 mb-6" />,
              title: "Built to Scale",
              description: "Modern, serverless architecture that grows with your business instead of needing a rebuild.",
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
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-slate-900 dark:bg-black text-white border-y border-slate-800">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-tighter"
          >
            Everything in the Web Solution
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <FaLaptopCode className="text-4xl text-rose-500 mb-4" />, title: "Custom Web Development", desc: "Deeply custom websites and web apps built for your specific business logic and workflows." },
              { icon: <FaShoppingCart className="text-4xl text-rose-500 mb-4" />, title: "Custom E-Commerce", desc: "Fully bespoke online stores built from scratch when Shopify or WooCommerce can't do what you need." },
              { icon: <FaObjectGroup className="text-4xl text-rose-500 mb-4" />, title: "UI/UX Design", desc: "User-centric interfaces built through research, wireframing, and prototyping before a line of code is written." },
              { icon: <FaPaintBrush className="text-4xl text-rose-500 mb-4" />, title: "Logo & Visual Identity", desc: "A distinctive logo, color palette, and typography system designed to be instantly recognizable." },
              { icon: <FaBook className="text-4xl text-rose-500 mb-4" />, title: "Brand Guidelines", desc: "A complete style guide so your brand stays consistent everywhere it appears." },
              { icon: <FaBullhorn className="text-4xl text-rose-500 mb-4" />, title: "Marketing Collateral", desc: "Business cards, social templates, and presentation decks designed to match your identity." },
              { icon: <FaCode className="text-4xl text-rose-500 mb-4" />, title: "API & System Integration", desc: "Connecting your site to the tools you already use every day." },
              { icon: <FaMobileAlt className="text-4xl text-rose-500 mb-4" />, title: "Progressive Web Apps", desc: "Web experiences that feel and perform like native mobile apps." },
              { icon: <FaCloud className="text-4xl text-rose-500 mb-4" />, title: "Performance Audits", desc: "Tuning existing sites for Core Web Vitals and top-tier SEO performance." },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center p-10 bg-slate-800/20 backdrop-blur-sm rounded-3xl border border-slate-800 hover:border-rose-500/50 transition-all duration-300 text-center"
              >
                {service.icon}
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Final CTA Section */}
      <section className="py-24 bg-white dark:bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter uppercase">
              Ready to build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">extraordinary?</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 font-medium leading-relaxed">
              One team designing your site, your interface, and your brand together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/pricing"
                className="w-full sm:w-auto bg-gradient-to-r from-rose-500 to-amber-500 text-white py-5 px-12 rounded-full hover:scale-105 transition-all duration-300 text-xl font-black shadow-xl uppercase tracking-tighter"
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

export default WebSolutionClient;
