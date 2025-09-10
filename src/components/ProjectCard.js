'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, imageUrl, projectLink }) => {
  return (
    <Link href={projectLink} passHref>
      <motion.div
        className="project-card relative overflow-hidden rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={300}
          className="project-card-image object-cover w-full h-full transition-transform duration-300 ease-in-out"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <h3 className="text-white text-2xl font-bold text-center p-4">
            {title}
          </h3>
          <p className="text-white text-center p-4">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
