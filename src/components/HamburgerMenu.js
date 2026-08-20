"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaExternalLinkAlt, FaStar } from "react-icons/fa";

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

      {/* Hamburger Trigger Button */}
      <button
        onClick={toggleMenu}
        className="group relative z-[10002] w-10 h-10 rounded-full flex flex-col items-center justify-center gap-1.5 transition-all duration-300 bg-slate-950 dark:bg-white text-white dark:text-slate-950 hover:scale-105 active:scale-95 shadow-md"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <span className={`w-4.5 h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
        <span className={`w-4.5 h-[2px] bg-current rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
        <span className={`w-4.5 h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
      </button>

      {/* Fullscreen Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[10001] bg-slate-950/95 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto lg:overflow-hidden px-6 py-12 md:py-16 md:px-20"
            style={{ width: '100vw', height: '100vh' }}
          >
            <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 my-auto">
              
              {/* Left Column: Context & Metadata (Hidden on Mobile, elegant on Desktop) */}
              <div className="hidden lg:flex lg:col-span-5 flex-col justify-between border-r border-white/10 pr-10 py-1">
                <div>
                  <h3 className="font-clash text-lg md:text-xl font-bold text-white mb-4">Aone Digital</h3>
                  <p className="text-slate-400 text-[13px] leading-relaxed mb-5 max-w-xs">
                    {t('footer.aboutText') || "We are a creative agency dedicated to building stunning websites and digital experiences that drive results."}
                  </p>
                  
                  {/* Trust Rating */}
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl p-3 max-w-xs">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                      <FaStar className="text-sm" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">4.9★ Average Client Rating</div>
                      <div className="text-[10px] text-slate-500">Based on projects delivered in Norway</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Contact Info */}
                  <div className="space-y-2.5">
                    <a href="mailto:info@aone.no" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-xs group">
                      <FaEnvelope className="text-rose-500" />
                      <span>info@aone.no</span>
                    </a>
                    <a href="tel:40071654" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-xs">
                      <FaPhone className="text-rose-500" />
                      <span>400 71 654</span>
                    </a>
                    <div className="flex items-center gap-3 text-slate-400 text-xs">
                      <FaMapMarkerAlt className="text-rose-500" />
                      <span>Bergen, Norway</span>
                    </div>
                  </div>

                  {/* Languages Selector */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => changeLanguage('en')}
                      className={`flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${language === 'en' ? 'text-rose-500 scale-105' : 'text-white/40 hover:text-white'}`}
                    >
                      <Image src={getFlagUrl('en')} alt="EN" width={18} height={13} className="w-4.5 h-auto rounded-[1px]" unoptimized />
                      English
                    </button>
                    <div className="w-px h-3 bg-white/10" />
                    <button
                      onClick={() => changeLanguage('no')}
                      className={`flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${language === 'no' ? 'text-rose-500 scale-105' : 'text-white/40 hover:text-white'}`}
                    >
                      <Image src={getFlagUrl('no')} alt="NO" width={18} height={13} className="w-4.5 h-auto rounded-[1px]" unoptimized />
                      Norsk
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Menu Navigation Links */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <nav className="w-full">
                  <ul className="flex flex-col gap-3.5 md:gap-4">
                    {menuLinks.map((link, i) => {
                      const isExternal = link.href.startsWith('http');
                      return (
                        <motion.li
                          key={link.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.05 }}
                          className="group relative"
                        >
                          <Link
                            href={link.href}
                            onClick={toggleMenu}
                            className="flex items-start gap-3 md:gap-5 py-0.5 group/item"
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                          >
                            <span className="font-clash text-[10px] md:text-xs font-bold text-rose-500 mt-1 md:mt-2 tracking-[0.15em]">
                              {link.num}
                            </span>
                            <div className="flex-1 flex items-start justify-between gap-3">
                              <div>
                                <div className="font-clash text-lg md:text-2xl lg:text-3xl font-semibold text-white tracking-tight group-hover/item:text-rose-400 transition-colors duration-300 flex items-center gap-2">
                                  {link.name}
                                  {isExternal && <FaExternalLinkAlt className="text-xs text-white/30" />}
                                </div>
                                <p className="text-slate-500 text-[11px] md:text-xs mt-0.5 max-w-md group-hover/item:text-slate-400 transition-colors duration-300 font-medium">
                                  {link.desc}
                                </p>
                              </div>
                              <span
                                className="hidden md:inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/15 text-white/50 text-sm opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 ease-out flex-shrink-0 mt-1"
                                aria-hidden="true"
                              >
                                ↗
                              </span>
                            </div>
                          </Link>
                        </motion.li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Mobile Language Switcher Footer (visible on mobile only) */}
                <div className="flex lg:hidden flex-col gap-6 mt-10 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-6">
                    <button
                      onClick={() => changeLanguage('en')}
                      className={`flex items-center gap-2 text-sm font-bold tracking-widest uppercase transition-all duration-300 ${language === 'en' ? 'text-rose-500' : 'text-white/40'}`}
                    >
                      <Image src={getFlagUrl('en')} alt="EN" width={20} height={15} className="w-5 h-auto rounded-[1px]" unoptimized />
                      English
                    </button>
                    <button
                      onClick={() => changeLanguage('no')}
                      className={`flex items-center gap-2 text-sm font-bold tracking-widest uppercase transition-all duration-300 ${language === 'no' ? 'text-rose-500' : 'text-white/40'}`}
                    >
                      <Image src={getFlagUrl('no')} alt="NO" width={20} height={15} className="w-5 h-auto rounded-[1px]" unoptimized />
                      Norsk
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-slate-500 font-medium">
                    <a href="mailto:info@aone.no" className="hover:text-white transition-colors">info@aone.no</a>
                    <span>•</span>
                    <a href="tel:40071654" className="hover:text-white transition-colors">400 71 654</a>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
