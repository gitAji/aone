import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white shadow-md">
      <Logo />
      <div className="flex items-center">
        
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Header;
