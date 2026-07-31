"use client";
import React from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import HeroSection from "@/components/HeroSection";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaCheckCircle, FaChevronLeft, FaPaperPlane } from "react-icons/fa";
import { vacancies } from "@/app/data/vacancies";

export default function VacancyDetail() {
  const { id } = useParams();
  const { t, language } = useLanguage();
  
  const vacancy = vacancies.find((v) => v.id === id);

  if (!vacancy) {
    notFound();
  }

  const vTitle = vacancy.title[language] || vacancy.title.en;
  const vDept = vacancy.department[language] || vacancy.department.en;
  const vLoc = vacancy.location[language] || vacancy.location.en;
  const vType = vacancy.type[language] || vacancy.type.en;
  const vDesc = vacancy.description[language] || vacancy.description.en;
  const vResp = vacancy.responsibilities[language] || vacancy.responsibilities.en;
  const vReqs = vacancy.requirements[language] || vacancy.requirements.en;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white">
      <HeroSection 
        title={vTitle} 
        subtitle={`${vDept} • ${vLoc}`} 
      />

      <div className="container mx-auto px-4 pt-36 pb-20">
        {/* Back Link */}
        <Link 
          href="/careers" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-rose-500 transition-colors mb-12 group font-bold"
        >
          <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" />
          {t("careers.backToCareers") || "Back to Careers"}
        </Link>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap items-center gap-6 text-slate-500 dark:text-slate-400 text-sm mb-8 border-b border-slate-200 dark:border-slate-800 pb-8 font-bold">
                <span className="flex items-center gap-2">
                  <FaBriefcase className="text-rose-500" />
                  {vDept}
                </span>
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-rose-500" />
                  {vLoc}
                </span>
                <span className="flex items-center gap-2">
                  <FaClock className="text-rose-500" />
                  {vType}
                </span>
              </div>

              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-black mb-6 text-slate-900 dark:text-white">
                  {t("careers.aboutRole") || "About the Role"}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-10 font-medium">
                  {vDesc}
                </p>

                <h3 className="text-2xl font-black mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
                  {t("careers.keyResponsibilities") || "Key Responsibilities"}
                </h3>
                <ul className="grid grid-cols-1 gap-4 mb-10 list-none p-0">
                  {vResp.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 font-medium">
                      <FaCheckCircle className="text-rose-500 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-black mb-6 text-slate-900 dark:text-white">
                  {t("careers.requirements") || "Requirements"}
                </h3>
                <ul className="grid grid-cols-1 gap-4 mb-10 list-none p-0">
                  {vReqs.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 p-4 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-600 dark:text-slate-400 shadow-sm dark:shadow-none font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-40 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-xl dark:shadow-2xl dark:shadow-black/50"
            >
              <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
                {t("careers.contactUsTitle") || "Contact Us"}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 leading-relaxed font-medium">
                {t("careers.contactUsDesc") || "Interested in this role? Send your application today! We review applications on a rolling basis."}
              </p>
              
              <Link
                href={`/apply?role=${vacancy.id}`}
                className="flex items-center justify-center gap-3 w-full bg-rose-500 hover:bg-rose-600 text-white font-black py-5 rounded-2xl transition-all duration-300 shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 hover:-translate-y-1 mb-6"
              >
                {t("careers.applyNow") || "Apply Now"} <FaPaperPlane />
              </Link>

              <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-500 font-bold uppercase tracking-widest">
                  <span>{t("careers.shareRole") || "Share this role"}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {vacancy.tags.map(tag => (
                    <span key={tag} className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-1 rounded-md border border-slate-200 dark:border-slate-700 font-medium">#{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related Positions */}
        <div className="mt-24 pt-16 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-3xl font-black mb-10 text-center uppercase tracking-tighter text-slate-900 dark:text-white">
            {t("careers.otherOpenPositions") || "Other Open Positions"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {vacancies.filter(v => v.id !== id).slice(0, 2).map((v) => {
              const relTitle = v.title[language] || v.title.en;
              const relDept = v.department[language] || v.department.en;
              
              return (
                <Link key={v.id} href={`/careers/${v.id}`} className="group block">
                  <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl transition-all duration-300 hover:border-rose-500/50 hover:shadow-xl">
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">{relDept}</p>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-rose-500 transition-colors">{relTitle}</h4>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
