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

// Service labels are plain strings on the category config below (not part
// of the translations file), so they aren't re-synced on a later language
// switch the way section text is -- using the actual third-party product
// names (Microsoft Clarity, Tawk.to, Google Ads) sidesteps that entirely,
// since those aren't translated either way, and naming the real vendor is
// itself better disclosure practice than a generic "Analytics" label.
const COOKIE_TABLE_HEADERS = {
  en: { name: "Cookie", provider: "Provider", expiry: "Expiry", purpose: "Purpose" },
  no: { name: "Informasjonskapsel", provider: "Leverandør", expiry: "Utløper", purpose: "Formål" },
};

const NECESSARY_TABLE = {
  en: [{ name: "aone_cc_cookie", provider: "Aone", expiry: "1 year", purpose: "Stores your cookie consent choices." }],
  no: [{ name: "aone_cc_cookie", provider: "Aone", expiry: "1 år", purpose: "Lagrer dine valg for informasjonskapsler." }],
};

// Microsoft's own documented purposes for Clarity's cookies:
// https://learn.microsoft.com/en-us/clarity/setup-and-installation/cookie-list
const CLARITY_TABLE = {
  en: [
    { name: "_clck", provider: "Microsoft Clarity", expiry: "1 year", purpose: "Persists the Clarity user ID and preferences, unique to this site, so behavior on later visits is linked to the same visitor." },
    { name: "_clsk", provider: "Microsoft Clarity", expiry: "1 day", purpose: "Connects multiple page views into a single session recording." },
    { name: "CLID", provider: "Microsoft Clarity", expiry: "1 year", purpose: "Identifies the first time Clarity saw this user on any site using Clarity." },
    { name: "ANONCHK, MR, MUID, SM", provider: "Microsoft Clarity / Bing", expiry: "10 minutes to 1 year", purpose: "Supporting cookies Clarity's underlying Microsoft infrastructure uses to synchronize and refresh the visitor identifier." },
  ],
  no: [
    { name: "_clck", provider: "Microsoft Clarity", expiry: "1 år", purpose: "Lagrer Clarity-bruker-ID-en og preferanser, unike for denne siden, slik at atferd ved senere besøk knyttes til samme besøkende." },
    { name: "_clsk", provider: "Microsoft Clarity", expiry: "1 dag", purpose: "Kobler sammen flere sidevisninger til én samlet øktopptak." },
    { name: "CLID", provider: "Microsoft Clarity", expiry: "1 år", purpose: "Identifiserer første gang Clarity så denne brukeren på et nettsted som bruker Clarity." },
    { name: "ANONCHK, MR, MUID, SM", provider: "Microsoft Clarity / Bing", expiry: "10 minutter til 1 år", purpose: "Støttecookies som Claritys underliggende Microsoft-infrastruktur bruker til å synkronisere og fornye besøks-ID-en." },
  ],
};

