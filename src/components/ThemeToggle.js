"use client";

import React from 'react';
import { useTheme } from './ThemeProvider';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <FaMoon className="text-sm" /> : <FaSun className="text-sm" />}
    </button>
  );
};

export default ThemeToggle;
