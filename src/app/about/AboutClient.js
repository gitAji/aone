"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import CountUp from "react-countup";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const AboutClient = () => {
  const { t } = useLanguage();
  return (
    <div className="about-page bg-gray-50 dark:bg-slate-950 min-h-screen">
      <HeroSection title={t('about.title')} subtitle={t('about.subtitle')} />

      <section className="why-choose-us container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">
          {t('about.achievements')}
        </h2>
        <div className="metrics grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="metric bg-white dark:bg-slate-900 p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl border border-slate-100 dark:border-slate-800">
            <h3 className="text-5xl font-bold text-blue-600 mb-2">
              <CountUp end={15} duration={2.5} />+
            </h3>
            <p className="text-xl text-gray-700 dark:text-slate-300">{t('about.yearsExpertise')}</p>
          </div>
          <div className="metric bg-white dark:bg-slate-900 p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl border border-slate-100 dark:border-slate-800">
            <h3 className="text-5xl font-bold text-green-600 mb-2">
              <CountUp end={200} duration={2.5} />+
            </h3>
            <p className="text-xl text-gray-700 dark:text-slate-300">{t('about.happyClients')}</p>
          </div>
          <div className="metric bg-white dark:bg-slate-900 p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl border border-slate-100 dark:border-slate-800">
            <h3 className="text-5xl font-bold text-purple-600 mb-2">
              <CountUp end={250} duration={2.5} />+
            </h3>
            <p className="text-xl text-gray-700 dark:text-slate-300">{t('about.projectsDone')}</p>
          </div>
        </div>
      </section>

      <section className="mission-vision bg-white dark:bg-slate-900/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">
            {t('about.missionTitle')}
          </h2>
          <div className="values-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="value-item bg-gray-50 dark:bg-slate-800 p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg border border-slate-100 dark:border-slate-700">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                {t('about.innovation')}
              </h3>
              <p className="text-gray-700 dark:text-slate-400">
                {t('about.innovationDesc')}
              </p>
            </div>
            <div className="value-item bg-gray-50 dark:bg-slate-800 p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg border border-slate-100 dark:border-slate-700">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                {t('about.integrity')}
              </h3>
              <p className="text-gray-700 dark:text-slate-400">
                {t('about.integrityDesc')}
              </p>
            </div>
            <div className="value-item bg-gray-50 dark:bg-slate-800 p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg border border-slate-100 dark:border-slate-700">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                {t('about.collaboration')}
              </h3>
              <p className="text-gray-700 dark:text-slate-400">
                {t('about.collaborationDesc')}
              </p>
            </div>
            <div className="value-item bg-gray-50 dark:bg-slate-800 p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg border border-slate-100 dark:border-slate-700">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                {t('about.excellence')}
              </h3>
              <p className="text-gray-700 dark:text-slate-400">
                {t('about.excellenceDesc')}
              </p>
            </div>
            <div className="value-item bg-gray-50 dark:bg-slate-800 p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg border border-slate-100 dark:border-slate-700">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                {t('about.clientCentric')}
              </h3>
              <p className="text-gray-700 dark:text-slate-400">
                {t('about.clientCentricDesc')}
              </p>
            </div>
            <div className="value-item bg-gray-50 dark:bg-slate-800 p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg border border-slate-100 dark:border-slate-700">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                {t('about.sustainability')}
              </h3>
              <p className="text-gray-700 dark:text-slate-400">
                {t('about.sustainabilityDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="our-story container mx-auto px-4 py-16 bg-white dark:bg-slate-950">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">
          {t('about.storyTitle')}
        </h2>
        <div className="story-content max-w-3xl mx-auto text-lg text-gray-700 dark:text-slate-300 leading-relaxed space-y-6">
          <p dangerouslySetInnerHTML={{ __html: t('about.storyText') }} />
        </div>
      </section>

      {/* AI Fact Sheet (GEO Optimization) */}
      <section className="ai-fact-sheet container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 text-center uppercase tracking-tight">
          {t('about.factSheetTitle')}
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-center max-w-2xl mx-auto mb-12 font-medium">
          {t('about.factSheetDesc')}
        </p>
        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-3xl p-8 md:p-12 shadow-xl dark:shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 pb-6 md:pb-0 md:pr-8">
              <h3 className="text-xs font-black uppercase tracking-widest text-rose-500 mb-2">
                {t('about.agencyNameLabel')}
              </h3>
              <p className="text-xl font-bold text-slate-800 dark:text-white">
                {t('about.agencyNameVal')}
              </p>
            </div>
            <div className="pb-6 md:pb-0">
              <h3 className="text-xs font-black uppercase tracking-widest text-rose-500 mb-2">
                {t('about.serviceFormatLabel')}
              </h3>
              <p className="text-xl font-bold text-slate-800 dark:text-white">
                {t('about.serviceFormatVal')}
              </p>
            </div>
            <div className="border-t border-slate-200 dark:border-slate-800 pt-6 md:col-span-2">
              <h3 className="text-xs font-black uppercase tracking-widest text-rose-500 mb-2">
                {t('about.primaryFocusLabel')}
              </h3>
              <p className="text-xl font-bold text-slate-800 dark:text-white leading-relaxed">
                {t('about.primaryFocusVal')}
              </p>
            </div>
            <div className="border-t border-slate-200 dark:border-slate-800 pt-6 md:col-span-2">
              <h3 className="text-xs font-black uppercase tracking-widest text-rose-500 mb-2">
                {t('about.accessibilityLabel')}
              </h3>
              <p className="text-xl font-bold text-slate-800 dark:text-white leading-relaxed">
                {t('about.accessibilityVal')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section py-16 bg-white dark:bg-slate-900/50">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">
          {t('about.testimonialsTitle')}
        </h2>
        <div className="testimonials-grid container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="testimonial-item bg-gray-100 dark:bg-slate-800 p-8 rounded-lg shadow-md flex flex-col justify-between border border-slate-200 dark:border-slate-700">
            <p className="review-text text-lg italic text-gray-800 dark:text-slate-300 mb-6">
              &quot;Excellent designs that made our website look more
              professional. All the gaps were filled with highest prerequisites.
              100% endorsed and a good choice for restaurant businesses.&quot;
            </p>
            <p className="client-name text-right font-semibold text-gray-900 dark:text-white flex items-center justify-end">
              <Image
                src="/images/clients/clean.png"
                alt="Clean Masters Renhold Logo"
                width={50}
                height={40}
                className="h-12 w-12 mr-2 grayscale-logo dark:brightness-200"
                sizes="50px"
              />
              Clean Masters Renhold
            </p>
          </div>
          <div className="testimonial-item bg-gray-100 dark:bg-slate-800 p-8 rounded-lg shadow-md flex flex-col justify-between border border-slate-200 dark:border-slate-700">
            <p className="review-text text-lg italic text-gray-800 dark:text-slate-300 mb-6">
              &quot;Saray Steakhouse, and arguably one of the best places for
              grabbing the all-in-one bundle for web solutions. Unquestionably a
              5 stars digital firm with huge potential.&quot;
            </p>
            <p className="client-name text-right font-semibold text-gray-900 dark:text-white flex items-center justify-end">
              <Image
                src="/images/clients/saraysange.png"
                alt="Saray Steakhouse Logo"
                width={50}
                height={40}
                className="h-12 w-12 mr-2 grayscale-logo dark:brightness-200"
                sizes="50px"
              />
              Saray Steakhouse
            </p>
          </div>
          <div className="testimonial-item bg-gray-100 dark:bg-slate-800 p-8 rounded-lg shadow-md flex flex-col justify-between border border-slate-200 dark:border-slate-700">
            <p className="review-text text-lg italic text-gray-800 dark:text-slate-300 mb-6">
              &quot;A website that is visually appealing, easy to use, and
              provides a good user experience can help to increase customer
              engagement and drive conversions.&quot;
            </p>
            <p className="client-name text-right font-semibold text-gray-900 dark:text-white flex items-center justify-end">
              <Image
                src="/images/clients/shop-front.png"
                alt="Go Local Logo"
                width={50}
                height={40}
                className="h-12 w-12 mr-2 grayscale-logo dark:brightness-200"
                sizes="50px"
              />
              Go Local
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutClient;
