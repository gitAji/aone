"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

// Aone's existing published business number (same one in the footer/header
// and the site's schema.org JSON-LD) -- confirmed with the business owner
// as the number to use for WhatsApp too.
const WHATSAPP_NUMBER = "4740071654";

const PREFILLED_MESSAGE = {
  en: "Hi Aone! I'd like to talk about a project.",
  no: "Hei Aone! Jeg ønsker å snakke om et prosjekt.",
};

export default function WhatsAppButton() {
  const { language } = useLanguage();
  const message = PREFILLED_MESSAGE[language] || PREFILLED_MESSAGE.en;
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

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
      className="group fixed bottom-24 right-6 z-[99999]"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-[#25D366]/40 hover:scale-105 active:scale-95 transition-all duration-300 border border-[#1ebe57]"
        aria-label={language === "no" ? "Chat med oss på WhatsApp" : "Chat with us on WhatsApp"}
      >
        <FaWhatsapp className="text-2xl" />
      </a>
      <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-slate-950 px-2.5 py-1.5 text-[9px] font-bold tracking-widest text-white opacity-0 scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 shadow-xl hidden sm:block">
        WHATSAPP
      </span>
    </motion.div>
  );
}
