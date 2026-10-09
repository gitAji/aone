'use client';

import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Toast from '@/components/Toast';
import { FaShieldAlt, FaComments } from 'react-icons/fa';

const inputClass = "block w-full px-4 py-3 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500";
const labelClass = "block text-sm font-bold text-gray-800 dark:text-slate-200 mb-1.5";
const optionalTag = <span className="text-xs font-normal normal-case text-slate-400 dark:text-slate-500 ml-1">(optional)</span>;

const FeedbackPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
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
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setToast({ message: 'Your feedback has been sent successfully! Thank you.', type: 'success' });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setToast({ message: 'Something went wrong. Please try again.', type: 'error' });
      }
    } catch (error) {
      console.error('Error submitting feedback form:', error);
      setToast({ message: 'An unexpected error occurred. Please try again later.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="feedback-page bg-gray-50 dark:bg-slate-950 min-h-screen">
      <HeroSection
        title="Provide Feedback"
        subtitle="We'd love to hear your thoughts and suggestions."
      />
      <section className="container mx-auto px-4 pb-16 pt-36">
        {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
        <div className="max-w-2xl mx-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm p-8 sm:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-slate-800">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Send Us Your Feedback</h2>
            <p className="flex items-center justify-center gap-2 text-sm font-medium text-rose-600 dark:text-rose-400">
              <FaComments className="text-xs" />
              Takes under a minute — name and email are optional
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Name {optionalTag}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email {optionalTag}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className={labelClass}>
                Subject <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="message" className={labelClass}>
                Message <span className="text-rose-500">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className={inputClass}
              ></textarea>
            </div>
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-premium-gradient ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Feedback'}
              </button>
              <p className="flex items-center justify-center gap-2 text-xs text-slate-400 dark:text-slate-500 mt-3">
                <FaShieldAlt className="text-[10px]" />
                {"Your feedback helps us improve. We read every message."}
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default FeedbackPage;
