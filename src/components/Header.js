'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import HamburgerMenu from './HamburgerMenu';
import ThemeToggle from './ThemeToggle';

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
      className={`fixed top-0 left-0 w-full z-[1000] flex justify-between items-center transition-transform duration-300 px-6 py-6 ${visible ? 'translate-y-0' : '-translate-y-full'
        } bg-transparent`}
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