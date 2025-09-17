import React from 'react';
import HeroSection from '@/components/HeroSection';

export const metadata = {
  title: "Privacy Policy | Aone",
  description: "Read Aone's comprehensive Privacy Policy to understand how we collect, use, and protect your personal information. Learn about your data choices and how to contact us.",
  keywords: "privacy policy, data protection, personal information, data collection, data usage, data sharing, user rights, Aone, Norway",
};

const PrivacyPolicyPage = () => {
  return (
    <div>
      <HeroSection title="Privacy Policy" subtitle="Your privacy is important to us" />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          This is a placeholder for your privacy policy. You should replace this text with your own privacy policy.
        </p>
        <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>
        <p className="mb-4">
          We collect information that you provide to us directly, such as when you create an account, fill out a form, or communicate with us. We may also collect information automatically as you navigate our website, such as your IP address, browser type, and operating system.
        </p>
        <h2 className="text-2xl font-bold mb-2">How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect our rights and the rights of others.
        </p>
        <h2 className="text-2xl font-bold mb-2">Sharing Your Information</h2>
        <p className="mb-4">
          We do not share your personal information with third parties except as described in this privacy policy or with your consent.
        </p>
        <h2 className="text-2xl font-bold mb-2">Your Choices</h2>
        <p className="mb-4">
          You have choices about how we use your information. You can opt out of receiving promotional communications from us by following the instructions in those communications. You can also disable cookies in your browser settings.
        </p>
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p>
          If you have any questions about this privacy policy, please contact us at info@aone.no.
        </p>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;