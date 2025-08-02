'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const TopUtilityBar = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    // Implement actual language switching logic here
    console.log('Language changed to:', e.target.value);
  };

  return (
    <div className="top-utility-bar">
      <div className="utility-links">
        <Link href="/client-login" className="client-login-link">Client Login</Link>
        <select onChange={handleLanguageChange} value={language} className="language-switch">
          <option value="en">EN</option>
          <option value="es">ES</option>
          <option value="fr">FR</option>
        </select>
      </div>
    </div>
  );
};

export default TopUtilityBar;
