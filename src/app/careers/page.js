import React from 'react';
import Link from 'next/link';

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-6">Join Our Team</h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          We are always looking for talented individuals to join our growing team. If you are passionate about web development, design, or digital marketing, we would love to hear from you!
        </p>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h2>
          <p className="text-md text-gray-600 mb-2">
            Please send your resume and cover letter to:
          </p>
          <p className="text-lg font-semibold text-indigo-600 mb-4">
            <a href="mailto:info@aone.no" className="hover:underline">info@aone.no</a>
          </p>
          <p className="text-md text-gray-600">
            For any inquiries, you can also reach us at:
          </p>
          <p className="text-lg font-semibold text-indigo-600">
            <a href="tel:+40071654" className="hover:underline">+47 40071654</a>
          </p>
        </div>
        <div className="mt-8 text-center">
          <Link href="/" className="text-indigo-600 hover:text-indigo-800 font-medium">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
