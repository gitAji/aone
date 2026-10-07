"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import * as CookieConsent from "vanilla-cookieconsent";
import { FaCookieBite } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

// Module-level, not component state: React 18 Strict Mode double-invokes
// effects in dev (mount -> cleanup -> mount). CookieConsent.run() isn't
// idempotent -- calling it twice injects a second modal into the DOM and
// registers duplicate listeners -- so this guard is needed even though the
// component itself only ever mounts once in the real tree. Harmless in
// production, where effects only run once anyway.
let didInit = false;

const translations = {
  en: {
    consentModal: {
      title: "We value your privacy",
      description:
        "We use cookies to run this site and, with your permission, to understand how it's used and measure our ads. You choose what to allow.",
      acceptAllBtn: "Accept all",
      acceptNecessaryBtn: "Reject non-essential",
      showPreferencesBtn: "Manage preferences",
      footer:
        '<a href="/cookie-policy">Cookie Policy</a>\n<a href="/privacy-policy">Privacy Policy</a>',
    },
    preferencesModal: {
      title: "Cookie preferences",
      acceptAllBtn: "Accept all",
      acceptNecessaryBtn: "Reject all",
      savePreferencesBtn: "Save preferences",
      closeIconLabel: "Close",
      serviceCounterLabel: "Service|Services",
      sections: [
        {
          title: "Your privacy choices",
          description:
            "We use three kinds of cookies. Necessary cookies are always on; you choose whether to allow statistics and marketing cookies, and can change your mind at any time via the cookie icon in the corner of the screen.",
        },
        {
          title: "Necessary",
          description:
            "Required for the site to function correctly (e.g. remembering your theme and language choice). These don't track you and can't be switched off.",
          linkedCategory: "necessary",
        },
        {
          title: "Statistics",
          description:
            "Lets us see anonymized, aggregate usage patterns (via Microsoft Clarity) so we can understand what's working and improve the site. No ad targeting.",
          linkedCategory: "analytics",
        },
        {
          title: "Marketing",
          description:
            "Powers live chat support and lets us measure which ads actually bring customers (Google Ads conversion tracking).",
          linkedCategory: "marketing",
        },
      ],
    },
  },
  no: {
    consentModal: {
      title: "Vi bryr oss om personvernet ditt",
      description:
        "Vi bruker informasjonskapsler for å drifte nettsiden, og med din tillatelse for å forstå hvordan den brukes og måle effekten av annonsene våre. Du velger selv hva du vil tillate.",
      acceptAllBtn: "Godta alle",
      acceptNecessaryBtn: "Avvis ikke-nødvendige",
      showPreferencesBtn: "Administrer innstillinger",
      footer:
        '<a href="/cookie-policy">Cookieerklæring</a>\n<a href="/privacy-policy">Personvernerklæring</a>',
    },
    preferencesModal: {
      title: "Informasjonskapsel-innstillinger",
      acceptAllBtn: "Godta alle",
      acceptNecessaryBtn: "Avvis alle",
      savePreferencesBtn: "Lagre innstillinger",
      closeIconLabel: "Lukk",
      serviceCounterLabel: "Tjeneste|Tjenester",
      sections: [
        {
          title: "Dine personvernvalg",
          description:
            "Vi bruker tre typer informasjonskapsler. Nødvendige er alltid på; du velger selv om du vil tillate statistikk og markedsføring, og kan når som helst endre valget via cookie-ikonet nederst i skjermhjørnet.",
        },
        {
          title: "Nødvendige",
          description:
            "Kreves for at nettsiden skal fungere korrekt (f.eks. å huske tema- og språkvalg). Disse sporer deg ikke og kan ikke slås av.",
          linkedCategory: "necessary",
        },
        {
          title: "Statistikk",
          description:
            "Lar oss se anonymisert, samlet bruksmønster (via Microsoft Clarity) slik at vi kan forstå og forbedre nettsiden. Ingen annonsemålretting.",
          linkedCategory: "analytics",
        },
        {
          title: "Markedsføring",
          description:
            "Driver live chat-support og lar oss måle hvilke annonser som faktisk gir kunder (Google Ads konverteringssporing).",
          linkedCategory: "marketing",
        },
      ],
    },
  },
};

