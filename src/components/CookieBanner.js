"use client";

import CookieConsent from "react-cookie-consent";

const CookieBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName="aoneCookieConsent"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={150}
    >
      This website uses cookies to ensure you get the best experience on our website.{" "}
      <a href="/privacy-policy" style={{ color: "#F1F1F1", textDecoration: "underline" }}>
        Learn more
      </a>
    </CookieConsent>
  );
};

export default CookieBanner;
