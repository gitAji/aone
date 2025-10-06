
"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import projects from "@/app/data/projects";

const ProjectDetail = ({ project }) => {
  const currentIndex = projects.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection title={project.title} />

      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {prevProject ? (
          <Link href={`/references/${prevProject.id}`} passHref>
            <button className="flex items-center text-gray-800 hover:text-blue-600 transition-colors duration-300">
              <FaArrowLeft className="mr-2" /> {prevProject.title}
            </button>
          </Link>
        ) : (
          <div />
        )}
        {nextProject ? (
          <Link href={`/references/${nextProject.id}`} passHref>
            <button className="flex items-center text-gray-800 hover:text-blue-600 transition-colors duration-300">
              {nextProject.title} <FaArrowRight className="ml-2" />
            </button>
          </Link>
        ) : (
          <div />
        )}
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            {project.title} - Project Overview
          </h2>
        </div>
      </section>

      {project.process && (
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.process.map((step, index) => (
                <div key={index} className="process-step bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{step.description}</p>
                  <Image
                    src={step.imageUrl}
                    alt={step.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md mt-4"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {project.features && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Key Features & Deliverables
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {project.results && (
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Results & Impact
            </h2>
            <p className="text-lg text-gray-700 mb-6">{project.results.summary}</p>
            {project.results.imageUrl && (
              <div className="mt-8 mx-auto">
                <Image
                  src={project.results.imageUrl}
                  alt={`${project.title} Results`}
                  width={800}
                  height={400}
                  className="rounded-lg shadow-lg"
                  sizes="100vw"
                />
              </div>
            )}
          </div>
        </section>
      )}

      <section className="cta py-16 bg-gray-200 text-gray-800 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">
            Ready to start your project?
          </h2>
          <Link
            href={`/free-consultation`}
            className="btn-gradient-primary"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
