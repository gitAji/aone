'use client';
'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingDot = ({ size, color, delay, duration, startX, startY, onClick }) => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: '50%',
        opacity: 0.6,
        x: startX,
        y: startY,
        cursor: 'pointer',
      }}
      animate={{
        x: [startX, startX + Math.random() * 200 - 100, startX],
        y: [startY, startY + Math.random() * 200 - 100, startY],
        scale: [1, 1.2, 1],
        opacity: [0.6, 0.8, 0.6],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay,
      }}
      onClick={onClick}
    />
  );
};

const FloatingDots = () => {
  const containerRef = useRef(null);
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const pastelColors = [
      '#FDFD96', // Pastel Yellow
      '#B0B0B0', // Light Gray
      '#FFD1DC', // Pastel Pink (from original palette)
      '#A2E1D4', // Mint Green (from original palette)
    ];

    if (containerRef.current) {
      const newDots = [];
      for (let i = 0; i < 20; i++) { // Generate 20 dots
        newDots.push({
          size: Math.random() * 15 + 5, // Size between 5 and 20
          color: pastelColors[Math.floor(Math.random() * pastelColors.length)],
          delay: Math.random() * 5, // Random delay up to 5 seconds
          duration: Math.random() * 10 + 5, // Duration between 5 and 15 seconds
          startX: Math.random() * containerRef.current.offsetWidth,
          startY: Math.random() * containerRef.current.offsetHeight,
        });
      }
      setDots(newDots);
    }
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'absolute', width: '100%', height: '100%', overflow: 'hidden' }}>
      <svg className="dots-lines-svg" width="100%" height="100%">
        {dots.map((dot, index) => {
          const nextDot = dots[index + 1];
          if (nextDot) {
            return (
              <line
                key={`line-${index}`}
                x1={dot.startX + dot.size / 2}
                y1={dot.startY + dot.size / 2}
                x2={nextDot.startX + nextDot.size / 2}
                y2={nextDot.startY + nextDot.size / 2}
                stroke="var(--light-gray)"
                strokeWidth="1"
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
