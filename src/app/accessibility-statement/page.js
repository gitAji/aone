"use client";
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ScrollDownArrow from "@/components/ScrollDownArrow";
import Accordion from '@/components/Accordion';
import Link from 'next/link';

export const metadata = {
  title: "Accessibility Statement | Aone",
  description: "Read Aone's Accessibility Statement outlining our commitment to making our website and services accessible to everyone.",
};

const AccessibilityStatementPage = () => {
  return (
    <div className="accessibility-statement-page bg-gray-100 min-h-screen">
      <HeroSection title="Accessibility Statement" subtitle="Our Commitment to Accessibility" />
      <ScrollDownArrow color="text-gray-700" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Accessibility Statement for Aone.no</h1>
        <p className="mb-4">
          <strong>Effective Date: October 21, 2025</strong>
        </p>
        <p className="mb-4">
          Applies to: <a href="https://aone.no" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://aone.no</a>
        </p>
        <p className="mb-4">
          aone.no is committed to making our website and services accessible to everyone, including individuals with disabilities. We strive to ensure that our digital content is usable and inclusive for all users, regardless of ability or technology.
        </p>

        <Accordion title="1. Our Commitment">
          <p className="mb-4">
            We aim to follow best practices and applicable accessibility standards, including the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA, to ensure our website is:
          </p>
          <ul className="list-disc list-inside mb-4 pl-5">
            <li><strong>Perceivable:</strong> Content is presented in ways that users can perceive.</li>
            <li><strong>Operable:</strong> All functionality is available via keyboard and assistive technologies.</li>
            <li><strong>Understandable:</strong> Information and operation of the site are clear and predictable.</li>
            <li><strong>Robust:</strong> Content is compatible with current and future user tools, including screen readers and browsers.</li>
          </ul>
        </Accordion>

        <Accordion title="2. Measures We’ve Taken">
          <p className="mb-4">
            To ensure accessibility, we have taken the following actions:
          </p>
          <ul className="list-disc list-inside mb-4 pl-5">
            <li>Designed our website with accessible code structure and contrast.</li>
            <li>Included alternative text for all relevant images and media.</li>
            <li>Ensured keyboard navigability across all interactive elements.</li>
            <li>Used clear and simple language where possible.</li>
            <li>Regularly tested our site with automated tools and manual screen reader checks.</li>
          </ul>
        </Accordion>

        <Accordion title="3. Ongoing Efforts">
          <p className="mb-4">
            Accessibility is an ongoing process. We are continually reviewing and improving the accessibility of our website and services. We welcome feedback and strive to address any accessibility barriers that may exist.
          </p>
        </Accordion>

        <Accordion title="4. Known Limitations">
          <p className="mb-4">
            While we work to ensure full accessibility, there may be some limitations:
          </p>
          <ul className="list-disc list-inside mb-4 pl-5">
            <li>Some third-party integrations or embedded content (e.g., video players, external forms) may not yet meet full accessibility standards.</li>
            <li>AI-generated or user-submitted content may not always meet readability or contrast requirements.</li>
          </ul>
          <p className="mb-4">
            We are actively working with our partners and platforms to resolve these issues where possible.
          </p>
        </Accordion>

        <Accordion title="5. Feedback and Contact Information">
          <p className="mb-4">
            If you encounter any accessibility barriers or have suggestions to help us improve, please <Link href="/contact" className="text-blue-600 hover:underline">contact us</Link>
          </p>
          <p className="mb-4">
            We aim to respond to accessibility inquiries within 2–5 business days.
          </p>
        </Accordion>

        <Accordion title="6. Compatibility">
          <p className="mb-4">
            This website is designed to work with the most recent versions of major browsers (Chrome, Firefox, Safari, Edge) and is compatible with standard screen readers and assistive technologies.
          </p>
        </Accordion>

        <Accordion title="7. Enforcement and Compliance">
          <p className="mb-4">
            We take accessibility seriously and view it as part of our ethical and legal responsibility. This statement is in line with the Norwegian Anti-Discrimination and Accessibility Act (Diskriminerings- og tilgjengelighetsloven), as well as international standards under the EU Web Accessibility Directive and WCAG.
          </p>
        </Accordion>
      </main>
    </div>
  );
};

export default AccessibilityStatementPage;