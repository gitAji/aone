'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

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
  const { theme } = useTheme();

  // Higher opacity for light mode to be visible against light backgrounds
  const opacity = theme === 'dark' ? 0.05 : 0.12;

  const waveColors = [
    `rgba(244, 63, 94, ${opacity})`,  /* Rose 500 */
    `rgba(251, 191, 36, ${opacity})`, /* Amber 400 */
    `rgba(59, 130, 246, ${opacity})`, /* Blue 500 */
    `rgba(167, 139, 250, ${opacity})`, /* Violet 400 */
    `rgba(192, 132, 252, ${opacity})`, /* Purple 400 */
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
