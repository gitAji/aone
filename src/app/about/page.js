"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import CountUp from "react-countup";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const AboutPage = () => {
  const { t } = useLanguage();
  return (
    <div className="about-page bg-gray-50 min-h-screen">
      <HeroSection title={t('about.title')} subtitle={t('about.subtitle')} />

      <section className="why-choose-us container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          {t('about.achievements')}
        </h2>
        <div className="metrics grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="metric bg-white p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-5xl font-bold text-blue-600 mb-2">
              <CountUp end={15} duration={2.5} />+
            </h3>
            <p className="text-xl text-gray-700">{t('about.yearsExpertise')}</p>
          </div>
          <div className="metric bg-white p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-5xl font-bold text-green-600 mb-2">
              <CountUp end={200} duration={2.5} />+
            </h3>
            <p className="text-xl text-gray-700">{t('about.happyClients')}</p>
          </div>
          <div className="metric bg-white p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-5xl font-bold text-purple-600 mb-2">
              <CountUp end={250} duration={2.5} />+
            </h3>
            <p className="text-xl text-gray-700">{t('about.projectsDone')}</p>
          </div>
        </div>
      </section>

      <section className="mission-vision bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            {t('about.missionTitle')}
          </h2>
          <div className="values-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="value-item bg-gray-50 p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {t('about.innovation')}
              </h3>
              <p className="text-gray-700">
                {t('about.innovationDesc')}
              </p>
            </div>
            <div className="value-item bg-gray-50 p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {t('about.integrity')}
              </h3>
              <p className="text-gray-700">
                {t('about.integrityDesc')}
              </p>
            </div>
            <div className="value-item bg-gray-50 p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {t('about.collaboration')}
              </h3>
              <p className="text-gray-700">
                {t('about.collaborationDesc')}
              </p>
            </div>
            <div className="value-item bg-gray-50 p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {t('about.excellence')}
              </h3>
              <p className="text-gray-700">
                {t('about.excellenceDesc')}
              </p>
            </div>
            <div className="value-item bg-gray-50 p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {t('about.clientCentric')}
              </h3>
              <p className="text-gray-700">
                {t('about.clientCentricDesc')}
              </p>
            </div>
            <div className="value-item bg-gray-50 p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {t('about.sustainability')}
              </h3>
              <p className="text-gray-700">
                {t('about.sustainabilityDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="our-story container mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          {t('about.storyTitle')}
        </h2>
        <div className="story-content max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
          <p dangerouslySetInnerHTML={{ __html: t('about.storyText') }} />
        </div>
      </section>

      <section className="testimonials-section py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          {t('about.testimonialsTitle')}
        </h2>
        <div className="testimonials-grid container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="testimonial-item bg-gray-100 p-8 rounded-lg shadow-md flex flex-col justify-between">
            <p className="review-text text-lg italic text-gray-800 mb-6">
              &quot;Excellent designs that made our website look more
              professional. All the gaps were filled with highest prerequisites.
              100% endorsed and a good choice for restaurant businesses.&quot;
            </p>
            <p className="client-name text-right font-semibold text-gray-900 flex items-center justify-end">
              <Image
                src="/images/clients/clean.png"
                alt="Clean Masters Renhold Logo"
                width={50}
                height={40}
                className="h-12 w-12 mr-2 grayscale-logo"
                sizes="50px"
              />
              Clean Masters Renhold
            </p>
          </div>
          <div className="testimonial-item bg-gray-100 p-8 rounded-lg shadow-md flex flex-col justify-between">
            <p className="review-text text-lg italic text-gray-800 mb-6">
              &quot;Saray Steakhouse, and arguably one of the best places for
              grabbing the all-in-one bundle for web solutions. Unquestionably a
              5 stars digital firm with huge potential.&quot;
            </p>
            <p className="client-name text-right font-semibold text-gray-900 flex items-center justify-end">
              <Image
                src="/images/clients/saraysange.png"
                alt="Saray Steakhouse Logo"
                width={50}
                height={40}
                className="h-12 w-12 mr-2 grayscale-logo"
                sizes="50px"
              />
              Saray Steakhouse
            </p>
          </div>
          <div className="testimonial-item bg-gray-100 p-8 rounded-lg shadow-md flex flex-col justify-between">
            <p className="review-text text-lg italic text-gray-800 mb-6">
              &quot;A website that is visually appealing, easy to use, and
              provides a good user experience can help to increase customer
              engagement and drive conversions.&quot;
            </p>
            <p className="client-name text-right font-semibold text-gray-900 flex items-center justify-end">
              <Image
                src="/images/clients/shop-front.png"
                alt="Go Local Logo"
                width={50}
                height={40}
                className="h-12 w-12 mr-2 grayscale-logo"
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

export default AboutPage;
