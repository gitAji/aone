"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import HeroSection from "@/components/HeroSection";
import { useLanguage } from "@/context/LanguageContext";
import Toast from "@/components/Toast";
import { motion } from "framer-motion";
import { FaPaperPlane, FaUserAlt, FaEnvelope, FaBriefcase, FaFileAlt, FaLink, FaCheckCircle, FaStar } from "react-icons/fa";
import { vacancies } from "@/app/data/vacancies";

function ApplyForm() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const roleId = searchParams.get("role");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: roleId || "",
    experience: "Mid-level",
    portfolioUrl: "",
    cvUrl: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (roleId) {
      setFormData((prev) => ({ ...prev, role: roleId }));
    }
  }, [roleId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setToast(null);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setToast({ message: "Thank you for reaching out! We have received your details and will contact you soon.", type: "success" });
        setSubmitted(true);
      } else {
        setToast({ message: "Failed to submit application. Please try again.", type: "error" });
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      setToast({ message: "An unexpected error occurred. Please try again later.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white flex flex-col items-center justify-center p-4">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-12 rounded-3xl text-center max-w-xl shadow-xl dark:shadow-2xl"
        >
          <div className="w-20 h-20 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-8">
            <FaCheckCircle className="text-emerald-500 dark:text-emerald-400 text-4xl" />
          </div>
          <h2 className="text-3xl font-black mb-4">Message Received!</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed text-lg">
            Thank you for reaching out to join the Aone team. We&apos;ve received your details and will review them carefully. 
            If your profile matches our requirements, we&apos;ll be in touch within 5-7 business days.
          </p>
          <a href="/careers" className="inline-block bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300">
            Back to Careers
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      
      <HeroSection 
        title="Apply Today" 
        subtitle="Embark on your journey with Aone. Complete the form below to start your application." 
      />

      <div className="container mx-auto px-4 pt-40 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xl dark:shadow-2xl flex flex-col md:flex-row"
        >
          {/* Form Left Side - Info */}
          <div className="md:w-1/3 bg-slate-100 dark:bg-slate-800 p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700">
            <div>
              <h3 className="text-xl font-black mb-6">Contact Us</h3>
              <ul className="space-y-6">
                {[
                  { step: "01", title: "Review", desc: "Our HR team reviews your profile." },
                  { step: "02", title: "Interview", desc: "Technical or creative discussion." },
                  { step: "03", title: "Assessment", desc: "Practical task evaluation." },
                  { step: "04", title: "Offer", desc: "Welcome to the Aone crew." },
                ].map(item => (
                  <li key={item.step} className="flex gap-4">
                    <span className="text-rose-500 font-black text-xs mt-1">{item.step}</span>
                    <div>
                      <h4 className="font-bold text-sm text-slate-800 dark:text-white mb-1 uppercase tracking-wider">{item.title}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-10 border-t border-slate-700 mt-10">
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest leading-loose">
                Confidentiality Guaranteed. We respect your privacy and handle all data in accordance with our GDPR policy.
              </p>
            </div>
          </div>

          {/* Form Content */}
          <form className="md:w-2/3 p-10 space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                  <FaUserAlt className="text-rose-500" /> Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white px-5 py-4 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all outline-none placeholder:text-slate-400 dark:placeholder:text-slate-600"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                  <FaEnvelope className="text-rose-500" /> Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white px-5 py-4 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all outline-none placeholder:text-slate-400 dark:placeholder:text-slate-600"
                />
              </div>

              {/* Position */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                  <FaBriefcase className="text-rose-500" /> Position
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white px-5 py-4 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all outline-none appearance-none"
                >
                  <option value="">Select a role</option>
                  {vacancies.map(v => (
                    <option key={v.id} value={v.id}>{v.title}</option>
                  ))}
                  <option value="speculative">Speculative Application</option>
                </select>
              </div>

              {/* Experience */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                  <FaStar className="text-rose-500" /> Experience Level
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white px-5 py-4 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all outline-none appearance-none"
                >
                   <option value="Junior">Junior (0-2 years)</option>
                   <option value="Mid-level">Mid-level (2-5 years)</option>
                   <option value="Senior">Senior (5+ years)</option>
                </select>
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                  <FaLink className="text-rose-500" /> Portfolio / LinkedIn
                </label>
                <input
                  type="url"
                  name="portfolioUrl"
                  placeholder="https://"
                  value={formData.portfolioUrl}
                  onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white px-5 py-4 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all outline-none placeholder:text-slate-400 dark:placeholder:text-slate-600"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                  <FaFileAlt className="text-rose-500" /> Resume / CV Link
                </label>
                <input
                  type="url"
                  name="cvUrl"
                  placeholder="Shared Drive Link"
                  value={formData.cvUrl}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white px-5 py-4 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all outline-none placeholder:text-slate-400 dark:placeholder:text-slate-600"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                Cover Letter / Why Aone?
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell us about yourself and why you're a good fit..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white px-5 py-4 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all outline-none resize-none placeholder:text-slate-400 dark:placeholder:text-slate-600"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 bg-rose-500 hover:bg-rose-600 disabled:bg-slate-800 text-white font-black py-4 rounded-xl shadow-lg shadow-rose-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              {loading ? "Submitting..." : (
                <>Send Application <FaPaperPlane className="text-xs" /></>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-12 h-12 bg-rose-500/20 rounded-full"></div>
          <div className="text-sm font-black uppercase tracking-widest text-slate-500">Loading Application...</div>
        </div>
      </div>
    }>
      <ApplyForm />
    </Suspense>
  );
}
