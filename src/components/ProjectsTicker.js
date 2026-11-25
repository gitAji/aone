"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import projects from "@/app/data/projects";

// Horizontal, infinitely-scrolling strip of recent project names + thumbnails
// for the homepage hero. Reuses the site's existing seamless-loop primitive
// (.animate-scroll-left, globals.css) -- two identical copies of the track
// placed side by side, animated to translateX(-50%), which always lands
// exactly on the start of the second copy no matter how many items fit on
// screen. That same class already pauses on hover (see its :hover rule),
// so no extra JS/state is needed for the "pause on hover" requirement.
const featured = projects.filter((p) => p.featured).slice(0, 10);

const ProjectsTicker = () => {
  const { t, language } = useLanguage();

  if (featured.length === 0) return null;

  const track = [...featured, ...featured];

  return (
    <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] mt-16 py-6 border-t border-slate-200/70 dark:border-slate-800/70 overflow-hidden">
      <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600 mb-5">
        {t('hero.latestWork') || 'Our Latest Work'}
      </p>

      {/* Edge fade masks -- match the hero's own background so the strip
          reads as fading into the section rather than hard-clipping. */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 dark:from-[#020617] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 dark:from-[#020617] to-transparent z-10" />

      <div className="flex w-max animate-scroll-left items-center">
        {track.map((project, i) => (
          <Link
            key={`${project.id}-${i}`}
            href={project.projectLink}
            className="group shrink-0 mx-3 inline-flex items-center gap-3 pl-2 pr-5 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-rose-300 dark:hover:border-rose-500/50 transition-colors"
          >
            <span className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-800">
              <Image
                src={project.imageUrl}
                alt={project.title?.[language] || project.title?.en || ''}
                fill
                className="object-cover"
                sizes="36px"
              />
            </span>
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-rose-500 dark:group-hover:text-rose-400 whitespace-nowrap transition-colors">
              {project.title?.[language] || project.title?.en}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsTicker;
