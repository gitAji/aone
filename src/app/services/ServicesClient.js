'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { FaLaptopCode, FaPaintBrush, FaChartLine, FaRobot, FaCameraRetro, FaObjectGroup, FaSearch, FaSearchDollar, FaCommentDots, FaSync } from 'react-icons/fa';
import Testimonials from "@/components/Testimonials";
import { useLanguage } from "@/context/LanguageContext";

import { motion } from 'framer-motion';

const ServicesPage = () => {
  const { t } = useLanguage();
  return (
    <div className="services-page bg-slate-50 dark:bg-slate-950 min-h-screen">
      <HeroSection
        title={t('servicesPage.title')}
        subtitle={t('servicesPage.subtitle')}
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-16 text-center uppercase tracking-tighter">
            {t('servicesPage.comprehensive')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              href="/services/web-development"
              className="group block p-10 rounded-3xl transition-all duration-300 bg-white dark:bg-slate-900 hover:-translate-y-2 border border-slate-100 dark:border-slate-800 hover:border-rose-500/30 hover:shadow-2xl hover:shadow-rose-500/10"
            >
              <div className="flex justify-center mb-8">
                <FaLaptopCode className="text-6xl text-rose-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight text-center">{t('servicesPage.webDevTitle')}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-center">{t('servicesPage.webDevDesc')}</p>
            </Link>

            <Link
              href="/services/branding"
              className="group block p-10 rounded-3xl transition-all duration-300 bg-white dark:bg-slate-900 hover:-translate-y-2 border border-slate-100 dark:border-slate-800 hover:border-rose-500/30 hover:shadow-2xl hover:shadow-rose-500/10"
            >
              <div className="flex justify-center mb-8">
                <FaPaintBrush className="text-6xl text-rose-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight text-center">{t('servicesPage.brandingTitle')}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-center">{t('servicesPage.brandingDesc')}</p>
            </Link>

            <Link
              href="/services/digital-marketing"
              className="group block p-10 rounded-3xl transition-all duration-300 bg-white dark:bg-slate-900 hover:-translate-y-2 border border-slate-100 dark:border-slate-800 hover:border-rose-500/30 hover:shadow-2xl hover:shadow-rose-500/10"
            >
              <div className="flex justify-center mb-8">
                <FaChartLine className="text-6xl text-rose-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight text-center">{t('servicesPage.marketingTitle')}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-center">{t('servicesPage.marketingDesc')}</p>
            </Link>

            <Link
              href="/services/ai-chatbots"
              className="group block p-10 rounded-3xl transition-all duration-300 bg-white dark:bg-slate-900 hover:-translate-y-2 border border-slate-100 dark:border-slate-800 hover:border-rose-500/30 hover:shadow-2xl hover:shadow-rose-500/10"
            >
              <div className="flex justify-center mb-8">
                <FaRobot className="text-6xl text-rose-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight text-center">{t('servicesPage.chatbotTitle')}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-center">{t('servicesPage.chatbotDesc')}</p>
            </Link>

            <Link
              href="/services/ai-automations"
              className="group block p-10 rounded-3xl transition-all duration-300 bg-white dark:bg-slate-900 hover:-translate-y-2 border border-slate-100 dark:border-slate-800 hover:border-rose-500/30 hover:shadow-2xl hover:shadow-rose-500/10"
            >
              <div className="flex justify-center mb-8">
                <FaSync className="text-6xl text-rose-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight text-center">{t('servicesPage.aiTitle')}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-center">{t('servicesPage.aiDesc')}</p>
            </Link>

            <Link
              href="/services/geo"
              className="group block p-10 rounded-3xl transition-all duration-300 bg-white dark:bg-slate-900 hover:-translate-y-2 border border-slate-100 dark:border-slate-800 hover:border-rose-500/30 hover:shadow-2xl hover:shadow-rose-500/10"
            >
              <div className="flex justify-center mb-8">
                <FaSearchDollar className="text-6xl text-rose-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight text-center">{t('servicesPage.geoTitle')}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-center">{t('servicesPage.geoDesc')}</p>
            </Link>

            <Link
              href="/services/photography"
              className="group block p-10 rounded-3xl transition-all duration-300 bg-white dark:bg-slate-900 hover:-translate-y-2 border border-slate-100 dark:border-slate-800 hover:border-rose-500/30 hover:shadow-2xl hover:shadow-rose-500/10"
            >
              <div className="flex justify-center mb-8">
                <FaCameraRetro className="text-6xl text-rose-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight text-center">{t('servicesPage.photoTitle') || "Photography & Videography"}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-center">{t('servicesPage.photoDesc')}</p>
            </Link>



            <Link
              href="/services/ui-ux-design"
              className="group block p-10 rounded-3xl transition-all duration-300 bg-white dark:bg-slate-900 hover:-translate-y-2 border border-slate-100 dark:border-slate-800 hover:border-rose-500/30 hover:shadow-2xl hover:shadow-rose-500/10"
            >
              <div className="flex justify-center mb-8">
                <FaObjectGroup className="text-6xl text-rose-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight text-center">{t('servicesPage.uiuxTitle')}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-center">{t('servicesPage.uiuxDesc')}</p>
            </Link>

            <Link
              href="/services/search-engine-optimization"
              className="group block p-10 rounded-3xl transition-all duration-300 bg-white dark:bg-slate-900 hover:-translate-y-2 border border-slate-100 dark:border-slate-800 hover:border-rose-500/30 hover:shadow-2xl hover:shadow-rose-500/10 md:col-span-2 lg:col-span-1"
            >
              <div className="flex justify-center mb-8">
                <FaSearch className="text-6xl text-rose-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight text-center">{t('servicesPage.seoTitle')}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-center">{t('servicesPage.seoDesc')}</p>
            </Link>
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
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600">Scale</span>?
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 font-medium leading-relaxed">
              Join elite businesses using our comprehensive services to dominate their market.
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

export default ServicesPage;
