"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";

const HamburgerMenu = () => {
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
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 100) { // scrolled down
        setIsVisible(false);
      } else { // scrolled up or at top
        setIsVisible(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

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
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, flagRef]);

  return (
    <div className="hamburger-menu flex items-center space-x-4">
      <Link href="/request-quote" passHref>
        <button className={`bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg text-xl hover:bg-indigo-700 transition duration-300 shadow-lg transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'}`}>
          Get a Quote
        </button>
      </Link>
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
              border: "2px solid transparent",
              boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
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
                border: "2px solid transparent",
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                borderRadius: "3px",
              }}
              onClick={() => handleLanguageChange("en")}
              title="English"
            />
          </div>
        )}
      </div>
      <button className="menu-icon text-2xl" onClick={toggleMenu}>
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
