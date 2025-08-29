'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import CountUp from 'react-countup';

const ContactPage = () => {
  return (
    <div className="contact-page bg-gray-50 min-h-screen">
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with us"
      />

      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out text-lg font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:w-1/3 bg-white p-8 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contact Information</h2>
              <div className="space-y-6 text-gray-700">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-blue-500 text-2xl mr-4" />
                  <p>123 Main Street, Anytown, USA 12345</p>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-blue-500 text-2xl mr-4" />
                  <p>(123) 456-7890</p>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-blue-500 text-2xl mr-4" />
                  <p>info@aone.com</p>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Follow Us</h3>
                <div className="flex justify-center space-x-6">
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">
                    <FaFacebook className="text-4xl" />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">
                    <FaTwitter className="text-4xl" />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">
                    <FaLinkedin className="text-4xl" />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">
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
          <h2 className="text-4xl font-bold mb-8">Our Strengths</h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            We are a team of passionate professionals dedicated to delivering exceptional results and building lasting partnerships.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg text-gray-800">
              <h3 className="text-5xl font-bold mb-2"><CountUp end={10} duration={2.5} />+</h3>
              <p className="text-xl">Years of Expertise</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg text-gray-800">
              <h3 className="text-5xl font-bold mb-2"><CountUp end={500} duration={2.5} />+</h3>
              <p className="text-xl">Innovative Projects</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg text-gray-800">
              <h3 className="text-5xl font-bold mb-2"><CountUp end={99} duration={2.5} />%</h3>
              <p className="text-xl">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;