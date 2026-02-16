'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { FaLaptopCode, FaPaintBrush, FaChartLine, FaRobot, FaCameraRetro, FaVideo, FaObjectGroup, FaSearch, FaSearchDollar, FaCommentDots, FaSync } from 'react-icons/fa';
import Testimonials from "@/components/Testimonials";
import { useLanguage } from "@/context/LanguageContext";

const ServicesPage = () => {
  const { t } = useLanguage();
  return (
    <div className="services-page bg-gray-50 min-h-screen">
      <HeroSection
        title={t('servicesPage.title')}
        subtitle={t('servicesPage.subtitle')}
      />

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black text-slate-900 mb-16 text-center uppercase tracking-tighter">
            {t('servicesPage.comprehensive')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              href="/services/web-development"
              className="group block p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center border border-slate-100"
            >
              <FaLaptopCode className="text-5xl text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{t('servicesPage.webDevTitle')}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{t('servicesPage.webDevDesc')}</p>
            </Link>

            <Link
              href="/services/branding"
              className="group block p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center border border-slate-100"
            >
              <FaPaintBrush className="text-5xl text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{t('servicesPage.brandingTitle')}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{t('servicesPage.brandingDesc')}</p>
            </Link>

            <Link
              href="/services/digital-marketing"
              className="group block p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center border border-slate-100"
            >
              <FaChartLine className="text-5xl text-yellow-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{t('servicesPage.marketingTitle')}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{t('servicesPage.marketingDesc')}</p>
            </Link>

            <Link
              href="/services/ai-chatbots"
              className="group block p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center border border-slate-100"
            >
              <FaRobot className="text-5xl text-rose-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{t('servicesPage.chatbotTitle')}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{t('servicesPage.chatbotDesc')}</p>
            </Link>

            <Link
              href="/services/ai-automations"
              className="group block p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center border border-slate-100"
            >
              <FaSync className="text-5xl text-emerald-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{t('servicesPage.aiTitle')}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{t('servicesPage.aiDesc')}</p>
            </Link>

            <Link
              href="/services/geo"
              className="group block p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center border border-slate-100"
            >
              <FaSearchDollar className="text-5xl text-indigo-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{t('servicesPage.geoTitle')}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{t('servicesPage.geoDesc')}</p>
            </Link>

            <Link
              href="/services/photography"
              className="group block p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center border border-slate-100"
            >
              <FaCameraRetro className="text-5xl text-pink-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{t('servicesPage.photoTitle')}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{t('servicesPage.photoDesc')}</p>
            </Link>

            <Link
              href="/services/videography"
              className="group block p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center border border-slate-100"
            >
              <FaVideo className="text-5xl text-teal-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{t('servicesPage.videoTitle')}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{t('servicesPage.videoDesc')}</p>
            </Link>

            <Link
              href="/services/ui-ux-design"
              className="group block p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center border border-slate-100"
            >
              <FaObjectGroup className="text-5xl text-purple-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{t('servicesPage.uiuxTitle')}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{t('servicesPage.uiuxDesc')}</p>
            </Link>

            <Link
              href="/services/search-engine-optimization"
              className="group block p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center border border-slate-100"
            >
              <FaSearch className="text-5xl text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{t('servicesPage.seoTitle')}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{t('servicesPage.seoDesc')}</p>
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default ServicesPage;
