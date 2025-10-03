'use client';

import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';

const services = [
  'Web Development',
  'AI Automations',
  'Digital Marketing',
  'UI/UX Design',
  'Photography',
  'Videography',
  'Branding',
  'Search Engine Optimization',
  'WordPress Development',
  'Custom-Coded Website',
  'Admin Dashboard/Login',
  'Content Management System (CMS)',
  'Static Website',
  'Logo Design',
  'Social Media Management',
  'Website Maintenance',
];

const budgetOptions = [
  'Less than $1,000',
  '$1,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  'More than $25,000',
];

const timelineOptions = [
  'Less than 1 month',
  '1-3 months',
  '3-6 months',
  'More than 6 months',
];

const RequestQuotePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    services: [],
    projectDescription: '',
    budget: '',
    timeline: '',
  });
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        services: checked
          ? [...prevData.services, value]
          : prevData.services.filter((service) => service !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Your quote request has been sent successfully! We will get back to you shortly.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          services: [],
          projectDescription: '',
          budget: '',
          timeline: '',
        });
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="request-quote-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Request a Quote"
        subtitle="Tell us about your project and get a personalized quote."
      />
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Project Details</h2>
          {message && (
            <div className={`p-4 mb-4 text-center rounded-md ${message.includes('successfully') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {message}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Company Name (Optional)
              </label>
              <input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service(s) of Interest <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {services.map((service) => (
                  <div key={service} className="flex items-center">
                    <input
                      type="checkbox"
                      id={service}
                      name="services"
                      value={service}
                      checked={formData.services.includes(service)}
                      onChange={handleChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor={service} className="ml-2 block text-sm text-gray-900">
                      {service}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">
                Project Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="projectDescription"
                id="projectDescription"
                rows="4"
                required
                value={formData.projectDescription}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                Estimated Budget <span className="text-red-500">*</span>
              </label>
              <select
                id="budget"
                name="budget"
                required
                value={formData.budget}
                onChange={handleChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="">Select a budget range</option>
                {budgetOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-gray-700">
                Desired Timeline <span className="text-red-500">*</span>
              </label>
              <select
                id="timeline"
                name="timeline"
                required
                value={formData.timeline}
                onChange={handleChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="">Select a timeline</option>
                {timelineOptions.map((option) => (
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
                className={`w-full btn-gradient-primary ${isSubmitting ? 'disabled' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RequestQuotePage;
