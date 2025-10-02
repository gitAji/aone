'use client';

import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';

const DesignRequirementsPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    primaryColor: '',
    secondaryColor: '',
    accentColor: '',
    primaryFont: '',
    secondaryFont: '',
    headerRequirements: '',
    footerRequirements: '',
    navigationRequirements: '',
    otherSectionsRequirements: '',
    projectDescription: '',
    additionalNotes: '',
  });
  const [logoFile, setLogoFile] = useState(null);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setLogoFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    if (logoFile) {
      data.append('logo', logoFile);
    }

    try {
      const response = await fetch('/api/design-requirements', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Your design requirements have been submitted successfully!');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          companyName: '',
          primaryColor: '',
          secondaryColor: '',
          accentColor: '',
          primaryFont: '',
          secondaryFont: '',
          headerRequirements: '',
          footerRequirements: '',
          navigationRequirements: '',
          otherSectionsRequirements: '',
          projectDescription: '',
          additionalNotes: '',
        });
        setLogoFile(null);
      } else {
        setMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="design-requirements-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Site Design Requirements"
        subtitle="Tell us about your vision for your website."
      />
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Your Design Vision</h2>
          {message && (
            <div className={`p-4 mb-4 text-center rounded-md ${message.includes('successfully') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {message}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Information */}
            <h3 className="text-2xl font-semibold text-gray-800 pt-4 pb-2 border-b border-gray-200">Contact Information</h3>
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name <span className="text-red-500">*</span></label>
              <input type="text" name="fullName" id="fullName" required value={formData.fullName} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
              <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
              <input type="text" name="companyName" id="companyName" value={formData.companyName} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>

            {/* Branding Elements */}
            <h3 className="text-2xl font-semibold text-gray-800 pt-4 pb-2 border-b border-gray-200">Branding Elements</h3>
            <div>
              <label htmlFor="logo" className="block text-sm font-medium text-gray-700">Upload Logo (Optional)</label>
              <input type="file" name="logo" id="logo" accept="image/*" onChange={handleFileChange} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
            </div>
            <div>
              <label htmlFor="primaryColor" className="block text-sm font-medium text-gray-700">Primary Color (Hex Code)</label>
              <input type="text" name="primaryColor" id="primaryColor" value={formData.primaryColor} onChange={handleChange} placeholder="#RRGGBB" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="secondaryColor" className="block text-sm font-medium text-gray-700">Secondary Color (Hex Code)</label>
              <input type="text" name="secondaryColor" id="secondaryColor" value={formData.secondaryColor} onChange={handleChange} placeholder="#RRGGBB" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="accentColor" className="block text-sm font-medium text-gray-700">Accent Color (Hex Code)</label>
              <input type="text" name="accentColor" id="accentColor" value={formData.accentColor} onChange={handleChange} placeholder="#RRGGBB" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="primaryFont" className="block text-sm font-medium text-gray-700">Primary Font Choice</label>
              <input type="text" name="primaryFont" id="primaryFont" value={formData.primaryFont} onChange={handleChange} placeholder="e.g., Roboto, Open Sans" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="secondaryFont" className="block text-sm font-medium text-gray-700">Secondary Font Choice</label>
              <input type="text" name="secondaryFont" id="secondaryFont" value={formData.secondaryFont} onChange={handleChange} placeholder="e.g., Lato, Montserrat" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>

            {/* Section Requirements */}
            <h3 className="text-2xl font-semibold text-gray-800 pt-4 pb-2 border-b border-gray-200">Section Requirements</h3>
            <div>
              <label htmlFor="headerRequirements" className="block text-sm font-medium text-gray-700">Header Requirements</label>
              <textarea name="headerRequirements" id="headerRequirements" rows="3" value={formData.headerRequirements} onChange={handleChange} placeholder="e.g., Logo on left, navigation on right, social media icons." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
            </div>
            <div>
              <label htmlFor="footerRequirements" className="block text-sm font-medium text-gray-700">Footer Requirements</label>
              <textarea name="footerRequirements" id="footerRequirements" rows="3" value={formData.footerRequirements} onChange={handleChange} placeholder="e.g., Contact info, quick links, copyright, social media." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
            </div>
            <div>
              <label htmlFor="navigationRequirements" className="block text-sm font-medium text-gray-700">Navigation Requirements</label>
              <textarea name="navigationRequirements" id="navigationRequirements" rows="3" value={formData.navigationRequirements} onChange={handleChange} placeholder="e.g., Main menu items, dropdowns, search bar." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
            </div>
            <div>
              <label htmlFor="otherSectionsRequirements" className="block text-sm font-medium text-gray-700">Other Section Requirements</label>
              <textarea name="otherSectionsRequirements" id="otherSectionsRequirements" rows="5" value={formData.otherSectionsRequirements} onChange={handleChange} placeholder="Describe any other specific sections or features needed (e.g., About Us, Services, Blog, Testimonials)." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
            </div>

            {/* Project Description & Notes */}
            <h3 className="text-2xl font-semibold text-gray-800 pt-4 pb-2 border-b border-gray-200">Project Overview</h3>
            <div>
              <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">Overall Project Description <span className="text-red-500">*</span></label>
              <textarea name="projectDescription" id="projectDescription" rows="5" required value={formData.projectDescription} onChange={handleChange} placeholder="Provide a detailed description of your project, goals, and target audience." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
            </div>
            <div>
              <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700">Additional Notes</label>
              <textarea name="additionalNotes" id="additionalNotes" rows="3" value={formData.additionalNotes} onChange={handleChange} placeholder="Any other information you'd like to share." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-4 px-8 text-xl border border-transparent rounded-lg shadow-lg text-white font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 hover:from-red-600 hover:via-yellow-600 hover:to-blue-600 transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Design Requirements'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default DesignRequirementsPage;
