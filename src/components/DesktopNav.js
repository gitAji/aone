"use client";
import React from "react";
import Link from "next/link";

const DesktopNav = () => {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      <Link
        href={`/services`}
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        Services
      </Link>
      <Link
        href={`/references`}
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        References
      </Link>

      <Link
        href={`/about`}
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        About
      </Link>
      <Link
        href={`/blog`}
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        Blog
      </Link>

      <Link
        href={`/contact`}
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        Get in Touch
      </Link>
      <Link
        href={`/client-login`}
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        Client Login
      </Link>
    </nav>
  );
};

export default DesktopNav;
