import React from "react";
import { ShieldCheck, ClipboardList, CheckCircle, Users } from "lucide-react";

export default function Security() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 bg-white text-gray-900">
      {/* Title */}
      <div className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold">Security Compliance Services</h1>
        <div className="mt-4 bg-gray-50 border border-gray-200 rounded-md p-5 max-w-3xl">
          <p className="text-lg">
            Meet regulatory requirements and industry standards with our comprehensive security
            compliance assessment and management services. We help organizations navigate complex
            compliance landscapes and implement effective controls.
          </p>
        </div>
      </div>

      {/* Navigating Complex Compliance Requirements */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Navigating Complex Compliance Requirements
        </h2>
        <p className="text-base max-w-4xl mb-6">
          In today’s regulatory environment, organizations face increasingly complex compliance
          requirements related to data protection, privacy, and security. Our Security Compliance
          Services help you understand which regulations apply to your business, assess your
          current compliance posture, and implement the necessary controls to achieve and maintain
          compliance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-base">
          <ComplianceCard
            title="Compliance Assessment"
            text="Comprehensive evaluation of your current security controls against regulatory and industry standards."
          />
          <ComplianceCard
            title="Gap Analysis"
            text="Identify gaps between your current security posture and compliance requirements, with prioritized remediation recommendations."
          />
          <ComplianceCard
            title="Ongoing Compliance Management"
            text="Continuous monitoring and management of your compliance framework to ensure adherence to evolving requirements."
          />
        </div>
      </div>

      {/* Compliance Frameworks */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Compliance Frameworks We Support</h2>
        <div className="space-y-4">
          <FrameworkItem
            title="GDPR (General Data Protection Regulation)"
            desc="We help organizations implement the technical and organizational measures required to protect personal data and demonstrate compliance with the EU’s data protection regulation."
          />
          <FrameworkItem
            title="ISO 27001"
            desc="We support organizations in implementing and maintaining an Information Security Management System (ISMS) that meets the requirements of the ISO 27001 standard."
          />
          <FrameworkItem
            title="SOC 2"
            desc="We assist organizations in preparing for SOC 2 audits by implementing controls related to security, availability, processing integrity, confidentiality, and privacy."
          />
          <FrameworkItem
            title="Cloud Security Compliance"
            desc="As a Google Cloud Partner, we specialize in helping organizations meet security and compliance requirements specific to cloud environments, including Google Cloud’s security best practices."
          />
        </div>
      </div>

      {/* Compliance Methodology */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Compliance Methodology</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-blue-500 rounded-md bg-white text-left">
            <thead className="bg-blue-500">
              <tr>
                {["Assess", "Plan", "Implement", "Validate", "Monitor"].map((step) => (
                  <th
                    key={step}
                    className="px-4 py-3 border-b text-base font-semibold text-gray-900"
                  >
                    {step}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="text-sm text-gray-700">
                <td className="px-4 py-3 border-b">
                  Evaluate your current security controls and compliance posture against applicable requirements.
                </td>
                <td className="px-4 py-3 border-b">
                  Develop a detailed compliance roadmap with prioritized remediation activities.
                </td>
                <td className="px-4 py-3 border-b">
                  Deploy necessary security controls, tools, and processes to address compliance gaps.
                </td>
                <td className="px-4 py-3 border-b">
                  Verify the effectiveness of implemented controls through testing and documentation.
                </td>
                <td className="px-4 py-3 border-b">
                  Continuously monitor compliance status and adapt to changing requirements and business needs.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Benefits */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Benefits of Our Security Compliance Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
          <BenefitItem
            icon={<ShieldCheck className="w-6 h-6 text-blue-600" />}
            title="Reduced Compliance Risk"
            text="Minimize the risk of non-compliance penalties, fines, and reputational damage."
          />
          <BenefitItem
            icon={<ClipboardList className="w-6 h-6 text-blue-600" />}
            title="Streamlined Compliance Processes"
            text="Optimize your compliance efforts with efficient, integrated processes and controls."
          />
          <BenefitItem
            icon={<Users className="w-6 h-6 text-blue-600" />}
            title="Enhanced Customer Trust"
            text="Demonstrate your commitment to security and privacy to build customer confidence."
          />
          <BenefitItem
            icon={<CheckCircle className="w-6 h-6 text-blue-600" />}
            title="Competitive Advantage"
            text="Gain a competitive edge by meeting security and compliance requirements that others may struggle with."
          />
        </div>
      </div>
    </section>
  );
}

function ComplianceCard({ title, text }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 shadow-sm">
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-base mt-2 text-gray-700">{text}</p>
    </div>
  );
}

function FrameworkItem({ title, desc }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-base mt-2 text-gray-700">{desc}</p>
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
