"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import projects from "@/app/data/projects.js";
import { useLanguage } from "@/context/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();
  return (
    <section className="projects-section py-24 md:py-32 bg-slate-50 dark:bg-slate-950 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Heading Section */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-rose-500 mb-4">{t('projects.badge') || 'Our Work'}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            {t('projects.title')}
          </h2>
          <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Flexbox-based Grid */}
        <div className="flex flex-wrap -mx-4">
          {projects.slice(0, 6).map((project, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              {/* Animated Glowing Border Wrapper */}
              <div className="project-card relative group shadow-lg aspect-[4/3] w-full bg-transparent rounded-2xl z-0 border border-slate-200/70 dark:border-white/10">

                {/* Gallery-style number badge */}
                <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm pointer-events-none">
                  <span className="accent-dot" aria-hidden="true" />
                  <span className="font-clash text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* The glowing border container (expands 3px outward to form the thick border line) */}
                <div className="absolute -inset-[3px] rounded-[18px] overflow-hidden bg-slate-200 dark:bg-slate-800 transition-opacity duration-500 pointer-events-none z-0 opacity-0 group-hover:opacity-100">
                  {/* The bright distinct edge line */}
                  <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[250%]"
                    style={{
                      background: 'conic-gradient(from 0deg, transparent 0 260deg, #FFBC42 360deg)',
                      animation: 'spin 3s linear infinite'
                    }}
                  />
                  {/* The soft glowing halo around the edge */}
                  <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[250%] blur-md"
                    style={{
                      background: 'conic-gradient(from 0deg, transparent 0 300deg, #FFBC42 360deg)',
                      animation: 'spin 3s linear infinite'
                    }}
                  />
                </div>
                
                {/* Inner Content Wrapper */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden z-10 bg-white dark:bg-slate-950">
                  <Link
                    href={`/references/${project.id}`}
                    className="relative w-full h-full block overflow-hidden focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                    aria-label={`View details for ${project.title}`}
                  >
                    {/* Background Image */}
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="opacity-100 group-hover:opacity-90 transition-opacity duration-500"
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) 50vw, 33vw"
                      quality={80}
                      priority={index < 3} // Prioritize first three images for faster loading
                    />

                    {/* Overlay - Dark bg with light text in light mode, Light bg with dark text in dark mode */}
                    <div
                      className="project-overlay absolute inset-0 flex flex-col justify-end p-4 sm:p-6 opacity-100 group-hover:opacity-0 group-focus:opacity-0 transition-opacity duration-500"
                    >
                      <div className="flex items-center justify-between w-full">
                        <h3 className="project-overlay-title text-base sm:text-lg md:text-xl font-semibold">
                          {project.title}
                        </h3>
                        <span className="project-overlay-arrow w-6 h-6 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                          -&gt;
                        </span>
                      </div>
                      <p className="project-overlay-desc text-xs sm:text-sm mt-2 opacity-90 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 md:mt-12">
          <Link href="/references">
            <button className="btn-outline-gradient">
              <span>{t('projects.viewAll')}</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
