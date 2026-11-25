"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import projects from "@/app/data/projects";

// Small rotating cluster of recent-project pills for the homepage hero --
// replaces an earlier infinite-scroll marquee ticker (rejected as dated/
// "marquee behaviour"). A group of 3 oval/pill cards -- same rounded-full
// shape as every button and icon control elsewhere on the site, so it
// doesn't read as a visually jarring one-off -- cascades in, holds, then
// cascades out and is replaced by the next group of 3, cycling through
// every featured project. Sits in normal document flow (no full-bleed
// breakout, unlike the old ticker), centered and wrapping on narrow
// viewports, so it can never collide with the hero's other content or the
// scroll-down affordance below it.
const GROUP_SIZE = 3;
const CYCLE_MS = 4200;

const featured = projects.filter((p) => p.featured);
const groupCount = Math.floor(featured.length / GROUP_SIZE);
const groups = Array.from({ length: groupCount }, (_, i) =>
  featured.slice(i * GROUP_SIZE, i * GROUP_SIZE + GROUP_SIZE)
);

const cardVariants = {
  enter: { opacity: 0, y: 22, scale: 0.92 },
  center: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.09, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
  exit: (i) => ({
    opacity: 0,
    y: -16,
    scale: 0.94,
    transition: { delay: i * 0.05, duration: 0.35, ease: "easeIn" },
  }),
};

const ProjectsShowcase = () => {
  const { language } = useLanguage();
  const [groupIndex, setGroupIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (groups.length <= 1 || isPaused) return;
    const id = setInterval(() => {
      setGroupIndex((i) => (i + 1) % groups.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, [isPaused]);

  if (groups.length === 0) return null;
  const current = groups[groupIndex];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="mt-10 min-h-[56px] flex flex-wrap items-center justify-center gap-3 sm:gap-4"
    >
      <AnimatePresence mode="popLayout">
        {current.map((project, i) => (
          <motion.div key={project.id} custom={i} variants={cardVariants} initial="enter" animate="center" exit="exit">
            <Link
              href={project.projectLink}
              className="group inline-flex items-center gap-3 pl-2 pr-5 py-2 rounded-full bg-white shadow-[0_10px_28px_rgba(15,23,42,0.16)] ring-1 ring-black/5 hover:-translate-y-1 transition-transform duration-300"
            >
              <span className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden shrink-0 bg-slate-100">
                <Image
                  src={project.imageUrl}
                  alt={project.title?.[language] || project.title?.en || ""}
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 whitespace-nowrap group-hover:text-rose-500 transition-colors">
                {project.title?.[language] || project.title?.en}
              </span>
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsShowcase;
