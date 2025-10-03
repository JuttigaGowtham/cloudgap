import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Cloud, AlertTriangle, Settings, CheckCircle } from "lucide-react";

export default function Cybersecurity() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 bg-white text-gray-900">
      {/* Title */}
      <div className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold">Cybersecurity Services</h1>
        <div className="mt-4 bg-gray-50 border border-gray-200 rounded-md p-5 max-w-3xl">
          <p className="text-lg">
            Protect your digital assets with our comprehensive Cybersecurity services. 
            We help organizations detect, prevent, and respond to evolving cyber threats 
            while ensuring compliance and business continuity.
          </p>
        </div>
      </div>

      {/* Cybersecurity Challenges */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Cybersecurity Challenge</h2>
        <p className="text-base max-w-4xl mb-6">
          Organizations face increasing risks from ransomware, phishing attacks, insider 
          threats, and advanced persistent threats. Traditional defenses are often not enough 
          against today’s sophisticated adversaries. Our Cybersecurity services provide 
          multi-layered protection to keep your business safe.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ChallengeItem text="Ransomware & Malware" />
          <ChallengeItem text="Phishing & Social Engineering" />
          <ChallengeItem text="Cloud Security Gaps" />
          <ChallengeItem text="Insider Threats" />
          <ChallengeItem text="Zero-Day Exploits" />
          <ChallengeItem text="Regulatory Non-Compliance" />
        </div>
      </div>

      {/* Service Offerings */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Cybersecurity Service Offerings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ServiceCard
            icon={<Shield className="w-6 h-6 text-blue-600" />}
            title="Threat Protection"
            text="Advanced defense against ransomware, phishing, and other cyberattacks."
          />
          <ServiceCard
            icon={<Cloud className="w-6 h-6 text-blue-600" />}
            title="Cloud Security"
            text="Safeguard cloud infrastructure with robust security frameworks and controls."
          />
          <ServiceCard
            icon={<Lock className="w-6 h-6 text-blue-600" />}
            title="Identity & Access Management"
            text="Secure user access and protect sensitive data with IAM solutions."
          />
          <ServiceCard
            icon={<AlertTriangle className="w-6 h-6 text-blue-600" />}
            title="Incident Response"
            text="Rapid detection, response, and recovery from security incidents."
          />
          <ServiceCard
            icon={<Settings className="w-6 h-6 text-blue-600" />}
            title="Vulnerability Management"
            text="Identify and remediate vulnerabilities before attackers exploit them."
          />
          <ServiceCard
            icon={<CheckCircle className="w-6 h-6 text-blue-600" />}
            title="Compliance Readiness"
            text="Stay compliant with industry regulations like GDPR, ISO, and SOC2."
          />
        </div>
      </div>

      {/* Methodology */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Our Cybersecurity Methodology</h2>
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
        <h2 className="text-2xl font-semibold mb-4">Benefits of Our Cybersecurity Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BenefitItem
            icon={<Shield className="w-6 h-6 text-blue-600" />}
            title="Stronger Protection"
            text="Defend against a wide range of cyber threats with multi-layered security."
          />
          <BenefitItem
            icon={<TrendingSecurityIcon />}
            title="Reduced Risk"
            text="Proactively identify vulnerabilities and mitigate risks before exploitation."
          />
          <BenefitItem
            icon={<CheckCircle className="w-6 h-6 text-blue-600" />}
            title="Business Continuity"
            text="Minimize downtime and protect critical operations from cyber incidents."
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

function ServiceCard({ icon, title, text }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm flex flex-col gap-2">
      <div>{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-base text-gray-700">{text}</p>
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

// Dummy trending shield icon since lucide-react doesn't have one directly
function TrendingSecurityIcon() {
  return <Shield className="w-6 h-6 text-blue-600" />;
}

const steps = [
  {
    title: "Assessment",
    desc: "We assess your current cybersecurity posture, assets, and vulnerabilities.",
  },
  {
    title: "Gap Analysis",
    desc: "Identify gaps between your existing controls and industry best practices.",
  },
  {
    title: "Security Strategy",
    desc: "Develop a tailored cybersecurity roadmap aligned with business goals.",
  },
  {
    title: "Implementation",
    desc: "Deploy security solutions, policies, and awareness programs effectively.",
  },
  {
    title: "Monitoring & Response",
    desc: "Continuously monitor systems and respond quickly to emerging threats.",
  },
  {
    title: "Compliance & Reporting",
    desc: "Ensure ongoing compliance and provide detailed security reports.",
  },
];
