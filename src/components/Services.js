import React from "react";
import {
  FaCode,
  FaMagic,
  FaChartLine,
  FaRobot,
  FaSync,
  FaSearchDollar,
  FaSearch,
  FaCameraRetro,
  FaObjectGroup,
} from "react-icons/fa";

import { useLanguage } from "@/context/LanguageContext";

const ServiceCard = ({ href, icon: Icon, title, description, color, number }) => {
  return (
    <a
      href={href}
      className="group relative rounded-3xl border border-slate-200/80 dark:border-white/10 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.2)] hover:-translate-y-2 overflow-hidden block h-full bg-slate-100 dark:bg-slate-800"
    >
      {/* 2. Animated Gold Snake Border Layer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 overflow-hidden">
        <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_10%,#fbbf24_15%,#fbbf24_35%,transparent_40%_100%)] animate-[spin_3s_linear_infinite] blur-[1px]" />
      </div>

      {/* 3. Card Body - Inner mask with 3px gap to show the gold line */}
      <div className="relative z-20 bg-white dark:bg-slate-900 m-[3px] rounded-[21px] p-8 h-[calc(100%-6px)] overflow-hidden flex flex-col">
        {/* Subtle glow background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative z-10 flex flex-col h-full">
          {number && (
            <div className="eyebrow-label mb-5">
              <span className="accent-dot" aria-hidden="true" />
              Service {number}
            </div>
          )}
          <div className="mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 origin-left inline-block">
            <Icon className={`text-5xl ${color} transition-colors duration-500 drop-shadow-sm`} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">{title}</h3>
          <p className="text-slate-600 dark:text-white leading-relaxed font-medium flex-grow">{description}</p>
        </div>
      </div>
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
          className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight font-clash"
        >
          {t('services.title')}
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-medium">
          {t('services.subtitle')}
        </p>
      </header>
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  <ServiceCard
    number="01"
    href="/services/web-development"
    icon={FaCode}
    title={t('services.webDev.title')}
    description={t('services.webDev.description')}
    color="text-rose-500"
  />
  <ServiceCard
    number="02"
    href="/services/ai-chatbots"
    icon={FaRobot}
    title={t('services.chatbot.title')}
    description={t('services.chatbot.description')}
    color="text-rose-500"
  />
  <ServiceCard
    number="03"
    href="/services/ai-automations"
    icon={FaSync}
    title={t('services.ai.title')}
    description={t('services.ai.description')}
    color="text-rose-500"
  />
  <ServiceCard
    number="04"
    href="/services/ui-ux-design"
    icon={FaObjectGroup}
    title={t('services.uiux.title')}
    description={t('services.uiux.description')}
    color="text-rose-500"
  />
  <ServiceCard
    number="05"
    href="/services/digital-marketing"
    icon={FaChartLine}
    title={t('services.marketing.title') || "Digital Marketing"}
    description={t('services.marketing.description') || "Data-driven marketing strategies that fuel sustainable growth."}
    color="text-rose-500"
  />
  <ServiceCard
    number="06"
    href="/services/photography"
    icon={FaCameraRetro}
    title={t('services.photo.title') || "Photography & Videography"}
    description={t('services.photo.description') || "Capturing moments with visual storytelling."}
    color="text-rose-500"
  />
</div>
    </section>
  );
};

export default ServicesSection;
