"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import projects from "@/app/data/projects.js";

const Projects = () => {
  return (
    <section className="projects-section py-12 md:py-20 bg-gray-50 dark:bg-background-color flex justify-center items-center w-full min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Heading Section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-500">
            Our Latest Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of our most innovative digital solutions for clients.
          </p>
        </div>

        {/* Flexbox-based Grid */}
        <div className="flex flex-wrap -mx-4">
          {projects.slice(0, 6).map((project, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div
                className="project-card relative overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-light-gray aspect-[4/3] w-full"
              >
                <Link
                  href={`/references/${project.id}`}
                  className="relative w-full h-full group block overflow-hidden focus:outline-none focus:ring-2 focus:ring-pink-700 focus:ring-offset-2"
                  aria-label={`View details for ${project.title}`}
                >
                  {/* Background Image */}
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-t-2xl opacity-100 group-hover:opacity-90 transition-opacity duration-500"
                    sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) 50vw, 33vw"
                    priority={index < 3} // Prioritize first three images for faster loading
                  />

                  {/* Overlay */}
                  <div className="overlay absolute inset-0 bg-white/80 dark:bg-black/80 flex flex-col justify-end p-4 sm:p-6 opacity-100 group-hover:opacity-0 group-focus:opacity-0 transition-opacity duration-500">
                    <div className="flex items-center justify-between w-full">
                      <h3 className="text-gray-900 dark:text-gray-100 text-lg sm:text-xl md:text-2xl font-bold">
                        {project.title}
                      </h3>
                      <span className="text-black dark:text-white w-6 h-6 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                        -&gt;
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mt-2 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 md:mt-12">
          <Link href="/references">
            <button className="btn-outline-gradient">
              View all projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
