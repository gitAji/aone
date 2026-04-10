import React from "react";
import { FaEnvelope, FaPhone, FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Logo from "./Logo";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="footer overflow-hidden relative border-t border-slate-900 bg-slate-950 pb-10">
      {/* Animated Top Border Line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-500 to-transparent z-10"
      />

      <motion.div 
        className="footer-content relative z-20 pt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div className="footer-section brand-column">
            <div className="mb-6 scale-90 origin-left">
              <Logo />
            </div>
            <p className="text-white text-[10px] leading-relaxed max-w-xs mb-6">
              {t('footer.aboutText')}
            </p>
            <p className="text-slate-400/50 text-[7px] uppercase tracking-[0.25em] font-medium mt-4 whitespace-nowrap">Org nr: 922 103 682</p>
          </div>
          
          {/* Column 2: Services */}
          <div className="footer-section services-links">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-black mb-8 text-white">{t('nav.services')}</h3>
            <div className="grid grid-cols-1 gap-x-8">
              <ul className="space-y-3">
                <li><Link href="/services/web-development" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors"><FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />{t('servicesPage.webDevTitle')}</Link></li>
                <li><Link href="/services/ui-ux-design" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors"><FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />{t('servicesPage.uiuxTitle')}</Link></li>
                <li><Link href="/services/ai-chatbots" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors"><FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />{t('servicesPage.chatbotTitle')}</Link></li>
                <li><Link href="/services/ai-automations" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors"><FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />{t('servicesPage.aiTitle')}</Link></li>
                <li><Link href="/services/geo" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors"><FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />{t('servicesPage.geoTitle')}</Link></li>
                <li><Link href="/services/search-engine-optimization" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors"><FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />{t('servicesPage.seoTitle')}</Link></li>
                <li><Link href="/services/branding" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors"><FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />{t('servicesPage.brandingTitle')}</Link></li>
                <li><Link href="/services/photography" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors"><FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />{t('servicesPage.photoTitle')}</Link></li>
                <li><Link href="/services/videography" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors"><FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />{t('servicesPage.videoTitle')}</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="footer-section quick-links">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-black mb-8 text-white">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors"><FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />{t('nav.services')}</Link></li>
              <li><Link href="/references" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors"><FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />{t('nav.references')}</Link></li>
              <li><Link href="/careers" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors"><FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />{t('footer.careers')}</Link></li>
              <li><Link href="/pricing" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors"><FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />{t('nav.pricing')}</Link></li>
              <li><Link href="/request-quote" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors"><FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />{t('nav.requestQuote') || 'Request Quote'}</Link></li>
              <li><Link href="/free-consultation" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors"><FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />{t('footer.consultation')}</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="footer-section legal-links">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-black mb-8 text-white">{t('footer.legal') || 'Legal'}</h3>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors"><FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />{t('footer.privacy')}</Link></li>
              <li><Link href="/terms-and-conditions" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors"><FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />{t('footer.terms')}</Link></li>
              <li><Link href="/accessibility-statement" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors"><FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />{t('footer.accessibility')}</Link></li>
              <li><Link href="/cookie-policy" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors"><FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />{t('footer.cookie')}</Link></li>
              <li><Link href="/disclaimer" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors"><FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />{t('footer.disclaimer')}</Link></li>
              <li><Link href="/design-requirements" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors"><FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />{t('footer.requirements')}</Link></li>
              <li><Link href="/support" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors"><FaArrowRight className="text-[8px] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />{t('footer.support')}</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-section contact-info">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-black mb-8 text-white">Contact</h3>
            <div className="space-y-4">
              <a href="mailto:info@aone.no" className="flex items-center gap-3 text-white group">
                <div className="w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center border border-rose-500/20 group-hover:bg-rose-500 group-hover:text-white transition-all">
                  <FaEnvelope className="text-xs" />
                </div>
                <span className="text-sm font-bold group-hover:text-rose-500 transition-colors">info@aone.no</span>
              </a>
              <a href="tel:40071654" className="flex items-center gap-3 text-white group">
                <div className="w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center border border-rose-500/20 group-hover:bg-rose-500 group-hover:text-white transition-all">
                  <FaPhone className="text-xs" />
                </div>
                <span className="text-sm font-bold group-hover:text-rose-500 transition-colors">400 71 654</span>
              </a>
              <div className="flex items-center gap-3 text-white">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800">
                  <FaMapMarkerAlt className="text-xs text-rose-500" />
                </div>
                <span className="text-sm font-bold text-white">Bergen, Norway</span>
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bottom mt-20 pt-8 border-t border-slate-900/50 text-center">
          <p className="text-white text-[6px] uppercase tracking-[0.3em] font-medium">
            &copy; {new Date().getFullYear()} Aone.no. {t('footer.rights')}
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;