import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

const Footer = ({ id }) => {
  return (
    <footer className="footer" id={id}>
      <div className="footer-content">
        <div className="footer-section about-us">
          <h3>About Us</h3>
          <p>
            We are a creative agency dedicated to building stunning websites and
            digital experiences that drive results.
          </p>
          <p>Org nr: 922103682</p>
        </div>
        <div className="footer-section quick-links">
          <h3>Legal</h3>
          <ul>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/cookie-policy">Cookie Policy</Link>
            </li>
            <li>
              <Link href="/disclaimer">Disclaimer</Link>
            </li>
            <li>
              <Link href="/accessibility-statement">Accessibility Statement</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section quick-links">
          <h3>Forms</h3>
          <ul>
            <li>
              <Link href="/design-requirements">Design Requirements</Link>
            </li>
            <li>
              <Link href="/free-consultation">Free Consultation</Link>
            </li>
            <li>
              <Link href="/free-seo-audit">Free SEO Audit</Link>
            </li>
            <li>
              <Link href="/feedback">Feedback</Link>
            </li>
            <li>
              <Link href="/support">Support</Link>
            </li>
            <li>
              <Link href="/referral">Referral</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section contact-info">
          <h3>Contacts</h3>
          <p>Email: info@aone.no</p>
          <p>Phone: 40071654</p>
        </div>
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
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
          </div>
          
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Aone.no. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
