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

import { motion } from "framer-motion";

const FooterTypewriter = ({ strings }) => {
  const [currentStringIndex, setCurrentStringIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = strings[currentStringIndex];
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentStringIndex((prev) => (prev + 1) % strings.length);
        }
      }
    }, isDeleting ? 30 : 50);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentStringIndex, strings]);

  return (
    <span>
      {currentText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[1px] h-[1em] bg-rose-500 ml-1 align-middle"
      />
    </span>
  );
};

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="footer overflow-hidden relative">
      {/* Animated Top Border Line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-500 to-transparent z-10"
      />

      <motion.div 
        className="footer-content relative z-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="footer-section about-us">
          <div className="mb-4">
            <Image src="/images/logo.png" alt="Aone Logo" width={150} height={50} className="h-12 w-auto" />
          </div>
          
          <div className="h-20 mb-4">
            <h3 className="text-sm font-black tracking-[0.2em] uppercase text-rose-500 mb-2">Aone Vision</h3>
            <div className="text-slate-400 font-medium italic opacity-80 min-h-[3em]">
              <FooterTypewriter
                strings={[
                  "Crafting the future of digital identity.",
                  "Where AI meets human artistry.",
                  "Your vision, elevated beyond limits."
                ]}
              />
            </div>
          </div>

          <p className="text-sm mt-8 opacity-60">
            {t('footer.aboutText')}
          </p>
          <p className="opacity-30 text-[10px] mt-2 uppercase tracking-widest">Org nr: 922 103 682</p>
        </div>
        
        <div className="footer-section quick-links">
          <h3 className="text-xs uppercase tracking-[0.3em] font-black mb-6 text-slate-500">{t('footer.quickLinks')}</h3>
          <ul>
            <li><Link href="/privacy-policy">{t('footer.privacy')}</Link></li>
            <li><Link href="/terms-and-conditions">{t('footer.terms')}</Link></li>
            <li><Link href="/design-requirements">{t('footer.requirements')}</Link></li>
            <li><Link href="/free-consultation">{t('footer.consultation')}</Link></li>
            <li><Link href="/feedback">{t('footer.feedback')}</Link></li>
            <li><Link href="/support">{t('footer.support')}</Link></li>
            <li><Link href="/referral">{t('footer.referral')}</Link></li>
          </ul>
        </div>

        <div className="footer-section contact-info">
          <h3 className="text-xs uppercase tracking-[0.3em] font-black mb-6 text-slate-500">{t('footer.contactInfo')}</h3>
          <p className="text-slate-400 font-bold mb-1">info@aone.no</p>
          <p className="text-slate-400 font-bold">400 71 654</p>
        </div>

        <div className="footer-section social-media">
          <h3 className="text-xs uppercase tracking-[0.3em] font-black mb-6 text-slate-500">{t('footer.followUs')}</h3>
          <div className="social-icons">
            <motion.a whileHover={{ y: -3, color: "#f43f5e" }} href="https://www.facebook.com/profile.php?id=100063719223439" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </motion.a>
            <motion.a whileHover={{ y: -3, color: "#f43f5e" }} href="https://www.instagram.com/aone.no/" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </motion.a>
            <motion.a whileHover={{ y: -3, color: "#f43f5e" }} href="https://share.google/LnZ6WBbDLAwypBM65" aria-label="Google">
              <FontAwesomeIcon icon={faGoogle} />
            </motion.a>
          </div>
        </div>
      </motion.div>

      <div className="footer-bottom mt-20 py-12 relative border-t border-slate-900/50 text-center">
        <p className="opacity-40 text-[9px] uppercase tracking-[0.4em] font-black inline-block border-b-2 border-rose-500/30 pb-2 px-4 translate-y-2">
          &copy; {new Date().getFullYear()} Aone.no. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;