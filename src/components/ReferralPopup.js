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
      const content = await fetchPopupContent();
      setPopupContent(content);

      // Delay initial appearance for better UX
      const timer = setTimeout(() => {
        setShouldRender(true);
        setTimeout(() => setIsVisible(true), 100);
      }, 2000);
      return () => clearTimeout(timer);
    };

    getPopupContent();
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setShouldRender(false), 500); // Wait for transition
  };

  if (!shouldRender) return null;

  const title = popupContent?.title?.rendered || t('referral.greetings');
  const contentHtml = popupContent?.content?.rendered;

  return (
    <div
      className={`fixed bottom-6 right-6 z-[10000] max-w-sm w-[calc(100%-3rem)] transition-all duration-700 ease-out transform ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-20 opacity-0 scale-95"
        }`}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.15)] border border-gray-100 bg-white/95 backdrop-blur-xl group text-slate-900">
        {/* Subtle Decorative Glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-red-100/40 to-blue-100/40 blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>


        <button
          onClick={handleClose}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-400 hover:text-red-500 transition-all duration-300 border border-gray-100 group/close active:scale-90"
          aria-label="Close"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover/close:rotate-90 transition-transform duration-500">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="p-8 relative z-10">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-red-500 to-orange-500 flex items-center justify-center text-white text-xl shadow-lg">
              🎁
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 leading-tight tracking-tight uppercase" dangerouslySetInnerHTML={{ __html: title }} />
              <div className="h-0.5 w-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mt-1"></div>
            </div>
          </div>

          <div className="text-slate-600">
            {contentHtml ? (
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} className="mb-6 text-base font-medium leading-relaxed" />
            ) : (
              <p className="text-lg mb-6 font-semibold leading-relaxed" dangerouslySetInnerHTML={{ __html: t('referral.offer') }} />
            )}
          </div>

          <div className="flex flex-col gap-4">
            <Link href="/free-consultation" className="w-full">
              <button
                onClick={handleClose}
                className="w-full btn-primary h-14"
              >
                <span>{t('referral.orderNow')}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>

            <div className="flex items-center justify-between mt-2">
              <button
                onClick={handleClose}
                className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 hover:text-red-500 transition-colors"
              >
                {language === 'no' ? 'Ikke nå' : 'Not Now'}
              </button>
              <Link
                href="/privacy-policy"
                onClick={handleClose}
                className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-300 hover:text-slate-500 transition-colors"
              >
                {t('referral.terms')}
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 w-full opacity-40"></div>
      </div>
    </div>
  );
};

export default ReferralPopup;
