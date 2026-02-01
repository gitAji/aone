'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { FaLaptopCode, FaPaintBrush, FaChartLine, FaRobot, FaCameraRetro, FaVideo, FaObjectGroup, FaSearch, FaSearchDollar } from 'react-icons/fa';
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

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">{t('servicesPage.comprehensive')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              href={`/services/web-development`}
              className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <FaLaptopCode className="text-5xl text-blue-600 mb-4 group-hover:text-blue-700 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors duration-300">{t('servicesPage.webDevTitle')}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{t('servicesPage.webDevDesc')}</p>
            </Link>
            <Link
              href={`/services/branding`}
              className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <FaPaintBrush className="text-5xl text-green-600 mb-4 group-hover:text-green-700 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-green-800 transition-colors duration-300">{t('servicesPage.brandingTitle')}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{t('servicesPage.brandingDesc')}</p>
            </Link>
            <Link
              href={`/services/digital-marketing`}
              className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <FaChartLine className="text-5xl text-yellow-600 mb-4 group-hover:text-yellow-700 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-yellow-800 transition-colors duration-300">{t('servicesPage.marketingTitle')}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{t('servicesPage.marketingDesc')}</p>
            </Link>
            <Link
              href={`/services/ai-automations`}
              className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <FaRobot className="text-5xl text-indigo-600 mb-4 group-hover:text-indigo-700 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-800 transition-colors duration-300">{t('servicesPage.aiTitle')}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{t('servicesPage.aiDesc')}</p>
            </Link>
            <Link
              href={`/services/geo`}
              className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <FaSearchDollar className="text-5xl text-cyan-600 mb-4 group-hover:text-cyan-700 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-cyan-800 transition-colors duration-300">{t('servicesPage.geoTitle')}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{t('servicesPage.geoDesc')}</p>
            </Link>
            <Link
              href={`/services/photography`}
              className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <FaCameraRetro className="text-5xl text-pink-600 mb-4 group-hover:text-pink-700 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-pink-800 transition-colors duration-300">{t('servicesPage.photoTitle')}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{t('servicesPage.photoDesc')}</p>
            </Link>
            <Link
              href={`/services/videography`}
              className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <FaVideo className="text-5xl text-teal-600 mb-4 group-hover:text-teal-700 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-teal-800 transition-colors duration-300">{t('servicesPage.videoTitle')}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{t('servicesPage.videoDesc')}</p>
            </Link>
            <Link
              href={`/services/ui-ux-design`}
              className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <FaObjectGroup className="text-5xl text-purple-600 mb-4 group-hover:text-purple-700 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-purple-800 transition-colors duration-300">{t('servicesPage.uiuxTitle')}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{t('servicesPage.uiuxDesc')}</p>
            </Link>
            <Link
              href={`/services/search-engine-optimization`}
              className="group block p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <FaSearch className="text-5xl text-red-600 mb-4 group-hover:text-red-700 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-red-800 transition-colors duration-300">{t('servicesPage.seoTitle')}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{t('servicesPage.seoDesc')}</p>
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default ServicesPage;
