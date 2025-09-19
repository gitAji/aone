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
          className="text-4xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-pink-600"
        >
          Ready to Launch Your Next Project?
        </h2>
        <a
          href="/contact"
          className="inline-block px-8 py-3 text-lg font-semibold text-white bg-pink-700 rounded-lg shadow-md hover:bg-pink-800 hover:scale-105 transition-all duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default CTASection;
