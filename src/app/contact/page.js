"use client";
import React, { useState } from "react";
import HeroSection from "@/components/HeroSection";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import CountUp from "react-countup";
import { useLanguage } from "@/context/LanguageContext";

const ContactPage = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");
    setIsError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatusMessage(t('contact.success'));
        setIsError(false);
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
      } else {
        setStatusMessage(t('contact.error'));
        setIsError(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatusMessage(t('contact.unexpected'));
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page bg-gray-100 dark:bg-slate-950 min-h-screen">
      <HeroSection title={t('contact.title')} subtitle={t('contact.subtitle')} />

      <section className="container mx-auto px-4 pb-16 pt-36">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="lg:w-2/3 bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg border border-slate-100 dark:border-slate-800">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
              {t('contact.connect')}
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {statusMessage && (
                <div className={`p-4 mb-4 text-center rounded-md ${!isError ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {statusMessage}
                </div>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-800 dark:text-slate-300 mb-2"
                >
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t('contact.placeholderName')}
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-400 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-rose-500 focus:border-transparent transition duration-300 ease-in-out"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-800 dark:text-slate-300 mb-2"
                >
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t('contact.placeholderEmail')}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-400 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-rose-500 focus:border-transparent transition duration-300 ease-in-out"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-800 dark:text-slate-300 mb-2"
                >
                  {t('contact.subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder={t('contact.placeholderSubject')}
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-400 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-rose-500 focus:border-transparent transition duration-300 ease-in-out"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-800 dark:text-slate-300 mb-2"
                >
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder={t('contact.placeholderMessage')}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-400 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-rose-500 focus:border-transparent transition duration-300 ease-in-out"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary h-14"
              >
                {loading ? t('contact.sending') : t('contact.send')}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:w-1/3 bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg flex flex-col justify-between border border-slate-100 dark:border-slate-800">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                {t('contact.contacts')}
              </h2>
              <div className="space-y-6 text-gray-800 dark:text-slate-300">
                <div className="flex items-center">
                  <FaPhone className="text-rose-500 text-2xl mr-4" />
                  <p>40071654</p>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-rose-500 text-2xl mr-4" />
                  <p>info@aone.no</p>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  {t('contact.followUs')}
                </h3>
                <div className="flex justify-center space-x-6">
                  <a
                    href="#"
                    className="text-gray-800 dark:text-white hover:text-rose-500 dark:hover:text-rose-400 transition duration-300 ease-in-out"
                  >
                    <FaFacebook className="text-4xl" />
                  </a>

                  <a
                    href="#"
                    className="text-gray-800 dark:text-white hover:text-rose-500 dark:hover:text-rose-400 transition duration-300 ease-in-out"
                  >
                    <FaLinkedin className="text-4xl" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 dark:text-white hover:text-rose-500 dark:hover:text-rose-400 transition duration-300 ease-in-out"
                  >
                    <FaInstagram className="text-4xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Replaces the map placeholder */}
      <section className="bg-gray-200 dark:bg-slate-900 border-y border-slate-300 dark:border-slate-800 text-gray-800 dark:text-white py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">{t('contact.strengths')}</h2>
          <p className="text-xl max-w-3xl mx-auto dark:text-slate-300 leading-relaxed">
            {t('contact.strengthsText')}
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-lg text-gray-800 dark:text-white border border-slate-100 dark:border-slate-700">
              <h3 className="text-5xl font-bold mb-2">
                <CountUp end={10} duration={2.5} />+
              </h3>
              <p className="text-xl dark:text-slate-400">{t('about.yearsExpertise')}</p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-lg text-gray-800 dark:text-white border border-slate-100 dark:border-slate-700">
              <h3 className="text-5xl font-bold mb-2">
                <CountUp end={500} duration={2.5} />+
              </h3>
              <p className="text-xl dark:text-slate-400">{t('contact.innovativeProjects')}</p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-lg text-gray-800 dark:text-white border border-slate-100 dark:border-slate-700">
              <h3 className="text-5xl font-bold mb-2">
                <CountUp end={99} duration={2.5} />%
              </h3>
              <p className="text-xl dark:text-slate-400">{t('contact.clientSatisfaction')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;