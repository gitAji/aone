"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const HamburgerMenu = () => {
  const { language, changeLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  const getFlagUrl = (lang) => {
    const code = lang === 'en' ? 'gb' : 'no';
    return `https://flagcdn.com/w40/${code}.png`;
  };

  return (
    <div className="hamburger-menu flex items-center space-x-6">
      {/* Language Switcher - Desktop */}
      <div className="hidden md:flex items-center gap-4">
        <button
          onClick={() => changeLanguage('en')}
          className={`flex items-center gap-2 group transition-all duration-300`}
        >
          <img
            src={getFlagUrl('en')}
            alt="English"
            className={`w-5 h-auto rounded-[1px] transition-all duration-300 ${language === 'en' ? 'opacity-100 scale-110 shadow-lg' : 'opacity-30 group-hover:opacity-60'}`}
          />
          <span className={`text-[10px] font-black tracking-[0.2em] uppercase transition-colors duration-300 ${language === 'en' ? 'text-rose-500' : 'text-white/30 group-hover:text-white/60'}`}>
            EN
          </span>
        </button>

        <div className="w-px h-3 bg-white/10"></div>

        <button
          onClick={() => changeLanguage('no')}
          className={`flex items-center gap-2 group transition-all duration-300`}
        >
          <img
            src={getFlagUrl('no')}
            alt="Norsk"
            className={`w-5 h-auto rounded-[1px] transition-all duration-300 ${language === 'no' ? 'opacity-100 scale-110 shadow-lg' : 'opacity-30 group-hover:opacity-60'}`}
          />
          <span className={`text-[10px] font-black tracking-[0.2em] uppercase transition-colors duration-300 ${language === 'no' ? 'text-rose-500' : 'text-white/30 group-hover:text-white/60'}`}>
            NO
          </span>
        </button>
      </div>

      <button
        className="glass w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg border border-white/20"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="fullscreen-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 text-white z-[10001]"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
            style={{ stroke: 'url(#menu-gradient)' }}
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <defs>
              <linearGradient id="menu-gradient" x1="5" y1="12" x2="19" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="var(--grad-1)" />
                <stop offset="0.5" stopColor="var(--grad-2)" />
                <stop offset="1" stopColor="var(--grad-3)" />
              </linearGradient>
            </defs>
          </svg>
        )}
      </button>

      {isOpen && (
        <div
          id="fullscreen-menu"
          className="fullscreen-menu bg-slate-900/40 backdrop-blur-xl"
          style={{ zIndex: 9999, position: 'fixed', top: 0, left: 0, width: '100vw', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        >
          {/* Mobile Language Selection */}
          <div className="absolute top-8 left-8 flex items-center gap-6">
            <button
              onClick={() => changeLanguage('en')}
              className={`flex items-center gap-2 text-xl font-bold uppercase tracking-widest transition-all duration-300 ${language === 'en' ? 'text-rose-500 scale-110' : 'text-white/40 hover:text-white'}`}
            >
              <img src={getFlagUrl('en')} alt="EN" className="w-6 h-auto rounded-[2px]" />
              EN
            </button>
            <button
              onClick={() => changeLanguage('no')}
              className={`flex items-center gap-2 text-xl font-bold uppercase tracking-widest transition-all duration-300 ${language === 'no' ? 'text-rose-500 scale-110' : 'text-white/40 hover:text-white'}`}
            >
              <img src={getFlagUrl('no')} alt="NO" className="w-6 h-auto rounded-[2px]" />
              NO
            </button>
          </div>

          <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors duration-300" onClick={toggleMenu}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <nav>
            <ul className="menu-links flex flex-col items-center gap-8">
              {[
                { name: t('nav.services'), href: '/services' },
                { name: t('nav.references'), href: '/references' },
                { name: t('nav.about'), href: '/about' },
                { name: t('nav.blog'), href: '/blog' },
                { name: t('nav.contact'), href: '/contact' },
                { name: t('nav.clientLogin'), href: 'https://crm.aone.no' }
              ].map((link, i) => {
                const isExternal = link.href.startsWith('http');
                const commonProps = {
                  onClick: toggleMenu,
                  className: "text-5xl md:text-7xl font-black text-white hover:text-rose-500 transition-all duration-500 block hover:translate-x-4 tracking-tighter uppercase text-center"
                };

                return (
                  <li key={link.name} className="overflow-hidden">
                    {isExternal ? (
                      <a href={link.href} {...commonProps} target="_blank" rel="noopener noreferrer">
                        {link.name}
                      </a>
                    ) : (
                      <Link href={link.href} {...commonProps}>
                        {link.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
