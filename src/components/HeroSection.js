"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
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

const HeroSection = ({ isHomePage = false }) => {
  const [index, setIndex] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % phrases.length),
      3000 // change every 3 seconds
    );
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
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
      />

      {/* Hero Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
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

        {isHomePage && (
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
        )}
      </motion.div>
    </section>
  );
};

export default HeroSection;