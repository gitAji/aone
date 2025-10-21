"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Link from 'next/link';
import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";

const WaveLayers = dynamic(() => import("./WaveLayers"), { ssr: false });
const FloatingDots = dynamic(() => import("./FloatingDots"), { ssr: false });

// Text phrases for rotation
const phrases = [
  "Creating digital experiences that inspire.",
  "Building brands that ordinary people love.",
  "Innovating with technology for growth.",
];

const HeroSection = ({ isHomePage = false, title, subtitle }) => {
  const [index, setIndex] = useState(0);
  const heroRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

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
  }, [isHomePage]);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-background"></div>

      {/* Top Nav */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 z-10">
        <Logo />
        <HamburgerMenu />
      </div>

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
              key={phrases[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              {phrases[index]}
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
              We’re all about challenging the norm to bring fresh, creative, and
              unforgettable digital solutions.
              <motion.span
                className="scroll-down-arrow"
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
                &darr;
              </motion.span>
            </p>
            <Link href="/request-quote" passHref>
              <button className="btn-outline-gradient mt-8">
                Get a Quote
              </button>
            </Link>
            
          </>
        ) : (
          subtitle && <p className="hero-tagline">{subtitle}</p>
        )}
      </motion.div>
    </section>
  );
};

export default HeroSection;