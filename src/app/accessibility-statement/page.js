'use client';

import React from 'react';
import HeroSection from '@/components/HeroSection';
import { motion } from 'framer-motion';

const Section = ({ title, children, id }) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-16 scroll-mt-32"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="h-[2px] w-8 bg-rose-500 rounded-full"></div>
      <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
        {title}
      </h2>
    </div>
    <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed font-medium text-lg">
      {children}
    </div>
  </motion.section>
);

const AccessibilityStatement = () => {
  return (
    <div className="bg-slate-50 dark:bg-[#020617] min-h-screen pb-32">
      <HeroSection 
        title="Accessibility Statement" 
        subtitle="Last Updated: October 21, 2025" 
      />
      
      <main className="container mx-auto px-6 mt-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1 max-w-4xl">
            <div className="mb-12">
              <p className="text-xl text-slate-500 dark:text-slate-300 leading-relaxed mb-12 italic">
                Aone is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
              </p>
              <div className="h-[1px] w-full bg-slate-200 dark:bg-slate-800"></div>
            </div>

            <Section title="Conformance Status">
              <p>
                The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Aone is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
              </p>
            </Section>

            <Section title="Feedback">
              <p>
                We welcome your feedback on the accessibility of Aone. Please let us know if you encounter accessibility barriers on Aone:
              </p>
              <ul className="list-none p-0 mt-4 space-y-2">
                <li><strong>Phone:</strong> 400 71 654</li>
                <li><strong>E-mail:</strong> info@aone.no</li>
                <li><strong>Visitor Address:</strong> Bergen, Norway</li>
              </ul>
              <p className="mt-4">
                We try to respond to feedback within 5 business days.
              </p>
            </Section>

            <Section title="Technical Specifications">
              <p>
                Accessibility of Aone relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>HTML</li>
                <li>WAI-ARIA</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </Section>

            <Section title="Assessment Approach">
              <p>
                Aone assessed the accessibility of Aone by the following approaches:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Self-evaluation</li>
              </ul>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AccessibilityStatement;
