'use client';

import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import SkeletonLoader from '@/components/SkeletonLoader';

const priorityOptions = [
  'Low',
  'Medium',
  'High',
  'Urgent',
];

const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    issueDescription: '',
    priority: '',
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
      const response = await fetch('/api/support', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Your support request has been sent successfully! We will get back to you shortly.');
        setFormData({
          name: '',
          email: '',
          subject: '',
          issueDescription: '',
          priority: '',
        });
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting support form:', error);
      setMessage('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="support-page bg-gray-50 dark:bg-background-color min-h-screen">
      <HeroSection
        title="Support Request"
        description="Submit a support request and we'll assist you as soon as possible."
      />
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-white dark:bg-light-gray p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">Submit a Support Ticket</h2>
          {isSubmitting ? (
            <SkeletonLoader />
          ) : (
            <>
              {message && (
                <div className={`p-4 mb-4 text-center rounded-md ${message.includes('successfully') ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
                  {message}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Full Name <span className="text-red-500 dark:text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 dark:focus:ring-purple-500 focus:border-indigo-500 dark:focus:border-purple-500 sm:text-sm dark:bg-background-color dark:text-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email <span className="text-red-500 dark:text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 dark:focus:ring-purple-500 focus:border-indigo-500 dark:focus:border-purple-500 sm:text-sm dark:bg-background-color dark:text-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Subject <span className="text-red-500 dark:text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 dark:focus:ring-purple-500 focus:border-indigo-500 dark:focus:border-purple-500 sm:text-sm dark:bg-background-color dark:text-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="issueDescription" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Issue Description <span className="text-red-500 dark:text-red-400">*</span>
                  </label>
                  <textarea
                    name="issueDescription"
                    id="issueDescription"
                    rows="5"
                    required
                    value={formData.issueDescription}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 dark:focus:ring-purple-500 focus:border-indigo-500 dark:focus:border-purple-500 sm:text-sm dark:bg-background-color dark:text-gray-100"
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="priority" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Priority <span className="text-red-500 dark:text-red-400">*</span>
                  </label>
                  <select
                    id="priority"
                    name="priority"
                    required
                    value={formData.priority}
                    onChange={handleChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-indigo-500 dark:focus:ring-purple-500 focus:border-indigo-500 dark:focus:border-purple-500 sm:text-sm rounded-md dark:bg-background-color dark:text-gray-100"
                  >
                    <option value="">Select priority</option>
                    {priorityOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-4 px-8 text-xl border border-transparent rounded-lg shadow-lg text-white font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 hover:from-red-600 hover:via-yellow-600 hover:to-blue-600 transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
