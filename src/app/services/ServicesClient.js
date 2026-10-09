'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { FaLaptopCode, FaChartLine, FaRobot, FaCameraRetro, FaVideo, FaShoppingBag } from 'react-icons/fa';
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
          {/* flex-wrap + per-card width (not a 3-col grid) so 5 cards center
              as 3-then-2 instead of leaving an empty slot in the last row. */}
          <div className="flex flex-wrap justify-center gap-8">
            <Link
              href="/services/web-solution"
              className="group block p-10 rounded-3xl transition-all duration-300 bg-white dark:bg-slate-900 hover:-translate-y-2 border border-slate-100 dark:border-slate-800 hover:border-rose-500/30 hover:shadow-2xl hover:shadow-rose-500/10 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.3334rem)]"
            >
              <div className="flex justify-center mb-8">
                <FaLaptopCode className="text-6xl text-rose-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight text-center">{t('services.webSolution.title')}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-center">{t('services.webSolution.description')}</p>
            </Link>

            <Link
              href="/services/ai-solution"
              className="group block p-10 rounded-3xl transition-all duration-300 bg-white dark:bg-slate-900 hover:-translate-y-2 border border-slate-100 dark:border-slate-800 hover:border-rose-500/30 hover:shadow-2xl hover:shadow-rose-500/10 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.3334rem)]"
            >
              <div className="flex justify-center mb-8">
                <FaRobot className="text-6xl text-rose-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight text-center">{t('services.aiSolution.title')}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-center">{t('services.aiSolution.description')}</p>
            </Link>

            <Link
              href="/services/marketing"
              className="group block p-10 rounded-3xl transition-all duration-300 bg-white dark:bg-slate-900 hover:-translate-y-2 border border-slate-100 dark:border-slate-800 hover:border-rose-500/30 hover:shadow-2xl hover:shadow-rose-500/10 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.3334rem)]"
            >
              <div className="flex justify-center mb-8">
                <FaChartLine className="text-6xl text-rose-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight text-center">{t('services.marketing.title')}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-center">{t('services.marketing.description')}</p>
            </Link>

            <Link
              href="/services/online-store"
              className="group block p-10 rounded-3xl transition-all duration-300 bg-white dark:bg-slate-900 hover:-translate-y-2 border border-slate-100 dark:border-slate-800 hover:border-rose-500/30 hover:shadow-2xl hover:shadow-rose-500/10 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.3334rem)]"
            >
              <div className="flex justify-center mb-8">
                <FaShoppingBag className="text-6xl text-rose-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight text-center">{t('services.onlineStore.title')}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-center">{t('services.onlineStore.description')}</p>
            </Link>

            <Link
              href="/services/photography"
              className="group block p-10 rounded-3xl transition-all duration-300 bg-white dark:bg-slate-900 hover:-translate-y-2 border border-slate-100 dark:border-slate-800 hover:border-rose-500/30 hover:shadow-2xl hover:shadow-rose-500/10 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.3334rem)]"
            >
              <div className="flex justify-center mb-8">
                <FaCameraRetro className="text-6xl text-rose-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight text-center">{t('servicesPage.photoTitle') || "Photography"}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-center">{t('servicesPage.photoDesc')}</p>
            </Link>

            <Link
              href="/services/videography"
              className="group block p-10 rounded-3xl transition-all duration-300 bg-white dark:bg-slate-900 hover:-translate-y-2 border border-slate-100 dark:border-slate-800 hover:border-rose-500/30 hover:shadow-2xl hover:shadow-rose-500/10 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.3334rem)]"
            >
              <div className="flex justify-center mb-8">
                <FaVideo className="text-6xl text-rose-500 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight text-center">{t('services.video.title') || "Videography"}</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-center">{t('services.video.description')}</p>
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
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">Scale</span>?
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 font-medium leading-relaxed">
              Join elite businesses using our comprehensive services to dominate their market.
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

export default ServicesPage;
