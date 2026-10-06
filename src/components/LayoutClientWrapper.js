"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
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

  useEffect(() => {
    const referralTimer = setTimeout(() => {
      setShowReferralPopup(true);
    }, 2000); // 2-second delay

    const handleCookiebotConsent = () => {
      // window.Cookiebot can exist before its own .consent object is
      // populated (it's set asynchronously once Cookiebot finishes
      // initializing) -- checking window.Cookiebot alone and then reading
      // .consent.marketing threw a TypeError in that gap, which aborted
      // this whole effect before the CookiebotOnAccept/Decline/Load
      // listeners below ever got registered. Confirmed live: it crashed
      // every single page in dev (Next's full-screen error overlay) and
      // would have left hasChatConsent stuck at its default forever in
      // production too, since the listener registration never ran.
      if (window.Cookiebot?.consent) {
        setHasChatConsent(window.Cookiebot.consent.marketing);
      } else {
        // Fallback: show it by default until Cookiebot decides otherwise
        setHasChatConsent(true);
      }
    };

    // Initial check
    handleCookiebotConsent();

    // Listen for consent changes
    window.addEventListener('CookiebotOnAccept', handleCookiebotConsent);
    window.addEventListener('CookiebotOnDecline', handleCookiebotConsent);
    window.addEventListener('CookiebotOnLoad', handleCookiebotConsent);

    return () => {
      clearTimeout(referralTimer);
      window.removeEventListener('CookiebotOnAccept', handleCookiebotConsent);
      window.removeEventListener('CookiebotOnDecline', handleCookiebotConsent);
      window.removeEventListener('CookiebotOnLoad', handleCookiebotConsent);
    };
  }, []);

  return (
    <LanguageProvider>
      <ThemeProvider>
        <ClientLayoutWrapper>
          {children}
          {/* {showReferralPopup && <DynamicReferralPopup />} */}
          <Footer />
        </ClientLayoutWrapper>
        <AccessibilityWidget />
        {/* Gated on Cookiebot marketing consent (hasChatConsent, above) --
            Tawk.to sets third-party cookies, so it shouldn't load until a
            visitor has actually consented, same as Clarity/GTM elsewhere
            on this site. */}
        {hasChatConsent && <DynamicTawkToMessenger />}
      </ThemeProvider>
    </LanguageProvider>
  );
}
