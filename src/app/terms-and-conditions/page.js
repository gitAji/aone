'use client';

import React from 'react';
import HeroSection from '@/components/HeroSection';
import Accordion from '@/components/Accordion';

const TermsAndConditionsPage = () => {
  return (
    <div className="terms-and-conditions-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Terms & Conditions"
        subtitle="Please read our terms and conditions carefully."
      />
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <Accordion title="1. Introduction">
            <p className="mb-4">Welcome to Aone.no. These terms and conditions outline the rules and regulations for the use of Aone.no's Website.</p>
          </Accordion>

          <Accordion title="2. Intellectual Property Rights">
            <p className="mb-4">Other than content you own, which you may have opted to include on this Website, under these Terms, Aone.no and/or its licensors own all rights to the intellectual property and material contained in this Website, and all such rights are reserved.</p>
          </Accordion>

          <Accordion title="3. Restrictions">
            <p className="mb-4">You are expressly and emphatically restricted from all of the following:</p>
            <ul className="list-disc list-inside mb-4 pl-5">
              <li>Publishing any Website material in any media;</li>
              <li>Selling, sublicensing and/or otherwise commercializing any Website material;</li>
              <li>Publicly performing and/or showing any Website material;</li>
              <li>Using this Website in any way that is, or may be, damaging to this Website;</li>
              <li>Using this Website in any way that impacts user access to this Website;</li>
              <li>Using this Website contrary to applicable laws and regulations, or in a way that causes, or may cause, harm to the Website, or to any person or business entity;</li>
              <li>Engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website, or while using this Website;</li>
              <li>Using this Website to engage in any advertising or marketing.</li>
            </ul>
          </Accordion>

          <Accordion title="4. Your Content">
            <p className="mb-4">In these Website Standard Terms And Conditions, “Your Content” shall mean any audio, video, text, images or other material you choose to display on this Website. By displaying Your Content, you grant Aone.no a non-exclusive, worldwide, irrevocable, royalty-free, sublicensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.</p>
            <p className="mb-4">Your Content must be your own and must not be infringing on any third party’s rights. Aone.no reserves the right to remove any of Your Content from this Website at any time, and for any reason, without notice.</p>
          </Accordion>

          <Accordion title="5. No warranties">
            <p className="mb-4">This Website is provided “as is,” with all faults, and Aone.no makes no express or implied representations or warranties, of any kind related to this Website or the materials contained on this Website. Additionally, nothing contained on this Website shall be construed as providing consult or advice to you.</p>
          </Accordion>

          <Accordion title="6. Limitation of liability">
            <p className="mb-4">In no event shall Aone.no, nor any of its officers, directors and employees, be liable to you for anything arising out of or in any way connected with your use of this Website, whether such liability is under contract, tort or otherwise, and Aone.no, including its officers, directors and employees shall not be liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>
          </Accordion>

          <Accordion title="7. Indemnification">
            <p className="mb-4">You hereby indemnify to the fullest extent Aone.no from and against any and all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.</p>
          </Accordion>

          <Accordion title="8. Severability">
            <p className="mb-4">If any provision of these Terms is found to be unenforceable or invalid under any applicable law, such unenforceability or invalidity shall not render these Terms unenforceable or invalid as a whole, and such provisions shall be deleted without affecting the remaining provisions herein.</p>
          </Accordion>

          <Accordion title="9. Variation of Terms">
            <p className="mb-4">Aone.no is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review such Terms on a regular basis to ensure you understand all terms and conditions governing use of this Website.</p>
          </Accordion>

          <Accordion title="10. Assignment">
            <p className="mb-4">Aone.no shall be permitted to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification or consent required. However, you shall not be permitted to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.</p>
          </Accordion>

          <Accordion title="11. Entire Agreement">
            <p className="mb-4">These Terms, including any legal notices and disclaimers contained on this Website, constitute the entire agreement between Aone.no and you in relation to your use of this Website, and supersede all prior agreements and understandings with respect to the same.</p>
          </Accordion>

          <Accordion title="12. Governing Law & Jurisdiction">
            <p className="mb-4">These Terms will be governed by and construed in accordance with the laws of Norway, and you submit to the non-exclusive jurisdiction of the courts in Norway for the resolution of any disputes.</p>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditionsPage;
