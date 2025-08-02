"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import ReactCountryFlag from "react-country-flag";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
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
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && flagRef.current && !flagRef.current.contains(event.target)) {
        setShowLanguageDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef, flagRef]);

  return (
    <div className="hamburger-menu">
      <div className="language-switch-container">
        <div
          className="current-language-flag"
          ref={flagRef}
          onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
        >
          <ReactCountryFlag
            countryCode="GB"
            svg
            style={{
              width: "30px",
              height: "20px",
              cursor: "pointer",
              border: '2px solid transparent',
              boxShadow:
                '0 0 5px rgba(0, 0, 0, 0.2)',
              borderRadius: "3px",
            }}
            title="English"
          />
        </div>
        {showLanguageDropdown && (
          <div className="language-dropdown" ref={dropdownRef}>
            {/* Only English is supported in this revert */}
            <ReactCountryFlag
              countryCode="GB"
              svg
              style={{
                width: "30px",
                height: "20px",
                cursor: "pointer",
                border: '2px solid transparent',
                boxShadow:
                  '0 0 5px rgba(0, 0, 0, 0.2)',
                borderRadius: "3px",
              }}
              onClick={() => handleLanguageChange('en')}
              title="English"
            />
          </div>
        )}
      </div>
      <button className="menu-icon" onClick={toggleMenu}>
        +
      </button>

      {isOpen && (
        <div className="fullscreen-menu">
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
                  Knowledge
                </Link>
              </li>
              <li>
                <Link href={`/contact`} onClick={toggleMenu}>
                  Get in Touch
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