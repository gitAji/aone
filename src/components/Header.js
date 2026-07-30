'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import HamburgerMenu from './HamburgerMenu';
import ThemeToggle from './ThemeToggle';
import { useLanguage } from '@/context/LanguageContext';
import { FaArrowRight } from 'react-icons/fa';

// Desktop-only inline nav -- previously EVERY page, including this list, was
// only reachable via the fullscreen hamburger overlay, even at desktop
// widths. That's a heavy click-to-see-anything cost for a marketing/sales
// site whose whole job is to get visitors to Pricing or a quote request.
// The hamburger still opens the full site map (all pages, language switch)
// on both desktop and mobile; this row just surfaces the handful of pages
// that actually drive conversions without making people open it.
const NAV_ITEMS = [
  { key: 'services', href: '/services' },
  { key: 'pricing', href: '/pricing' },
  { key: 'references', href: '/references' },
  { key: 'about', href: '/about' },
  { key: 'blog', href: '/blog' },
];

const Header = () => {
  const { t } = useLanguage();
  const pathname = usePathname();
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
      className={`fixed left-0 w-full z-[1000] transition-all duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-[200%]'
      } ${isScrolled ? 'top-0' : 'top-[44px]'} ${
        isScrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm border-b border-slate-900/5 dark:border-white/5'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <Logo />

        {/* Desktop inline nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`relative px-4 py-2 text-[11px] font-black uppercase tracking-widest rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-slate-900 dark:bg-white dark:text-slate-900'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-900/5 dark:hover:bg-white/10'
                }`}
              >
                {t(`nav.${item.key}`)}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/request-quote"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 text-white text-[11px] font-black uppercase tracking-widest shadow-lg shadow-rose-500/20 hover:shadow-xl hover:shadow-rose-500/30 hover:scale-[1.03] active:scale-95 transition-all duration-200"
          >
            {t('requestQuote')}
            <FaArrowRight className="text-[10px]" />
          </Link>
          <ThemeToggle />
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
