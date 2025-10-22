"use client";
import React, { useState } from "react";
import HeroSection from "@/components/HeroSection";

const ClientLoginPage = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Please contact the admin to login.");
  };

  return (
    <div className="client-login-page bg-gray-50 min-h-screen">
      <HeroSection title="Client Login" description="Access your client portal" />

      <section className="container mx-auto px-4 py-16 flex justify-center items-center">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Access Your Portal
          </h2>
          {message && (
            <div className="p-4 mb-4 text-center rounded-md bg-blue-100 text-blue-800">
              {message}
            </div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="********"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-pink-700 focus:ring-pink-800 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="btn-gradient-primary"
            >
              Login
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ClientLoginPage;
