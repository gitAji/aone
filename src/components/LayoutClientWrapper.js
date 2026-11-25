"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import * as CookieConsent from "vanilla-cookieconsent";
import Footer from "@/components/Footer";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import CookieConsentManager from "@/components/CookieConsentManager";
import CallButton from "@/components/CallButton";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import SettingsFab from "@/components/SettingsFab";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const DynamicReferralPopup = dynamic(() =>
  import("@/components/ReferralPopup").then((mod) => mod.default)
);

const DynamicTawkToMessenger = dynamic(() =>
  import("@/components/TawkToMessenger").then((mod) => mod.default)
);

export default function LayoutClientWrapper({ children }) {
  const [showReferralPopup, setShowReferralPopup] = useState(false);
  const [hasChatConsent, setHasChatConsent] = useState(false);
  // Not a privacy gate (tel: sets no cookies) -- purely spatial. The
  // consent banner is a boxed "bottom right" card at an unbeatable max
  // z-index (see CookieConsentManager.js), occupying the same corner
  // CallButton sits in, so it must stay hidden until that banner is
  // answered and out of the way, same timing SettingsFab's "Cookie
  // Preferences" menu item used to need (see WhatsAppButton's prior
  // history for the original rationale).
  const [hasAnsweredConsent, setHasAnsweredConsent] = useState(false);
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
            Renders no UI of its own; reopening preferences is now a menu
            item inside SettingsFab below. */}
        <CookieConsentManager />
        <ClientLayoutWrapper>
          {children}
          {/* {showReferralPopup && <DynamicReferralPopup />} */}
          <Footer />
        </ClientLayoutWrapper>
        {/* Bottom-left accessibility icon, with a dedicated cookie-settings
            icon stacked directly above it (same bottom-6/bottom-24 vertical
            stack CallButton uses on the right) -- each control gets its own
            clearly labeled one-click icon instead of a combined menu.
            Cookie icon only shown once the initial consent banner has been
            answered, same spatial gating CallButton uses. */}
        <SettingsFab />
        {hasAnsweredConsent && <CookieSettingsButton />}
        {/* Desktop-only exit-intent CTA -- fires once per session when the
            cursor crosses the top of the viewport heading for the tab bar.
            Owns its own trigger/session-guard logic internally (see
            ExitIntentPopup.js), so it needs nothing from this wrapper. */}
        <ExitIntentPopup />
        {/* Click-to-call -- a direct tel: link, no cookies, no third-party
            script. hasAnsweredConsent here is a spatial guard, not a
            privacy gate (see above), keeping it from sitting underneath
            the still-open consent banner. */}
        {hasAnsweredConsent && <CallButton />}
        {/* Gated on marketing consent (hasChatConsent, above) -- Tawk.to sets
            third-party cookies, so it shouldn't load until a visitor has
            actually consented, same as Clarity/GTM elsewhere on this site.
            Also desktop-only (isDesktop) so its script never loads on mobile. */}
        {hasChatConsent && isDesktop && <DynamicTawkToMessenger />}
      </ThemeProvider>
    </LanguageProvider>
  );
}
