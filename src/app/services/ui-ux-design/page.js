'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';

const UIUXDesignPage = () => {
  return (
    <div className="service-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="UI/UX Design"
        subtitle="Crafting intuitive and engaging user experiences"
      />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our UI/UX Design Services</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We specialize in creating intuitive and engaging user interfaces (UI) and user experiences (UX) that delight your audience. Our design process is user-centric, focusing on usability, accessibility, and visual appeal.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          From wireframing and prototyping to user testing and final design implementation, we ensure your digital products are not only beautiful but also highly functional and easy to use. We design for impact, ensuring your users have a seamless and enjoyable interaction.
        </p>
      </section>
    </div>
  );
};

export default UIUXDesignPage;
