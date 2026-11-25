"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaCogs,
  FaMapMarkerAlt,
  FaFileAlt,
  FaChartLine,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import HeroSection from "@/components/HeroSection";
import { useLanguage } from "@/context/LanguageContext";

const WHY_CARDS = [
  {
    icon: FaSearch,
    title: { en: "Found for the right searches", no: "Funnet for de riktige søkene" },
    description: {
      en: "We target keywords your actual customers search for -- not vanity traffic that never converts.",
      no: "Vi målretter søkeord dine faktiske kunder bruker -- ikke forfengelig trafikk som aldri konverterer.",
    },
  },
  {
    icon: FaChartLine,
    title: { en: "Measured in enquiries, not just rankings", no: "Målt i henvendelser, ikke bare rangeringer" },
    description: {
      en: "Rankings are a means to an end. We track clicks, calls and form submissions, not just position #1.",
      no: "Rangeringer er et middel, ikke et mål. Vi følger klikk, telefoner og skjemainnsendinger, ikke bare plassering #1.",
    },
  },
  {
    icon: FaCogs,
    title: { en: "A technical foundation that actually holds", no: "Et teknisk fundament som faktisk holder" },
    description: {
      en: "Site speed, crawlability and structured data fixed properly once, instead of patched every few months.",
      no: "Hastighet, crawlbarhet og strukturerte data fikset skikkelig én gang, i stedet for å lappes hver tredje måned.",
    },
  },
];

const INCLUDED = [
  {
    icon: FaCogs,
    title: { en: "Technical SEO", no: "Teknisk SEO" },
    description: {
      en: "Site speed, Core Web Vitals, crawlability, indexing issues and structured data.",
      no: "Hastighet, Core Web Vitals, crawlbarhet, indekseringsproblemer og strukturerte data.",
    },
  },
  {
    icon: FaFileAlt,
    title: { en: "On-page & content", no: "On-page og innhold" },
    description: {
      en: "Keyword strategy, titles, meta descriptions, headings and content that actually answers the search.",
      no: "Søkeordsstrategi, titler, metabeskrivelser, overskrifter og innhold som faktisk svarer på søket.",
    },
  },
  {
    icon: FaMapMarkerAlt,
    title: { en: "Local SEO", no: "Lokal SEO" },
    description: {
      en: "Google Business Profile optimization and location-specific pages for the cities you actually serve.",
      no: "Optimalisering av Google Business Profile og lokasjonssider for byene du faktisk betjener.",
    },
  },
  {
    icon: FaSearch,
    title: { en: "GEO / AI search readiness", no: "GEO / AI-søk-klarhet" },
    description: {
      en: "The same structured-data and content signals that help ChatGPT, Gemini and Perplexity cite your business.",
      no: "De samme strukturerte-data- og innholdssignalene som hjelper ChatGPT, Gemini og Perplexity med å sitere bedriften din.",
    },
  },
];

const FAQ_ITEMS = [
  {
    q: { en: "How much does SEO cost at Aone?", no: "Hva koster SEO hos Aone?" },
    a: {
      en: "SEO work is priced as a fixed monthly engagement, scaled to your site's size and your industry's competition. See the Pricing page for package ranges, or request a free quote.",
      no: "SEO-arbeid prises som et fast månedlig samarbeid, tilpasset nettsidens størrelse og konkurransen i bransjen din. Se Priser-siden for pakkeoversikt, eller be om et uforpliktende tilbud.",
    },
  },
  {
    q: { en: "How long until SEO shows results?", no: "Hvor lang tid tar det før SEO gir resultater?" },
    a: {
      en: "Most businesses see the first ranking improvements within 2-4 months, with more meaningful growth in enquiries after 4-6 months. SEO is a long-term investment, not a one-off job.",
      no: "De fleste bedrifter ser de første rangeringsforbedringene innen 2-4 måneder, og mer vesentlig vekst i henvendelser etter 4-6 måneder. SEO er en langsiktig investering, ikke en engangsjobb.",
    },
  },
  {
    q: { en: "Do you work with businesses outside Bergen?", no: "Jobber dere med bedrifter utenfor Bergen?" },
    a: {
      en: "Yes -- we work with businesses across Norway, and have also delivered projects for UK clients. See our location pages for Bergen, Oslo and London.",
      no: "Ja -- vi jobber med bedrifter over hele Norge, og har også levert prosjekter for kunder i Storbritannia. Se våre lokasjonssider for Bergen, Oslo og London.",
    },
  },
];

