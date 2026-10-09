"use client";
import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="group relative flex items-center justify-center w-7 h-7 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-200 focus:outline-none"
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? (
                <FaSun className="text-yellow-400 text-sm" />
            ) : (
                <FaMoon className="text-slate-700 dark:text-slate-300 text-sm" />
            )}
            {/* Premium Hover Tooltip */}
            <span className="pointer-events-none absolute top-full left-1/2 mt-2.5 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-950 dark:bg-white px-2.5 py-1.5 text-[9px] uppercase font-black tracking-widest text-white dark:text-slate-900 opacity-0 scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 shadow-xl hidden sm:block">
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
        </button>
    );
};

export default ThemeToggle;
