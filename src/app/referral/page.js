'use client';

import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Toast from '@/components/Toast';

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
  const [toast, setToast] = useState(null);
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
    setToast(null);

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
        setToast({ message: 'Your referral has been submitted successfully! Thank you.', type: 'success' });
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
        setToast({ message: 'Something went wrong. Please try again.', type: 'error' });
      }
    } catch (error) {
      console.error('Error submitting referral form:', error);
      setToast({ message: 'An unexpected error occurred. Please try again later.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="referral-page bg-gray-50 min-h-screen">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      <HeroSection
        title="Refer a Client"
        subtitle="Help us grow and get rewarded!"
      />
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Referral Form</h2>
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
                className="btn-premium-gradient"
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