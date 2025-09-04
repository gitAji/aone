'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, imageUrl, projectLink, subtitle }) => {
  return (
    <Link href={projectLink} passHref>
      <motion.div
        className="project-card aspect-w-1 aspect-h-1 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <Image src={imageUrl} alt={title} width={400} height={300} className="project-image rounded-lg shadow-lg grayscale" />
        <div className="p-4">
          <h3 className="text-md font-bold">{title}</h3>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
