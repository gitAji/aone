"use client";
import { usePathname } from 'next/navigation';

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

const DynamicVoiceflowChat = dynamic(() =>
  import("@/components/VoiceflowChat").then((mod) => mod.default)
);

export default function LayoutClientWrapper({ children }) {
  const pathname = usePathname();
  const [showReferralPopup, setShowReferralPopup] = useState(false);
  const [hasChatConsent, setHasChatConsent] = useState(false);

  useEffect(() => {
    const referralTimer = setTimeout(() => {
      setShowReferralPopup(true);
    }, 2000); // 2-second delay

    const handleCookiebotConsent = () => {
      // If Cookiebot isn't loaded yet or user hasn't made a choice, we can show it
      // or check if they specifically declined marketing.
      if (window.Cookiebot) {
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
        {/* {pathname !== '/' && <DynamicVoiceflowChat />} */}
        {/* <DynamicTawkToMessenger /> */}
      </ThemeProvider>
    </LanguageProvider>
  );
}
