"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    id: "project-1",
    title: "E-commerce Platform Redesign",
    imageUrl: "/images/projects/saraystange.png",
  },
  {
    id: "project-2",
    title: "Mobile App Development for a FinTech Startup",
    imageUrl: "/images/projects/kidsportals.png",
  },
  {
    id: "project-3",
    title: "Brand Identity and Website Launch for a Creative Agency",
    imageUrl: "/images/projects/saray.png",
  },
  {
    id: "project-4",
    title: "SaaS Platform UI/UX Overhaul",
    imageUrl: "/images/projects/tulips.png",
  },
  {
    id: "project-5",
    title: "Healthcare App Development for a Telemedicine Provider",
    imageUrl: "/images/projects/cleanmasters.png",
  },
  {
    id: "project-6",
    title: "Educational Portal Redesign for a University",
    imageUrl: "/images/projects/saraystange.png",
  },
  {
    id: "project-7",
    title: "E-commerce Platform Redesign",
    imageUrl: "/images/projects/kidsportals.png",
  },
  {
    id: "project-8",
    title: "Mobile App Development for a FinTech Startup",
    imageUrl: "/images/projects/saray.png",
  },
  {
    id: "project-9",
    title: "Brand Identity and Website Launch for a Creative Agency",
    imageUrl: "/images/projects/tulips.png",
  },
];

const ReferencesPage = () => {
  return (
    <div className="references-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Our References"
        subtitle="Explore our portfolio of successful projects"
      />

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Our Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                imageUrl={project.imageUrl}
                projectLink={`/references/${project.id}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferencesPage;
