'use client';
import React from 'react';
import { motion } from 'framer-motion';

const WaveLayer = ({ delay, duration, color, zIndex }) => (
  <motion.div
    className="wave-layer"
    style={{ backgroundColor: color, zIndex: zIndex }}
    initial={{ x: '-100%' }}
    animate={{ x: '100%' }}
    transition={{
      repeat: Infinity,
      repeatType: "loop",
      duration: duration,
      ease: "linear",
      delay: delay,
    }}
  />
);

const WaveLayers = () => {
  const waveColors = [
    'rgba(255, 255, 255, 0.1)',
    'rgba(255, 255, 255, 0.2)',
    'rgba(255, 255, 255, 0.3)',
    'rgba(255, 255, 255, 0.4)',
    'rgba(255, 255, 255, 0.5)',
  ];

  return (
    <div className="wave-layers-container">
      {waveColors.map((color, index) => (
        <WaveLayer
          key={index}
          delay={index * 0.5}
          duration={10 + index * 2}
          color={color}
          zIndex={-10 + index}
        />
      ))}
    </div>
  );
};

export default WaveLayers;
