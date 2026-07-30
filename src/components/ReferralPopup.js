"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { fetchPopupContent } from "@/lib/wordpress";
import { useLanguage } from "@/context/LanguageContext";

const ReferralPopup = () => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  useEffect(() => {
    const getPopupContent = async () => {
      // Hardcoded fallback logic or simplified fetch if needed
      // const content = await fetchPopupContent(); 
      // For now we can rely on static or simplified content for the sleek version

      // Delay initial appearance
      const timer = setTimeout(() => {
        setShouldRender(true);
        setTimeout(() => setIsVisible(true), 100);
      }, 3000); // 3 seconds delay
      return () => clearTimeout(timer);
    };

    getPopupContent();
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setShouldRender(false), 500);
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed bottom-6 left-6 z-[9999] max-w-xs w-full transition-all duration-500 ease-out transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
        }`}
    >
      <div className="relative overflow-hidden rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-5 pb-4">

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="flex flex-col gap-3">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-rose-500 mb-1">
              {language === 'no' ? 'Spesialtilbud' : 'Special Offer'}
            </h3>
            <p className="text-slate-800 dark:text-white font-semibold text-lg leading-tight">
              {language === 'no' ? 'Få gratis konsultasjon & 10% rabatt!' : 'Get a Free Consultation & 10% Off!'}
            </p>
          </div>

          <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
            {language === 'no'
              ? 'Bestill din gratis strategisamtale i dag og start veksten.'
              : 'Book your free strategy call today and kickstart your growth.'}
          </p>

          <Link href="/contact" className="w-full mt-1">
            <button
              onClick={handleClose}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <span>{language === 'no' ? 'Få Tilbudet' : 'Get Offer'}</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ReferralPopup;
