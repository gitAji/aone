"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import ScrollDownArrow from "@/components/ScrollDownArrow";
import Link from "next/link";
import Image from "next/image"; // Import Image component
import projects from "../data/projects";
import { FaChevronDown } from 'react-icons/fa';

const ReferencesPage = () => {
  return (
    <div className="references-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Our References"
        subtitle="Explore our portfolio of successful projects"
        description="Showcasing our successful collaborations and the impactful solutions we've delivered for our clients."
      />
      <ScrollDownArrow color="text-gray-700" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })} />
      

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Our References
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {" "}
            {/* Revert grid */}
            {projects.map((project) => (
              <Link href={`${project.projectLink}`} key={project.id}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl cursor-pointer">
                  <div className="relative w-full h-60">
                    {" "}
                    {/* Original height */}
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover" // Original objectFit
                      className="rounded-t-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-blue-600 hover:underline">
                      View Details
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferencesPage;