export default function CookieConsentManager() {
  const { language } = useLanguage();
  const isFirstLanguageSync = useRef(true);
  // Starts false so this doesn't double up with the consent banner itself
  // on a first visit -- it's meant as the lasting "change your mind" control
  // once a visitor has already answered, not a second way to answer.
  const [hasAnswered, setHasAnswered] = useState(false);

  useEffect(() => {
    if (didInit) return;
    didInit = true;

    CookieConsent.run({
      // The library's default (true) silently skips its own run() entirely
      // -- no banner, no modal, no reopen icon, nothing in the DOM at all --
      // for any visitor whose browser reports navigator.webdriver (true
      // under WebDriver automation: headless/automated browsers, some
      // embedded preview tooling) or a bot-like user agent. That's a much
      // bigger footgun than the thing it's meant to prevent: modern crawlers
      // (Googlebot included) fully render JS and see the page's real content
      // in the DOM regardless of a cookie overlay, so there's no indexing
      // cost to leaving this on for everyone.
      hideFromBots: false,
      guiOptions: {
        // Boxed "bottom right" card, not a full-width bar: the library
        // forces its own UI to an extreme max z-index (see its CSS --
        // --cc-z-index: 2147483647), so nothing we render can ever appear
        // above it. A full-width bar was tried and rejected for exactly
        // that reason: its hit area covers the *entire* bottom edge while
        // open, so it blocked the accessibility icon on the left too,
        // which this boxed layout (confined to the right) never did.
        // WhatsAppButton.js is instead hidden for the same brief
        // pre-answer window as the cookie-settings icon below --
        // see hasAnsweredConsent in LayoutClientWrapper.js.
        consentModal: {
          layout: "box",
          position: "bottom right",
          equalWeightButtons: true,
        },
        preferencesModal: {
          layout: "box",
          equalWeightButtons: true,
        },
      },
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        // Microsoft Clarity only -- pure behavioral analytics, no ad targeting.
        analytics: {
          autoClear: {
            cookies: [
              { name: /^_clck/ },
              { name: /^_clsk/ },
              { name: "_cltk" },
              { name: "CLID" },
              { name: "ANONCHK" },
              { name: "MR" },
              { name: "MUID" },
              { name: "SM" },
            ],
          },
        },
        // Google Tag Manager (hosting the Google Ads conversion tags
        // configured in the GTM dashboard) and the Tawk.to live chat widget.
        marketing: {
          autoClear: {
            cookies: [
              { name: /^_ga/ },
              { name: /^_gcl/ },
              { name: "tawkUUID" },
              { name: /^TawkConnectionTime/ },
            ],
          },
        },
      },
      cookie: {
        name: "aone_cc_cookie",
        expiresAfterDays: 365,
      },
      language: {
        default: language,
        translations,
      },
      onConsent: () => {
        // Fires once consent is first given AND on every later page load for
        // a returning visitor with stored consent -- covers both cases for
        // revealing the floating "change your mind" button below.
        setHasAnswered(true);
        window.dispatchEvent(new Event("cc:consentChange"));
      },
      onChange: () => {
        window.dispatchEvent(new Event("cc:consentChange"));
      },
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps -- `language` is read once here as the initial value only; later changes are handled by the effect below, not by re-running run()

  // CookieConsent.run() only sets the language once, at init -- it doesn't
  // watch for later changes on its own, so keep the banner/modal text in
  // sync with the site's own EN/NO toggle here.
  useEffect(() => {
    if (isFirstLanguageSync.current) {
      isFirstLanguageSync.current = false;
      return;
    }
    CookieConsent.setLanguage(language, true);
  }, [language]);

  // Hidden until the visitor has actually answered (see hasAnswered above),
  // so it never competes with the consent banner itself. After that, it's
  // the persistent way to reopen the preferences modal and change category
  // choices at any time -- sits in the same bottom-6 row as the accessibility
  // widget, to its right, rather than stacked above it.
  return (
    <AnimatePresence>
      {hasAnswered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 12 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="group fixed bottom-6 left-20 z-[99999]"
        >
          <button
            type="button"
            onClick={() => CookieConsent.showPreferences()}
            className="relative w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 flex items-center justify-center shadow-lg hover:shadow-rose-500/30 hover:scale-105 active:scale-95 transition-all duration-300 border border-slate-800 dark:border-slate-200 hover:border-rose-500 dark:hover:border-rose-400"
            aria-label={language === "no" ? "Administrer informasjonskapsler" : "Manage cookie preferences"}
          >
            <FaCookieBite className="text-base" />
          </button>
          <span className="pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2 whitespace-nowrap rounded-md bg-slate-950 px-2.5 py-1.5 text-[9px] font-bold tracking-widest text-white opacity-0 scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 shadow-xl hidden sm:block">
            {language === "no" ? "INFORMASJONSKAPSLER" : "COOKIE PREFERENCES"}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
