'use client';

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaStar, FaRocket, FaShieldAlt } from "react-icons/fa";

const CTASection = () => {
  const { t } = useLanguage();

  const trust = [
    { icon: FaStar,      stat: "4.9",  label: t('cta.trust.rating')     || "Client Rating" },
    { icon: FaRocket,    stat: "48h",  label: t('cta.trust.turnaround') || "Fast Onboarding" },
    { icon: FaShieldAlt, stat: "100%", label: t('cta.trust.guarantee')  || "Satisfaction" },
  ];

  return (
    <section aria-labelledby="cta-heading" className="relative overflow-hidden py-28 md:py-36">

      {/* Dark base */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* Animated orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-rose-600/15 blur-[120px] animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[100px] animate-pulse [animation-delay:2s]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">

        {/* Live badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 text-white/70 text-xs font-semibold tracking-widest uppercase mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          {t('cta.badge') || "Now Accepting New Clients"}
        </motion.div>

        {/* Headline */}
        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-clash text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6 max-w-4xl mx-auto"
        >
          {t('cta.title') || "Ready to"}{" "}
          <span className="bg-gradient-to-r from-rose-400 via-amber-400 to-rose-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">
            {t('cta.titleHighlight') || "Scale?"}
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t('cta.subtitle') || "From AI chatbots to full-scale web platforms — we build digital infrastructure that grows with your business."}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="/request-quote"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-500 to-amber-500 text-white font-bold rounded-full text-base shadow-2xl shadow-rose-500/25 hover:shadow-rose-500/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              {t('cta.button') || "Get Your Free Quote"}
              <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer z-0" />
          </Link>

          <Link
            href="/free-consultation"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white/75 font-semibold text-base hover:bg-white/8 hover:border-white/30 hover:text-white transition-all duration-300 backdrop-blur-sm"
          >
            {t('cta.secondaryButton') || "Book a Free Call"}
          </Link>
        </motion.div>

        {/* Divider */}
        <div className="w-px h-8 bg-white/10 mx-auto mb-10" />

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-10 md:gap-20"
        >
          {trust.map(({ icon: Icon, stat, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-1.5 text-white mb-1">
                <Icon className="text-amber-400 text-xs" />
                <span className="text-2xl font-bold font-clash">{stat}</span>
              </div>
              <span className="text-slate-600 text-[10px] font-semibold tracking-[0.2em] uppercase">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
