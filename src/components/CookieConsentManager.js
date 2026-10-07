"use client";

import { useEffect, useRef, useState } from "react";
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
      guiOptions: {
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
  // choices at any time -- stacked just above the accessibility widget
  // (same corner, same size/style) rather than a separate footer link only.
  if (!hasAnswered) return null;

  return (
    <button
      type="button"
      onClick={() => CookieConsent.showPreferences()}
      className="fixed bottom-24 left-6 z-[99999] w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 border border-slate-800 dark:border-slate-200"
      aria-label={language === "no" ? "Administrer informasjonskapsler" : "Manage cookie preferences"}
      title={language === "no" ? "Informasjonskapsler" : "Cookie preferences"}
    >
      <FaCookieBite className="text-xl" />
    </button>
  );
}
