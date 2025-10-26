"use client";

import React, { useEffect, useState } from 'react';

const sections = [
  { id: 'hero-section', color: 'bg-blue-500' },
  { id: 'services-section', color: 'bg-green-500' },
  { id: 'projects-section', color: 'bg-yellow-500' },
  { id: 'testimonials-section', color: 'bg-purple-500' },
  { id: 'cta-section', color: 'bg-red-500' },
];

const ScrollIndicator = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let activeIndex = 0;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          activeIndex = i;
          break;
        }
      }
      setCurrentSectionIndex(activeIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSegmentClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="fixed left-0 top-0 w-full h-0.5 flex"
      style={{ zIndex: 9999 }}
    >
      {sections.map((section, index) => (
        <div
          key={section.id}
          className={`cursor-pointer h-full w-1/5 ${section.color} transition-opacity duration-300 ${
            currentSectionIndex === index ? 'opacity-100' : 'opacity-25'
          }`}
          onClick={() => handleSegmentClick(section.id)}
        ></div>
      ))}
    </div>
  );
};

export default ScrollIndicator;
