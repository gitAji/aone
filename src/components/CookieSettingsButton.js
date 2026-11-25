"use client";
import React from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import { FaCookieBite } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

// Dedicated cookie-preferences icon -- separate from SettingsFab
// (accessibility only) so cookie controls have their own clearly
// labeled, one-click entry point instead of being buried inside a
// combined menu. Stacked directly above SettingsFab in the same
// bottom-left corner, same vertical-stack pattern CallButton uses on
// the right (bottom-6 / bottom-24).
const CookieSettingsButton = () => {
  const { language } = useLanguage();
  const isNo = language === "no";

  return (
    <div className="group fixed bottom-24 left-6 z-[99999]">
      <button
        onClick={() => CookieConsent.showPreferences()}
        className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 border border-slate-800 dark:border-slate-200"
        aria-label={isNo ? "Informasjonskapsler" : "Cookie Preferences"}
      >
        <FaCookieBite className="text-sm" />
      </button>
      <span className="pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-slate-950 dark:bg-white px-2.5 py-1.5 text-[9px] font-black uppercase tracking-widest text-white dark:text-slate-900 opacity-0 scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 shadow-xl hidden sm:block">
        {isNo ? "INFORMASJONSKAPSLER" : "COOKIE SETTINGS"}
      </span>
    </div>
  );
};

export default CookieSettingsButton;
