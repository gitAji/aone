import React from "react";
import Image from "next/image";

const TestimonialCard = ({ text, imgSrc, imgAlt, client }) => {
  return (
    <div className="relative bg-white dark:bg-light-gray rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
      <div className="relative">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={80}
          height={80}
          className="w-20 h-20 mx-auto mb-4 rounded-full object-contain border-2 border-blue-300 shadow-md grayscale group-hover:grayscale-0 transition-all duration-300"
          sizes="80px"
        />
        <p className="text-gray-800 dark:text-gray-200 italic mb-4 text-center text-lg">
          &quot;{text}&quot;
        </p>
        <p className="text-gray-600 dark:text-gray-400 font-bold text-center text-md">{client}</p>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section
      className="py-12 bg-gradient-to-b from-gray-50 to-white dark:bg-background-color"
      aria-labelledby="testimonials"
    >
      <header className="text-center mb-16">
        <h2
          id="testimonials"
          className="text-5xl font-extrabold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500"
        >
          What Our Customers Say
        </h2>
        <p className="text-xl text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">
          Discover the experiences of our valued clients who trust us to bring
          their visions to life.
        </p>
      </header>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TestimonialCard
          text="Excellent designs that made our website look more professional. All the gaps were filled with highest prerequisites. 100% endorsed and a good choice for restaurant businesses."
          imgSrc="/images/clients/clean.png"
          imgAlt="Clean Masters Renhold Logo"
          client="Clean Masters Renhold"
        />
        <TestimonialCard
          text="Saray Steakhouse, and arguably one of the best places for grabbing the all-in-one bundle for web solutions. Unquestionably a 5 stars digital firm with huge potential."
          imgSrc="/images/clients/saraysange.png"
          imgAlt="Saray Steakhouse Logo"
          client="Saray Steakhouse"
        />
        <TestimonialCard
          text="A website that is visually appealing, easy to use, and provides a good user experience can help to increase customer engagement and drive conversions."
          imgSrc="/images/clients/shop-front.png"
          imgAlt="Go Local Logo"
          client="Go Local"
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
