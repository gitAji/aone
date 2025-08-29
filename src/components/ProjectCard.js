'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, imageUrl, projectLink }) => {
  return (
    <Link href={projectLink} passHref>
      <motion.div
        className="project-card aspect-w-1 aspect-h-1"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <Image src={imageUrl} alt={title} width={400} height={300} className="project-image" />
        <div className="project-title-overlay">
          <h3>{title}</h3>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
