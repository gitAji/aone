'use client';
import React from 'react';
import Link from 'next/link';
import { FaCog, FaBook, FaUser, FaEnvelope } from 'react-icons/fa';

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <Link href="/services" className="bottom-nav-link">
        <FaCog />
        <span>Services</span>
      </Link>
      <Link href="/references" className="bottom-nav-link">
        <FaBook />
        <span>References</span>
      </Link>
      <Link href="/about" className="bottom-nav-link">
        <FaUser />
        <span>About</span>
      </Link>
      <Link href="/contact" className="bottom-nav-link">
        <FaEnvelope />
        <span>Contact</span>
      </Link>
    </nav>
  );
};

export default BottomNav;
