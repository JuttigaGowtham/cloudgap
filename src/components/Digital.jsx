import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Cloud, Users, Settings, Shield } from "lucide-react";

export default function Digital() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 bg-white text-gray-900">
      {/* Title */}
      <div className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold">Digital Transformation Services</h1>
        <div className="mt-4 bg-gray-50 border border-gray-200 rounded-md p-5 max-w-3xl">
          <p className="text-lg">
            Empower your business to thrive in the digital era with our comprehensive digital
            transformation services. We help organizations modernize processes, embrace emerging
            technologies, and drive innovation for long-term success.
          </p>
        </div>
      </div>

      {/* Our Approach */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Digital Transformation Approach</h2>
        <p className="text-base max-w-4xl mb-6">
          We take a holistic approach to digital transformation, aligning technology, people, and
          processes to create measurable business impact. From strategy development to technology
          adoption, we help you build an agile, future-ready organization.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <InfoCard
            title="Strategy & Roadmap"
            text="Define a clear vision, digital strategy, and roadmap tailored to your business objectives."
          />
          <InfoCard
            title="Technology Enablement"
            text="Adopt modern tools like cloud computing, AI, and automation to improve efficiency."
          />
          <InfoCard
            title="Process Optimization"
            text="Re-engineer workflows and processes for speed, scalability, and cost savings."
          />
          <InfoCard
            title="Change Management"
            text="Drive adoption with training, leadership alignment, and cultural transformation."
          />
        </div>
      </div>

      {/* Key Focus Areas */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Focus Areas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <FocusItem icon={<Cloud className="w-6 h-6 text-blue-600" />} text="Cloud Migration & Modernization" />
          <FocusItem icon={<Users className="w-6 h-6 text-blue-600" />} text="Customer Experience Enhancement" />
          <FocusItem icon={<Settings className="w-6 h-6 text-blue-600" />} text="Business Process Automation" />
          <FocusItem icon={<TrendingUp className="w-6 h-6 text-blue-600" />} text="Data Analytics & Insights" />
          <FocusItem icon={<Shield className="w-6 h-6 text-blue-600" />} text="Cybersecurity & Compliance" />
          <FocusItem icon={<Users className="w-6 h-6 text-blue-600" />} text="Workforce Empowerment & Collaboration" />
        </div>
      </div>

      {/* Transformation Methodology */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Our Transformation Methodology</h2>
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
        <h2 className="text-2xl font-semibold mb-4">Benefits of Digital Transformation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BenefitItem
            icon={<TrendingUp className="w-6 h-6 text-blue-600" />}
            title="Increased Efficiency"
            text="Automate processes, reduce manual workloads, and optimize operations."
          />
          <BenefitItem
            icon={<Users className="w-6 h-6 text-blue-600" />}
            title="Enhanced Customer Experience"
            text="Deliver personalized, seamless, and engaging customer interactions."
          />
          <BenefitItem
            icon={<Cloud className="w-6 h-6 text-blue-600" />}
            title="Agility & Innovation"
            text="Adopt emerging technologies quickly to stay competitive and drive growth."
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
    title: "Discovery & Assessment",
    desc: "Understand your current processes, technology stack, and business goals.",
  },
  {
    title: "Strategy Development",
    desc: "Define your digital transformation roadmap aligned with business objectives.",
  },
  {
    title: "Technology Implementation",
    desc: "Adopt and integrate modern technologies like cloud, AI, and automation.",
  },
  {
    title: "Process Redesign",
    desc: "Optimize workflows and operations for speed, scalability, and resilience.",
  },
  {
    title: "Change Enablement",
    desc: "Ensure adoption with training, leadership engagement, and cultural alignment.",
  },
  {
    title: "Continuous Improvement",
    desc: "Track progress, measure results, and adapt strategy as business needs evolve.",
  },
];
