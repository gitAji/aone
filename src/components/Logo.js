"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="logo-container">
      <Link href="/">
        <Image src="/images/logo.png" alt="Your Brand Logo" width={150} height={50} />
      </Link>
    </div>
  );
};

export default Logo;
