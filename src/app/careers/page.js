"use client";
import React, { useState } from "react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaArrowRight, FaStar, FaRocket, FaUsers, FaLaptopCode } from "react-icons/fa";
import { vacancies } from "@/app/data/vacancies";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function CareersPage() {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState("All");

  const perks = [
    {
      icon: <FaRocket className="text-rose-400 text-3xl" />,
      title: t("careers.perks.cuttingEdgeTitle") || "Cutting-Edge Projects",
      desc: t("careers.perks.cuttingEdgeDesc") || "Work on AI-native products that push the boundaries of digital innovation.",
    },
    {
      icon: <FaUsers className="text-rose-400 text-3xl" />,
      title: t("careers.perks.collaborativeTitle") || "Collaborative Culture",
      desc: t("careers.perks.collaborativeDesc") || "A tight-knit team of passionate creatives, engineers, and strategists.",
    },
    {
      icon: <FaLaptopCode className="text-rose-400 text-3xl" />,
      title: t("careers.perks.remoteTitle") || "Remote Flexibility",
      desc: t("careers.perks.remoteDesc") || "Hybrid and remote-first roles with flexible scheduling for deep work.",
    },
    {
      icon: <FaStar className="text-rose-400 text-3xl" />,
      title: t("careers.perks.growthTitle") || "Growth & Learning",
      desc: t("careers.perks.growthDesc") || "Access to courses, conferences, and resources to keep you at the forefront.",
    },
  ];

  const getDept = (v) => v.department[language] || v.department.en || "";

  const allText = t("careers.allDepartments") || "All";
  const departments = [allText, ...Array.from(new Set(vacancies.map(getDept)))];
  
  const filtered = (filter === "All" || filter === allText)
    ? vacancies 
    : vacancies.filter((v) => getDept(v) === filter);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white">
      <HeroSection
        title={t("careers.title") || "Join the Aone Team"}
        subtitle={t("careers.subtitle") || "Help us shape the future of AI-native digital experiences."}
      />

      {/* Perks Section */}
      <section className="container mx-auto px-4 pt-36 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-rose-500 font-black">
            {t("careers.whyTitle") || "Why Aone?"}
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4">
            {t("careers.whyHeader") || "Work where ambition meets craft."}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            {t("careers.whyDesc") || "We are a lean, elite digital agency building next-generation experiences. Every person here has an outsized impact."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, i) => (
            <motion.div
              key={perk.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-rose-500/40 rounded-2xl p-7 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="mb-4">{perk.icon}</div>
              <h3 className="text-lg font-bold mb-2">{perk.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">{perk.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vacancies Section */}
      <section className="container mx-auto px-4 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-rose-500 font-black">
            {t("careers.openPositions") || "Open Positions"}
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4">
            {t("careers.currentVacancies") || "Current Vacancies"}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto font-medium">
            {t("careers.dontSeeRole") || "Don't see your role? Reach out to us directly through our "}
            <Link href="/contact" className="text-rose-500 hover:text-rose-600 underline underline-offset-2 transition-colors font-bold">
              {t("careers.contactUsLink") || "Contact Us"}
            </Link>
            {t("careers.dontSeeRoleEnd") || " page."}
          </p>
        </motion.div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {departments.map((dep) => (
            <button
              key={dep}
              onClick={() => setFilter(dep)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                (filter === dep || (filter === "All" && dep === allText))
                  ? "bg-rose-500 border-rose-500 text-white shadow-lg shadow-rose-500/25"
                  : "border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-rose-500/50 hover:text-rose-500"
              }`}
            >
              {dep}
            </button>
          ))}
        </div>

        {/* Vacancy Cards */}
        <div className="flex flex-col gap-5 max-w-4xl mx-auto">
          {filtered.map((vacancy, i) => {
            const vTitle = vacancy.title[language] || vacancy.title.en;
            const vDept = vacancy.department[language] || vacancy.department.en;
            const vLoc = vacancy.location[language] || vacancy.location.en;
            const vType = vacancy.type[language] || vacancy.type.en;
            const vSummary = vacancy.summary[language] || vacancy.summary.en;

            return (
              <motion.div
                key={vacancy.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <Link href={`/careers/${vacancy.id}`} className="group block">
                  <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:border-rose-500/50 rounded-2xl p-7 transition-all duration-400 overflow-hidden shadow-sm hover:shadow-xl dark:shadow-none">
                    {/* Featured Badge */}
                    {vacancy.featured && (
                      <span className="absolute top-5 right-5 text-[9px] uppercase tracking-widest bg-rose-500/20 text-rose-500 border border-rose-500/30 px-3 py-1 rounded-full font-bold">
                        {t("careers.featured") || "Featured"}
                      </span>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-center justify-center">
                        <FaBriefcase className="text-rose-400 text-xl" />
                      </div>

                      <div className="flex-1">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold mb-1">
                          {vDept}
                        </p>
                        <h3 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-300 transition-colors duration-300 mb-2">
                          {vTitle}
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 font-medium">{vSummary}</p>

                        <div className="flex flex-wrap items-center gap-4 text-slate-500 text-xs mb-4 font-bold">
                          <span className="flex items-center gap-1.5">
                            <FaMapMarkerAlt className="text-rose-500/70" />
                            {vLoc}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <FaClock className="text-rose-500/70" />
                            {vType}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {vacancy.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex-shrink-0 self-center sm:self-center">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 group-hover:border-rose-500 group-hover:bg-rose-500/10 transition-all duration-300">
                          <FaArrowRight className="text-slate-400 group-hover:text-rose-400 transition-colors duration-300 text-sm group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="border-t border-slate-100 dark:border-slate-900 bg-white/50 dark:bg-slate-900/50 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            {t("careers.ctaBottomTitle") || "Don't see your role?"}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto font-medium">
            {t("careers.ctaBottomDesc") || "We're always looking for exceptional talent. Send us your portfolio and tell us how you can contribute."}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 hover:-translate-y-0.5"
          >
            {t("careers.ctaBottomBtn") || "Contact Us"} <FaArrowRight />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
