"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { FaTimes, FaArrowRight } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

// Fires once per browser session when the cursor crosses the top edge of
// the viewport heading for the tab/address bar -- the standard desktop
// "about to leave the tab" signal. There's no touch equivalent of a cursor
// leaving the viewport, so this is desktop-only (matches the min-width
// breakpoint already used elsewhere in this app, e.g. TawkToMessenger's
// desktop-only gating in LayoutClientWrapper.js) rather than guessing at an
// unreliable mobile proxy (scroll depth, back-button) that would misfire.
const SESSION_KEY = "aone_exit_intent_shown";
const ARM_DELAY_MS = 4000; // ignore the first few seconds -- cursor often starts near the top edge on page load

export default function ExitIntentPopup() {
  const { language } = useLanguage();
  const isNo = language === "no";
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(max-width: 767px)").matches) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    let armed = false;
    const armTimer = setTimeout(() => {
      armed = true;
    }, ARM_DELAY_MS);

    const handleMouseLeave = (e) => {
      if (!armed || e.clientY > 0) return;
      setIsOpen(true);
      sessionStorage.setItem(SESSION_KEY, "1");
      document.removeEventListener("mouseleave", handleMouseLeave);
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      clearTimeout(armTimer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const close = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            onClick={close}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-intent-title"
            className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-8 sm:p-10 text-center"
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={isNo ? "Lukk" : "Close"}
            >
              <FaTimes />
            </button>

            <p className="text-rose-700 dark:text-rose-400 text-xs font-bold uppercase tracking-widest mb-3">
              {isNo ? "Før du går" : "Before you go"}
            </p>
            <h2 id="exit-intent-title" className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
              {isNo ? "Få et gratis tilbud på ditt prosjekt" : "Get a free quote for your project"}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              {isNo
                ? "Fortell oss kort om prosjektet ditt, så sender vi deg et uforpliktende tilbud — ingen kostnad, ingen forpliktelser."
                : "Tell us a bit about your project and we'll send a free, no-obligation quote — no cost, no strings attached."}
            </p>

            <Link href="/request-quote" onClick={close} className="block">
              <button className="w-full flex items-center justify-center gap-3 bg-rose-600 hover:bg-rose-700 text-white font-black py-4 rounded-xl shadow-lg shadow-rose-500/20 transition-all duration-300 transform hover:-translate-y-0.5">
                <span>{isNo ? "Be om tilbud" : "Request a quote"}</span>
                <FaArrowRight className="text-sm" />
              </button>
            </Link>
            <button
              onClick={close}
              className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
            >
              {isNo ? "Nei takk, ikke nå" : "No thanks, not now"}
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
