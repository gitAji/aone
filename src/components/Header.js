import React from 'react';
import Logo from './Logo';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <Logo />
      <HamburgerMenu />
    </header>
  );
};

export default Header;
