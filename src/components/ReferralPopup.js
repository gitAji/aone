"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const ReferralPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the popup has been shown in this session
    const hasBeenShown = sessionStorage.getItem("referralPopupShown");
    if (!hasBeenShown) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("referralPopupShown", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-lg shadow-2xl p-8 max-w-sm w-full relative transform transition-all duration-300 scale-100 opacity-100 border-4 border-yellow-400 animate-blink-border">
        <button
          onClick={handleClose}
          className="absolute p-3 top-3 right-3 text-white hover:text-gray-200 text-2xl font-bold"
          aria-label="Close popup"
        >
          &times;
        </button>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold mb-4 leading-tight">
            🎉 Exciting Offer! 🎉
          </h2>
          <p className="text-xl mb-6">
            Refer a client and get{" "}
            <span className="font-bold text-yellow-300">200kr</span> to your
            Vipps!
          </p>
          <Link href="/referral">
            <button
              onClick={handleClose} // Close popup when CTA is clicked
              className="bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-white font-bold py-4 px-8 rounded-full text-xl hover:from-red-600 hover:via-yellow-600 hover:to-blue-600 transition duration-300 shadow-lg transform hover:scale-105"
            >
              Refer Now!
            </button>
          </Link>
          <p className="text-[0.5rem] pt-4">
            <Link
              href="/privacy-policy"
              className="underline hover:no-underline text-gray-300 hover:text-gray-200"
            >
              Terms and Conditions Apply
            </Link>
          </p>
        </div>
      </div>
      <style jsx>{`
        @keyframes blink-border {
          0% {
            border-color: #facc15;
          } /* yellow-400 */
          50% {
            border-color: transparent;
          }
          100% {
            border-color: #facc15;
          }
        }
        .animate-blink-border {
          animation: blink-border 1.5s infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default ReferralPopup;
