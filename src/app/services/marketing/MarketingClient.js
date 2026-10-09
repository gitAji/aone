'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { FaUsers, FaChartLine, FaBullhorn, FaShareAlt, FaEnvelopeOpenText, FaSearch, FaCogs, FaMapMarkerAlt, FaFileAlt, FaQuestionCircle, FaRobot } from 'react-icons/fa';
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Testimonials from "@/components/Testimonials";

const PillarGroup = ({ title, items }) => (
  <div>
    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-rose-500 mb-6 text-center">{title}</h3>
    <div className="grid grid-cols-1 gap-4">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="flex items-start gap-4 p-6 bg-slate-800/20 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-rose-500/50 transition-all duration-300"
        >
          <div className="text-2xl text-rose-500 mt-1">{item.icon}</div>
          <div>
            <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
            <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const MarketingClient = () => {
  const { t } = useLanguage();

  return (
    <div className="service-detail-page bg-slate-50 dark:bg-slate-950 min-h-screen">
      <HeroSection
        title={t('services.marketing.title')}
        subtitle={t('services.marketing.description')}
      />

      {/* Why Section */}
      <section className="container mx-auto px-6 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-tighter"
        >
          Why Marketing is Essential
        </motion.h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-16 max-w-3xl mx-auto font-medium">
          Reaching the right people means showing up everywhere they look -- Google search, social feeds, and now AI assistants. We cover all three under one strategy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaUsers className="text-5xl text-rose-500 mb-6" />,
              title: "Targeted Reach",
              description: "Connect with your ideal customers based on demographics, interests, and real-time behavior.",
            },
            {
              icon: <FaChartLine className="text-5xl text-rose-500 mb-6" />,
              title: "Measurable ROI",
              description: "Track every campaign, analyze performance, and optimize for maximum return on investment.",
            },
            {
              icon: <FaBullhorn className="text-5xl text-rose-500 mb-6" />,
              title: "Market Authority",
              description: "Expand your brand's visibility and establish yourself as an industry leader.",
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

      {/* What We Offer -- grouped by pillar: Marketing / SEO / GEO */}
      <section className="py-24 bg-slate-900 dark:bg-black text-white border-y border-slate-800">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-tighter"
          >
            Three Pillars, One Strategy
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <PillarGroup
              title="Digital Marketing"
              items={[
                { icon: <FaShareAlt />, title: "Social Marketing", desc: "Build a strong social presence and generate qualified leads." },
                { icon: <FaEnvelopeOpenText />, title: "Email Automation", desc: "Nurture leads and drive conversions with automated campaigns." },
                { icon: <FaBullhorn />, title: "Paid Performance", desc: "Maximize performance with precisely targeted pay-per-click campaigns." },
              ]}
            />
            <PillarGroup
              title="SEO"
              items={[
                { icon: <FaSearch />, title: "Keyword & On-Page Strategy", desc: "High-impact keyword research and on-page optimization for crawlability." },
                { icon: <FaCogs />, title: "Technical & Local SEO", desc: "A flawless technical foundation plus hyper-targeted local SEO." },
                { icon: <FaMapMarkerAlt />, title: "Authority Building", desc: "Premium backlinks that build your domain's reputation." },
              ]}
            />
            <PillarGroup
              title="GEO (AI Search)"
              items={[
                { icon: <FaFileAlt />, title: "AI-Readable Content", desc: "Structure pages so AI engines can parse, quote, and cite them accurately." },
                { icon: <FaQuestionCircle />, title: "Answer-Engine Optimization", desc: "Format content to directly answer what people ask AI assistants." },
                { icon: <FaRobot />, title: "AI Visibility Tracking", desc: "Monitor how often and how accurately AI engines mention your brand." },
              ]}
            />
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Final CTA Section */}
      <section className="py-24 bg-white dark:bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter uppercase">
              Accelerate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">Growth</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 font-medium leading-relaxed">
              Join businesses using marketing, SEO, and GEO together to dominate their market.
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

export default MarketingClient;
