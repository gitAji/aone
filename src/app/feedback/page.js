'use client';

import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import ScrollDownArrow from "@/components/ScrollDownArrow";

const FeedbackPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
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
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Your feedback has been sent successfully! Thank you.');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting feedback form:', error);
      setMessage('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="feedback-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Provide Feedback"
        subtitle="We'd love to hear your thoughts and suggestions."
      />
      <ScrollDownArrow color="text-gray-700" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })} />
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Send Us Your Feedback</h2>
          {message && (
            <div className={`p-4 mb-4 text-center rounded-md ${message.includes('successfully') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {message}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name (Optional)
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email (Optional)
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-gradient-primary ${isSubmitting ? 'disabled' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Feedback'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default FeedbackPage;
