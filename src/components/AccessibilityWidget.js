"use client";
import React, { useState, useEffect, useRef } from 'react';
import { FaUniversalAccess, FaTextHeight, FaEye, FaFont, FaLink, FaRunning, FaSyncAlt } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

const AccessibilityWidget = () => {
  const { language } = useLanguage();
  const isNo = language === 'no';
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef(null);

  // States
  const [textSize, setTextSize] = useState('md'); // sm, md, lg, xl
  const [contrast, setContrast] = useState('normal'); // normal, high-contrast, grayscale
  const [dyslexicFont, setDyslexicFont] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [stopAnimations, setStopAnimations] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedTextSize = localStorage.getItem('a11y-text-size') || 'md';
    const savedContrast = localStorage.getItem('a11y-contrast') || 'normal';
    const savedDyslexic = localStorage.getItem('a11y-dyslexic') === 'true';
    const savedLinks = localStorage.getItem('a11y-links') === 'true';
    const savedAnimations = localStorage.getItem('a11y-animations') === 'true';

    setTextSize(savedTextSize);
    setContrast(savedContrast);
    setDyslexicFont(savedDyslexic);
    setHighlightLinks(savedLinks);
    setStopAnimations(savedAnimations);
  }, []);

  // Update HTML classes when states change
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('a11y-text-sm', 'a11y-text-lg', 'a11y-text-xl');
    if (textSize !== 'md') {
      root.classList.add(`a11y-text-${textSize}`);
    }
    localStorage.setItem('a11y-text-size', textSize);
  }, [textSize]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('a11y-high-contrast', 'a11y-grayscale');
    if (contrast !== 'normal') {
      root.classList.add(`a11y-${contrast}`);
    }
    localStorage.setItem('a11y-contrast', contrast);
  }, [contrast]);

  useEffect(() => {
    const root = document.documentElement;
    if (dyslexicFont) {
      root.classList.add('a11y-dyslexic');
    } else {
      root.classList.remove('a11y-dyslexic');
    }
    localStorage.setItem('a11y-dyslexic', dyslexicFont);
  }, [dyslexicFont]);

  useEffect(() => {
    const root = document.documentElement;
    if (highlightLinks) {
      root.classList.add('a11y-highlight-links');
    } else {
      root.classList.remove('a11y-highlight-links');
    }
    localStorage.setItem('a11y-links', highlightLinks);
  }, [highlightLinks]);

  useEffect(() => {
    const root = document.documentElement;
    if (stopAnimations) {
      root.classList.add('a11y-stop-animations');
    } else {
      root.classList.remove('a11y-stop-animations');
    }
    localStorage.setItem('a11y-animations', stopAnimations);
  }, [stopAnimations]);

  // Click outside listener to close widget
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const resetAll = () => {
    setTextSize('md');
    setContrast('normal');
    setDyslexicFont(false);
    setHighlightLinks(false);
    setStopAnimations(false);
  };

  return (
    <div ref={widgetRef} className="fixed bottom-6 left-6 z-[99999] select-none font-sans">
      
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 border border-slate-800 dark:border-slate-200"
        aria-label="Accessibility settings"
        aria-expanded={isOpen}
      >
        <FaUniversalAccess className="text-xl" />
      </button>

      {/* Settings Card */}
      {isOpen && (
        <div className="absolute bottom-16 left-0 w-80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white max-h-[80vh] overflow-y-auto">
          
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200 dark:border-slate-800">
            <h3 className="font-clash text-lg font-bold">
              {isNo ? 'Tilgjengelighet' : 'Accessibility'}
            </h3>
            <button
              onClick={resetAll}
              className="text-[10px] text-rose-500 hover:text-rose-600 font-bold uppercase tracking-wider flex items-center gap-1"
            >
              <FaSyncAlt className="text-[9px]" />
              {isNo ? 'Nullstill' : 'Reset'}
            </button>
          </div>

          <div className="space-y-6">
            
            {/* Text Size Selector */}
            <div>
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                <FaTextHeight />
                {isNo ? 'Tekststørrelse' : 'Text Size'}
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { key: 'sm', label: 'A-' },
                  { key: 'md', label: '100%' },
                  { key: 'lg', label: 'A+' },
                  { key: 'xl', label: 'A++' }
                ].map(opt => (
                  <button
                    key={opt.key}
                    onClick={() => setTextSize(opt.key)}
                    className={`py-2 text-xs font-bold rounded-xl transition-all duration-200 ${
                      textSize === opt.key
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow'
                        : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-350'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contrast Options */}
            <div>
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                <FaEye />
                {isNo ? 'Kontrastmodus' : 'Contrast Mode'}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: 'normal', label: isNo ? 'Normal' : 'Normal' },
                  { key: 'high-contrast', label: isNo ? 'Høy kontrast' : 'High Contrast' },
                  { key: 'grayscale', label: isNo ? 'Gråtoner' : 'Grayscale' }
                ].map(opt => (
                  <button
                    key={opt.key}
                    onClick={() => setContrast(opt.key)}
                    className={`py-2 px-1 text-[10px] font-bold rounded-xl leading-tight transition-all duration-200 ${
                      contrast === opt.key
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow'
                        : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-350'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Dyslexic Font Toggle */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <FaFont />
                {isNo ? 'Dysleksi-skrift' : 'Dyslexic Font'}
              </label>
              <button
                onClick={() => setDyslexicFont(!dyslexicFont)}
                className={`w-11 h-6 rounded-full transition-colors duration-200 relative ${
                  customClassForDyslexic()
                }`}
                aria-label="Toggle dyslexic font"
              >
                <span className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-all duration-200 ${
                  dyslexicFont ? 'left-6' : 'left-1'
                }`} />
              </button>
            </div>

            {/* Highlight Links Toggle */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <FaLink />
                {isNo ? 'Uthev lenker' : 'Highlight Links'}
              </label>
              <button
                onClick={() => setHighlightLinks(!highlightLinks)}
                className={`w-11 h-6 rounded-full transition-colors duration-200 relative ${
                  highlightLinks ? 'bg-rose-500' : 'bg-slate-200 dark:bg-slate-800'
                }`}
                aria-label="Toggle highlight links"
              >
                <span className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-all duration-200 ${
                  highlightLinks ? 'left-6' : 'left-1'
                }`} />
              </button>
            </div>

            {/* Stop Animations Toggle */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <FaRunning />
                {isNo ? 'Stopp animasjoner' : 'Stop Animations'}
              </label>
              <button
                onClick={() => setStopAnimations(!stopAnimations)}
                className={`w-11 h-6 rounded-full transition-colors duration-200 relative ${
                  stopAnimations ? 'bg-rose-500' : 'bg-slate-200 dark:bg-slate-800'
                }`}
                aria-label="Toggle stop animations"
              >
                <span className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-all duration-200 ${
                  stopAnimations ? 'left-6' : 'left-1'
                }`} />
              </button>
            </div>

          </div>

        </div>
      )}
    </div>
  );

  function customClassForDyslexic() {
    return dyslexicFont ? 'bg-rose-500' : 'bg-slate-200 dark:bg-slate-800';
  }
};

export default AccessibilityWidget;
