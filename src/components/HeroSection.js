"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from "@/context/LanguageContext";
import { FaArrowRight } from "react-icons/fa";
import AnimatedGrid from "./AnimatedGrid";

// Helper to highlight the marked character (preceded by |)
const HighlightedText = ({ text }) => {
  if (!text) return null;

  const parts = text.split('|');
  if (parts.length > 1) {
    const before = parts[0];
    const after = parts[1];
    const highlightedChar = after.charAt(0);
    const rest = after.substring(1);

    return (
      <>
        {before}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">{highlightedChar}</span>
        {rest}
      </>
    );
  }

  return <>{text}</>;
};

const TypewriterTitle = ({ text, delay = 50 }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setDisplayText("");
    setIsDone(false);
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        // Skip the pipe character conceptually but keep it for highlight logic later
        // Actually, we should strip the pipe for the typing but keep track of where it was
        // Optimization: Type the underlying string, then apply highlight.
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setIsDone(true);
      }
    }, delay);
    return () => clearInterval(interval);
  }, [text, delay]);

  return (
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-[1.1] min-h-[1.2em] bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-rose-400 to-amber-500 drop-shadow-sm font-satoshi">
      <HighlightedText text={displayText} />
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[3px] h-8 md:h-11 bg-rose-500 ml-1 align-middle rounded-full"
      />
    </h1>
  );
};

const HeroSection = ({ isHomePage = false, title, subtitle }) => {
  const { t, language } = useLanguage();
  const pathname = usePathname();
  const [index, setIndex] = useState(0);

  const phrases = t('hero.phrases') || [];

  useEffect(() => {
    if (isHomePage && phrases.length > 0) {
      const interval = setInterval(
        () => setIndex((prev) => (prev + 1) % phrases.length),
        5000 // Increased time to allow typing to finish and be read
      );
      return () => clearInterval(interval);
    }
  }, [isHomePage, phrases.length]);

  return (
    <section className={`relative flex items-center justify-center overflow-hidden ${isHomePage ? 'min-h-[100vh]' : 'min-h-[60vh] pt-32'} bg-slate-50 dark:bg-[#020617]`}>
      
      {/* Refined Background Elements - Very subtle and professional */}
      <AnimatedGrid />
      {/* Dynamic Color Bomb Background (vibrant in light mode, subtle in dark) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] max-w-[600px] rounded-full bg-gradient-to-tr from-rose-400/25 to-amber-300/20 blur-[100px] dark:from-rose-500/10 dark:to-transparent animate-orb-float-1" />
        <div className="absolute -bottom-[15%] -right-[10%] w-[50vw] h-[50vw] max-w-[550px] rounded-full bg-gradient-to-br from-indigo-400/20 to-purple-300/15 blur-[110px] dark:from-slate-500/5 dark:to-transparent animate-orb-float-2" />
        <div className="absolute top-[20%] right-[15%] w-[45vw] h-[45vw] max-w-[450px] rounded-full bg-gradient-to-tr from-cyan-400/15 to-emerald-300/10 blur-[90px] dark:from-indigo-500/5 dark:to-transparent animate-orb-float-3" />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full max-w-5xl flex justify-center items-center text-center">
        <motion.div
          className="flex flex-col items-center justify-center w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {isHomePage ? (
            <>

              {/* Typewriter Title */}
              <div className="h-20 md:h-28 flex items-center justify-center mb-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${language}-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TypewriterTitle text={phrases[index] || ""} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mb-12 leading-relaxed font-medium">
                {t('hero.subtitle')}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
                <Link 
                  href="/pricing" 
                  className="w-full sm:w-auto px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold tracking-wide hover:shadow-xl hover:shadow-slate-900/20 dark:hover:shadow-white/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    View Pricing
                    <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                  </span>
                  {/* Active Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full z-0 bg-gradient-to-r from-transparent via-white/20 dark:via-black/10 to-transparent animate-shimmer" />
                </Link>
                <Link 
                  href="/services" 
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-full font-bold tracking-wide hover:border-slate-900 dark:hover:border-white hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  {t('nav.services') || "Our Services"}
                </Link>
              </div>
            </>
          ) : (
            <>
              {/* Inner Page Layout */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-rose-400 to-amber-500 uppercase drop-shadow-sm font-satoshi mb-6"
              >
                {title}
              </motion.h1>
              {subtitle && (
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed font-medium">
                  {subtitle}
                </p>
              )}
              {pathname?.startsWith('/services/') && pathname !== '/services' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-8"
                >
                  <Link 
                    href="/pricing" 
                    className="relative inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-rose-500 via-amber-500 to-rose-500 bg-[length:200%_auto] text-white rounded-full font-black tracking-wide uppercase shadow-lg shadow-rose-500/20 hover:scale-105 hover:bg-right transition-all duration-500 overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      View Packages
                      <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                    </span>
                    {/* Active Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full z-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                  </Link>
                </motion.div>
              )}
            </>
          )}
        </motion.div>
      </div>

      {/* Down arrow for homepage */}
      {isHomePage && (
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer z-20 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: "smooth" })}
        >
          <span className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 text-slate-400 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
          >
            &darr;
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;