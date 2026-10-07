"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import * as CookieConsent from "vanilla-cookieconsent";
import Footer from "@/components/Footer";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import CookieConsentManager from "@/components/CookieConsentManager";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import AccessibilityWidget from "@/components/AccessibilityWidget";

const DynamicReferralPopup = dynamic(() =>
  import("@/components/ReferralPopup").then((mod) => mod.default)
);

const DynamicTawkToMessenger = dynamic(() =>
  import("@/components/TawkToMessenger").then((mod) => mod.default)
);

export default function LayoutClientWrapper({ children }) {
  const [showReferralPopup, setShowReferralPopup] = useState(false);
  const [hasChatConsent, setHasChatConsent] = useState(false);
  // Not a privacy gate (WhatsApp sets no cookies) -- purely spatial. The
  // consent banner is a boxed "bottom right" card at an unbeatable max
  // z-index (see CookieConsentManager.js), occupying the same corner
  // WhatsAppButton.js sits in, so it must stay hidden until that banner is
  // answered and out of the way, same timing as the cookie-settings icon.
  const [hasAnsweredConsent, setHasAnsweredConsent] = useState(false);

  useEffect(() => {
    const referralTimer = setTimeout(() => {
      setShowReferralPopup(true);
    }, 2000); // 2-second delay

    const handleConsentChange = () => {
      setHasChatConsent(CookieConsent.acceptedCategory('marketing'));
      setHasAnsweredConsent(CookieConsent.validConsent());
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
            It does render its own floating "reopen preferences" button
            directly (not via the library), once the visitor has answered. */}
        <CookieConsentManager />
        <ClientLayoutWrapper>
          {children}
          {/* {showReferralPopup && <DynamicReferralPopup />} */}
          <Footer />
        </ClientLayoutWrapper>
        <AccessibilityWidget />
        {/* WhatsApp is just an external link (wa.me) -- hasAnsweredConsent
            here is a spatial guard, not a privacy gate (see above), keeping
            it from sitting underneath the still-open consent banner. Paired
            with Tawk's corner (bottom-right, "ways to reach a human") rather
            than the accessibility/cookie corner (bottom-left, "how the site
            behaves for you") -- see WhatsAppButton.js for the full rationale. */}
        {hasAnsweredConsent && <WhatsAppButton />}
        {/* Gated on marketing consent (hasChatConsent, above) -- Tawk.to sets
            third-party cookies, so it shouldn't load until a visitor has
            actually consented, same as Clarity/GTM elsewhere on this site. */}
        {hasChatConsent && <DynamicTawkToMessenger />}
      </ThemeProvider>
    </LanguageProvider>
  );
}
