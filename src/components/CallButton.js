"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

// Aone's existing published business number (same one in the footer/header
// and the site's schema.org JSON-LD, and the same format used for the
// other tel: links in Footer.js / HamburgerMenu.js).
const PHONE_NUMBER = "40071654";
const PHONE_DISPLAY = "400 71 654";

export default function CallButton() {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.3 }}
      // Same corner/offset the WhatsApp button used to occupy -- paired
      // with Tawk's corner (bottom-right, "ways to reach a human") rather
      // than the settings corner (bottom-left, "how the site behaves for
      // you").
      className="group fixed bottom-24 right-6 z-[99999]"
    >
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="relative w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-lg hover:shadow-rose-500/40 hover:scale-105 active:scale-95 transition-all duration-300 border border-rose-600"
        aria-label={language === "no" ? `Ring oss på ${PHONE_DISPLAY}` : `Call us at ${PHONE_DISPLAY}`}
      >
        <FaPhoneAlt className="text-lg" />
      </a>
      <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-slate-950 px-2.5 py-1.5 text-[9px] font-bold tracking-widest text-white opacity-0 scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 shadow-xl hidden sm:block">
        {language === "no" ? "RING OSS" : "CALL US"}
      </span>
    </motion.div>
  );
}
