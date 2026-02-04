import React from 'react';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className="logo-container relative z-[1001]">
      <Link href="/" className="cursor-pointer transition-all hover:opacity-80 block">
        {/* Using standard img tag to ensure immediate visibility without optimization delays */}
        <img
          src="/images/logo.png"
          alt="Aone Logo"
          className="logo-img"
          style={{
            height: '120px',
            width: 'auto',
            display: 'block'
          }}
        />
      </Link>
    </div>
  );
};

export default Logo;
