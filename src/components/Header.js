import React from 'react';
import Logo from './Logo';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white shadow-md">
      <Logo />
      <HamburgerMenu />
    </header>
  );
};

export default Header;
