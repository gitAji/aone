import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about-us">
          <h3>{t('footer.aboutTitle')}</h3>
          <p>
            {t('footer.aboutText')}
          </p>
          <p>Org nr: 922 103 682</p>
        </div>
        <div className="footer-section quick-links">
          <h3>{t('footer.quickLinks')}</h3>
          <ul>
            <li>
              <Link href="/privacy-policy">{t('footer.privacy')}</Link>
            </li>
            <li>
              <Link href="/terms-and-conditions">{t('footer.terms')}</Link>
            </li>
            <li>
              <Link href="/design-requirements">{t('footer.requirements')}</Link>
            </li>
            <li>
              <Link href="/free-consultation">{t('footer.consultation')}</Link>
            </li>
            <li>
              <Link href="/feedback">{t('footer.feedback')}</Link>
            </li>
            <li>
              <Link href="/support">{t('footer.support')}</Link>
            </li>
            <li>
              <Link href="/referral">{t('footer.referral')}</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section contact-info">
          <h3>{t('footer.contactInfo')}</h3>
          <p>Email: info@aone.no</p>
          <p>Phone: 40071654</p>
        </div>
        <div className="footer-section social-media">
          <h3>{t('footer.followUs')}</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100063719223439" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>

            <a href="https://www.instagram.com/aone.no/" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://share.google/LnZ6WBbDLAwypBM65" aria-label="Google">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a href="#" aria-label="Github">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>

        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Aone.no. {t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;