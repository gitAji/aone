'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import HamburgerMenu from './HamburgerMenu';
import ThemeToggle from './ThemeToggle';
import { useLanguage } from '@/context/LanguageContext';
import { FaArrowRight } from 'react-icons/fa';

const Header = () => {
  const { t } = useLanguage();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
    setIsScrolled(currentScrollPos > 50);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-[200%]'
      } ${
        isScrolled
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-white/5'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 py-3.5 flex items-center justify-between gap-4">
        <Logo />

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/request-quote"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-[11px] font-bold uppercase tracking-wider rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 border border-slate-900 dark:border-white hover:bg-transparent dark:hover:bg-transparent hover:text-slate-900 dark:hover:text-white hover:-translate-y-0.5 active:translate-y-0 shadow-sm transition-all duration-300 group"
          >
            <span>{t('requestQuote')}</span>
            <FaArrowRight className="text-[9px] transform group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
          <ThemeToggle />
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
