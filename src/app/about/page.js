'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import CountUp from 'react-countup';

const AboutPage = () => {
  return (
    <div className="about-page bg-gray-50 min-h-screen">
      <HeroSection
        title="About Us"
        subtitle="Learn more about our company"
      />

      <section className="why-choose-us container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Achievements</h2>
        <div className="metrics grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="metric bg-white p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-5xl font-bold text-blue-600 mb-2"><CountUp end={100} duration={2.5} />+</h3>
            <p className="text-xl text-gray-700">Projects Completed</p>
          </div>
          <div className="metric bg-white p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-5xl font-bold text-green-600 mb-2"><CountUp end={50} duration={2.5} />+</h3>
            <p className="text-xl text-gray-700">Happy Clients</p>
          </div>
          <div className="metric bg-white p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-5xl font-bold text-purple-600 mb-2"><CountUp end={5} duration={2.5} />+</h3>
            <p className="text-xl text-gray-700">Years in Business</p>
          </div>
        </div>
      </section>

      <section className="mission-vision bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Mission, Vision & Values</h2>
          <div className="values-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="value-item bg-gray-50 p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-700">We are committed to continuous innovation to provide the best solutions.</p>
            </div>
            <div className="value-item bg-gray-50 p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-700">We believe in honesty and transparency in all our dealings.</p>
            </div>
            <div className="value-item bg-gray-50 p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-700">We work together with our clients to achieve common goals.</p>
            </div>
            <div className="value-item bg-gray-50 p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-700">We strive for excellence in everything we do.</p>
            </div>
            <div className="value-item bg-gray-50 p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Client-Centricity</h3>
              <p className="text-gray-700">Our clients are at the heart of everything we do.</p>
            </div>
            <div className="value-item bg-gray-50 p-8 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-700">We are committed to sustainable practices.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="our-story container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Story</h2>
        <div className="story-content max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
          <p>Our company was founded with a simple mission: to help businesses succeed online.</p>
          <p>Over the years, we have grown into a full-service digital agency, serving clients from all over the world.</p>
        </div>
      </section>

      <section className="team bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Meet Our Team</h2>
          <div className="team-members grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="team-member-card bg-gray-50 p-8 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">John Doe</h3>
              <p className="text-blue-600 font-medium mb-4">CEO</p>
              <p className="text-gray-700">John is a visionary leader with a passion for innovation.</p>
            </div>
            <div className="team-member-card bg-gray-50 p-8 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Jane Smith</h3>
              <p className="text-green-600 font-medium mb-4">CTO</p>
              <p className="text-gray-700">Jane is a technology enthusiast with a knack for problem-solving.</p>
            </div>
            <div className="team-member-card bg-gray-50 p-8 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Peter Jones</h3>
              <p className="text-purple-600 font-medium mb-4">COO</p>
              <p className="text-gray-700">Peter is an operations expert with a focus on efficiency.</p>
            </div>
            <div className="team-member-card bg-gray-50 p-8 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Emily White</h3>
              <p className="text-yellow-600 font-medium mb-4">CFO</p>
              <p className="text-gray-700">Emily is a finance professional with a strategic mindset.</p>
            </div>
            <div className="team-member-card bg-gray-50 p-8 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">David Green</h3>
              <p className="text-red-600 font-medium mb-4">CMO</p>
              <p className="text-gray-700">David is a marketing guru with a creative flair.</p>
            </div>
            <div className="team-member-card bg-gray-50 p-8 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Sarah Brown</h3>
              <p className="text-indigo-600 font-medium mb-4">CHRO</p>
              <p className="text-gray-700">Sarah is a people person with a passion for talent development.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">What Our Clients Say</h2>
        <div className="testimonials-grid container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="testimonial-item bg-white p-8 rounded-lg shadow-md flex flex-col justify-between">
            <p className="review-text text-lg italic text-gray-700 mb-6">
              &quot;The team at AOne is simply the best. They are professional, knowledgeable, and dedicated to helping their clients succeed.&quot;
            </p>
            <p className="client-name text-right font-semibold text-gray-900">
              - John Doe, CEO of Acme Inc.
            </p>
          </div>
          <div className="testimonial-item bg-white p-8 rounded-lg shadow-md flex flex-col justify-between">
            <p className="review-text text-lg italic text-gray-700 mb-6">
              &quot;I have been working with AOne for over a year now, and I am consistently impressed with their level of service and expertise.&quot;
            </p>
            <p className="client-name text-right font-semibold text-gray-900">
              - Jane Smith, Marketing Manager at XYZ Corp.
            </p>
          </div>
          <div className="testimonial-item bg-white p-8 rounded-lg shadow-md flex flex-col justify-between">
            <p className="review-text text-lg italic text-gray-700 mb-6">
              &quot;AOne has been instrumental in helping us achieve our marketing goals. We are very happy with the results.&quot;
            </p>
            <p className="client-name text-right font-semibold text-gray-900">
              - Peter Jones, CEO of 123 LLC
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;