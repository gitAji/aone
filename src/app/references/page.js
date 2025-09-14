"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import Image from "next/image"; // Import Image component

const projects = [
  {
    id: "project-1",
    title: "Kids Learning Portal Development",
    imageUrl: "/images/projects/kids-portal.png", // Revert to .jpeg
  },
  {
    id: "project-2",
    title: "Saray Steakhouse & Kro",
    imageUrl: "/images/projects/saray.png", // Revert to .jpeg
  },
  {
    id: "project-3",
    title: "Clean Masters Renhold Website",
    imageUrl: "/images/projects/cleanmasters.png", // Revert to .jpeg
  },
  {
    id: "project-4",
    title: "Tulips Beauty Parlour Branding",
    imageUrl: "/images/projects/tulips.png", // Revert to .jpeg
  },
  {
    id: "project-5",
    title: "QFS Accountants Branding & Website",
    imageUrl: "/images/projects/qfs.png", // Revert to .jpeg
  },
  {
    id: "project-6",
    title: "RentMyProperty Website",
    imageUrl: "/images/projects/rentproperty.png", // Revert to .jpeg
  },
  {
    id: "project-7",
    title: "Rent Cars Branding & Website",
    imageUrl: "/images/projects/rentcars.png", // Revert to .jpeg
  },
  {
    id: "project-8",
    title: "Shop Front convienience store template",
    imageUrl: "/images/projects/shop-front.png", // Revert to .jpeg
  },
  {
    id: "project-9",
    title: "TrendifyTools ",
    imageUrl: "/images/projects/trendify.png", // Revert to .jpeg
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
            Our References
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {" "}
            {/* Revert grid */}
            {projects.map((project) => (
              <Link href={`/references/${project.id}`} key={project.id}>
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
