"use client";
import React, { useState } from "react"; // Re-import useState
import HeroSection from "@/components/HeroSection";
import ScrollDownArrow from "@/components/ScrollDownArrow";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import CountUp from "react-countup";

const ContactPage = () => {
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
        setStatusMessage("Message sent successfully!");
        setIsError(false);
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
      } else {
        setStatusMessage("Failed to send message. Please try again.");
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
    <div className="contact-page bg-gray-100 min-h-screen">
      <HeroSection title="Contact Us" subtitle="Contact us" />
      <ScrollDownArrow color="text-gray-700" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })} />

      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Let &apos;s connect
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {statusMessage && (
                <div className={`p-4 mb-4 text-center rounded-md ${statusMessage.includes('successfully') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {statusMessage}
                </div>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-800 mb-2"
                >
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
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-800 mb-2"
                >
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
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-800 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-400 rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition duration-300 ease-in-out"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-800 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-400 rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition duration-300 ease-in-out"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`btn-gradient-primary ${loading ? 'disabled' : ''}`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:w-1/3 bg-white p-8 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Contacts
              </h2>
              <div className="space-y-6 text-gray-800">
                <div className="flex items-center">
                  <FaPhone className="text-gray-700 text-2xl mr-4" />
                  <p>40071654</p>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-gray-700 text-2xl mr-4" />
                  <p>info@aone.no</p>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Follow Us
                </h3>
                <div className="flex justify-center space-x-6">
                  <a
                    href="#"
                    className="text-gray-800 hover:text-red-700 transition duration-300 ease-in-out"
                  >
                    <FaFacebook className="text-4xl" />
                  </a>

                  <a
                    href="#"
                    className="text-gray-800 hover:text-red-700 transition duration-300 ease-in-out"
                  >
                    <FaLinkedin className="text-4xl" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-red-700 transition duration-300 ease-in-out"
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
      <section className="bg-gray-200 text-gray-800 py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Achievements</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg text-gray-800">
              <h3 className="text-5xl font-bold mb-2">
                <CountUp end={15} duration={2.5} />+
              </h3>
              <p className="text-xl">Years of Expertise</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg text-gray-800">
              <h3 className="text-5xl font-bold mb-2">
                <CountUp end={200} duration={2.5} />+
              </h3>
              <p className="text-xl">Happy Clients</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg text-gray-800">
              <h3 className="text-5xl font-bold mb-2">
                <CountUp end={250} duration={2.5} />+
              </h3>
              <p className="text-xl">Projects are done</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;