'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import Link from 'next/link';

const Project8Page = () => {
  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Mobile Game Design & Development"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Project Overview</h2>
          <p className="text-lg text-gray-700 mb-6">
            This project involved the complete lifecycle of mobile game development, from initial concept and game design to development, testing, and launch. Our goal was to create a highly engaging and addictive mobile game that would appeal to a broad audience, focusing on intuitive gameplay mechanics and visually appealing graphics.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            We meticulously crafted the game&apos;s narrative, character designs, level progression, and monetization strategies. The development process emphasized performance optimization for various mobile devices and platforms, ensuring a smooth and enjoyable user experience. Post-launch, we provided ongoing support and updates based on player feedback and performance analytics.
          </p>
          <div className="mt-8">
            <Image src="/images/projects/project3.png" alt="Mobile Game Design & Development" width={1200} height={600} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Concept & Game Design</h3>
              <p className="text-gray-700 mb-4">We started by defining the game&apos;s core mechanics, narrative, and target audience. This involved creating detailed game design documents, character concepts, and level layouts.</p>
              <Image src="/images/placeholders/wireframe.png" alt="Game Design" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Art & Asset Creation</h3>
              <p className="text-gray-700 mb-4">Our artists created captivating 2D/3D assets, character models, environments, and animations, ensuring a visually stunning and cohesive game world.</p>
              <Image src="/images/placeholders/ui-ux.png" alt="Asset Creation" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Development & Prototyping</h3>
              <p className="text-gray-700 mb-4">The game was developed using agile methodologies, with iterative prototyping and frequent playtesting to refine gameplay and user experience.</p>
              <Image src="/images/placeholders/development.png" alt="Development" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Testing, Optimization & Launch</h3>
              <p className="text-gray-700 mb-4">Extensive testing was performed across various devices. Performance was optimized, and the game was successfully launched on target mobile platforms.</p>
              <Image src="/images/placeholders/testing.png" alt="Testing & Launch" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Key Features & Technologies</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Engaging Gameplay Mechanics for high player retention.</li>
            <li>Captivating Graphics & Animations for an immersive experience.</li>
            <li>Cross-Platform Compatibility (iOS & Android).</li>
            <li>Monetization Strategy Integration (in-app purchases, ads).</li>
            <li>Robust Backend Infrastructure for multiplayer and user data.</li>
            <li>Analytics & User Feedback System for continuous improvement.</li>
            <li>Technologies Used: Unity, C#, Blender, Photoshop.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Results & Impact</h2>
          <p className="text-lg text-gray-700 mb-6">
            The mobile game achieved significant success post-launch, with over **500,000 downloads** in the first month and a **4.8-star rating** on app stores. User engagement metrics were high, and the monetization strategy proved effective, generating substantial revenue. The game fostered a strong community of players.
          </p>
          <div className="mt-8">
            <Image src="/images/projects/project3.png" alt="Project Results" width={1200} height={600} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="cta py-16 bg-gray-200 text-gray-800 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Ready to create your next hit game?</h2>
          <Link href={`/contact`} className="inline-block bg-gray-800 text-white py-3 px-8 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out text-lg font-semibold shadow-lg">
              Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Project8Page;
