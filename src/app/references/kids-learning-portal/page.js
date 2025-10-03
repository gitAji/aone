"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation'; // Import hooks
import projects from "@/app/data/projects"; // Import projects data
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import icons

const Project1Page = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Extract current project ID from pathname (e.g., /references/kids-learning-portal -> kids-learning-portal)
  const currentProjectId = pathname.split('/').pop();

  // Find the index of the current project
  const currentIndex = projects.findIndex(p => p.id === currentProjectId);

  // Determine previous and next projects
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection title="Kids Learning Portal" />

      <nav className="container mx-auto px-4 py-4 text-gray-600">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
          </li>
          <li className="flex items-center">
            <Link href="/references" className="hover:underline">References</Link>
            <span className="mx-2">/</span>
          </li>
          <li className="flex items-center text-gray-800 font-semibold">
            {projects[currentIndex]?.title || "Project"}
          </li>
        </ol>
      </nav>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            {prevProject ? (
              <Link href={prevProject.projectLink} passHref>
                <button className="flex items-center text-gray-800 hover:text-blue-600 transition-colors duration-300 text-lg font-semibold">
                  <FaArrowLeft className="mr-2" /> {prevProject.title}
                </button>
              </Link>
            ) : (
              <div />
            )}
            <h2 className="text-4xl font-bold text-gray-800 text-center">
              Project Overview
            </h2>
            {nextProject ? (
              <Link href={nextProject.projectLink} passHref>
                <button className="flex items-center text-gray-800 hover:text-blue-600 transition-colors duration-300 text-lg font-semibold">
                  {nextProject.title} <FaArrowRight className="ml-2" />
                </button>
              </Link>
            ) : (
              <div />
            )}
          </div>
          <p className="text-lg text-gray-700 mb-6">
            This project involved designing and developing a modern,
            user-friendly website for kids learning portal. The goal was to
            create an engaging platform that offers educational resources,
            interactive activities, and a safe online environment for children.
            where parents create account and add kids to the portal & create
            kids login credentials and then kids can login and access the
            learning materials.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Key functionalities included an interactive menu display, an
            intuitive table booking system, and a gallery to highlight the
            restaurant&apos;s ambiance. We aimed to create a digital platform
            that truly reflects the quality and elegance of Saray Steakhouse.
          </p>
          <div className="mt-8">
            <Image
              src="/images/projects/kidsportal/project1.png"
              alt="Kids Learning Portal Development"
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
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Discovery & Planning
              </h3>
              <p className="text-gray-700 mb-4">
                We began with in-depth consultations to understand the
                client&apos;s business, target audience, and pain points with
                the existing platform. This phase involved market research,
                competitor analysis, and defining project scope and objectives.
              </p>
              <Image
                src="/images/projects/kidsportal/plan.png"
                alt="Wireframe"
                width={600}
                height={400}
                className="rounded-lg shadow-md mt-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Wireframing & UI/UX Design
              </h3>
              <p className="text-gray-700 mb-4">
                Based on the discovery phase, we created wireframes and
                interactive prototypes to visualize the new user flows and
                interface. Our UI/UX team focused on creating an intuitive and
                aesthetically pleasing design.
              </p>
              <Image
                src="/images/projects/kidsportal/wireframe.png"
                alt="UI/UX Design"
                width={600}
                height={400}
                className="rounded-lg shadow-md mt-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Development & Integration
              </h3>
              <p className="text-gray-700 mb-4">
                Our development team brought the designs to life, building a
                robust and scalable learning platform. This was including
                integrating a headless CMS for content management, setting up
                user authentication, and implementing interactive features.
              </p>
              <Image
                src="/images/projects/kidsportal/dev.png"
                alt="Development"
                width={600}
                height={400}
                className="rounded-lg shadow-md mt-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Testing & Deployment
              </h3>
              <p className="text-gray-700 mb-4">
                Rigorous testing was conducted across various devices and
                browsers to ensure functionality, performance, and
                responsiveness. After successful testing, the platform was
                securely deployed.
              </p>
              <Image
                src="/images/projects/kidsportal/deploy.png"
                alt="Testing"
                width={600}
                height={400}
                className="rounded-lg shadow-md mt-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Key Features & Technologies
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Firebase Authentication for secure user management.</li>
            <li>User login with Google </li>
            <li>Responsive Design for optimal viewing on all devices.</li>
            <li>Parents dashboard & children dashboard.</li>
            <li>SEO Optimization for local search visibility.</li>
            <li>
              Interactive learning activities including quizzes and video
              lessons.
            </li>
            <li>
              Technologies Used: Next.js, React, Node.js,Strapi (headless CMS).
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Results & Impact
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            The new website significantly enhanced Saray Steakhouse&apos;s
            online presence, leading to a **20% increase in online
            reservations** and improved customer engagement. The visually
            appealing design and user-friendly interface received positive
            feedback, contributing to a stronger brand image and increased
            customer satisfaction.
          </p>
          <div className="mt-8">
            <Image
              src="/images/projects/kidsportal/result.png"
              alt="Kids Learning Portal Development Results"
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
            Ready to elevate your restaurant&apos;s online presence?
          </h2>
          <Link
            href={`/free-consultation`}
            className="inline-block bg-gray-800 text-white py-3 px-8 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out text-lg font-semibold shadow-lg"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Project1Page;
