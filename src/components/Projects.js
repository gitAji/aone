"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import projects from "@/app/data/projects.js";
import "./Projects.css";

const cardHeights = ["h-68", "h-76", "h-72", "h-78"];

const Projects = () => {
  console.log("Projects component rendered");
  return (
    <section className="projects-section py-20 bg-gray-50 flex justify-center items-center w-full min-h-screen">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of our most innovative digital solutions for clients.
          </p>
        </div>

        {/* Masonry-like grid */}
        <div className="projects-grid mx-auto">
          {projects.map((project, index) => {
            const heightClass = cardHeights[index % cardHeights.length];
            return (
              <motion.div
                key={index}
                className={`project-card relative overflow-hidden rounded-2xl shadow-lg ${heightClass}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  href={project.projectLink}
                  className="relative w-full h-full group block"
                >
                  {/* Background Image */}
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    objectFit="cover" // Original objectFit
                    className="rounded-t-lg"
                  />

                  {/* Overlay */}
                  <div className="overlay absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 transition-all duration-500 group-hover:from-black/80 group-hover:via-black/50">
                    <div className="flex items-center justify-between w-full">
                      <h3 className="text-white text-xl font-semibold">
                        {project.title}
                      </h3>
                      <span className="text-white w-6 h-6 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                        -&gt;
                      </span>
                    </div>
                    <p className="text-gray-200 text-sm mt-2 opacity-80 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;