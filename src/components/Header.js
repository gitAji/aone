'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import HamburgerMenu from './HamburgerMenu';

import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`sticky top-0 z-50 flex justify-between items-center bg-white shadow-md transition-transform duration-300 px-4 py-2 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <Logo />
      <div className="flex items-center ml-auto"> {/* This div will contain right-aligned items */}
        <ThemeToggle className="mr-4" /> {/* Add mr-4 for spacing */}
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Header;