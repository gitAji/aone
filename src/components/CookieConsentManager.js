"use client";

import { useEffect, useRef } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
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
            "We use three kinds of cookies. Necessary cookies are always on; you choose whether to allow statistics and marketing cookies, and can change your mind at any time via the preferences icon in the corner of the screen.",
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
            "Vi bruker tre typer informasjonskapsler. Nødvendige er alltid på; du velger selv om du vil tillate statistikk og markedsføring, og kan når som helst endre valget via innstillinger-ikonet nederst i skjermhjørnet.",
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
        // open, so it blocked the SettingsFab icon on the left too, which
        // this boxed layout (confined to the right) never did.
        // WhatsAppButton.js is instead hidden for the same brief
        // pre-answer window as SettingsFab's "Cookie Preferences" menu item
        // -- see hasAnsweredConsent in LayoutClientWrapper.js.
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
        // revealing the "Cookie Preferences" item in SettingsFab's menu,
        // which listens for this same event.
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

  // No UI of its own -- the consent engine (banner + preferences modal) is
  // all injected directly into the DOM by CookieConsent.run() above. The
  // floating "reopen preferences" control that used to live here is now the
  // "Cookie Preferences" item inside SettingsFab's menu, which calls
  // CookieConsent.showPreferences() itself and listens for the same
  // cc:consentChange event this component dispatches.
  return null;
}
