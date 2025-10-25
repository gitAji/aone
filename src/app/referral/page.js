'use client';

import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import ScrollDownArrow from "@/components/ScrollDownArrow";

const ReferralPage = () => {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    referredName: '',
    referredEmail: '',
    referredCompany: '',
    referredService: '',
    additionalNotes: '',
  });
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/referral', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Your referral has been submitted successfully! Thank you.');
        setFormData({
          referrerName: '',
          referrerEmail: '',
          referredName: '',
          referredEmail: '',
          referredCompany: '',
          referredService: '',
          additionalNotes: '',
        });
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting referral form:', error);
      setMessage('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="referral-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Refer a Client"
        subtitle="Help us grow and get rewarded!"
      />
      <ScrollDownArrow color="text-gray-700" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })} />
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Referral Form</h2>
          {message && (
            <div className={`p-4 mb-4 text-center rounded-md ${message.includes('successfully') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {message}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Referrer Information */}
            <h3 className="text-2xl font-semibold text-gray-800 pt-4 pb-2 border-b border-gray-200">Your Information</h3>
            <div>
              <label htmlFor="referrerName" className="block text-sm font-medium text-gray-700">Your Name <span className="text-red-500">*</span></label>
              <input type="text" name="referrerName" id="referrerName" required value={formData.referrerName} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="referrerEmail" className="block text-sm font-medium text-gray-700">Your Email <span className="text-red-500">*</span></label>
              <input type="email" name="referrerEmail" id="referrerEmail" required value={formData.referrerEmail} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>

            {/* Referred Client Information */}
            <h3 className="text-2xl font-semibold text-gray-800 pt-4 pb-2 border-b border-gray-200">Client You Are Referring</h3>
            <div>
              <label htmlFor="referredName" className="block text-sm font-medium text-gray-700">Client&apos;s Name <span className="text-red-500">*</span></label>
              <input type="text" name="referredName" id="referredName" required value={formData.referredName} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="referredEmail" className="block text-sm font-medium text-gray-700">Client&apos;s Email <span className="text-red-500">*</span></label>
              <input type="email" name="referredEmail" id="referredEmail" required value={formData.referredEmail} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="referredCompany" className="block text-sm font-medium text-gray-700">Client&apos;s Company (Optional)</label>
              <input type="text" name="referredCompany" id="referredCompany" value={formData.referredCompany} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="referredService" className="block text-sm font-medium text-gray-700">Service Client is Interested In (Optional)</label>
              <input type="text" name="referredService" id="referredService" value={formData.referredService} onChange={handleChange} placeholder="e.g., Web Development, Digital Marketing" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700">Additional Notes (Optional)</label>
              <textarea name="additionalNotes" id="additionalNotes" rows="3" value={formData.additionalNotes} onChange={handleChange} placeholder="Any additional information about the referral." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-4 px-8 text-xl border border-transparent rounded-lg shadow-lg text-white font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 hover:from-red-600 hover:via-yellow-600 hover:to-blue-600 transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Referral'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ReferralPage;