const SeoClient = () => {
  const { language } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const tr = (field) => (field && typeof field === "object" ? field[language] || field.en : field);

  return (
    <div className="service-detail-page bg-slate-50 dark:bg-slate-950 min-h-screen">
      <HeroSection
        title={language === "no" ? "SEO Byrå som Hjelper Bedrifter å Få Flere Kunder fra Google" : "SEO Agency Helping Businesses Get More Customers From Google"}
        subtitle={language === "no"
          ? "Teknisk SEO, søkeordsstrategi, innhold og lokal optimalisering -- bygget for å gjøre organisk søk til kvalifiserte henvendelser, ikke bare trafikk."
          : "Technical SEO, keyword strategy, content and local optimization -- built to turn organic search into qualified enquiries, not just traffic."}
      />

      {/* Why it matters */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {WHY_CARDS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-10 bg-white dark:bg-slate-900 rounded-3xl shadow-xl hover:shadow-rose-500/5 border border-slate-100 dark:border-slate-800 transition-all duration-300"
              >
                <Icon className="text-4xl text-rose-500 mb-6" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{tr(item.title)}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{tr(item.description)}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* What's included */}
      <section className="py-24 bg-slate-900 dark:bg-black text-white border-y border-slate-800">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-tighter"
          >
            {language === "no" ? "Hva som er inkludert" : "What's Included"}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {INCLUDED.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4 p-6 bg-slate-800/20 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-rose-500/50 transition-all duration-300"
                >
                  <Icon className="text-2xl text-rose-500 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">{tr(item.title)}</h4>
                    <p className="text-sm text-slate-400 font-medium leading-relaxed">{tr(item.description)}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Real proof -- genuine project result, not a fabricated case study */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center gap-2 mb-6 text-sm font-bold text-rose-500 uppercase tracking-widest">
            <FaCheckCircle className="text-xs" />
            {language === "no" ? "Ekte resultat, ikke en konstruert case" : "A real result, not a constructed case study"}
          </div>
          <Link
            href="/references/clean-masters-renhold"
            className="group block rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 md:flex"
          >
            <div className="relative w-full md:w-80 aspect-[4/3] shrink-0">
              <Image
                src="/images/projects/cleanmasters.png"
                alt="Clean Masters Renhold"
                fill
                style={{ objectFit: "cover" }}
                className="group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 767px) 100vw, 320px"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                Clean Masters Renhold
                <FaArrowRight className="text-sm text-rose-500 transform group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {language === "no"
                  ? "Lokale SEO-gevinster hjalp dette Bergen-baserte rengjøringsbyrået med å rangere på sentrale søk innen rengjøring, med 40 % økning i nettrafikk og 25 % flere henvendelser i løpet av de tre første månedene."
                  : "Local SEO gains helped this Bergen-based cleaning company rank for key cleaning-service searches, with a 40% increase in web traffic and 25% more inquiries within the first three months."}
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/40" aria-labelledby="seo-faq-heading">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 id="seo-faq-heading" className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">
            {language === "no" ? "Ofte stilte spørsmål" : "Frequently Asked Questions"}
          </h2>
          <div className="divide-y divide-slate-200 dark:divide-slate-800">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div key={i} className="py-5">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-slate-900 dark:text-white text-base md:text-lg">{tr(item.q)}</span>
                    <span className={`text-rose-500 text-2xl flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} aria-hidden="true">+</span>
                  </button>
                  <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{tr(item.a)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white dark:bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter uppercase">
              {language === "no" ? "Se hvor synlig du er" : "See How Visible"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">
                {language === "no" ? "i dag" : "You Are Today"}
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 font-medium leading-relaxed">
              {language === "no"
                ? "Få en gratis, automatisert SEO- og GEO-sjekk av nettsiden din på under ett minutt."
                : "Get a free, automated SEO & GEO scan of your site in under a minute."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/free-seo-audit"
                className="w-full sm:w-auto bg-gradient-to-r from-rose-500 to-amber-500 text-white py-5 px-12 rounded-full hover:scale-105 transition-all duration-300 text-xl font-black shadow-xl uppercase tracking-tighter"
              >
                {language === "no" ? "Gratis SEO-sjekk" : "Free SEO Audit"}
              </Link>
              <Link
                href="/pricing"
                className="w-full sm:w-auto py-5 px-12 rounded-full border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300 text-xl font-black uppercase tracking-tighter"
              >
                {language === "no" ? "Se priser" : "View Pricing"}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SeoClient;
