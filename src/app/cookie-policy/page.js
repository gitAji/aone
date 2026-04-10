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

const CookiePolicy = () => {
  return (
    <div className="bg-slate-50 dark:bg-[#020617] min-h-screen pb-32">
      <HeroSection 
        title="Cookie Policy" 
        subtitle="Last Updated: October 21, 2025" 
      />
      
      <main className="container mx-auto px-6 mt-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1 max-w-4xl">
            <div className="mb-12">
              <p className="text-xl text-slate-500 dark:text-slate-300 leading-relaxed mb-12 italic">
                This Cookie Policy explains how Aone uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>
              <div className="h-[1px] w-full bg-slate-200 dark:bg-slate-800"></div>
            </div>

            <Section title="What are cookies?">
              <p>
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>
            </Section>

            <Section title="Why do we use cookies?">
              <p>
                We use first party and third party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties.
              </p>
            </Section>

            <Section title="Types of cookies we use">
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong>Essential website cookies:</strong> These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.
                </li>
                <li>
                  <strong>Performance and functionality cookies:</strong> These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality (like videos) may become unavailable.
                </li>
                <li>
                  <strong>Analytics and customization cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you.
                </li>
              </ul>
            </Section>

            <Section title="How can I control cookies?">
              <p>
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
              </p>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CookiePolicy;
