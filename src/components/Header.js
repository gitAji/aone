'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import HamburgerMenu from './HamburgerMenu';
import ThemeToggle from './ThemeToggle';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
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
      className={`fixed left-0 w-full z-[1000] flex justify-between items-center transition-all duration-300 px-6 py-4 ${
        visible ? 'translate-y-0' : '-translate-y-[200%]'
      } ${isScrolled ? 'top-0' : 'top-[44px]'} ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}
    >
      <Logo />
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Header;