'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 'project-1',
    title: "E-commerce Platform Redesign",
    imageUrl: '/images/projects/project1.jpeg',
  },
  {
    id: 'project-2',
    title: "Mobile App Development for a FinTech Startup",
    imageUrl: '/images/projects/project2.jpeg',
  },
  {
    id: 'project-3',
    title: "Brand Identity and Website Launch for a Creative Agency",
    imageUrl: '/images/projects/project3.jpeg',
  },
  {
    id: 'project-4',
    title: "SaaS Platform UI/UX Overhaul",
    imageUrl: '/images/projects/project4.jpeg',
  },
  {
    id: 'project-5',
    title: "Healthcare App Development for a Telemedicine Provider",
    imageUrl: '/images/projects/project5.jpeg',
  },
  {
    id: 'project-6',
    title: "Educational Portal Redesign for a University",
    imageUrl: '/images/projects/project1.jpeg',
  },
  {
    id: 'project-7',
    title: "E-commerce Platform Redesign",
    imageUrl: '/images/projects/project2.jpeg',
  },
  {
    id: 'project-8',
    title: "Mobile App Development for a FinTech Startup",
    imageUrl: '/images/projects/project3.jpeg',
  },
  {
    id: 'project-9',
    title: "Brand Identity and Website Launch for a Creative Agency",
    imageUrl: '/images/projects/project4.jpeg',
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
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <Link href={`/references/${project.id}`} key={project.id}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl cursor-pointer">
                  <div className="relative w-full h-60">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-blue-600 hover:underline">View Details</p>
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