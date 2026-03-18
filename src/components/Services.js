import React from "react";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaChartLine,
  FaRobot,
  FaCameraRetro,
  FaVideo,
  FaSearchDollar,
  FaObjectGroup,
  FaCommentDots,
  FaSync,
} from "react-icons/fa";

import { useLanguage } from "@/context/LanguageContext";

const ServiceCard = ({ href, icon: Icon, title, description, color }) => {
  return (
    <a
      href={href}
      className="group relative bg-white dark:bg-slate-900 rounded-3xl p-8 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:-translate-y-2 border border-slate-100 dark:border-slate-800 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent dark:from-slate-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <div className="mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 origin-left inline-block">
          <Icon className={`text-5xl ${color} transition-colors duration-500 drop-shadow-sm`} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">{title}</h3>
        <p className="text-slate-600 dark:text-white leading-relaxed font-medium">{description}</p>
      </div>
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-rose-500 to-amber-500 transition-all duration-500 group-hover:w-full"></div>
    </a>
  );
};

const ServicesSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50" aria-labelledby="our-work">
      <header className="container text-center mb-20">
        <h2
          id="our-work"
          className="text-5xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 uppercase tracking-tighter"
        >
          {t('services.title')}
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-medium">
          {t('services.subtitle')}
        </p>
      </header>
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          href="/services/web-development"
          icon={FaLaptopCode}
          title={t('services.webDev.title')}
          description={t('services.webDev.description')}
          color="text-blue-600 group-hover:text-blue-700"
        />
        <ServiceCard
          href="/services/branding"
          icon={FaPaintBrush}
          title={t('services.branding.title')}
          description={t('services.branding.description')}
          color="text-amber-500 group-hover:text-amber-600"
        />
        <ServiceCard
          href="/services/digital-marketing"
          icon={FaChartLine}
          title={t('services.marketing.title')}
          description={t('services.marketing.description')}
          color="text-yellow-500 group-hover:text-yellow-600"
        />
        <ServiceCard
          href="/services/ai-chatbots"
          icon={FaRobot}
          title={t('services.chatbot.title')}
          description={t('services.chatbot.description')}
          color="text-rose-500 group-hover:text-rose-600"
        />
        <ServiceCard
          href="/services/ai-automations"
          icon={FaSync}
          title={t('services.ai.title')}
          description={t('services.ai.description')}
          color="text-emerald-500 group-hover:text-emerald-600"
        />
        <ServiceCard
          href="/services/geo"
          icon={FaSearchDollar}
          title={t('services.geo.title')}
          description={t('services.geo.description')}
          color="text-indigo-500 group-hover:text-indigo-600"
        />
      </div>
    </section>
  );
};

export default ServicesSection;
