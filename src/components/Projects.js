"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import projects from "@/app/data/projects.js";

const Projects = () => {
  return (
    <section className="projects-section py-20 bg-gray-50 flex justify-center items-center w-full min-h-screen max-w-full overflow-x-hidden">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our latest Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of our most innovative digital solutions for clients.
          </p>
        </div>

        {/* Masonry-like grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto w-full">
          {projects.slice(0, 6).map((project, index) => {
            return (
              <div
                key={index}
                className={`project-card relative overflow-hidden rounded-2xl shadow-lg bg-white aspect-[4/3] md:h-80 box-border`}
              >
                <Link
                  href={project.projectLink}
                  className="relative w-full h-full group block overflow-hidden"
                >
                  {/* Background Image */}
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-t-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500"
                  />

                  {/* Overlay */}
                  <div className="overlay absolute inset-0 bg-white/80 flex flex-col justify-end p-4 md:p-6 opacity-100 group-hover:opacity-0 group-focus-within:opacity-0 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 bg-white/80 p-4 md:p-6">
                      <div className="flex items-center justify-between w-full">
                        <h3 className="text-black text-lg md:text-xl font-semibold">
                          {project.title}
                        </h3>
                        <span className="text-black w-6 h-6 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                          -&gt;
                        </span>
                      </div>
                      <p className="text-black text-sm mt-2 opacity-80 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Link href="/references">
            <button className="inline-block px-8 py-3 text-lg font-semibold text-white bg-pink-700 rounded-lg shadow-md hover:bg-pink-800 hover:scale-105 transition-all duration-300">
              View all projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
