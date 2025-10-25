"use client";
import React from "react";
import { motion } from "framer-motion";

const ScrollDownArrow = ({ color = "text-white", onClick }) => {
  return (
    <motion.div
      className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20 ${color}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      onClick={onClick}
    >
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        ></path>
      </svg>
    </motion.div>
  );
};

export default ScrollDownArrow;
