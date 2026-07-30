"use client";

import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";

const DynamicClientLogos = dynamic(() => import("@/components/ClientLogos"));
const DynamicStatsStrip = dynamic(() => import("@/components/StatsStrip"));
const DynamicServices = dynamic(() => import("@/components/Services"));
const DynamicProjects = dynamic(() => import("@/components/Projects"));
const DynamicTestimonials = dynamic(() => import("@/components/Testimonials"));
const DynamicBrandingShowcase = dynamic(() => import("@/components/BrandingShowcase"));
const DynamicCTA = dynamic(() => import("@/components/CTA"));

const HomeClient = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSection isHomePage={true} />
      {/* Client Logos - Social Proof */}
      <DynamicClientLogos />
      {/* Stats Strip - Key Numbers */}
      <DynamicStatsStrip />
      {/* Services */}
      <DynamicServices />

      {/* Projects */}
      <DynamicProjects />
      {/* Branding Designs */}
      <DynamicBrandingShowcase />
      {/* Testimonials */}
      <DynamicTestimonials />
      {/* Call to Action */}
      <DynamicCTA />
    </div>
  );
};

export default HomeClient;
