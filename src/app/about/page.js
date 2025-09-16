'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import CountUp from 'react-countup';
import Image from 'next/image';

export const metadata = {
  description: "Learn more about Aone, our achievements, mission, vision, values, and our story. Discover why we are the right partner for your digital success.",
};

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

      <section className="our-story container mx-auto px-4 py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Story</h2>
        <div className="story-content max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
          <p>Our company was founded with a simple mission: to help businesses succeed online.</p>
          <p>Over the years, we have grown into a full-service digital agency, serving clients from all over the world.</p>
        </div>
      </section>

      

      <section className="testimonials-section py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          What Our Clients Say
        </h2>
        <div className="testimonials-grid container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="testimonial-item bg-gray-100 p-8 rounded-lg shadow-md flex flex-col justify-between">
            <p className="review-text text-lg italic text-gray-800 mb-6">
              &quot;Excellent designs that made our website look more
              professional. All the gaps were filled with highest prerequisites.
              100% endorsed and a good choice for restaurant businesses.&quot;
            </p>
            <p className="client-name text-right font-semibold text-gray-900 flex items-center justify-end">
              <Image
                src="/images/clients/clean.png"
                alt="Clean Masters Renhold Logo"
                width={50}
                height={40}
                className="h-12 w-12 mr-2 grayscale-logo"
              />
              Clean Masters Renhold
            </p>
          </div>
          <div className="testimonial-item bg-gray-100 p-8 rounded-lg shadow-md flex flex-col justify-between">
            <p className="review-text text-lg italic text-gray-800 mb-6">
              &quot;Saray Steakhouse, and arguably one of the best places for
              grabbing the all-in-one bundle for web solutions. Unquestionably a
              5 stars digital firm with huge potential.&quot;
            </p>
            <p className="client-name text-right font-semibold text-gray-900 flex items-center justify-end">
              <Image
                src="/images/clients/saraysange.png"
                alt="Saray Steakhouse Logo"
                width={50}
                height={40}
                className="h-12 w-12 mr-2 grayscale-logo"
              />
              Saray Steakhouse
            </p>
          </div>
          <div className="testimonial-item bg-gray-100 p-8 rounded-lg shadow-md flex flex-col justify-between">
            <p className="review-text text-lg italic text-gray-800 mb-6">
              &quot;A website that is visually appealing, easy to use, and
              provides a good user experience can help to increase customer
              engagement and drive conversions.&quot;
            </p>
            <p className="client-name text-right font-semibold text-gray-900 flex items-center justify-end">
              <Image
                src="/images/clients/shop-front.png"
                alt="Go Local Logo"
                width={50}
                height={40}
                className="h-12 w-12 mr-2 grayscale-logo"
              />
              Go Local
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;