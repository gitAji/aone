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
      >
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={300}
          className="project-card-image object-cover w-full h-full transition-all duration-300 ease-in-out filter blur-md group-hover:scale-110 group-hover:filter-none"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 ease-in-out group-hover:bg-gray-800 group-hover:bg-opacity-70 group-hover:backdrop-blur-sm">
          {/* Arrow button */}
          <Link href={projectLink} className="absolute bottom-4 right-4 p-2 bg-white rounded-full opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
            <span className="text-gray-800 text-2xl">&rarr;</span>
          </Link>

          {/* Title and Description on hover */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <h3 className="text-white text-2xl font-bold text-center p-4">
              {title}
            </h3>
            <p className="text-white text-center p-4">{description}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
