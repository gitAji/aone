'use client';

import React from 'react';
import HeroSection from '@/components/HeroSection';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

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

const TermsAndConditionsPage = () => {
  const sections = [
    { id: 'intro', title: '1. Introduction' },
    { id: 'intellectual', title: '2. Intellectual Property' },
    { id: 'restrictions', title: '3. Restrictions' },
    { id: 'content', title: '4. Your Content' },
    { id: 'warranties', title: '5. No Warranties' },
    { id: 'liability', title: '6. Limitation of Liability' },
    { id: 'jurisdiction', title: '7. Governing Law' },
  ];

  const downloadPDF = async () => {
    try {
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF();
      
      doc.setFontSize(22);
      doc.text('AONE TERMS & CONDITIONS', 20, 20);
      
      doc.setFontSize(10);
      doc.text(`Last Updated: October 2, 2025`, 20, 30);
      doc.text(`Aone Digital Agency - Norway`, 20, 36);
      doc.line(20, 42, 190, 42);
      
      doc.setFontSize(14);
      doc.text('1. Introduction', 20, 52);
      doc.setFontSize(10);
      const introText = doc.splitTextToSize(
        'These terms and conditions govern your use of Aone.no. They constitute a legally binding agreement between you and Aone. If you do not agree with any part of these terms, please discontinue use immediately.',
        170
      );
      doc.text(introText, 20, 58);
      
      doc.setFontSize(14);
      doc.text('2. Intellectual Property Rights', 20, 78);
      doc.setFontSize(10);
      const ipText = doc.splitTextToSize(
        'All content, branding, designs, and intellectual property contained on this website are owned by Aone.no and/or its licensors. You are granted a limited license only for purposes of viewing the material contained on this website.',
        170
      );
      doc.text(ipText, 20, 84);
      
      doc.setFontSize(14);
      doc.text('3. User Restrictions', 20, 104);
      doc.setFontSize(10);
      const restrictions = [
        '- Commercializing or sublicensing site material',
        '- Using the site in any way that causes technical damage',
        '- Engaging in unauthorized data mining or harvesting',
        '- Using this website contrary to local laws in Norway',
        '- Using the site for unsolicited advertising or marketing',
        '- Accessing restricted areas without authorization'
      ];
      doc.text(restrictions, 20, 110);
      
      doc.setFontSize(14);
      doc.text('4. Your Content', 20, 150);
      doc.setFontSize(10);
      const contentText = doc.splitTextToSize(
        '"Your Content" refers to any text, images, or audio you choose to display on the Site. By displaying it, you grant Aone a non-exclusive license to adapt and distribute it across our platforms. Your content must be your own and must not infringe on any third-party rights.',
        170
      );
      doc.text(contentText, 20, 156);
      
      doc.setFontSize(14);
      doc.text('5. No Warranties', 20, 180);
      doc.setFontSize(10);
      const warrantiesText = doc.splitTextToSize(
        'This Website is provided "as is," with all faults, and Aone makes no express or implied representations or warranties of any kind related to this Website or the materials contained on it.',
        170
      );
      doc.text(warrantiesText, 20, 186);

      doc.addPage();
      
      doc.setFontSize(14);
      doc.text('6. Limitation of Liability', 20, 20);
      doc.setFontSize(10);
      const liabilityText = doc.splitTextToSize(
        'In no event shall Aone, nor any of its officers or employees, be held liable for anything arising out of or in any way connected with your use of this website, whether such liability is under contract or tort.',
        170
      );
      doc.text(liabilityText, 20, 26);
      
      doc.setFontSize(14);
      doc.text('7. Governing Law & Jurisdiction', 20, 46);
      doc.setFontSize(10);
      const lawText = doc.splitTextToSize(
        'These Terms will be governed by and construed in accordance with the laws of Norway. You submit to the non-exclusive jurisdiction of the courts located in Norway for the resolution of any disputes.',
        170
      );
      doc.text(lawText, 20, 52);
      
      doc.save('Aone_Terms_and_Conditions.pdf');
    } catch (err) {
      console.error('Failed to generate PDF:', err);
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-[#020617] min-h-screen pb-32">
      <HeroSection 
        title="Terms & Conditions" 
        subtitle="Last Updated: October 2, 2025" 
      />
      
      <main className="container mx-auto px-6 mt-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar TOC - Desktop only */}
          <aside className="hidden lg:block w-72 h-fit sticky top-32">
            <nav className="space-y-4 mb-8">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-rose-500 mb-6">Agreement</p>
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
            <button
              onClick={downloadPDF}
              className="w-full py-3 bg-slate-900 dark:bg-white text-slate-900 dark:text-slate-950 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md cursor-pointer"
            >
              <FaDownload className="text-xs" />
              Download PDF
            </button>
          </aside>
 
          {/* Main Content */}
          <div className="flex-1 max-w-4xl">
            <div className="mb-12">
              <p className="text-xl text-slate-500 dark:text-slate-300 leading-relaxed mb-12 italic">
                Welcome to Aone.no. These terms and conditions outline the rules and regulations for the use of our services and website. By accessing this website we assume you accept these terms and conditions.
              </p>
              <div className="flex flex-wrap gap-4 items-center mb-12 lg:hidden">
                <button
                  onClick={downloadPDF}
                  className="px-6 py-3 bg-slate-900 dark:bg-white text-slate-900 dark:text-slate-950 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md cursor-pointer"
                >
                  <FaDownload className="text-xs" />
                  Download PDF
                </button>
              </div>
            </div>
            <div className="h-[1px] w-full bg-slate-200 dark:bg-slate-800 mb-12"></div>

            <Section id="intro" title="1. Introduction">
              <p>These terms and conditions govern your use of Aone.no. They constitute a legally binding agreement between you and Aone. If you do not agree with any part of these terms, please discontinue use immediately.</p>
            </Section>

            <Section id="intellectual" title="2. Intellectual Property Rights">
              <p>All content, branding, designs, and intellectual property contained on this website are owned by Aone.no and/or its licensors. You are granted a limited license only for purposes of viewing the material contained on this website.</p>
            </Section>

            <Section id="restrictions" title="3. User Restrictions">
              <p className="mb-4">To ensure a secure and professional environment for all users, you are explicitly restricted from:</p>
              <ul className="grid grid-cols-1 gap-3 list-none p-0">
                {[
                  "Commercializing or sublicensing site material",
                  "Using the site in any way that causes technical damage",
                  "Engaging in unauthorized data mining or harvesting",
                  "Using this website contrary to local laws in Norway",
                  "Using the site for unsolicited advertising or marketing",
                  "Accessing restricted areas without authorization"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 p-3 bg-white dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="content" title="4. Your Content">
              <p className="mb-4">&quot;Your Content&quot; refers to any text, images, or audio you choose to display on the Site. By displaying it, you grant Aone a non-exclusive license to adapt and distribute it across our platforms.</p>
              <p className="font-bold border-l-4 border-rose-500 pl-4 py-2 bg-rose-500/5">Your content must be your own and must not infringe on any third-party rights. We reserve the right to remove any content without notice.</p>
            </Section>

            <Section id="warranties" title="5. No Warranties">
              <p>This Website is provided &quot;as is,&quot; with all faults, and Aone makes no express or implied representations or warranties of any kind related to this Website or the materials contained on it. Nothing on this website constitutes professional consultancy or legal advice.</p>
            </Section>

            <Section id="liability" title="6. Limitation of Liability">
              <p>In no event shall Aone, nor any of its officers or employees, be held liable for anything arising out of or in any way connected with your use of this website, whether such liability is under contract or tort.</p>
            </Section>

            <Section id="jurisdiction" title="7. Governing Law & Jurisdiction">
              <div className="bg-slate-900 text-white p-8 rounded-3xl">
                <p className="mb-4 font-black uppercase tracking-widest text-rose-500">Governing Law</p>
                <p className="text-lg opacity-80 leading-relaxed">
                  These Terms will be governed by and construed in accordance with the laws of Norway. You submit to the non-exclusive jurisdiction of the courts located in Norway for the resolution of any disputes.
                </p>
              </div>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsAndConditionsPage;
