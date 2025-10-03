import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Database, Brain, Search, TrendingUp, Settings } from "lucide-react";

export default function Data() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 bg-white text-gray-900">
      {/* Title */}
      <div className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold">Data & AI Analytics Services</h1>
        <div className="mt-4 bg-gray-50 border border-gray-200 rounded-md p-5 max-w-3xl">
          <p className="text-lg">
            Unlock the power of your data with our Data & AI Analytics services. We help
            organizations transform raw information into actionable insights, leveraging
            artificial intelligence and advanced analytics to drive smarter decisions,
            innovation, and competitive advantage.
          </p>
        </div>
      </div>

      {/* Our Approach */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Data & AI Approach</h2>
        <p className="text-base max-w-4xl mb-6">
          We combine cutting-edge AI technologies with robust data analytics to deliver
          end-to-end solutions — from data strategy and governance to predictive insights
          and automation. Our goal is to help you maximize the value of your data while
          ensuring security, scalability, and accuracy.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <InfoCard
            title="Data Strategy"
            text="Develop a clear roadmap for data management, analytics, and governance aligned with business goals."
          />
          <InfoCard
            title="AI Integration"
            text="Deploy AI and machine learning models to extract predictive and prescriptive insights."
          />
          <InfoCard
            title="Advanced Analytics"
            text="Leverage data visualization, business intelligence, and big data analytics to uncover trends."
          />
          <InfoCard
            title="Automation"
            text="Automate workflows and decision-making using AI-powered systems for efficiency gains."
          />
        </div>
      </div>

      {/* Key Focus Areas */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Focus Areas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <FocusItem icon={<Database className="w-6 h-6 text-blue-600" />} text="Data Management & Governance" />
          <FocusItem icon={<BarChart3 className="w-6 h-6 text-blue-600" />} text="Business Intelligence & Reporting" />
          <FocusItem icon={<Brain className="w-6 h-6 text-blue-600" />} text="AI & Machine Learning Solutions" />
          <FocusItem icon={<Search className="w-6 h-6 text-blue-600" />} text="Predictive & Prescriptive Analytics" />
          <FocusItem icon={<TrendingUp className="w-6 h-6 text-blue-600" />} text="Data Visualization & Insights" />
          <FocusItem icon={<Settings className="w-6 h-6 text-blue-600" />} text="Automation & Process Optimization" />
        </div>
      </div>

      {/* Methodology */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Our Analytics Methodology</h2>
        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex gap-4 items-start"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex-none w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-lg border border-blue-200">
                {index + 1}
              </div>
              <div>
                <h4 className="text-lg font-semibold">{step.title}</h4>
                <p className="text-base mt-1 text-gray-700">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Benefits of Data & AI Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BenefitItem
            icon={<TrendingUp className="w-6 h-6 text-blue-600" />}
            title="Smarter Decision-Making"
            text="Leverage real-time and predictive insights to make informed strategic and operational decisions."
          />
          <BenefitItem
            icon={<Brain className="w-6 h-6 text-blue-600" />}
            title="Innovation & Growth"
            text="Unlock new opportunities by applying AI-driven analytics to identify trends and future scenarios."
          />
          <BenefitItem
            icon={<BarChart3 className="w-6 h-6 text-blue-600" />}
            title="Operational Efficiency"
            text="Automate processes and optimize performance by turning data into actionable intelligence."
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, text }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-base mt-2 text-gray-700">{text}</p>
    </div>
  );
}

function FocusItem({ icon, text }) {
  return (
    <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-md p-4 shadow-sm">
      {icon}
      <span className="text-base font-medium text-gray-800">{text}</span>
    </div>
  );
}

function BenefitItem({ icon, title, text }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-md flex gap-4 items-start">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h5 className="text-lg font-semibold text-gray-900">{title}</h5>
        <p className="text-base mt-1 text-gray-700">{text}</p>
      </div>
    </div>
  );
}

const steps = [
  {
    title: "Data Discovery & Assessment",
    desc: "Evaluate existing data sources, quality, and opportunities for analytics improvements.",
  },
  {
    title: "Strategy & Roadmap",
    desc: "Develop a structured plan for analytics adoption aligned with business outcomes.",
  },
  {
    title: "Data Integration",
    desc: "Combine data from multiple sources into a centralized, scalable platform.",
  },
  {
    title: "AI & Analytics Modeling",
    desc: "Build machine learning models and advanced analytics solutions tailored to your goals.",
  },
  {
    title: "Visualization & Insights",
    desc: "Create interactive dashboards and reports to present clear, actionable insights.",
  },
  {
    title: "Continuous Optimization",
    desc: "Monitor performance, retrain AI models, and refine strategies for ongoing success.",
  },
];
