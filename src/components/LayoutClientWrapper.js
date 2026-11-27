"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import * as CookieConsent from "vanilla-cookieconsent";
import Footer from "@/components/Footer";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import CookieConsentManager from "@/components/CookieConsentManager";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import ChatWidget from "@/components/ChatWidget";

const DynamicReferralPopup = dynamic(() =>
  import("@/components/ReferralPopup").then((mod) => mod.default)
);

const DynamicTawkToMessenger = dynamic(() =>
  import("@/components/TawkToMessenger").then((mod) => mod.default)
);

export default function LayoutClientWrapper({ children }) {
  const [showReferralPopup, setShowReferralPopup] = useState(false);
  const [hasChatConsent, setHasChatConsent] = useState(false);
  // Tawk.to is desktop-only -- gated here, not just visually hidden with
  // CSS, so its third-party script never even loads on mobile.
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)');
    setIsDesktop(mql.matches);
    const handleChange = (e) => setIsDesktop(e.matches);
    mql.addEventListener('change', handleChange);

    const referralTimer = setTimeout(() => {
      setShowReferralPopup(true);
    }, 2000); // 2-second delay

    const handleConsentChange = () => {
      // Checks the specific "tawkto" service, not the whole "marketing"
      // category -- a visitor can now accept Google Ads tracking while
      // declining live chat (or vice versa) via two independent toggles in
      // the preferences modal, so only the service this script actually
      // needs should gate it.
      setHasChatConsent(CookieConsent.acceptedService('tawkto', 'marketing'));
    };

    // No synchronous initial check here: CookieConsent.run() (called from
    // CookieConsentManager, a child, so its effect fires first) is async --
    // reading acceptedCategory() immediately would race it. 'cc:consentChange'
    // is dispatched from the library's own onConsent callback, which fires
    // once run() resolves AND on every later change, whether the visitor is
    // brand new (defaults to not-accepted, correctly keeping Tawk off) or
    // returning with stored consent -- so this listener alone covers both.
    window.addEventListener('cc:consentChange', handleConsentChange);

    return () => {
      clearTimeout(referralTimer);
      mql.removeEventListener('change', handleChange);
      window.removeEventListener('cc:consentChange', handleConsentChange);
    };
  }, []);

  return (
    <LanguageProvider>
      <ThemeProvider>
        {/* Needs to be inside LanguageProvider (for useLanguage). Owns the
            CookieConsent.run() call and keeps its text in sync with the
            site's EN/NO toggle -- the library injects the banner/modal
            straight into document.body, not through this component's JSX.
            Renders no UI of its own; reopening preferences is a plain
            "Cookie Settings" link in Footer.js. */}
        <CookieConsentManager />
        <ClientLayoutWrapper>
          {children}
          {/* {showReferralPopup && <DynamicReferralPopup />} */}
          <Footer />
        </ClientLayoutWrapper>
        {/* Desktop-only exit-intent CTA -- fires once per session when the
            cursor crosses the top of the viewport heading for the tab bar.
            Owns its own trigger/session-guard logic internally (see
            ExitIntentPopup.js), so it needs nothing from this wrapper. */}
        <ExitIntentPopup />
        {/* First-party support chat -- talks only to our own /api/chat route
            (which proxies server-side to the n8n support agent), so it sets
            no third-party cookies and needs no consent gating, unlike
            Tawk.to below. */}
        <ChatWidget />
        {/* Gated on the "tawkto" service specifically (hasChatConsent,
            above) -- Tawk.to sets third-party cookies, so it shouldn't load
            until a visitor has actually consented to that one service, same
            as Clarity/GTM elsewhere on this site. Also desktop-only
            (isDesktop) so its script never loads on mobile. */}
        {hasChatConsent && isDesktop && <DynamicTawkToMessenger />}
      </ThemeProvider>
    </LanguageProvider>
  );
}
