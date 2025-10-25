'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ScrollDownArrow from "@/components/ScrollDownArrow";
import Link from 'next/link';
import { FaPalette, FaUserFriends, FaLightbulb, FaLaptopCode, FaMobileAlt, FaAccessibleIcon, FaChartLine, FaArrowDown } from 'react-icons/fa';
import Testimonials from "@/components/Testimonials";

const UIUXDesignPage = () => {
  return (
    <div className="service-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="UI/UX Design"
        description="Creating intuitive and engaging user interfaces and experiences that delight your audience."
      />
      <ScrollDownArrow color="text-gray-700" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })} />
      

      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">The Art & Science of UI/UX Design</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            User Interface (UI) and User Experience (UX) design are the cornerstones of successful digital products. UI focuses on the visual elements users interact with, while UX ensures those interactions are meaningful and enjoyable. Together, they create a seamless journey that delights your audience and achieves your business goals.
          </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaPalette className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Aesthetic Appeal</h3>
            <p className="text-gray-700">Create visually stunning interfaces that leave a lasting impression.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaUserFriends className="text-5xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">User-Centric Focus</h3>
            <p className="text-gray-700">Design solutions tailored to your users&apos; needs, behaviors, and preferences.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
            <FaLightbulb className="text-5xl text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Problem Solving</h3>
            <p className="text-gray-700">Transform complex challenges into intuitive and delightful user journeys.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our UI/UX Design Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
            <FaLightbulb className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery & Research</h3>
            <p className="text-gray-700">Understanding your users, business goals, and market landscape through in-depth research.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
            <FaLaptopCode className="text-5xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Wireframing & Prototyping</h3>
            <p className="text-gray-700">Creating low-fidelity wireframes and interactive prototypes to visualize user flows and layouts.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
            <FaPalette className="text-5xl text-red-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Visual Design & UI Kit</h3>
            <p className="text-gray-700">Developing a cohesive visual design, including color palettes, typography, and a comprehensive UI kit.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
            <FaMobileAlt className="text-5xl text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Interaction Design</h3>
            <p className="text-gray-700">Designing intuitive interactions, animations, and micro-interactions to enhance user delight.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
            <FaAccessibleIcon className="text-5xl text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Usability Testing & Iteration</h3>
            <p className="text-gray-700">Conducting user testing to gather feedback and iterate on designs for optimal usability.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-center">
            <FaChartLine className="text-5xl text-teal-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation Support</h3>
            <p className="text-gray-700">Collaborating with development teams to ensure designs are implemented accurately and efficiently.</p>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="cta py-16 bg-gray-200 text-gray-800 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Ready for a design that truly connects?</h2>
          <Link href="/free-consultation" className="inline-block bg-gray-800 text-white py-3 px-8 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out text-lg font-semibold shadow-lg">
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default UIUXDesignPage;