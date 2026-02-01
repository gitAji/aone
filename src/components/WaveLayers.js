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
    'rgba(244, 63, 94, 0.05)',  /* Rose 500 with low opacity */
    'rgba(251, 191, 36, 0.05)', /* Amber 400 with low opacity */
    'rgba(59, 130, 246, 0.05)', /* Blue 500 with low opacity */
    'rgba(167, 139, 250, 0.05)', /* Violet 400 with low opacity */
    'rgba(192, 132, 252, 0.05)', /* Purple 400 with low opacity */
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
