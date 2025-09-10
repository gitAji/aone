
'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import projects from '@/app/data/projects.js';
import ProjectCard from './ProjectCard';
import './Projects.css';

const FeaturedProjects = () => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section className="projects-section py-16 bg-gray-100">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
        <p className="text-lg text-gray-600 mb-12">
          A Glimpse into Our Proudest Moments
        </p>
      </div>
      <div className="projects-scrolling-container">
        <div className="projects-scrolling-wrapper">
          {[...featuredProjects, ...featuredProjects].map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectLink={project.projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
