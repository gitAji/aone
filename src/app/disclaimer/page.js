import React from 'react';
import HeroSection from '@/components/HeroSection';
import ScrollDownArrow from "@/components/ScrollDownArrow";
import Accordion from '@/components/Accordion';
import Link from 'next/link';

export const metadata = {
  title: "Disclaimer | Aone",
  description: "Read Aone's Disclaimer for important information regarding the use of our website and services.",
};

const DisclaimerPage = () => {
  return (
    <div className="disclaimer-page bg-gray-100 min-h-screen">
      <HeroSection title="Disclaimer" subtitle="Important Information" />
      <ScrollDownArrow color="text-gray-700" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Disclaimer for Aone.no</h1>
        <p className="mb-4">
          <strong>Effective Date: October 21, 2025</strong>
        </p>
        <p className="mb-4">
          The information provided on this website aone.no (the &quot;Site&quot;) is for general informational purposes only. By using our website and services, you agree to the terms outlined in this Disclaimer. If you do not agree with any part of this Disclaimer, you should discontinue the use of our website and services.
        </p>

        <Accordion title="1. No Professional Advice">
          <p className="mb-4">
            The content on this website, including but not limited to text, images, and other materials, is for general informational purposes only and is not intended as professional advice. This includes, but is not limited to, web design, SEO, AI automation, or any other related services. We do not offer legal, financial, or other professional advice through this website. For advice tailored to your specific needs, we recommend consulting a qualified professional in the relevant field.
          </p>
        </Accordion>

        <Accordion title="2. No Guarantees of Results">
          <p className="mb-4">
            While we strive to provide accurate and up-to-date information, we do not guarantee the outcomes or results from the use of our services. Any information regarding potential results or performance on our website is based on past experiences and should not be considered as a promise or guarantee of future results. Success in web design, SEO, and AI automation depends on numerous factors, including, but not limited to, market conditions, client cooperation, and external variables beyond our control.
          </p>
        </Accordion>

        <Accordion title="3. External Links">
          <p className="mb-4">
            Our website may contain links to third-party websites or resources. These links are provided for convenience and informational purposes only. We do not control, endorse, or assume responsibility for the content, privacy policies, or practices of third-party websites. Accessing third-party websites is done at your own risk.
          </p>
        </Accordion>

        <Accordion title="4. Content Accuracy">
          <p className="mb-4">
            We make every effort to ensure that the content provided on our website is accurate, up-to-date, and reliable. However, we do not guarantee that all information is correct, complete, or free from errors. We reserve the right to make updates or changes to the content at any time without prior notice.
          </p>
        </Accordion>

        <Accordion title="5. Intellectual Property">
          <p className="mb-4">
            All content and materials available on our website, including logos, graphics, designs, and text, are the property of aone.no or its licensors, and are protected by copyright, trademark, and other intellectual property laws. You may not use, copy, modify, or distribute any content from our website without obtaining prior written consent from us.
          </p>
        </Accordion>

        <Accordion title="6. Liability Limitation">
          <p className="mb-4">
            To the fullest extent permitted by applicable law, aone.no and its employees, agents, and contractors shall not be held liable for any direct, indirect, incidental, consequential, special, or punitive damages, including but not limited to lost profits, data loss, or business interruption, arising out of or in connection with your use of the website or the services provided, regardless of whether we have been advised of the possibility of such damages.
          </p>
        </Accordion>

        <Accordion title="7. No Warranty">
          <p className="mb-4">
            The content and services provided on this website are offered &quot;as is&quot; and &quot;as available&quot; without any representations or warranties, express or implied, regarding their accuracy, completeness, or functionality. We do not warrant that the website will be error-free, uninterrupted, or free of viruses or other harmful components. Your use of the website is at your own risk.
          </p>
        </Accordion>

        <Accordion title="8. Privacy and Data Protection">
          <p className="mb-4">
            We respect your privacy and are committed to protecting your personal information. Please refer to our Privacy Policy for detailed information on how we collect, use, and protect your data. By using our website, you agree to our Privacy Policy and understand the practices described therein.
          </p>
        </Accordion>

        <Accordion title="9. Changes to This Disclaimer">
          <p className="mb-4">
            We reserve the right to update or modify this Disclaimer at any time. Any changes will be posted on this page, and the updated effective date will be indicated at the top of the page. We encourage you to review this Disclaimer periodically to stay informed about how we handle disclaimers, liability, and other legal aspects related to your use of our website and services.
          </p>
        </Accordion>

        <Accordion title="10. Governing Law">
          <p className="mb-4">
            This Disclaimer and your use of the website will be governed by and construed in accordance with the laws of Norway, without regard to its conflict of law principles. Any disputes arising from or relating to the use of this website or the services provided shall be subject to the exclusive jurisdiction of the courts located in Oslo, Norway.
          </p>
          <p className="mb-4">
            If you have any questions about this Disclaimer or need further clarification, please <Link href="/contact" className="text-blue-600 hover:underline">contact us</Link>
          </p>
        </Accordion>
      </main>
    </div>
  );
};

export default DisclaimerPage;