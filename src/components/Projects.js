'use client';
import React from 'react';
import Image from 'next/image';

import Link from 'next/link';
import { motion } from 'framer-motion';
import projects from '@/app/data/projects.js';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects-section pt-24 pb-16 bg-gray-100">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Projects</h2>
        <p className="text-lg text-gray-600 mb-12">
          A Glimpse into Our Proudest Moments
        </p>
      </div>
      <div className="projects-scrolling-container">
        <div className="projects-scrolling-wrapper">
          {[...projects, ...projects].map((project, index) => (
            <Link href={project.projectLink} passHref key={index}>
              <motion.div
                className="project-card relative overflow-hidden rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <h3 className="text-white text-2xl font-bold text-center p-4">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
