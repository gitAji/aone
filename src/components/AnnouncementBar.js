"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
    <div className="absolute top-0 left-0 w-full z-[1001] bg-gradient-to-r from-rose-600 via-rose-500 to-rose-600 shadow-[0_4px_20px_rgba(225,29,72,0.4)] overflow-hidden h-[44px] flex items-center">
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
          <Link href="/pricing" className="bg-white text-rose-600 border-2 border-transparent hover:bg-transparent hover:text-white hover:border-white px-2 py-0.5 sm:px-4 sm:py-1 rounded-full text-[8px] sm:text-[10px] md:text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-xl whitespace-nowrap">
            Claim Now
          </Link>
        </div>
      </div>

      {/* Scrolling Line Indicator */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] sm:h-[3px] bg-rose-800/30 overflow-hidden">
        <div className="h-full bg-amber-400 w-[100px] sm:w-[250px] shadow-[0_0_15px_rgba(251,191,36,1)] animate-marquee" style={{ animationDuration: '4s' }}></div>
      </div>
    </div>
  );
}
