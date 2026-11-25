"use client";
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FaUniversalAccess,
  FaTextHeight, FaEye, FaFont, FaLink, FaRunning, FaSyncAlt, FaTimes
} from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

// Accessibility settings control. Used to be its own floating corner button
// with an anchored flyout panel; now it's a plain text trigger rendered
// inside Footer.js's Legal column (next to Cookie Settings), opening this
// panel as a centered modal instead -- a trigger position in the document
// flow has nowhere sensible to anchor a flyout to. All the underlying
// state/localStorage/documentElement-class logic is unchanged from the
// original floating version.
const SettingsFab = () => {
  const { language } = useLanguage();
  const isNo = language === 'no';

  const [isOpen, setIsOpen] = useState(false);

  // Accessibility settings state (unchanged from the old floating fab)
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

  // Escape-to-close, matching the modal convention used elsewhere on the
  // site (e.g. the cookie preferences modal).
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const resetAll = () => {
    setTextSize('md');
    setContrast('normal');
    setDyslexicFont(false);
    setHighlightLinks(false);
    setStopAnimations(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="text-sm text-white hover:text-rose-400 flex items-center gap-2 group transition-colors text-left"
      >
        <FaUniversalAccess className="text-xs text-slate-500 group-hover:text-rose-400 transition-colors" />
        {isNo ? 'Tilgjengelighetsinnstillinger' : 'Accessibility Settings'}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={isNo ? 'Tilgjengelighet' : 'Accessibility'}
              className="w-full max-w-sm bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200 dark:border-slate-800">
                <span className="flex items-center gap-2 font-clash text-lg font-bold">
                  <FaUniversalAccess className="text-sm text-rose-500" />
                  {isNo ? 'Tilgjengelighet' : 'Accessibility'}
                </span>
                <div className="flex items-center gap-4">
                  <button
                    onClick={resetAll}
                    className="text-[10px] text-rose-500 hover:text-rose-600 font-bold uppercase tracking-wider flex items-center gap-1"
                  >
                    <FaSyncAlt className="text-[9px]" />
                    {isNo ? 'Nullstill' : 'Reset'}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label={isNo ? 'Lukk' : 'Close'}
                    className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    <FaTimes />
                  </button>
                </div>
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SettingsFab;
