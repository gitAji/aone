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
          className="relative text-4xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-indigo-600 after:absolute after:bottom-[-10px] after:left-1/2 after:w-20 after:h-1 after:bg-gradient-to-r from-indigo-500 to-blue-500 after:-translate-x-1/2 after:rounded-full"
        >
          Ready to Transform Your Digital Presence?
        </h2>
        <a
          href="/request-quote"
          className="btn-outline-gradient"
        >
          Get Your Free Quote Today!
        </a>
      </div>
    </section>
  );
};

export default CTASection;
