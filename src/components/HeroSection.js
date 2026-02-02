"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Link from 'next/link';
import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";
import { useLanguage } from "@/context/LanguageContext";

const WaveLayers = dynamic(() => import("./WaveLayers"), { ssr: false });
const FloatingDots = dynamic(() => import("./FloatingDots"), { ssr: false });

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
        <span className="text-yellow-400">{highlightedChar}</span>
        {rest}
      </>
    );
  }

  // Fallback: Return text as is if no marker found
  return <>{text}</>;
};

const HeroSection = ({ isHomePage = false, title, subtitle }) => {
  const { t, language } = useLanguage();
  const [index, setIndex] = useState(0);
  const heroRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const phrases = t('hero.phrases') || [];

  useEffect(() => {
    const updateDimensions = () => {
      if (heroRef.current) {
        setDimensions({
          width: heroRef.current.offsetWidth,
          height: heroRef.current.offsetHeight,
        });
      }
    };

    updateDimensions(); // Set initial dimensions
    window.addEventListener('resize', updateDimensions);

    if (isHomePage) {
      const interval = setInterval(
        () => setIndex((prev) => (prev + 1) % phrases.length),
        3000 // change every 3 seconds
      );
      return () => {
        clearInterval(interval);
        window.removeEventListener('resize', updateDimensions);
      };
    }

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [isHomePage, phrases.length]);

  return (
    <section className={`hero ${isHomePage ? '' : 'hero-inner'}`} ref={heroRef}>
      <div className="hero-background"></div>

      {/* Background Layers */}
      <WaveLayers />
      <FloatingDots
        containerWidth={dimensions.width}
        containerHeight={dimensions.height}
        style={{ zIndex: 99 }}
      />

      {/* Hero Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {isHomePage ? (
          <AnimatePresence mode="wait">
            <motion.h1
              key={`${language}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <HighlightedText text={phrases[index]} />
            </motion.h1>
          </AnimatePresence>
        ) : (
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h1>
        )}

        {isHomePage ? (
          <>
            <p className="hero-tagline">
              {t('hero.subtitle')}
            </p>
            <div className="hero-cta-container">
              <Link href="/request-quote" passHref>
                <button className="btn-gradient-primary h-14">
                  <span>{t('hero.cta')}</span>
                </button>
              </Link>
            </div>
          </>
        ) : (
          subtitle && <p className="hero-tagline">{subtitle}</p>
        )}
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <span className="text-3xl text-primary font-bold">&darr;</span>
      </motion.div>
    </section >
  );
};

export default HeroSection;