'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Helper function to calculate distance between two points
const getDistance = (x1, y1, x2, y2) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
};

const rainbowColors = [
  "#FFB3BA", // Pastel Red
  "#FFDFBA", // Pastel Orange
  "#FFFFBA", // Pastel Yellow
  "#BAFFC9", // Pastel Green
  "#BAE1FF", // Pastel Blue
  "#CBAACB", // Pastel Indigo
  "#E0BBE4", // Pastel Violet
];

const FloatingDot = ({ size, color, delay, duration, startX, startY, onClick }) => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: '50%',
        opacity: 0.8, // Increased opacity for brighter appearance
        x: startX,
        y: startY * 0.6, // Adjusted startY to be higher
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: size * 1.0, // Increased arrow size
        color: 'white', // Arrow color
      }}
      animate={{
        x: [startX, startX + Math.random() * 200 - 100, startX],
        y: [startY * 0.6, startY * 0.6 + Math.random() * 200 - 100, startY * 0.6], // Adjusted y animation range
        scale: [1, 1.2, 1],
        opacity: [0.8, 1, 0.8], // Adjusted opacity animation range
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay,
      }}
      onClick={onClick}
    >
      &darr;
    </motion.div>
  );
};

const FloatingDots = ({ containerWidth, containerHeight }) => {
  const containerRef = useRef(null);
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const pastelColors = [
      '#FDFD96', // Pastel Yellow
      '#B0B0B0', // Light Gray
      '#FFD1DC', // Pastel Pink (from original palette)
      '#A2E1D4', // Mint Green (from original palette)
    ];

    if (containerWidth && containerHeight) {
      const newDots = [];
      for (let i = 0; i < 5; i++) { // Generate 5 dots
        newDots.push({
          size: Math.random() * 20 + 10, // Adjusted size for better visibility (between 10 and 30)
          color: pastelColors[Math.floor(Math.random() * pastelColors.length)],
          delay: Math.random() * 5, // Random delay up to 5 seconds
          duration: Math.random() * 10 + 5, // Duration between 5 and 15 seconds
          startX: Math.random() * containerWidth,
          startY: Math.random() * containerHeight,
        });
      }
      setDots(newDots);
    }
  }, [containerWidth, containerHeight]);

  return (
    <div ref={containerRef} style={{ position: 'absolute', width: '100%', height: '100%', overflow: 'hidden' }}>
      <svg className="dots-lines-svg" width="100%" height="100%">
        {dots.map((dot, index) => {
          const nextDot = dots[index + 1];
          if (nextDot) {
            const length = getDistance(
              dot.startX + dot.size / 2,
              dot.startY + dot.size / 2,
              nextDot.startX + nextDot.size / 2,
              nextDot.startY + nextDot.size / 2
            );
            return (
              <motion.line
                key={`line-${index}`}
                x1={dot.startX + dot.size / 2}
                y1={dot.startY + dot.size / 2}
                x2={nextDot.startX + nextDot.size / 2}
                y2={nextDot.startY + nextDot.size / 2}
                strokeWidth="1"
                initial={{ strokeDasharray: length, strokeDashoffset: length, stroke: rainbowColors[0] }}
                animate={{
                  strokeDashoffset: 0,
                  stroke: rainbowColors,
                }}
                transition={{
                  strokeDashoffset: { duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: dot.delay, repeatDelay: 1 },
                  stroke: { duration: 5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: dot.delay + 2, repeatDelay: 1 }, // Start color animation after drawing
                }}
              />
            );
          }
          return null;
        })}
      </svg>
      {dots.map((dot, index) => (
        <FloatingDot key={index} {...dot} onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} />
      ))}
    </div>
  );
};

export default FloatingDots;