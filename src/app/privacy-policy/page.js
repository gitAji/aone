import React from 'react';
import HeroSection from '@/components/HeroSection';
import Accordion from '@/components/Accordion';

export const metadata = {
  title: "Privacy Policy | Aone",
  description: "Read Aone's comprehensive Privacy Policy to understand how we collect, use, and protect your personal information in Norway. Learn about your data choices and how to contact us.",
  keywords: "privacy policy Norway, data protection Norway, personal information, data collection, data usage, data sharing, user rights, Aone, GDPR, personvern",
};

const PrivacyPolicyPage = () => {
  return (
    <div>
      <HeroSection title="Privacy Policy" subtitle="Your privacy is important to us" />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy for Aone.no</h1>
        <p className="mb-4">
          <strong>Effective Date: October 2, 2025</strong>
        </p>
        <p className="mb-4">
          Aone.no is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website aone.no, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Site.
        </p>
        <p className="mb-4">
          We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the “Effective Date” of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Site after the date such revised Privacy Policy is posted.
        </p>

        <Accordion title="1. Collection of Your Information">
          <p className="mb-4">
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <h3 className="text-xl font-semibold mb-2">Personal Data</h3>
          <p className="mb-4">
            Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.
          </p>
          <h3 className="text-xl font-semibold mb-2">Derivative Data</h3>
          <p className="mb-4">
            Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
          </p>
          <h3 className="text-xl font-semibold mb-2">Financial Data</h3>
          <p className="mb-4">
            Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site. We store only very limited, if any, financial information that we collect. Otherwise, all financial information is stored by our payment processor, Stripe, and you are encouraged to review their privacy policy and contact them directly for responses to your questions.
          </p>
        </Accordion>

        <Accordion title="2. Use of Your Information">
          <p className="mb-4">
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul className="list-disc list-inside mb-4 pl-5">
            <li>Create and manage your account.</li>
            <li>Process your transactions and send related information, including purchase confirmations and invoices.</li>
            <li>Email you regarding your account or order.</li>
            <li>Enable user-to-user communications.</li>
            <li>Generate a personal profile about you to make your visit to the Site more personalized.</li>
            <li>Increase the efficiency and operation of the Site.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
            <li>Notify you of updates to the Site.</li>
            <li>Offer new products, services, mobile applications, and/or recommendations to you.</li>
            <li>Perform other business activities as needed.</li>
            <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
            <li>Request feedback and contact you about your use of the Site.</li>
            <li>Resolve disputes and troubleshoot problems.</li>
            <li>Respond to product and customer service requests.</li>
            <li>Send you a newsletter.</li>
          </ul>
        </Accordion>

        <Accordion title="3. Disclosure of Your Information">
          <p className="mb-4">
            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
          </p>
          <h3 className="text-xl font-semibold mb-2">By Law or to Protect Rights</h3>
          <p className="mb-4">
            If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation. This includes exchanging information with other entities for fraud protection and credit risk reduction.
          </p>
          <h3 className="text-xl font-semibold mb-2">Third-Party Service Providers</h3>
          <p className="mb-4">
            We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance. These third parties are obligated to protect your information and may not use it for any other purpose.
          </p>
          <h3 className="text-xl font-semibold mb-2">Marketing Communications</h3>
          <p className="mb-4">
            With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.
          </p>
        </Accordion>

        <Accordion title="4. Tracking Technologies">
          <h3 className="text-xl font-semibold mb-2">Cookies and Web Beacons</h3>
          <p className="mb-4">
            We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site.
          </p>
        </Accordion>

        <Accordion title="5. Security of Your Information">
          <p className="mb-4">
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse. Any information disclosed online is vulnerable to interception and misuse by unauthorized parties. Therefore, we cannot guarantee complete security if you provide personal information.
          </p>
        </Accordion>

        <Accordion title="6. Policy for Children">
          <p className="mb-4">
            We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.
          </p>
        </Accordion>

        <Accordion title="7. Your Rights (GDPR - General Data Protection Regulation)">
          <p className="mb-4">
            As a resident of Norway or the European Economic Area (EEA), you have certain data protection rights under the GDPR. We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data. If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please contact us.
          </p>
          <p className="mb-4">
            In certain circumstances, you have the following data protection rights:
          </p>
          <ul className="list-disc list-inside mb-4 pl-5">
            <li>The right to access, update or to delete the information we have on you.</li>
            <li>The right of rectification.</li>
            <li>The right to object.</li>
            <li>The right of restriction.</li>
            <li>The right to data portability.</li>
            <li>The right to withdraw consent.</li>
          </ul>
        </Accordion>

        <Accordion title="8. Contact Us">
          <p className="mb-4">
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <p className="mb-4">
            Aone.no<br/>
            Email: info@aone.no<br/>
            Phone: 40071654
          </p>
          <p className="mb-4">
            <strong>Governing Law:</strong> This Privacy Policy is governed by the laws of Norway.
          </p>
        </Accordion>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
