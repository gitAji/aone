'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import Link from 'next/link';

const Project9Page = () => {
  return (
    <div className="project-detail-page bg-gray-50 min-h-screen">
      <HeroSection
        title="AI-Powered Analytics Dashboard"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Project Overview</h2>
          <p className="text-lg text-gray-700 mb-6">
            This project involved the development of an advanced AI-powered analytics dashboard designed to provide businesses with real-time insights and predictive capabilities. The goal was to transform raw data into actionable intelligence, enabling more informed decision-making and proactive strategy adjustments.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Key features included automated data ingestion from various sources, machine learning models for predictive analytics, interactive data visualizations, and customizable reporting. We focused on creating a user-friendly interface that would allow business users to easily explore complex data and uncover hidden patterns without requiring deep technical expertise. The dashboard was built to be scalable and integrate seamlessly with existing data ecosystems.
          </p>
          <div className="mt-8">
            <Image src="/images/projects/project4.png" alt="AI-Powered Analytics Dashboard" width={1200} height={600} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Data Source Integration & Ingestion</h3>
              <p className="text-gray-700 mb-4">We began by connecting to various data sources and implementing robust data pipelines for automated ingestion, ensuring real-time data availability for analysis.</p>
              <Image src="/images/placeholders/wireframe.png" alt="Data Ingestion" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Machine Learning Model Development</h3>
              <p className="text-gray-700 mb-4">Our data scientists developed and trained machine learning models for predictive analytics, identifying key trends and forecasting future outcomes based on historical data.</p>
              <Image src="/images/placeholders/ui-ux.png" alt="ML Model Development" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Dashboard UI/UX Design & Development</h3>
              <p className="text-gray-700 mb-4">We designed an intuitive and interactive dashboard interface, focusing on clear data visualizations and customizable reporting features to empower business users.</p>
              <Image src="/images/placeholders/development.png" alt="Dashboard Design" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
            <div className="process-step bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Deployment & Performance Optimization</h3>
              <p className="text-gray-700 mb-4">The dashboard was deployed on a scalable cloud infrastructure, and performance optimizations were implemented to ensure fast loading times and real-time data updates.</p>
              <Image src="/images/placeholders/testing.png" alt="Deployment" width={600} height={400} className="rounded-lg shadow-md mt-4" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Key Features & Technologies</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Real-time Data Processing and Analysis.</li>
            <li>Predictive Modeling with Machine Learning Algorithms.</li>
            <li>Interactive Data Visualizations and Customizable Reporting.</li>
            <li>Scalable Cloud Infrastructure (AWS/Azure/GCP).</li>
            <li>Seamless Data Integration with various sources.</li>
            <li>User-Friendly Interface for business intelligence.</li>
            <li>Technologies Used: Python, TensorFlow, Power BI, Tableau, AWS Sagemaker.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Results & Impact</h2>
          <p className="text-lg text-gray-700 mb-6">
            The AI-powered analytics dashboard provided businesses with unprecedented insights, leading to more informed decision-making. Clients reported a **15% increase in operational efficiency** and a **10% improvement in forecasting accuracy**. The dashboard empowered users to easily explore complex data and uncover hidden patterns, driving significant business value.
          </p>
          <div className="mt-8">
            <Image src="/images/projects/project4.png" alt="Project Results" width={1200} height={600} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="cta py-16 bg-gray-200 text-gray-800 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Ready to unlock insights with AI?</h2>
          <Link href={`/contact`} className="inline-block bg-gray-800 text-white py-3 px-8 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out text-lg font-semibold shadow-lg">
              Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Project9Page;