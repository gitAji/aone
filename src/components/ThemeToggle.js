"use client";
import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-200 focus:outline-none"
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? (
                <FaSun className="text-yellow-400 text-xl" />
            ) : (
                <FaMoon className="text-slate-700 text-xl" />
            )}
        </button>
    );
};

export default ThemeToggle;
