import React from "react";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaChartLine,
  FaRobot,
  FaCameraRetro,
  FaVideo,
  FaSearchDollar,
  FaObjectGroup,
} from "react-icons/fa";

const ServiceCard = ({ href, icon: Icon, title, description, color }) => {
  return (
    <a
      href={href}
      className="group relative bg-white dark:bg-light-gray rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-border-color"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
      <div className="relative flex items-start space-x-4">
        <Icon className={`text-3xl ${color} group-hover:text-white transition-colors duration-300`} />
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-white">{title}</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm group-hover:text-gray-200">{description}</p>
        </div>
      </div>
    </a>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-background-color" aria-labelledby="our-work">
      <header className="text-center mb-16">
        <h2
          id="our-work"
          className="text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          What We Do
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Explore our range of services designed to help your business thrive in
          the digital age.
        </p>
      </header>
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          href="/services/web-development"
          icon={FaLaptopCode}
          title="Web Development"
          description="We build modern, responsive, and user-friendly websites."
          color="text-blue-600 group-hover:text-blue-700"
        />
        <ServiceCard
          href="/services/branding"
          icon={FaPaintBrush}
          title="Branding"
          description="We create strong, memorable, and impactful brands."
          color="text-green-600 group-hover:text-green-700"
        />
        <ServiceCard
          href="/services/digital-marketing"
          icon={FaChartLine}
          title="Digital Marketing"
          description="We help you reach your target audience and grow your business."
          color="text-yellow-600 group-hover:text-yellow-700"
        />
        <ServiceCard
          href="/services/ai-automations"
          icon={FaRobot}
          title="AI Automations"
          description="We build AI-powered automations to streamline your business processes."
          color="text-indigo-600 group-hover:text-indigo-700"
        />
        <ServiceCard
          href="/services/geo"
          icon={FaSearchDollar}
          title="Generative Engine Optimization"
          description="Optimize your content for AI-powered search engines and chatbots."
          color="text-cyan-600 group-hover:text-cyan-700"
        />
        <ServiceCard
          href="/services/ui-ux-design"
          icon={FaObjectGroup}
          title="UI/UX Design"
          description="We design intuitive and user-friendly interfaces."
          color="text-purple-600 group-hover:text-purple-700"
        />
      </div>
    </section>
  );
};

export default ServicesSection;
