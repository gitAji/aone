"use client";
import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FaUniversalAccess,
  FaTextHeight, FaEye, FaFont, FaLink, FaRunning, FaSyncAlt
} from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

// Floating accessibility-settings button. Cookie preferences used to live
// behind a combined menu here, but now have their own dedicated icon (see
// CookieSettingsButton.js) stacked above this one, so each control is a
// single, clearly labeled click instead of being buried in a submenu.
// z-[100000] (one above CookieSettingsButton's z-[99999]) so the opened
// accessibility panel -- tall enough to cover that button's position --
// always paints above it rather than behind it.
const SettingsFab = () => {
  const { language } = useLanguage();
  const isNo = language === 'no';
  const rootRef = useRef(null);

  // 'closed' | 'a11y'
  const [view, setView] = useState('closed');

  // Accessibility settings state (unchanged from the old AccessibilityWidget)
  const [textSize, setTextSize] = useState('md');
  const [contrast, setContrast] = useState('normal');
  const [dyslexicFont, setDyslexicFont] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [stopAnimations, setStopAnimations] = useState(false);

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

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('a11y-text-sm', 'a11y-text-lg', 'a11y-text-xl');
    if (textSize !== 'md') root.classList.add(`a11y-text-${textSize}`);
    localStorage.setItem('a11y-text-size', textSize);
  }, [textSize]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('a11y-high-contrast', 'a11y-grayscale');
    if (contrast !== 'normal') root.classList.add(`a11y-${contrast}`);
    localStorage.setItem('a11y-contrast', contrast);
  }, [contrast]);

  useEffect(() => {
    document.documentElement.classList.toggle('a11y-dyslexic', dyslexicFont);
    localStorage.setItem('a11y-dyslexic', dyslexicFont);
  }, [dyslexicFont]);

  useEffect(() => {
    document.documentElement.classList.toggle('a11y-highlight-links', highlightLinks);
    localStorage.setItem('a11y-links', highlightLinks);
  }, [highlightLinks]);

  useEffect(() => {
    document.documentElement.classList.toggle('a11y-stop-animations', stopAnimations);
    localStorage.setItem('a11y-animations', stopAnimations);
  }, [stopAnimations]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setView('closed');
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
    <div ref={rootRef} className="fixed bottom-6 left-6 z-[100000] select-none font-sans">
      <button
        onClick={() => setView(view === 'closed' ? 'a11y' : 'closed')}
        className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 border border-slate-800 dark:border-slate-200"
        aria-label={isNo ? 'Tilgjengelighet' : 'Accessibility'}
        aria-expanded={view !== 'closed'}
      >
        <FaUniversalAccess className="text-sm" />
      </button>

      <AnimatePresence>
        {view === 'a11y' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 8 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            className="absolute bottom-16 left-0 w-80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white max-h-[80vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200 dark:border-slate-800">
              <span className="flex items-center gap-2 font-clash text-lg font-bold">
                <FaUniversalAccess className="text-sm text-rose-500" />
                {isNo ? 'Tilgjengelighet' : 'Accessibility'}
              </span>
              <button
                onClick={resetAll}
                className="text-[10px] text-rose-500 hover:text-rose-600 font-bold uppercase tracking-wider flex items-center gap-1"
              >
                <FaSyncAlt className="text-[9px]" />
                {isNo ? 'Nullstill' : 'Reset'}
              </button>
            </div>

            <div className="space-y-6">
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

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  <FaFont />
                  {isNo ? 'Dysleksi-skrift' : 'Dyslexic Font'}
                </label>
                <button
                  onClick={() => setDyslexicFont(!dyslexicFont)}
                  className={`w-11 h-6 rounded-full transition-colors duration-200 relative ${
                    dyslexicFont ? 'bg-rose-500' : 'bg-slate-200 dark:bg-slate-800'
                  }`}
                  aria-label="Toggle dyslexic font"
                >
                  <span className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-all duration-200 ${
                    dyslexicFont ? 'left-6' : 'left-1'
                  }`} />
                </button>
              </div>

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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SettingsFab;
