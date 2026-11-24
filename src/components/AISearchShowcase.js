"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRight, FaRobot, FaLink } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

// Plain-text engine labels only -- deliberately not reproducing ChatGPT/
// Claude/Gemini's actual logos (trademark/brand-guideline risk for a
// marketing page); a generic bot icon + the real product names is enough
// to make the point without implying any affiliation with those products.
const ENGINES = ["ChatGPT", "Claude", "Gemini"];

const AISearchShowcase = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Copy side */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-500 text-xs font-black uppercase tracking-widest">
              <FaRobot className="text-xs" />
              {t('aiSearch.eyebrow')}
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter leading-tight"
            >
              {t('aiSearch.title')}
            </motion.h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-medium">
              {t('aiSearch.subtitle')}
            </p>

            <div className="flex flex-wrap items-center gap-2 mb-8">
              {ENGINES.map((engine) => (
                <span
                  key={engine}
                  className="px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-bold text-slate-600 dark:text-slate-300"
                >
                  {engine}
                </span>
              ))}
            </div>

            <Link
              href="/pricing#geo"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 to-amber-500 text-white font-black py-4 px-8 rounded-full uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-rose-500/25"
            >
              {t('aiSearch.cta')}
              <FaArrowRight className="text-xs" />
            </Link>
          </div>

          {/* Mockup side -- a stylized AI chat answering a local-business
              query, citing the client's own business in the response. Not
              a screenshot of any real product's UI, just a generic chat
              card in the site's own visual language. */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-rose-500 to-amber-500 rounded-[2.5rem] blur-2xl opacity-20" />
            <div className="relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
              {/* window chrome */}
              <div className="flex items-center gap-1.5 px-5 py-3 border-b border-slate-100 dark:border-slate-800">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
              </div>

              <div className="p-6 space-y-4">
                {/* user query bubble */}
                <div className="flex justify-end">
                  <div className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-medium px-4 py-2.5 rounded-2xl rounded-br-sm max-w-[85%]">
                    {t('aiSearch.query')}
                  </div>
                </div>

                {/* AI answer bubble */}
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-[90%]">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center text-white">
                      <FaRobot className="text-xs" />
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-sm px-4 py-3 rounded-2xl rounded-bl-sm">
                      <p className="text-slate-600 dark:text-slate-400 mb-2">
                        {t('aiSearch.answerIntro')}
                      </p>
                      <p className="font-bold text-slate-900 dark:text-white mb-2">
                        {t('aiSearch.answerHighlight')}
                      </p>
                      <div className="flex items-center gap-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                          {t('aiSearch.sourcesLabel')}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded-full">
                          <FaLink className="text-[8px]" />
                          aone.no
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AISearchShowcase;
