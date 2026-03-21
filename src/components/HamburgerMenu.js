"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
      <div className="hidden md:flex items-center gap-6">
        <button
          onClick={() => changeLanguage('en')}
          className={`flex items-center gap-2 group transition-all duration-300`}
        >
          <Image
            src={getFlagUrl('en')}
            alt="English"
            width={20}
            height={15}
            className={`w-5 h-auto rounded-[1px] transition-all duration-300 ${language === 'en' ? 'opacity-100 scale-110 shadow-lg' : 'opacity-40 group-hover:opacity-70'}`}
            unoptimized
          />
          <span className={`text-[10px] font-black tracking-[0.2em] uppercase transition-colors duration-300 ${language === 'en' ? 'text-rose-500' : 'text-slate-600 dark:text-white/60 group-hover:text-slate-900 dark:group-hover:text-white'}`}>
            EN
          </span>
        </button>

        <div className="w-px h-3 bg-slate-900/20 dark:bg-white/10"></div>

        <button
          onClick={() => changeLanguage('no')}
          className={`flex items-center gap-2 group transition-all duration-300`}
        >
          <Image
            src={getFlagUrl('no')}
            alt="Norsk"
            width={20}
            height={15}
            className={`w-5 h-auto rounded-[1px] transition-all duration-300 ${language === 'no' ? 'opacity-100 scale-110 shadow-lg' : 'opacity-40 group-hover:opacity-70'}`}
            unoptimized
          />
          <span className={`text-[10px] font-black tracking-[0.2em] uppercase transition-colors duration-300 ${language === 'no' ? 'text-rose-500' : 'text-slate-600 dark:text-white/60 group-hover:text-slate-900 dark:group-hover:text-white'}`}>
            NO
          </span>
        </button>
      </div>

      <a
        href="https://crm.aone.no"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 text-slate-700 dark:text-white/70 hover:text-slate-900 dark:hover:text-white hover:bg-slate-900/10 dark:hover:bg-white/10"
        aria-label="Client Login"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </a>

      <button
        className="relative z-[10002] w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl bg-white text-slate-900 border border-slate-200"
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
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 z-[10001]"
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
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        )}
      </button>

      {isOpen && (
        <div
          id="fullscreen-menu"
          className="fullscreen-menu bg-slate-900/40 backdrop-blur-xl"
          style={{ zIndex: 10001, position: 'fixed', top: 0, left: 0, width: '100vw', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
          onClick={(e) => {
            if (e.target.id === 'fullscreen-menu') toggleMenu();
          }}
        >
          {/* Mobile Language Selection */}
          <div className="absolute top-8 left-8 flex items-center gap-6">
            <button
              onClick={() => changeLanguage('en')}
              className={`flex items-center gap-2 text-xl font-bold uppercase tracking-widest transition-all duration-300 ${language === 'en' ? 'text-rose-500 scale-110' : 'text-white/40 hover:text-white'}`}
            >
              <Image src={getFlagUrl('en')} alt="EN" width={24} height={18} className="w-6 h-auto rounded-[2px]" unoptimized />
              EN
            </button>
            <button
              onClick={() => changeLanguage('no')}
              className={`flex items-center gap-2 text-xl font-bold uppercase tracking-widest transition-all duration-300 ${language === 'no' ? 'text-rose-500 scale-110' : 'text-white/40 hover:text-white'}`}
            >
              <Image src={getFlagUrl('no')} alt="NO" width={24} height={18} className="w-6 h-auto rounded-[2px]" unoptimized />
              NO
            </button>
          </div>





          <nav>
            <ul className="menu-links flex flex-col items-center gap-8">
              {[
                { name: t('nav.services'), href: '/services' },
                { name: t('nav.products'), href: '/products' },
                { name: t('nav.references'), href: '/references' },
                { name: t('nav.about'), href: '/about' },
                { name: t('nav.blog'), href: '/blog' },
                { name: t('nav.contact'), href: '/contact' },
              ].map((link, i) => {
                const isExternal = link.href.startsWith('http');
                const commonProps = {
                  onClick: toggleMenu,
                  className: "relative text-3xl md:text-5xl font-black text-white transition-all duration-500 ease-out block tracking-tighter hover:tracking-widest uppercase text-center z-20 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-500 hover:to-orange-400 hover:-translate-y-2"
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
