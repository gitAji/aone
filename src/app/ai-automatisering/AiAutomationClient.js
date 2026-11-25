"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaBolt,
  FaPlug,
  FaComments,
  FaClipboardList,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import HeroSection from "@/components/HeroSection";
import { useLanguage } from "@/context/LanguageContext";

const WHY_CARDS = [
  {
    icon: FaBolt,
    title: { en: "Hours back every week", no: "Timer tilbake hver uke" },
    description: {
      en: "The repetitive, manual work -- quote requests, follow-ups, data entry -- handled automatically instead of by your team.",
      no: "Det repeterende, manuelle arbeidet -- tilbudsforespørsler, oppfølging, dataregistrering -- håndteres automatisk i stedet for av teamet ditt.",
    },
  },
  {
    icon: FaComments,
    title: { en: "Faster response, every time", no: "Raskere respons, hver gang" },
    description: {
      en: "Customers get an instant reply around the clock, instead of waiting for someone to be free.",
      no: "Kundene får umiddelbart svar døgnet rundt, i stedet for å vente på at noen har ledig tid.",
    },
  },
  {
    icon: FaPlug,
    title: { en: "Your tools, connected", no: "Verktøyene dine, koblet sammen" },
    description: {
      en: "CRM, email, calendar and website forms working together, instead of information trapped in separate systems.",
      no: "CRM, e-post, kalender og nettsideskjemaer som jobber sammen, i stedet for informasjon låst i separate systemer.",
    },
  },
];

const INCLUDED = [
  {
    icon: FaComments,
    title: { en: "AI chatbots", no: "AI-chatbots" },
    description: {
      en: "Answer common questions, qualify enquiries and hand off to a human exactly when needed.",
      no: "Svarer på vanlige spørsmål, kvalifiserer henvendelser og kobler over til et menneske akkurat når det trengs.",
    },
  },
  {
    icon: FaClipboardList,
    title: { en: "Lead qualification & follow-up", no: "Lead-kvalifisering og oppfølging" },
    description: {
      en: "New enquiries sorted, scored and routed automatically, with follow-ups that don't slip through the cracks.",
      no: "Nye henvendelser sorteres, scores og rutes automatisk, med oppfølging som ikke faller mellom stolene.",
    },
  },
  {
    icon: FaRobot,
    title: { en: "Custom AI agents", no: "Skreddersydde AI-agenter" },
    description: {
      en: "Purpose-built automations for your specific workflow -- not a generic off-the-shelf bot.",
      no: "Skreddersydde automatiseringer for din spesifikke arbeidsflyt -- ikke en generisk standardbot.",
    },
  },
  {
    icon: FaPlug,
    title: { en: "CRM & API integrations", no: "CRM- og API-integrasjoner" },
    description: {
      en: "We connect the systems you already use, rather than asking you to switch tools.",
      no: "Vi kobler sammen systemene du allerede bruker, i stedet for å be deg bytte verktøy.",
    },
  },
];

const FAQ_ITEMS = [
  {
    q: { en: "What does AI automation cost?", no: "Hva koster AI-automatisering?" },
    a: {
      en: "Automation projects are priced by scope -- from a simple chatbot to a full multi-integration workflow. We always start with a discovery call before giving a fixed quote.",
      no: "AI-automatiseringsprosjekter prises ut fra omfang -- fra en enkel chatbot til en full arbeidsflyt med flere integrasjoner. Vi starter alltid med en kartlegging før vi gir et fast tilbud.",
    },
  },
  {
    q: { en: "Do I need technical skills to use it?", no: "Trenger jeg teknisk kompetanse for å bruke løsningen?" },
    a: {
      en: "No. We build these so you and your team can use and adjust them yourselves, with training and documentation included.",
      no: "Nei. Vi bygger løsningene slik at du og teamet ditt kan bruke og justere dem selv, med opplæring og dokumentasjon inkludert.",
    },
  },
  {
    q: { en: "What systems can you connect?", no: "Hvilke systemer kan dere koble sammen?" },
    a: {
      en: "We connect CRMs, email, calendars, website forms and most tools with an API -- we map your specific systems in an initial conversation.",
      no: "Vi kobler sammen CRM, e-post, kalender, nettside-skjemaer og de fleste verktøy med et API -- vi kartlegger dine spesifikke systemer i en innledende samtale.",
    },
  },
];

