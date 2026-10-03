"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import { FaExternalLinkAlt } from "react-icons/fa";
import portfolioLinks from "@/app/data/portfolioLinks";

const ProjectsClient = () => {
  return (
    <div className="projects-page bg-gray-50 dark:bg-slate-950 min-h-screen">
      <HeroSection
        title="Portfolio"
        subtitle="A roundup of live project deployments."
      />

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioLinks.map((project) => (
            <a
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md transition duration-300 hover:scale-105 hover:shadow-xl border border-slate-100 dark:border-slate-800"
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.name}
                </h3>
                <FaExternalLinkAlt className="text-slate-400 group-hover:text-rose-500 transition-colors text-sm flex-shrink-0" />
              </div>
              <p className="text-sm text-gray-600 dark:text-slate-400 mb-3">
                {project.description}
              </p>
              <span className="text-xs text-rose-500 font-medium break-all">
                {project.url.replace(/^https?:\/\//, "")}
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsClient;
