import React from 'react';
import HeroSection from '@/components/HeroSection';
import Accordion from '@/components/Accordion';

const CookiePolicyPage = () => {
  return (
    <div className="cookie-policy-page bg-gray-100 min-h-screen">
      <HeroSection title="Cookie Policy" subtitle="Our Cookie Usage" />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Cookie Policy for Aone.no</h1>
        <p className="mb-4">
          <strong>Effective Date: October 21, 2025</strong>
        </p>
        <p className="mb-4">
          This Cookie Policy explains how aone.no (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies and similar tracking technologies when you visit our website aone.no (the &quot;Site&quot;). We are committed to protecting your privacy and ensuring that your experience on our website is transparent and user-friendly.
        </p>

        <Accordion title="What Are Cookies?">
          <p className="mb-4">
            Cookies are small text files that are stored on your device (such as your computer, tablet, or smartphone) when you visit a website. They are widely used to enhance user experience, provide website functionality, and analyze site performance. Cookies allow us to remember your preferences, enable certain website features, and gather insights into how our website is used.
          </p>
        </Accordion>

        <Accordion title="Types of Cookies We Use">
          <p className="mb-4">
            We use the following types of cookies on our website:
          </p>
          <ul className="list-disc list-inside mb-4 pl-5">
            <li>
              <strong>Strictly Necessary Cookies:</strong> These cookies are essential for the operation of our website and cannot be turned off. They are used to facilitate basic website functions, such as page navigation and secure login. These cookies do not collect personal data.
            </li>
            <li>
              <strong>Performance and Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information. This helps us improve website performance, design, and content. For example, we may use Google Analytics or other third-party analytics services.
            </li>
            <li>
              <strong>Functionality Cookies:</strong> These cookies allow the website to remember choices you make (such as language or region) and provide personalized features to enhance your experience.
            </li>
            <li>
              <strong>Targeting/Marketing Cookies:</strong> These cookies are used to deliver targeted advertising or content based on your interests. They may be set by us or third-party advertisers, such as Google AdSense.
            </li>
          </ul>
        </Accordion>

        <Accordion title="How We Manage Cookies">
          <p className="mb-4">
            We use Cookiebot by Cybot A/S to manage cookie consent on our website. Cookiebot automatically scans our website to detect all cookies and similar tracking technologies, blocking them until you provide your consent. Cookiebot also generates a legally compliant cookie declaration and allows you to control your preferences.
          </p>
        </Accordion>

        <Accordion title="Consent to Cookies">
          <p className="mb-4">
            When you visit our website, you will be prompted to provide consent to the use of cookies. By clicking &quot;Accept,&quot; you consent to the use of all cookies as described in this policy. You may also manage your cookie preferences and withdraw consent at any time through the Cookiebot interface on our website.
          </p>
        </Accordion>

        <Accordion title="How to Manage Your Cookie Preferences">
          <p className="mb-4">
            You have the right to change or withdraw your consent at any time. To do so, please visit the Cookiebot declaration available on our website, where you can modify your preferences for cookies and trackers.
          </p>
          <p className="mb-4">
            You can also disable or delete cookies through your browser settings, although this may impact your ability to use some features of the website. For more information on how to manage cookies, please consult the help section of your web browser or visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.aboutcookies.org</a>.
          </p>
        </Accordion>

        <Accordion title="Third-Party Cookies">
          <p className="mb-4">
            In addition to cookies set by us, we may also use third-party services, such as analytics providers or advertising networks, which may place cookies on your device. These third parties use cookies to collect information about your activity on our website and across other websites you visit. We do not control these cookies, and you should review their respective privacy policies for more information.
          </p>
        </Accordion>

        <Accordion title="Legal Basis for Processing Cookies (GDPR)">
          <p className="mb-4">
            Under the General Data Protection Regulation (GDPR), the legal basis for collecting and using cookies depends on the type of cookie in question:
          </p>
          <ul className="list-disc list-inside mb-4 pl-5">
            <li>
                            For 'strictly necessary cookies,' we do not need your consent, as these cookies are essential to the operation of our website.
            </li>
            <li>
              For 'other cookies,' we rely on your consent, which you can provide when you first visit our site or modify through the Cookiebot interface.
            </li>
          </ul>
          <p className="mb-4">
            If you are located in the European Economic Area (EEA), you have the right to withdraw your consent at any time, without affecting the lawfulness of processing based on consent before its withdrawal.
          </p>
        </Accordion>

        <Accordion title="Data Retention">
          <p className="mb-4">
            Cookies typically have an expiration date, after which they are automatically deleted. The duration for which cookies remain on your device depends on their type. You can manage the retention period by adjusting your browser settings or through the Cookiebot interface.
          </p>
        </Accordion>

        <Accordion title="Updates to This Cookie Policy">
          <p className="mb-4">
            We may update this Cookie Policy from time to time. Any changes will be reflected on this page with an updated "Effective Date." We encourage you to review this policy periodically to stay informed about how we use cookies and protect your privacy.
          </p>
        </Accordion>
      </main>
    </div>
  );
};

export default CookiePolicyPage;