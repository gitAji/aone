'use client';

import React, { useState } from 'react';
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

const PrivacyPolicyPage = () => {
  const sections = [
    { id: 'collection', title: '1. Collection of Information' },
    { id: 'usage', title: '2. Use of Information' },
    { id: 'disclosure', title: '3. Disclosure' },
    { id: 'tracking', title: '4. Tracking & Cookies' },
    { id: 'security', title: '5. Security' },
    { id: 'gdpr', title: '6. Your GDPR Rights' },
    { id: 'contact', title: '7. Contact Us' },
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#020617] min-h-screen pb-32">
      <HeroSection 
        title="Privacy Policy" 
        subtitle="Last Updated: October 2, 2025" 
      />
      
      <main className="container mx-auto px-6 mt-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar TOC - Desktop only */}
          <aside className="hidden lg:block w-72 h-fit sticky top-32">
            <nav className="space-y-4">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-rose-500 mb-6">Contents</p>
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block text-sm font-bold text-slate-400 hover:text-rose-500 transition-colors duration-300"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1 max-w-4xl">
            <div className="mb-12">
              <p className="text-xl text-slate-500 dark:text-slate-300 leading-relaxed mb-12 italic">
                Aone.no is committed to protecting the privacy of our users. This policy explains how we handle your information with the same precision and care we apply to our digital projects.
              </p>
              <div className="h-[1px] w-full bg-slate-200 dark:bg-slate-800"></div>
            </div>

            <Section id="collection" title="1. Collection of Your Information">
              <p className="mb-6 text-slate-950 dark:text-white font-bold italic">
                We may collect information about you in a variety of ways.
              </p>
              <div className="space-y-4">
                <p><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register or participate in various activities.</p>
                <p><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, browser type, and operating system.</p>
                <p><strong>Financial Data:</strong> We store only very limited, if any, financial information. All processing is handled by our secure payment partners (e.g., Stripe).</p>
              </div>
            </Section>

            <Section id="usage" title="2. Use of Your Information">
              <p className="mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. We use your data to:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                {[
                  "Create and manage your account",
                  "Process secure transactions",
                  "Personalize your user profile",
                  "Monitor usage trends",
                  "Notify you of updates",
                  "Prevent fraudulent activity",
                  "Improve site operations",
                  "Send tailored newsletters"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="disclosure" title="3. Disclosure of Your Information">
              <p className="mb-4">We may share information in certain situations, primarily to protect rights or via third-party providers who perform services on our behalf (hosting, email, data analysis).</p>
              <p>We do not sell your personal data to third parties for marketing purposes.</p>
            </Section>

            <Section id="tracking" title="4. Tracking Technologies">
              <p>We may use cookies and web beacons to help customize the Site and improve your experience. Most browsers accept cookies by default, but you can always modify your settings to reject them.</p>
            </Section>

            <Section id="security" title="5. Security of Your Information">
              <p>We use administrative, technical, and physical security measures to protect your personal information. While we take reasonable steps to secure your data, no method of transmission is 100% secure.</p>
            </Section>

            <Section id="gdpr" title="6. Your Rights (GDPR)">
              <p className="mb-4">As a resident of Norway or the EEA, you have robust data protection rights. You may request to:</p>
              <div className="bg-slate-100 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <ul className="space-y-2 list-none p-0">
                  <li>• Access, update, or delete your information</li>
                  <li>• Request rectification (corrections)</li>
                  <li>• Object to processing or restriction</li>
                  <li>• Request data portability</li>
                  <li>• Withdraw consent at any time</li>
                </ul>
              </div>
            </Section>

            <Section id="contact" title="7. Contact Us">
              <div className="bg-gradient-to-br from-rose-500/10 to-amber-500/10 p-8 rounded-3xl border border-rose-500/20">
                <p className="mb-4 font-bold text-slate-900 dark:text-white">Questions about your privacy?</p>
                <p className="text-slate-600 dark:text-slate-400 mb-6">Our dedicated team is here to help you understand your data rights.</p>
                <div className="space-y-2 font-black text-rose-500 uppercase tracking-widest text-sm">
                  <p>Email: info@aone.no</p>
                  <p>Phone: 400 71 654</p>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
