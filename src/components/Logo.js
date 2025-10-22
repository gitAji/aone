"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = ({ theme = 'light' }) => {
  const logoSrc = theme === 'dark' ? "/images/logo-white.png" : "/images/logo.png";

  return (
    <div className="logo-container cursor-pointer">
      <Link href="/" className="transition-all hover:opacity-80">
        <Image src={logoSrc} alt="Your Brand Logo" width={150} height={50} sizes="150px" className="cursor-pointer" />
      </Link>
    </div>
  );
};

export default Logo;
