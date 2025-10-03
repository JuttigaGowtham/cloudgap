import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, ClipboardCheck, Activity, Target } from "lucide-react";

export default function Risk() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 bg-white text-gray-900">
      {/* Title */}
      <div className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold">Risk Assessment Services</h1>
        <div className="mt-4 bg-gray-50 border border-gray-200 rounded-md p-5 max-w-3xl">
          <p className="text-lg">
            Identify, analyze, and prioritize security risks with our comprehensive risk assessment
            methodology. Our structured approach helps organizations understand their security
            posture and make informed decisions about risk mitigation.
          </p>
        </div>
      </div>

      {/* Understanding Your Security Risks */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Understanding Your Security Risks</h2>
        <p className="text-base max-w-4xl mb-6">
          In today’s complex threat landscape, organizations face a wide range of security risks that
          can impact their operations, reputation, and bottom line. Our Risk Assessment Services
          provide a systematic approach to identifying, analyzing, and evaluating these risks,
          enabling you to make informed decisions about risk treatment and resource allocation.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-4">Key Risk Areas We Assess:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-base">
            <RiskArea text="Network and infrastructure security" />
            <RiskArea text="Application and data security" />
            <RiskArea text="Cloud security risks" />
            <RiskArea text="Third party and supply chain risks" />
            <RiskArea text="Physical and environmental security" />
            <RiskArea text="Human factors and insider threats" />
            <RiskArea text="Business continuity and disaster recovery" />
            <RiskArea text="Compliance and regulatory risks" />
          </div>
        </div>
      </div>

      {/* Risk Assessment Methodology */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Our Risk Assessment Methodology</h2>
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

      {/* Types of Risk Assessments */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Types of Risk Assessments We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <TypeCard
            title="Comprehensive Security Risk Assessment"
            text="A holistic evaluation of your organization’s security posture across all domains, providing a complete view of your risk landscape."
          />
          <TypeCard
            title="Cloud Security Risk Assessment"
            text="Specialized assessment focusing on risks specific to your cloud environments, including Google Cloud and other providers, covering configuration, access controls, and data protection."
          />
          <TypeCard
            title="Application Security Risk Assessment"
            text="Targeted evaluation of security risks in your applications, addressing coding flaws, design vulnerabilities, and integration issues."
          />
          <TypeCard
            title="Vendor and Third-Party Risk Assessment"
            text="Assessment of security risks posed by vendors, suppliers, and other third parties that have access to your systems or data."
          />
        </div>
      </div>

      {/* Benefits */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Benefits of Our Risk Assessment Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BenefitItem
            icon={<ClipboardCheck className="w-6 h-6 text-blue-600" />}
            title="Informed Decision Making"
            text="Make strategic security investments based on a clear understanding of your most significant risks."
          />
          <BenefitItem
            icon={<Activity className="w-6 h-6 text-blue-600" />}
            title="Proactive Risk Management"
            text="Address security vulnerabilities before they can be exploited, reducing the likelihood and impact of incidents."
          />
          <BenefitItem
            icon={<Target className="w-6 h-6 text-blue-600" />}
            title="Optimized Security"
            text="Allocate security resources effectively, focusing on the areas with the highest priority risks."
          />
        </div>
      </div>
    </section>
  );
}

function RiskArea({ text }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
      <span className="text-gray-800">{text}</span>
    </div>
  );
}

function TypeCard({ title, text }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm">
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-base mt-2 text-gray-700">{text}</p>
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
    title: "Risk Identification",
    desc: "We systematically identify potential threats, vulnerabilities, and security risks across your organization through interviews, documentation review, technical scanning, and threat intelligence analysis.",
  },
  {
    title: "Risk Analysis",
    desc: "We evaluate identified risks based on their likelihood and potential impact, considering factors such as business criticality, data sensitivity, and existing controls.",
  },
  {
    title: "Risk Evaluation",
    desc: "We prioritize risks based on their severity and alignment with your organization’s risk tolerance and business objectives, creating a clear picture of your most significant security concerns.",
  },
  {
    title: "Risk Treatment Planning",
    desc: "We develop tailored risk treatment strategies, including risk mitigation, transfer, acceptance, or avoidance, with specific recommendations for security controls and improvements.",
  },
  {
    title: "Monitoring and Review",
    desc: "We establish processes for ongoing risk monitoring and periodic reassessment to ensure your security posture remains effective as threats, technologies, and business needs evolve.",
  },
];