const MARKETING_TABLE = {
  en: [
    { name: "tawkUUID", provider: "Tawk.to", expiry: "Persistent", purpose: "Recognizes returning visitors to keep live-chat conversation history." },
    { name: "TawkConnectionTime", provider: "Tawk.to", expiry: "Session", purpose: "Maintains the live-chat connection during your visit." },
    { name: "_ga", provider: "Google Ads", expiry: "2 years", purpose: "Distinguishes unique visitors for conversion tracking." },
    { name: "_gcl", provider: "Google Ads", expiry: "90 days", purpose: "Stores ad-click information to attribute a conversion to the right campaign." },
  ],
  no: [
    { name: "tawkUUID", provider: "Tawk.to", expiry: "Vedvarende", purpose: "Gjenkjenner tilbakevendende besøkende for å beholde live chat-historikken." },
    { name: "TawkConnectionTime", provider: "Tawk.to", expiry: "Økt", purpose: "Opprettholder live chat-tilkoblingen under besøket ditt." },
    { name: "_ga", provider: "Google Ads", expiry: "2 år", purpose: "Skiller unike besøkende for konverteringssporing." },
    { name: "_gcl", provider: "Google Ads", expiry: "90 dager", purpose: "Lagrer annonseklikk-informasjon for å tilskrive en konvertering til riktig kampanje." },
  ],
};

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
            "We use three kinds of cookies. Necessary cookies are always on; you choose whether to allow statistics and marketing cookies -- down to the individual service -- and can change your mind at any time via the preferences icon in the corner of the screen.",
        },
        {
          title: "Necessary",
          description:
            "Required for the site to function correctly (e.g. remembering your theme and language choice, and this consent choice itself). These don't track you and can't be switched off.",
          linkedCategory: "necessary",
          cookieTable: { headers: COOKIE_TABLE_HEADERS.en, body: NECESSARY_TABLE.en },
        },
        {
          title: "Statistics",
          description:
            "Lets us see anonymized, aggregate usage patterns so we can understand what's working and improve the site. No ad targeting.",
          linkedCategory: "analytics",
          cookieTable: { headers: COOKIE_TABLE_HEADERS.en, body: CLARITY_TABLE.en },
        },
        {
          title: "Marketing",
          description:
            "Two independent services -- turn either on or off without affecting the other.",
          linkedCategory: "marketing",
          cookieTable: { headers: COOKIE_TABLE_HEADERS.en, body: MARKETING_TABLE.en },
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
            "Vi bruker tre typer informasjonskapsler. Nødvendige er alltid på; du velger selv om du vil tillate statistikk og markedsføring -- helt ned til den enkelte tjeneste -- og kan når som helst endre valget via innstillinger-ikonet nederst i skjermhjørnet.",
        },
        {
          title: "Nødvendige",
          description:
            "Kreves for at nettsiden skal fungere korrekt (f.eks. å huske tema- og språkvalg, og selve dette samtykkevalget). Disse sporer deg ikke og kan ikke slås av.",
          linkedCategory: "necessary",
          cookieTable: { headers: COOKIE_TABLE_HEADERS.no, body: NECESSARY_TABLE.no },
        },
        {
          title: "Statistikk",
          description:
            "Lar oss se anonymisert, samlet bruksmønster slik at vi kan forstå og forbedre nettsiden. Ingen annonsemålretting.",
          linkedCategory: "analytics",
          cookieTable: { headers: COOKIE_TABLE_HEADERS.no, body: CLARITY_TABLE.no },
        },
        {
          title: "Markedsføring",
          description:
            "To uavhengige tjenester -- slå av eller på hver for seg uten at det påvirker den andre.",
          linkedCategory: "marketing",
          cookieTable: { headers: COOKIE_TABLE_HEADERS.no, body: MARKETING_TABLE.no },
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
        // that reason: its hit area covered the *entire* bottom edge while
        // open, which this boxed layout (confined to the right) avoids.
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
        // Microsoft Clarity only -- pure behavioral analytics, no ad
        // targeting. Modeled as its own service (rather than just a bare
        // category) so the preferences modal shows it as a named,
        // individually-countable item -- consistent with marketing below,
        // and ready if a second analytics tool is ever added alongside it.
        analytics: {
          services: {
            clarity: {
              label: "Microsoft Clarity",
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
        // Two independently togglable services -- a visitor can allow Tawk
        // live chat while still declining Google Ads conversion tracking,
        // or vice versa, instead of an all-or-nothing "Marketing" switch.
        marketing: {
          services: {
            tawkto: {
              label: "Tawk.to",
              cookies: [{ name: "tawkUUID" }, { name: /^TawkConnectionTime/ }],
            },
            googleAds: {
              label: "Google Ads",
              cookies: [{ name: /^_ga/ }, { name: /^_gcl/ }],
            },
          },
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
        // a returning visitor with stored consent -- LayoutClientWrapper
        // listens for this same event to gate the Tawk.to chat widget.
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
  // all injected directly into the DOM by CookieConsent.run() above. Reopening
  // preferences is a plain "Cookie Settings" link in Footer.js, which calls
  // CookieConsent.showPreferences() directly.
  return null;
}
