"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaTimes, FaPaperPlane } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

// Aone's existing published business number (same one in the footer/header
// and the site's schema.org JSON-LD) -- confirmed with the business owner
// as the number to use for WhatsApp too.
const WHATSAPP_NUMBER = "4740071654";

const PREFILLED_MESSAGE = {
  en: "Hi Aone! I'd like to talk about a project.",
  no: "Hei Aone! Jeg ønsker å snakke om et prosjekt.",
};

const WELCOME_TEXT = {
  en: {
    greeting: "Hi there! 👋",
    body: "Have a project in mind? Start a chat with our team on WhatsApp — we usually reply within minutes.",
    cta: "Start Chat",
  },
  no: {
    greeting: "Hei! 👋",
    body: "Har du et prosjekt i tankene? Start en chat med oss på WhatsApp — vi svarer vanligvis i løpet av få minutter.",
    cta: "Start chat",
  },
};

export default function WhatsAppButton() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const message = PREFILLED_MESSAGE[language] || PREFILLED_MESSAGE.en;
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const t = WELCOME_TEXT[language] || WELCOME_TEXT.en;

  // Desktop gets a welcome-message popup before handing off to WhatsApp
  // (mirrors a live-chat widget's pre-chat greeting); mobile skips straight
  // to the WhatsApp app/web link, which is the native, expected behavior
  // there and keeps the tap count to one.
  const handleClick = (e) => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.3 }}
      // Paired with the live-chat corner (Tawk.to, bottom-right) rather than
      // the accessibility/cookie-settings corner (bottom-left) -- grouped by
      // purpose: this stack is "ways to reach a human," the other is "how
      // the site behaves for you." Stacked at the same bottom-24 offset
      // used on the left so it clears Tawk's bubble at its default
      // bottom-right position (Tawk's own dashboard controls that, not this
      // code, and embed.tawk.to isn't reachable from this sandbox to
      // screenshot the real bubble -- worth a quick visual check on the
      // live deploy preview).
      // Now shown on both mobile and desktop, alongside Tawk.to (desktop-only,
      // see LayoutClientWrapper.js) -- bottom-24 keeps it clear of Tawk's
      // bubble at its default bottom-right position.
      className="group fixed bottom-24 right-6 z-[99999]"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="absolute bottom-full right-0 mb-4 w-72 rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="bg-[#25D366] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <FaWhatsapp className="text-lg" />
                WhatsApp
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label={language === "no" ? "Lukk" : "Close"}
                className="text-white/80 hover:text-white transition-colors"
              >
                <FaTimes />
              </button>
            </div>
            <div className="p-4">
              <p className="text-sm font-bold text-slate-900 dark:text-white mb-1">{t.greeting}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{t.body}</p>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full rounded-full bg-[#25D366] text-white font-bold text-sm py-2.5 hover:bg-[#1ebe57] active:scale-95 transition-all duration-200"
              >
                {t.cta}
                <FaPaperPlane className="text-xs" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Continuous attention-drawing pulse ring behind the button */}
      <span className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="relative w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-[#25D366]/40 hover:scale-105 active:scale-95 transition-all duration-300 border border-[#1ebe57]"
        aria-label={language === "no" ? "Chat med oss på WhatsApp" : "Chat with us on WhatsApp"}
        aria-expanded={isOpen}
      >
        <FaWhatsapp className="text-2xl" />
      </a>
      <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-slate-950 px-2.5 py-1.5 text-[9px] font-bold tracking-widest text-white opacity-0 scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 shadow-xl hidden sm:block">
        WHATSAPP
      </span>
    </motion.div>
  );
}
