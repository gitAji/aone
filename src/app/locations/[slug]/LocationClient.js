"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTA";
import { useLanguage } from "@/context/LanguageContext";
import { tr } from "@/lib/projectText";

const LocationClient = ({ location, featuredProjects }) => {
  const { t, language } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <div className="min-h-screen">
      <HeroSection
        title={tr(location.heroTitle, language)}
        subtitle={tr(location.heroSubtitle, language)}
      />

      {/* Intro */}
      <section className="py-16 md:py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6 max-w-3xl">
          {location.intro.map((paragraph, i) => (
            <p key={i} className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-5 last:mb-0">
              {tr(paragraph, language)}
            </p>
          ))}
        </div>
      </section>

      {/* Featured project case studies */}
      {featuredProjects.length > 0 && (
        <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900/40">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex items-center gap-2 mb-10 text-sm font-bold text-rose-500 uppercase tracking-widest">
              <FaMapMarkerAlt className="text-xs" />
              {tr(location.proofNote, language)}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project, i) => {
                const title = tr(project.homeTitle || project.title, language);
                const description = tr(project.description, language);
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Link
                      href={`/references/${project.id}`}
                      className="group block rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={project.imageUrl}
                          alt={title}
                          fill
                          style={{ objectFit: "cover" }}
                          className="group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 767px) 100vw, 50vw"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center justify-between">
                          {title}
                          <FaArrowRight className="text-sm text-rose-500 transform group-hover:translate-x-1 transition-transform" />
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                          {description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white dark:bg-slate-950" aria-labelledby="location-faq-heading">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 id="location-faq-heading" className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">
            {language === "no" ? "Ofte stilte spørsmål" : "Frequently Asked Questions"}
          </h2>
          <div className="divide-y divide-slate-200 dark:divide-slate-800">
            {location.faq.map((item, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div key={i} className="py-5">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-slate-900 dark:text-white text-base md:text-lg">
                      {tr(item.q, language)}
                    </span>
                    <span
                      className={`text-rose-500 text-2xl flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {tr(item.a, language)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default LocationClient;
