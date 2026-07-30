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
      
      {/* Animated Glowing Red Border Lines (Three Layers) */}
      <div className="absolute top-0 left-0 w-full h-[4px] overflow-hidden pointer-events-none select-none z-10">
        {/* Layer 1: High speed primary glow */}
        <motion.div 
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[50%] h-[2px] bg-gradient-to-r from-transparent via-rose-500/80 to-transparent"
        />
        {/* Layer 2: Slow counter-speed sub-glow */}
        <motion.div 
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[1px] left-0 w-[40%] h-[1px] bg-gradient-to-r from-transparent via-red-500/60 to-transparent"
        />
        {/* Layer 3: Blurry neon cast */}
        <motion.div 
          animate={{ x: ['-80%', '80%'] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[60%] h-[3px] bg-gradient-to-r from-transparent via-rose-600/40 to-transparent blur-[3px]"
        />
      </div>

      {/* Abstract Glowing Background Waves (Red) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.035] select-none z-0">
        <svg className="absolute bottom-0 left-0 w-full h-[300px] text-red-500" viewBox="0 0 1440 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            animate={{ d: [
              "M0,150 C360,100 720,200 1080,150 C1260,125 1380,175 1440,150 L1440,300 L0,300 Z",
              "M0,150 C360,200 720,100 1080,180 C1260,220 1380,120 1440,150 L1440,300 L0,300 Z",
              "M0,150 C360,100 720,200 1080,150 C1260,125 1380,175 1440,150 L1440,300 L0,300 Z"
            ]}}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            stroke="currentColor" 
            strokeWidth="1.5" 
          />
          <motion.path 
            animate={{ d: [
              "M0,120 C400,200 800,80 1200,160 C1320,200 1380,140 1440,120 L1440,300 L0,300 Z",
              "M0,120 C400,80 800,200 1200,100 C1320,50 1380,180 1440,120 L1440,300 L0,300 Z",
              "M0,120 C400,200 800,80 1200,160 C1320,200 1380,140 1440,120 L1440,300 L0,300 Z"
            ]}}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            stroke="currentColor" 
            strokeWidth="1" 
          />
        </svg>
      </div>

      <motion.div 
        className="footer-content relative z-20 pt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 flex flex-nowrap justify-between items-start gap-8">
          {/* Column 1: Brand */}
          <div className="footer-section brand-column flex-1">
            <div className="mb-6 scale-90 origin-left">
              <Logo />
            </div>
            <p className="text-white text-[10px] leading-relaxed max-w-xs mb-6">
              {t('footer.aboutText')}
            </p>
            <p className="text-slate-400/50 text-[7px] uppercase tracking-[0.25em] font-medium mt-4 whitespace-nowrap">Org nr: 922 103 682</p>
          </div>
          
          {/* Column 2: Positions */}
          <div className="footer-section careers-links flex-1">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-black mb-8 text-white">{t('footer.careers') || 'Careers'}</h3>
            <ul className="space-y-3">
              <li><Link href="/careers/ai-automation-specialist" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors">AI & Automation</Link></li>
              <li><Link href="/careers/ux-ui-designer" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors">UX/UI Designer</Link></li>
              <li><Link href="/careers/backend-nextjs-developer" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors">Backend Developer</Link></li>
              <li><Link href="/careers/marketing-saas-growth-officer" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors">Marketing Growth</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Quick Links */}
          <div className="footer-section quick-links flex-1">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-black mb-8 text-white">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li><Link href="/references" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors">{t('nav.references')}</Link></li>
              <li><Link href="/careers" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors">{t('footer.careers')}</Link></li>
              <li><Link href="/about" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors">{t('nav.about')}</Link></li>
              <li><Link href="/pricing" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors">{t('nav.pricing')}</Link></li>
              <li><Link href="/request-quote" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors">{t('requestQuote') || 'Request Quote'}</Link></li>
              <li><Link href="/free-consultation" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors">{t('footer.consultation')}</Link></li>
              <li><Link href="/free-seo-audit" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors">{t('footer.seoAudit')}</Link></li>
              <li><Link href="/referral" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors">{t('footer.referral')}</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="footer-section legal-links flex-1">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-black mb-8 text-white">{t('footer.legal') || 'Legal'}</h3>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors">{t('footer.privacy')}</Link></li>
              <li><Link href="/terms-and-conditions" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors">{t('footer.terms')}</Link></li>
              <li><Link href="/accessibility-statement" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors">{t('footer.accessibility')}</Link></li>
              <li><Link href="/cookie-policy" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors">{t('footer.cookie')}</Link></li>
              <li><Link href="/disclaimer" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors">{t('footer.disclaimer')}</Link></li>
              <li><Link href="/design-requirements" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors">{t('footer.requirements')}</Link></li>
              <li><Link href="/support" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors">{t('footer.support')}</Link></li>
              <li><Link href="/feedback" className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors">{t('footer.feedback')}</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-section contact-info flex-1">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-black mb-8 text-white">Contact</h3>
            <div className="space-y-4">
              <a href="mailto:info@aone.no" className="flex items-center gap-3 text-white group">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:bg-rose-500 group-hover:border-rose-500 transition-all">
                  <FaEnvelope className="text-xs text-slate-400 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-bold group-hover:text-rose-500 transition-colors">info@aone.no</span>
              </a>
              <a href="tel:40071654" className="flex items-center gap-3 text-white group">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:bg-rose-500 group-hover:border-rose-500 transition-all">
                  <FaPhone className="text-xs text-slate-400 group-hover:text-white transition-colors" />
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

        <div className="footer-bottom mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Aone.no. {t('footer.rights')}
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;