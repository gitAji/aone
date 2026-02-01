"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/lib/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'no')) {
            setLanguage(savedLanguage);
        } else {
            const browserLang = navigator.language.split('-')[0];
            if (browserLang === 'no') {
                setLanguage('no');
            }
        }
    }, []);

    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    const t = (path) => {
        const keys = path.split('.');
        let value = translations[language];
        for (const key of keys) {
            if (value && value[key]) {
                value = value[key];
            } else {
                return path;
            }
        }
        return value;
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
