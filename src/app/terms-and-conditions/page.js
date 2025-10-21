"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import Accordion from "@/components/Accordion";

const TermsAndConditionsPage = () => {
  return (
    <div className="terms-and-conditions-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Terms & Conditions"
        subtitle="Please read our terms and conditions carefully before using our website or services."
      />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">
          Terms and Conditions for Aone.no
        </h1>
        <p className="mb-4">
          <strong>Effective Date: October 21, 2025</strong>
        </p>
        <p className="mb-4">
          These Terms and Conditions ("Terms") govern your use of the website
          located at <strong>Aone.no</strong>, The bound registered in Norway
          with organization number 922103682. By accessing or using this
          website, or engaging our services, you agree to be bound by these
          Terms. If you do not agree with any part of these Terms, please do not
          use our website or services.
        </p>

        <Accordion title="1. Introduction">
          <p className="mb-4">
            Aone.no provides web design, branding, SEO, artificial intelligence
            automation, and related digital services. These Terms apply to all
            visitors, users, and clients of Aone.no. By continuing to use our
            website, you acknowledge and accept these Terms in full.
          </p>
        </Accordion>

        <Accordion title="2. Intellectual Property Rights">
          <p className="mb-4">
            Unless otherwise stated, Aone.no and/or its licensors own all
            intellectual property rights in the content, code, designs, and
            materials on this website. This includes, but is not limited to,
            text, graphics, logos, icons, images, audio, video, and software.
            All rights are reserved.
          </p>
          <p className="mb-4">
            Clients may retain ownership of their original materials (e.g.,
            logos, images, copy) provided to us for project use, unless
            otherwise agreed in writing. However, by submitting such materials,
            you grant us a non-exclusive, royalty-free license to use, display,
            and reproduce them for project delivery, internal testing, and
            marketing purposes, such as our online portfolio.
          </p>
        </Accordion>

        <Accordion title="3. Restrictions">
          <p className="mb-4">You agree not to:</p>
          <ul className="list-disc list-inside mb-4 pl-5">
            <li>
              Republish, reproduce, or redistribute any material from this
              website without our prior written consent;
            </li>
            <li>
              Sell, sublicense, or commercially exploit website content without
              authorization;
            </li>
            <li>
              Use this website in any manner that is harmful, illegal, or
              infringes on the rights of others;
            </li>
            <li>
              Conduct data mining, scraping, or similar data collection
              activities without explicit permission;
            </li>
            <li>
              Interfere with the security or integrity of this website or our
              services.
            </li>
          </ul>
        </Accordion>

        <Accordion title="4. Client Content & Data">
          <p className="mb-4">
            "Client Content" refers to any material you provide to us, including
            logos, images, text, or data, for the purpose of developing or
            managing your project. By providing such materials, you confirm that
            you own or have the necessary rights to use them.
          </p>
          <p className="mb-4">
            You grant us a limited, non-exclusive, worldwide license to use your
            content for the purpose of delivering services, showcasing completed
            projects in our portfolio (unless otherwise agreed), and improving
            service quality, including AI-based tools.
          </p>
          <p className="mb-4">
            All data shared with us is handled in accordance with our Privacy
            Policy and applicable data protection laws, including GDPR.
          </p>
        </Accordion>

        <Accordion title="5. No Warranties">
          <p className="mb-4">
            This website and our services are provided "as is" and "as
            available." Aone.no makes no representations or warranties of any
            kind, express or implied, regarding the accuracy, reliability, or
            suitability of the website or services for any particular purpose.
            We do not guarantee specific outcomes for SEO rankings, AI
            performance, or business metrics.
          </p>
        </Accordion>

        <Accordion title="6. Limitation of Liability">
          <p className="mb-4">
            To the fullest extent permitted by law, Aone.no and its directors,
            employees, or affiliates shall not be liable for any indirect,
            incidental, consequential, or special damages arising from your use
            of this website or our services. This includes, but is not limited
            to, loss of business, revenue, profits, or data.
          </p>
        </Accordion>

        <Accordion title="7. Indemnification">
          <p className="mb-4">
            You agree to indemnify and hold harmless Aone.no, its employees,
            partners, and affiliates from any claims, liabilities, damages,
            costs, or expenses (including legal fees) arising from your breach
            of these Terms or misuse of our website or services.
          </p>
        </Accordion>

        <Accordion title="8. Severability">
          <p className="mb-4">
            If any provision of these Terms is deemed unlawful, void, or
            unenforceable under applicable law, such provision shall be severed
            without affecting the validity of the remaining provisions.
          </p>
        </Accordion>

        <Accordion title="9. Changes to Terms">
          <p className="mb-4">
            We reserve the right to update or modify these Terms at any time
            without prior notice. Any changes will be effective upon posting on
            this website. Your continued use of the website or services
            following any updates constitutes acceptance of the revised Terms.
          </p>
        </Accordion>

        <Accordion title="10. Assignment">
          <p className="mb-4">
            Aone.no may assign or transfer its rights and obligations under
            these Terms without your consent. You may not transfer your rights
            or obligations under these Terms without our prior written approval.
          </p>
        </Accordion>

        <Accordion title="11. Entire Agreement">
          <p className="mb-4">
            These Terms, along with our Privacy Policy, Cookie Policy, and any
            other legal notices posted on our website, constitute the entire
            agreement between you and Aone.no regarding your use of our site and
            services.
          </p>
        </Accordion>

        <Accordion title="12. Governing Law & Jurisdiction">
          <p className="mb-4">
            These Terms shall be governed by and construed in accordance with
            the laws of Norway. Any disputes arising in connection with these
            Terms or your use of this website shall be subject to the exclusive
            jurisdiction of the courts located in Oslo, Norway.
          </p>
        </Accordion>
      </main>
    </div>
  );
};

export default TermsAndConditionsPage;
