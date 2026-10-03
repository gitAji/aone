"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaPhone, FaExternalLinkAlt } from "react-icons/fa";

const HamburgerMenu = () => {
  const { language, changeLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  const getFlagUrl = (lang) => {
    const code = lang === 'en' ? 'gb' : 'no';
    return `https://flagcdn.com/w40/${code}.png`;
  };

  const menuLinks = [
    { num: "01", name: t('nav.services'), href: '/services', desc: t('nav.desc.services') || "Tailored web design & business AI automation" },
    { num: "02", name: t('nav.pricing'), href: '/pricing', desc: t('nav.desc.pricing') || "Transparent packages & custom enterprise quotes" },
    { num: "03", name: t('nav.products'), href: '/products', desc: t('nav.desc.products') || "Pre-packaged software & ready-made templates" },
    { num: "04", name: t('nav.references'), href: '/references', desc: t('nav.desc.references') || "Explore our case studies and successful projects" },
    { num: "05", name: t('nav.about'), href: '/about', desc: t('nav.desc.about') || "Our story, team values, and mission statement" },
    { num: "06", name: t('nav.blog'), href: '/blog', desc: t('nav.desc.blog') || "Insights, technology guides & industry news" },
    { num: "07", name: t('nav.contact'), href: '/contact', desc: t('nav.desc.contact') || "Get in touch or schedule a virtual discovery call" },
  ];

  return (
    <div className="hamburger-menu flex items-center gap-3">
      {/* Desktop Language Switcher */}
      <div className="hidden lg:flex items-center gap-4 bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-full border border-slate-200/50 dark:border-slate-800/50">
        <button
          onClick={() => changeLanguage('en')}
          className="flex items-center gap-1.5 group transition-all duration-300"
        >
          <Image
            src={getFlagUrl('en')}
            alt="English"
            width={16}
            height={12}
            className={`w-4 h-auto rounded-[1px] transition-all duration-300 ${language === 'en' ? 'opacity-100 scale-105 shadow-sm' : 'opacity-40 group-hover:opacity-75'}`}
            unoptimized
          />
          <span className={`text-[10px] font-bold tracking-wider transition-colors duration-300 ${language === 'en' ? 'text-rose-500' : 'text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white'}`}>
            EN
          </span>
        </button>

        <div className="w-px h-3 bg-slate-300 dark:bg-slate-800"></div>

        <button
          onClick={() => changeLanguage('no')}
          className="flex items-center gap-1.5 group transition-all duration-300"
        >
          <Image
            src={getFlagUrl('no')}
            alt="Norsk"
            width={16}
            height={12}
            className={`w-4 h-auto rounded-[1px] transition-all duration-300 ${language === 'no' ? 'opacity-100 scale-105 shadow-sm' : 'opacity-40 group-hover:opacity-75'}`}
            unoptimized
          />
          <span className={`text-[10px] font-bold tracking-wider transition-colors duration-300 ${language === 'no' ? 'text-rose-500' : 'text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white'}`}>
            NO
          </span>
        </button>
      </div>

      {/* Portal Access */}
      <a
        href="https://crm.aone.no"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-850 border border-slate-200/50 dark:border-slate-800/50 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white"
        aria-label="Client Login"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <span className="pointer-events-none absolute top-full left-1/2 mt-2.5 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-950 px-2.5 py-1.5 text-[9px] font-bold tracking-widest text-white opacity-0 scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 shadow-xl hidden sm:block">
          CLIENT PORTAL
        </span>
      </a>

      {/* Hamburger Trigger Button — asymmetric "staircase" mark instead of a generic
          equal-width hamburger, single-color (bg-current); morphs into a centered X on open */}
      <button
        onClick={toggleMenu}
        className="group relative z-[10002] w-10 h-10 rounded-full flex flex-col items-center justify-center gap-[5px] transition-all duration-300 bg-slate-950 dark:bg-white text-white dark:text-slate-950 hover:scale-105 active:scale-95 shadow-md"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <span className={`h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${isOpen ? 'w-4.5 rotate-45 translate-y-[7px]' : 'w-3'}`} />
        <span className={`h-[2px] bg-current rounded-full transition-all duration-300 ${isOpen ? 'w-4.5 opacity-0 scale-x-0' : 'w-4.5'}`} />
        <span className={`h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${isOpen ? 'w-4.5 -rotate-45 -translate-y-[7px]' : 'w-2'}`} />
      </button>

      {/* Fullscreen Navigation Overlay — single clean column, large type,
          minimal chrome (no duplicate contact/trust info; that already
          lives in the footer) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[10001] bg-slate-950/98 backdrop-blur-2xl flex flex-col justify-center overflow-y-auto px-6 py-16 md:px-16"
            style={{ width: '100vw', height: '100vh' }}
          >
            <nav className="w-full max-w-3xl mx-auto">
              <ul className="flex flex-col">
                {menuLinks.map((link, i) => {
                  const isExternal = link.href.startsWith('http');
                  return (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.04 }}
                      className="border-b border-white/5 first:border-t"
                    >
                      <Link
                        href={link.href}
                        onClick={toggleMenu}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="group/item flex items-center justify-between gap-4 py-3.5 md:py-4"
                      >
                        <span className="font-clash text-3xl md:text-5xl font-semibold text-white/90 tracking-tight group-hover/item:text-rose-400 transition-colors duration-300 flex items-center gap-3">
                          {link.name}
                          {isExternal && <FaExternalLinkAlt className="text-sm text-white/30" />}
                        </span>
                        <span
                          className="text-lg md:text-2xl text-rose-500 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 ease-out flex-shrink-0"
                          aria-hidden="true"
                        >
                          ↗
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Minimal footer row: language switcher + contact */}
              <div className="flex flex-wrap items-center justify-between gap-5 mt-10 pt-6 text-xs">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`font-bold tracking-widest uppercase transition-colors duration-300 ${language === 'en' ? 'text-rose-500' : 'text-white/40 hover:text-white'}`}
                  >
                    EN
                  </button>
                  <span className="text-white/15">/</span>
                  <button
                    onClick={() => changeLanguage('no')}
                    className={`font-bold tracking-widest uppercase transition-colors duration-300 ${language === 'no' ? 'text-rose-500' : 'text-white/40 hover:text-white'}`}
                  >
                    NO
                  </button>
                </div>
                <div className="flex items-center gap-5 text-slate-400">
                  <a href="mailto:info@aone.no" className="flex items-center gap-2 hover:text-white transition-colors">
                    <FaEnvelope className="text-rose-500" />
                    <span>info@aone.no</span>
                  </a>
                  <a href="tel:40071654" className="hidden sm:flex items-center gap-2 hover:text-white transition-colors">
                    <FaPhone className="text-rose-500" />
                    <span>400 71 654</span>
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
