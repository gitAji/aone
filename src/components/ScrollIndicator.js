"use client";

import React, { useEffect, useState } from 'react';

const sections = [
  { id: 'hero-section', color: 'bg-blue-500' },
  { id: 'services-section', color: 'bg-green-500' },
  { id: 'projects-section', color: 'bg-yellow-500' },
  { id: 'testimonials-section', color: 'bg-purple-500' },
  { id: 'cta-section', color: 'bg-red-500' },
  { id: 'footer-section', color: 'bg-gray-700' }, // Assuming footer is the last section
];

const ScrollIndicator = () => {
  const [currentColor, setCurrentColor] = useState(sections[0].color);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Mid-viewport

      let activeColor = sections[0].color;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          activeColor = sections[i].color;
          break;
        }
      }
      setCurrentColor(activeColor);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial color
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-0 top-0 h-full w-1 transition-colors duration-500 ${currentColor}`}
      style={{ zIndex: 9999 }}
    ></div>
  );
};

export default ScrollIndicator;
