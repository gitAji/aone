"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";

const HamburgerMenu = ({ theme = 'light' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // State for button visibility
  const lastScrollY = useRef(0);
  const dropdownRef = useRef(null);
  const flagRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang) => {
    // In this English-only revert, we don't actually change language, just close dropdown
    setShowLanguageDropdown(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 100) {
        // scrolled down
        setIsVisible(false);
      } else {
        // scrolled up or at top
        setIsVisible(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        flagRef.current &&
        !flagRef.current.contains(event.target)
      ) {
        setShowLanguageDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, flagRef]);

  return (
    <div className="hamburger-menu flex items-center space-x-4">
      <Link href="/ai-chat">
        <button
          className="p-2 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-gray-700"
          aria-label="AI Assistant"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
          </svg>
        </button>
      </Link>
      <button
        className={`menu-icon text-2xl ${theme === 'dark' ? 'menu-icon-dark' : ''}`}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="fullscreen-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <span>&times;</span> : <span>+</span>}
      </button>

      {isOpen && (
        <div
          id="fullscreen-menu"
          className="fullscreen-menu"
          style={{ backgroundColor: 'black', zIndex: 9999, position: 'fixed', top: 0, left: 0, width: '100vw', minHeight: '100vh' }}
        >
          <button className="close-icon" onClick={toggleMenu}>
            &times;
          </button>
          <nav>
            <ul className="menu-links">
              <li>
                <Link href={`/services`} onClick={toggleMenu}>
                  Services
                </Link>
              </li>
              <li>
                <Link href={`/references`} onClick={toggleMenu}>
                  References
                </Link>
              </li>

              <li>
                <Link href={`/about`} onClick={toggleMenu}>
                  About
                </Link>
              </li>

              <li>
                <Link href={`/blog`} onClick={toggleMenu}>
                  Blog
                </Link>
              </li>

              <li>
                <Link href={`/contact`} onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href={`/ai-chat`} onClick={toggleMenu}>
                  AI Assistant
                </Link>
              </li>
              <li>
                <Link href={`/client-login`} onClick={toggleMenu}>
                  Client Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
