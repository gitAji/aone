"use client";

import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';

const ReferralPage = () => {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    referrerPhone: '',
    refereeName: '',
    refereeEmail: '',
    refereePhone: '',
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');
    setIsError(false);

    const form = e.target;
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    data.append("form-name", "referral"); // Netlify form name

    try {
      const response = await fetch("/", { // Submit to current page for Netlify
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });

      if (response.ok) {
        setStatusMessage("Referral submitted successfully! Thank you!");
        setIsError(false);
        setFormData({ // Clear form
          referrerName: '',
          referrerEmail: '',
          referrerPhone: '',
          refereeName: '',
          refereeEmail: '',
          refereePhone: '',
        });
      } else {
        setStatusMessage("Failed to submit referral. Please try again.");
        setIsError(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatusMessage("An unexpected error occurred.");
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="referral-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Refer a Client"
        subtitle="Help us grow and earn rewards!"
      />

      <section className="container mx-auto px-4 py-16 flex justify-center items-center">
        <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Referral Form
          </h2>
          <form name="referral" data-netlify="true" onSubmit={handleSubmit} className="space-y-6">
            {/* Hidden field for Netlify Forms */}
            <input type="hidden" name="form-name" value="referral" />

            <fieldset className="border border-gray-300 p-4 rounded-md">
              <legend className="text-xl font-semibold text-gray-800 px-2">Referrer Details</legend>
              <div>
                <label htmlFor="referrerName" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  id="referrerName"
                  name="referrerName"
                  value={formData.referrerName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                  required
                />
              </div>
              <div>
                <label htmlFor="referrerEmail" className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                <input
                  type="email"
                  id="referrerEmail"
                  name="referrerEmail"
                  value={formData.referrerEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                  required
                />
              </div>
              <div>
                <label htmlFor="referrerPhone" className="block text-sm font-medium text-gray-700 mb-2">Your Phone (Optional)</label>
                <input
                  type="tel"
                  id="referrerPhone"
                  name="referrerPhone"
                  value={formData.referrerPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                />
              </div>
            </fieldset>

            <fieldset className="border border-gray-300 p-4 rounded-md">
              <legend className="text-xl font-semibold text-gray-800 px-2">Referee Details</legend>
              <div>
                <label htmlFor="refereeName" className="block text-sm font-medium text-gray-700 mb-2">Client's Name</label>
                <input
                  type="text"
                  id="refereeName"
                  name="refereeName"
                  value={formData.refereeName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                  required
                />
              </div>
              <div>
                <label htmlFor="refereeEmail" className="block text-sm font-medium text-gray-700 mb-2">Client's Email</label>
                <input
                  type="email"
                  id="refereeEmail"
                  name="refereeEmail"
                  value={formData.refereeEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                  required
                />
              </div>
              <div>
                <label htmlFor="refereePhone" className="block text-sm font-medium text-gray-700 mb-2">Client's Phone (Optional)</label>
                <input
                  type="tel"
                  id="refereePhone"
                  name="refereePhone"
                  value={formData.refereePhone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                />
              </div>
            </fieldset>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:from-red-600 hover:via-yellow-600 hover:to-blue-600 transition duration-300 shadow-lg transform hover:scale-105"
            >
              {loading ? "Submitting..." : "Submit Referral"}
            </button>

            {statusMessage && (
              <p className={`text-center mt-4 ${isError ? "text-red-500" : "text-green-500"}`}>
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default ReferralPage;
