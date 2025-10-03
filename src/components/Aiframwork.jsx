import React from "react";
import { motion } from "framer-motion";

export default function Aiframework() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 bg-white text-gray-900">
      {/* Title */}
      <div className="mb-8">
        <h1 className="text-5xl sm:text-6xl font-bold">AI Framework Accreditation</h1>
        <div className="mt-4 bg-gray-50 border border-gray-200 rounded-md p-5 max-w-3xl">
          <p className="text-xl">
            Ensure your AI systems are secure, ethical, and compliant with our specialized AI framework
            accreditation services. We help organizations implement robust security controls for their
            artificial intelligence implementations.
          </p>
        </div>
      </div>

      {/* AI Security Challenge */}
      <div className="mb-10">
        <h2 className="text-3xl font-semibold mb-3">The AI Security Challenge</h2>
        <p className="text-lg max-w-4xl mb-6">
          As organizations increasingly adopt artificial intelligence and machine learning technologies, new security
          challenges emerge. AI systems can introduce unique vulnerabilities that traditional security approaches may
          not address. Our AI Framework Accreditation service helps organizations identify and mitigate these risks
          while ensuring compliance with emerging regulations and standards.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-lg">
          <ChallengeItem text="Data poisoning attacks" />
          <ChallengeItem text="Model inversion attacks" />
          <ChallengeItem text="Adversarial examples" />
          <ChallengeItem text="Privacy leakage" />
          <ChallengeItem text="Bias and fairness issues" />
          <ChallengeItem text="Supply chain vulnerabilities" />
        </div>
      </div>

      {/* Accreditation Process */}
      <div className="mb-10">
        <h2 className="text-3xl font-semibold mb-6">Our AI Framework Accreditation Process</h2>
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
              <div className="flex-none w-12 h-12 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xl border border-blue-200">
                {index + 1}
              </div>
              <div>
                <h4 className="text-xl font-semibold">{step.title}</h4>
                <p className="text-lg mt-1 text-gray-700">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Standards */}
      <div className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">Standards and Frameworks We Support</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
          <StandardItem title="NIST AI Risk Management Framework" desc="We align with NIST’s comprehensive approach to managing risks in AI systems throughout their lifecycle." />
          <StandardItem title="EU AI Act" desc="We help organizations prepare for compliance with the European Union’s AI regulatory framework." />
          <StandardItem title="ISO/IEC 42001" desc="We support implementation of the emerging international standard for AI management systems." />
          <StandardItem title="Google’s Responsible AI Practices" desc="As a Google Cloud Partner, we help implement Google’s framework for responsible AI development." />
        </div>
      </div>

      {/* Benefits */}
      <div>
        <h2 className="text-3xl font-semibold mb-4">Benefits of AI Framework Accreditation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
          <BenefitItem
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M12 2l9 4v6c0 5-3 9-9 11-6-2-9-6-9-11V6l9-4z" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
            title="Enhanced Security"
            text="Protect your AI systems from advanced attacks and ensure resilience against evolving threats."
          />
          <BenefitItem
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5v14" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
            title="Regulatory Compliance"
            text="Stay ahead of evolving AI regulations and maintain compliance with industry standards."
          />
          <BenefitItem
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
            title="Risk Mitigation"
            text="Reduce financial, operational, and reputational risks associated with AI system failures."
          />
        </div>
      </div>
    </section>
  );
}

function ChallengeItem({ text }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-md px-4 py-2 text-red-700 font-medium">
      {text}
    </div>
  );
}

function StandardItem({ title, desc }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="text-lg mt-2 text-gray-700">{desc}</p>
    </div>
  );
}

function BenefitItem({ title, text, icon }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col items-start gap-3">
      <div className="w-12 h-12 flex items-center justify-center bg-green-50 border border-green-200 rounded-full">
        {icon}
      </div>
      <h5 className="text-xl font-bold text-green-700">{title}</h5>
      <p className="text-lg text-gray-700">{text}</p>
    </div>
  );
}

const steps = [
  {
    title: "Assessment",
    desc: "We conduct a comprehensive assessment of your AI systems, including data sources, model architecture, deployment infrastructure, and governance processes.",
  },
  {
    title: "Gap Analysis",
    desc: "We identify gaps between your current AI security practices and industry standards, regulatory requirements, and best practices.",
  },
  {
    title: "Security Testing",
    desc: "We perform specialized security testing of your AI models, including adversarial testing, robustness evaluation, and privacy analysis.",
  },
  {
    title: "Remediation Planning",
    desc: "We develop a detailed remediation plan with prioritized recommendations to address identified security gaps and vulnerabilities.",
  },
  {
    title: "Accreditation",
    desc: "Upon successful implementation of security controls and verification of compliance, we provide formal accreditation of your AI framework.",
  },
];

