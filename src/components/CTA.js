import React from "react";

const CTASection = () => {
  return (
    <section
      className="py-16 bg-gradient-to-b from-gray-50 to-white text-center"
      aria-labelledby="cta"
    >
      <div className="container mx-auto px-6">
        <h2
          id="cta"
          className="text-4xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-indigo-600"
        >
          Ready to Transform Your Digital Presence?
        </h2>
        <a
          href="/request-quote"
          className="inline-block py-4 px-8 text-xl font-bold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
        >
          Get Your Free Quote Today!
        </a>
      </div>
    </section>
  );
};

export default CTASection;
