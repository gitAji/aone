"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useLanguage } from "@/context/LanguageContext";

// `project`/`prevProject`/`nextProject` arrive already resolved server-side
// (see page.js) from the static local projects data — no more parsing the
// slug out of usePathname client-side.
const ProjectDetailClient = ({ project, prevProject, nextProject }) => {
  const { t } = useLanguage();

  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection title={project.title} />

      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={prevProject.projectLink} passHref>
          <button className="flex items-center text-gray-800 hover:text-blue-600 transition-colors duration-300">
            <FaArrowLeft className="mr-2" /> {prevProject.title}
          </button>
        </Link>
        <Link href={nextProject.projectLink} passHref>
          <button className="flex items-center text-gray-800 hover:text-blue-600 transition-colors duration-300">
            {nextProject.title} <FaArrowRight className="ml-2" />
          </button>
        </Link>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            {project.title} - {t('projectDetail.overview')}
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            {project.overview.description1}
          </p>
          <p className="text-lg text-gray-700 mb-6">
            {project.overview.description2}
          </p>
          <div className="mt-8 mx-auto">
            <Image
              src={project.overview.imageUrl}
              alt={`${project.title} Overview`}
              width={1200}
              height={600}
              className="rounded-lg shadow-lg"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">{t('projectDetail.process')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.process.map((step, index) => (
              <div key={index} className="process-step bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {step.description}
                </p>
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            {t('projectDetail.featuresTech')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('projectDetail.features')}</h3>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('projectDetail.technologies')}</h3>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            {t('projectDetail.results')}
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            {project.results.summary}
          </p>
          <div className="mt-8">
            <Image
              src={project.results.imageUrl}
              alt={`${project.title} Results`}
              width={1200}
              height={600}
              className="rounded-lg shadow-lg"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section className="cta py-16 bg-gray-200 text-gray-800 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">
            {t('projectDetail.ctaTitle')}
          </h2>
          <Link
            href={`/free-consultation`}
            className="inline-block bg-gray-800 text-white py-3 px-8 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out text-lg font-semibold shadow-lg"
          >
            {t('projectDetail.ctaButton')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailClient;