const AiAutomationClient = () => {
  const { language } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const tr = (field) => (field && typeof field === "object" ? field[language] || field.en : field);

  return (
    <div className="service-detail-page bg-slate-50 dark:bg-slate-950 min-h-screen">
      <HeroSection
        title={language === "no" ? "Automatiser Bedriften med Smarte AI-arbeidsflyter" : "Automate Your Business With Smart AI Workflows"}
        subtitle={language === "no"
          ? "AI-automatisering som tar seg av repeterende arbeid, kvalifiserer leads og kobler sammen verktøyene dine -- slik at teamet bruker tiden på det som faktisk gir vekst."
          : "AI automation that handles repetitive work, qualifies leads, and connects your tools together -- so your team spends time on what actually grows the business."}
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
            {language === "no" ? "Hva vi bygger" : "What We Build"}
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

      {/* Real proof -- genuine project features, not a fabricated case study */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex items-center gap-2 mb-10 text-sm font-bold text-rose-500 uppercase tracking-widest">
            <FaCheckCircle className="text-xs" />
            {language === "no" ? "Ekte prosjekter, ikke konstruerte case" : "Real projects, not constructed case studies"}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/references/clean-masters-renhold"
              className="group block rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image src="/images/projects/cleanmasters.png" alt="Clean Masters Renhold" fill style={{ objectFit: "cover" }} className="group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 767px) 100vw, 50vw" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center justify-between">
                  Clean Masters Renhold
                  <FaArrowRight className="text-sm text-rose-500 transform group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {language === "no"
                    ? "AI-drevet verktøy for umiddelbare pristilbud ga 60 % raskere responstid mot kunder."
                    : "An AI-driven instant quote generator gave a 60% faster response time to customers."}
                </p>
              </div>
            </Link>
            <Link
              href="/references/trendify-tools"
              className="group block rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image src="/images/projects/trendify.png" alt="Trendify Tools" fill style={{ objectFit: "cover" }} className="group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 767px) 100vw, 50vw" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center justify-between">
                  Trendify Tools
                  <FaArrowRight className="text-sm text-rose-500 transform group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {language === "no"
                    ? "Automatisert verktøyoppdagelse via AI-chat hjelper besøkende å finne riktig produkt uten manuell oppfølging."
                    : "Automated tool discovery via AI chat helps visitors find the right product without manual follow-up."}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/40" aria-labelledby="automation-faq-heading">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 id="automation-faq-heading" className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">
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
              {language === "no" ? "Finn dine" : "Find Your"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">
                {language === "no" ? "automatiseringsmuligheter" : "Automation Opportunities"}
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 font-medium leading-relaxed">
              {language === "no"
                ? "Book en uforpliktende samtale -- vi kartlegger hvor du kan spare mest tid."
                : "Book a no-obligation call -- we'll map out where you can save the most time."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/request-quote"
                className="w-full sm:w-auto bg-gradient-to-r from-rose-500 to-amber-500 text-white py-5 px-12 rounded-full hover:scale-105 transition-all duration-300 text-xl font-black shadow-xl uppercase tracking-tighter"
              >
                {language === "no" ? "Få et tilbud" : "Get a Quote"}
              </Link>
              <Link
                href="/free-consultation"
                className="w-full sm:w-auto py-5 px-12 rounded-full border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300 text-xl font-black uppercase tracking-tighter"
              >
                {language === "no" ? "Gratis konsultasjon" : "Free Consultation"}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AiAutomationClient;
