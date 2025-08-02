'use client';
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const timelineEvents = [
    { year: 2012, description: 'Company established in the UK.' },
    { year: 2018, description: 'Rebranded as "Aone".' },
    { year: 2022, description: 'Launched major client success program.' },
    { year: 2023, description: 'Introduced AI-powered solutions for enhanced client engagement.' },
    { year: 2025, description: 'Continued innovation and client success.' },
  ];

  return (
    <section className="intro">
      <h2>About Us</h2>
      <p>We are a dynamic agency dedicated to crafting innovative digital solutions and delivering exceptional results.</p>

      <div className="timeline">
        <h3>Our Journey</h3>
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="timeline-year">{event.year}</div>
            <div className="timeline-description">{event.description}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
