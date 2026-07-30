"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function AnnouncementBar() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Timer logic: Resets dynamically at midnight
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date(now);
      endOfDay.setHours(23, 59, 59, 999);
      
      const difference = endOfDay - now;
      let timeLeftObj = { hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        timeLeftObj = {
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeftObj;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null; // Hydration safe

  return (
<div className="absolute top-0 left-0 w-full z-[1001] bg-gradient-to-r from-red-600 via-red-500 to-red-600 shadow-[0_4px_20px_rgba(255,0,0,0.4)] overflow-hidden h-[44px] flex items-center">
  <div className="w-full h-full flex items-center justify-center gap-2 sm:gap-6 px-4">
    <div className="flex items-center gap-2 text-white text-[9px] sm:text-xs md:text-sm font-black tracking-widest animate-pulse uppercase shadow-sm">
      <span className="text-sm sm:text-xl">🔥</span>
      <span>FLASH SALE: 10% OFF TODAY!</span>
    </div>
    <div className="flex items-center gap-2 sm:gap-4">
      <div className="flex items-center gap-1 font-mono text-[10px] sm:text-xs md:text-sm text-white bg-black/20 px-2 py-0.5 sm:px-3 sm:py-1 rounded-md border border-white/10 shadow-inner">
        <span>{String(timeLeft.hours).padStart(2, '0')}</span>:
        <span>{String(timeLeft.minutes).padStart(2, '0')}</span>:
        <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
      </div>
      <Link 
        href="/pricing" 
        className="inline-flex items-center gap-1 px-3 py-1 rounded-full !bg-white !text-slate-950 text-[10px] md:text-xs font-bold tracking-wider hover:!bg-slate-100 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md shadow-black/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-600 whitespace-nowrap group"
      >
        <span>Claim Now</span>
        <FaArrowRight className="text-[8px] transform group-hover:translate-x-0.5 transition-transform duration-200" />
      </Link>
    </div>
  </div>

  {/* Scrolling Line Indicator */}
  <div className="absolute bottom-0 left-0 w-full h-[2px] sm:h-[3px] bg-rose-800/30 overflow-hidden">
    <div className="h-full bg-red-500 w-[100px] sm:w-[250px] shadow-[0_0_15px_rgba(255,0,0,1)] animate-marquee" style={{ animationDuration: '4s' }}></div>
  </div>
</div>
  );
}
