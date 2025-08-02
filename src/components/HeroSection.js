'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const WaveLayers = dynamic(() => import('./WaveLayers'), { ssr: false });
const FloatingDots = dynamic(() => import('./FloatingDots'), { ssr: false });

const HeroSection = ({ title, isHomePage = false }) => {
  const [heroDimensions, setHeroDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window !== 'undefined') {
        setHeroDimensions({ width: window.innerWidth, height: window.innerHeight });
      }
    };

    updateDimensions();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateDimensions);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateDimensions);
      }
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-background"></div>
      <WaveLayers />
      {typeof window !== 'undefined' && <FloatingDots containerWidth={heroDimensions.width} containerHeight={heroDimensions.height} />}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1>{title}</h1>
        {isHomePage && (
          <>
            <p className="hero-tagline">We’re all about challenging the norm to bring fresh, creative, and unforgettable digital solutions. <motion.span
              className="scroll-down-arrow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1, repeat: Infinity, repeatType: "reverse" }}
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              &darr;
            </motion.span></p>
          </>
        )}
      </motion.div>
    </section>
  );
};

export default HeroSection;
