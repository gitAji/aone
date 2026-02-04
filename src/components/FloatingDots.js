'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

// Helper function to calculate distance between two points
const getDistance = (x1, y1, x2, y2) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
};

const rainbowColors = [
  "#fb7185", // Rose 400
  "#fbbf24", // Amber 400
  "#60a5fa", // Blue 400
  "#a78bfa", // Violet 400
  "#c084fc", // Purple 400
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
        opacity: 0.4,
        x: startX,
        y: startY * 0.6,
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: `0 0 20px ${color}44`,
      }}
      animate={{
        x: [startX, startX + Math.random() * 100 - 50, startX],
        y: [startY * 0.6, startY * 0.6 + Math.random() * 100 - 50, startY * 0.6],
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.6, 0.3],
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
      <span style={{ fontSize: size * 0.6, color: 'white', fontWeight: 'bold' }}>&darr;</span>
    </motion.div>
  );
};

const FloatingDots = ({ containerWidth, containerHeight }) => {
  const containerRef = useRef(null);
  const [dots, setDots] = useState([]);
  const { theme } = useTheme();

  // Same bright colorful palette for both modes
  const themeColors = [
    '#fb7185', // Rose 400
    '#fbbf24', // Amber 400
    '#60a5fa', // Blue 400
  ];

  useEffect(() => {

    if (containerWidth && containerHeight) {
      const newDots = [];
      for (let i = 0; i < 8; i++) {
        newDots.push({
          size: Math.random() * 15 + 15,
          color: themeColors[Math.floor(Math.random() * themeColors.length)],
          delay: Math.random() * 5,
          duration: Math.random() * 8 + 6,
          startX: Math.random() * containerWidth,
          startY: Math.random() * containerHeight,
        });
      }
      setDots(newDots);
    }
  }, [containerWidth, containerHeight]);

  return (
    <div ref={containerRef} style={{ position: 'absolute', width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none' }}>
      <svg className="dots-lines-svg" width="100%" height="100%" style={{ opacity: theme === 'dark' ? 0.3 : 0.6 }}>
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
                strokeWidth={theme === 'dark' ? '1' : '2'}
                initial={{ strokeDasharray: length, strokeDashoffset: length, stroke: dot.color }}
                animate={{
                  strokeDashoffset: [length, 0, length],
                  stroke: [dot.color, nextDot.color, dot.color],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                  delay: dot.delay,
                }}
              />
            );
          }
          return null;
        })}
      </svg>
      {dots.map((dot, index) => (
        <div key={index} style={{ pointerEvents: 'auto' }}>
          <FloatingDot {...dot} onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} />
        </div>
      ))}
    </div>
  );
};

export default FloatingDots;