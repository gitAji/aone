"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

const DynamicReferralPopup = dynamic(() =>
  import("@/components/ReferralPopup").then((mod) => mod.default)
);

const DynamicTawkToMessenger = dynamic(() =>
  import("@/components/TawkToMessenger").then((mod) => mod.default)
);

export default function LayoutClientWrapper({ children }) {
  const [showReferralPopup, setShowReferralPopup] = useState(false);
  const [hasTawkToConsent, setHasTawkToConsent] = useState(false);

  useEffect(() => {
    const referralTimer = setTimeout(() => {
      setShowReferralPopup(true);
    }, 2000); // 2-second delay

    const handleCookiebotConsent = () => {
      if (window.Cookiebot && window.Cookiebot.consent.marketing) {
        setHasTawkToConsent(true);
      } else {
        setHasTawkToConsent(false);
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
    <>
      <ClientLayoutWrapper>
        {children}
        {showReferralPopup && <DynamicReferralPopup />}
        <Footer />
      </ClientLayoutWrapper>
      {hasTawkToConsent && <DynamicTawkToMessenger />}
    </>
  );
}
