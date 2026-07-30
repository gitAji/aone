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

const DisclaimerPage = () => {
  return (
    <div className="bg-slate-50 dark:bg-[#020617] min-h-screen pb-32">
      <HeroSection 
        title="Disclaimer" 
        subtitle="The information provided on Aone is for general informational purposes only." 
      />
      
      <main className="container mx-auto px-6 mt-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1 max-w-4xl">
            <div className="mb-12">
              <p className="text-xl text-slate-500 dark:text-slate-300 leading-relaxed mb-12 italic">
                Please read this disclaimer carefully before using our website. By accessing and using Aone, you agree to the terms of this disclaimer.
              </p>
              <div className="h-[1px] w-full bg-slate-200 dark:bg-slate-800"></div>
            </div>

            <Section title="1. Information Accuracy">
              <p>
                All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site.
              </p>
            </Section>

            <Section title="2. External Links">
              <p>
                The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties. Such external links are not researched, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.
              </p>
            </Section>

            <Section title="3. Professional Advice">
              <p>
                The Site cannot and does not contain professional advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.
              </p>
            </Section>

            <Section title="4. Limitation of Liability">
              <p>
                Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
              </p>
            </Section>

            <Section title="5. AI-Generated Content">
              <p>
                Some content on this website may be generated or assisted by artificial intelligence (AI). While we strive for accuracy, AI-generated information should be verified independently.
              </p>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DisclaimerPage;
