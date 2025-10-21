"use client";
import React, { useState } from "react";
import HeroSection from "@/components/HeroSection";

const FreeSeoAuditPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    websiteURL: "",
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
      const response = await fetch("/api/free-seo-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage("Request submitted successfully!");
        setIsError(false);
        setFormData({ name: "", email: "", websiteURL: "", message: "" });
      } else {
        setStatusMessage("Failed to submit request. Please try again.");
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
    <div className="free-seo-audit-page bg-gray-100 min-h-screen">
      <HeroSection title="Free SEO Audit" subtitle="Get a free SEO audit for your website" />

      <section className="container mx-auto px-4 py-16">
        <div className="lg:w-2/3 mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Request a Free SEO Audit
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {statusMessage && (
              <div className={`p-4 mb-4 text-center rounded-md ${isError ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                {statusMessage}
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-400 rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition duration-300 ease-in-out"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-400 rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition duration-300 ease-in-out"
                required
              />
            </div>
            <div>
              <label htmlFor="websiteURL" className="block text-sm font-medium text-gray-800 mb-2">
                Website URL
              </label>
              <input
                type="url"
                id="websiteURL"
                name="websiteURL"
                placeholder="https://example.com"
                value={formData.websiteURL}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-400 rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition duration-300 ease-in-out"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-2">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell us about your business and goals"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-400 rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition duration-300 ease-in-out"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`btn-gradient-primary ${loading ? 'disabled' : ''}`}
            >
              {loading ? "Submitting..." : "Request Audit"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default FreeSeoAuditPage;
