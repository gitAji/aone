'use client';

import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Toast from '@/components/Toast';
import { FaShieldAlt, FaPalette } from 'react-icons/fa';

const inputClass = "block w-full px-4 py-3 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500";
const colorInputClass = "block w-full h-12 px-1 py-1 border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all";
const labelClass = "block text-sm font-bold text-gray-800 dark:text-slate-200 mb-1.5";
const sectionHeadingClass = "text-xs font-black uppercase tracking-[0.2em] text-rose-500 pt-4";
const optionalTag = <span className="text-xs font-normal normal-case text-slate-400 dark:text-slate-500 ml-1">(optional)</span>;

const DesignRequirementsPage = () => {
  const [formData, setFormData] = useState({
    contactPerson: '',
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
  const [toast, setToast] = useState(null);
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
    setToast(null);

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

      if (response.ok) {
        setToast({ message: 'Your design requirements have been submitted successfully!', type: 'success' });
        setFormData({
          contactPerson: '',
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
        setToast({ message: 'Something went wrong. Please try again.', type: 'error' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setToast({ message: 'An unexpected error occurred. Please try again later.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="design-requirements-page bg-gray-50 dark:bg-slate-950 min-h-screen">
      <HeroSection
        title="Site Design Requirements"
        subtitle="Tell us about your vision for your website."
      />
      <section className="container mx-auto px-4 pb-16 pt-36">
        {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
        <div className="max-w-3xl mx-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm p-8 sm:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-slate-800">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Your Design Vision</h2>
            <p className="flex items-center justify-center gap-2 text-sm font-medium text-rose-600 dark:text-rose-400">
              <FaPalette className="text-xs" />
              Only contact info and a project description are required
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <h3 className={sectionHeadingClass}>Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contactPerson" className={labelClass}>Contact Person <span className="text-rose-500">*</span></label>
                <input type="text" name="contactPerson" id="contactPerson" required value={formData.contactPerson} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>Email <span className="text-rose-500">*</span></label>
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className={inputClass} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className={labelClass}>Phone Number {optionalTag}</label>
                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label htmlFor="companyName" className={labelClass}>Company Name {optionalTag}</label>
                <input type="text" name="companyName" id="companyName" value={formData.companyName} onChange={handleChange} className={inputClass} />
              </div>
            </div>

            <h3 className={sectionHeadingClass}>Branding Elements</h3>
            <div>
              <label htmlFor="logo" className={labelClass}>Upload Logo {optionalTag}</label>
              <input type="file" name="logo" id="logo" accept="image/*" onChange={handleFileChange} className="mt-1 block w-full text-sm text-gray-600 dark:text-slate-400 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-rose-50 file:text-rose-700 hover:file:bg-rose-100 dark:file:bg-rose-500/10 dark:file:text-rose-400 dark:hover:file:bg-rose-500/20" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label htmlFor="primaryColor" className={labelClass}>Primary Color {optionalTag}</label>
                <input type="color" name="primaryColor" id="primaryColor" value={formData.primaryColor} onChange={handleChange} className={colorInputClass} />
              </div>
              <div>
                <label htmlFor="secondaryColor" className={labelClass}>Secondary Color {optionalTag}</label>
                <input type="color" name="secondaryColor" id="secondaryColor" value={formData.secondaryColor} onChange={handleChange} className={colorInputClass} />
              </div>
              <div>
                <label htmlFor="accentColor" className={labelClass}>Accent Color {optionalTag}</label>
                <input type="color" name="accentColor" id="accentColor" value={formData.accentColor} onChange={handleChange} className={colorInputClass} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="primaryFont" className={labelClass}>Primary Font {optionalTag}</label>
                <input type="text" name="primaryFont" id="primaryFont" value={formData.primaryFont} onChange={handleChange} placeholder="e.g., Roboto, Open Sans" className={inputClass} />
              </div>
              <div>
                <label htmlFor="secondaryFont" className={labelClass}>Secondary Font {optionalTag}</label>
                <input type="text" name="secondaryFont" id="secondaryFont" value={formData.secondaryFont} onChange={handleChange} placeholder="e.g., Lato, Montserrat" className={inputClass} />
              </div>
            </div>

            <h3 className={sectionHeadingClass}>Section Requirements</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="headerRequirements" className={labelClass}>Header {optionalTag}</label>
                <textarea name="headerRequirements" id="headerRequirements" rows="3" value={formData.headerRequirements} onChange={handleChange} placeholder="e.g., Logo on left, navigation on right, social media icons." className={inputClass}></textarea>
              </div>
              <div>
                <label htmlFor="footerRequirements" className={labelClass}>Footer {optionalTag}</label>
                <textarea name="footerRequirements" id="footerRequirements" rows="3" value={formData.footerRequirements} onChange={handleChange} placeholder="e.g., Contact info, quick links, copyright, social media." className={inputClass}></textarea>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="navigationRequirements" className={labelClass}>Navigation {optionalTag}</label>
                <textarea name="navigationRequirements" id="navigationRequirements" rows="3" value={formData.navigationRequirements} onChange={handleChange} placeholder="e.g., Main menu items, dropdowns, search bar." className={inputClass}></textarea>
              </div>
              <div>
                <label htmlFor="otherSectionsRequirements" className={labelClass}>Other Sections {optionalTag}</label>
                <textarea name="otherSectionsRequirements" id="otherSectionsRequirements" rows="3" value={formData.otherSectionsRequirements} onChange={handleChange} placeholder="e.g., About Us, Services, Blog, Testimonials." className={inputClass}></textarea>
              </div>
            </div>

            <h3 className={sectionHeadingClass}>Project Overview</h3>
            <div>
              <label htmlFor="projectDescription" className={labelClass}>Overall Project Description <span className="text-rose-500">*</span></label>
              <textarea name="projectDescription" id="projectDescription" rows="5" required value={formData.projectDescription} onChange={handleChange} placeholder="Provide a detailed description of your project, goals, and target audience." className={inputClass}></textarea>
            </div>
            <div>
              <label htmlFor="additionalNotes" className={labelClass}>Additional Notes {optionalTag}</label>
              <textarea name="additionalNotes" id="additionalNotes" rows="3" value={formData.additionalNotes} onChange={handleChange} placeholder="Any other information you'd like to share." className={inputClass}></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-premium-gradient"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Design Requirements'}
              </button>
              <p className="flex items-center justify-center gap-2 text-xs text-slate-400 dark:text-slate-500 mt-3">
                <FaShieldAlt className="text-[10px]" />
                {"No obligation. Our design team will follow up within 24 hours."}
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default DesignRequirementsPage;
