"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import Image from "next/image";
import projects from "../data/projects";
import { useLanguage } from "@/context/LanguageContext";

const ReferencesPage = () => {
  const { t } = useLanguage();
  return (
    <div className="references-page bg-gray-50 dark:bg-slate-950 min-h-screen">
      <HeroSection
        title={t('referencesPage.title')}
        subtitle={t('referencesPage.subtitle')}
      />

      <section className="py-16 bg-gray-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center">
            {t('referencesPage.header')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {" "}
            {/* Revert grid */}
            {projects.map((project) => (
              <Link href={`${project.projectLink}`} key={project.id}>
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl cursor-pointer border border-slate-100 dark:border-slate-700">
                  <div className="relative w-full h-60">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-blue-600 dark:text-rose-400 font-medium hover:underline">
                      {t('referencesPage.viewDetails')}
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
