import React from "react";

export default function Penetration() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 bg-white text-gray-900">
      {/* Title */}
      <div className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-semibold">Penetration Testing Services</h1>
        <div className="mt-4 bg-gray-50 border border-gray-200 rounded-md p-5 max-w-3xl">
          <p className="text-lg">
            Identify vulnerabilities before they can be exploited with our comprehensive penetration testing
            services. Our expert security team simulates real-world attacks to test your defenses and provide
            actionable remediation strategies.
          </p>
        </div>
      </div>

      {/* Approach */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Our Penetration Testing Approach</h2>
        <p className="text-base max-w-3xl mb-6">
          At CloudGap, we employ a methodical approach to penetration testing that goes beyond automated
          scanning. Our certified ethical hackers use a combination of industry-standard tools, custom scripts,
          and manual techniques to identify vulnerabilities that automated tools might miss.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard
            title="Reconnaissance"
            text="We gather information about your systems, networks, and applications to identify potential entry points and attack vectors."
          />

          <InfoCard
            title="Scanning"
            text="We use advanced tools to scan for vulnerabilities, misconfigurations, and security weaknesses in your infrastructure."
          />

          <InfoCard
            title="Exploitation"
            text="We attempt to exploit identified vulnerabilities to determine their real-world impact and risk level."
          />

          <InfoCard
            title="Analysis & Reporting"
            text="We provide detailed reports with findings, risk assessments, and actionable remediation recommendations."
          />
        </div>
      </div>

      {/* Types Offered */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Types of Penetration Testing We Offer</h2>

        <div className="space-y-5">
          <ServiceItem
            title="Network Infrastructure Testing"
            desc="Comprehensive assessment of your network infrastructure including firewalls, routers, switches, and other network devices to identify security gaps and misconfigurations."
          />

          <ServiceItem
            title="Web Application Security Assessment"
            desc="Thorough testing of your web applications for vulnerabilities like SQL injection, cross-site scripting (XSS), broken authentication, and other OWASP Top 10 risks."
          />

          <ServiceItem
            title="Cloud Environment Security Testing"
            desc="Specialized assessment of your cloud infrastructure (Google Cloud, AWS, Azure) to identify misconfigurations, insecure APIs, and access control issues."
          />

          <ServiceItem
            title="Social Engineering Simulations"
            desc="Controlled simulations of phishing attacks, pretexting, and other social engineering techniques to test your organization's human security awareness."
          />
        </div>
      </div>

      {/* Benefits */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Benefits of Our Penetration Testing Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <BenefitItem
            title="Identify Vulnerabilities Early"
            text="Detect and address security weaknesses before they can be exploited by malicious actors."
          />

          <BenefitItem
            title="Prioritize Security Investments"
            text="Focus your security resources on addressing the most critical vulnerabilities first."
          />

          <BenefitItem
            title="Meet Compliance Requirements"
            text="Satisfy regulatory and industry compliance requirements for security testing."
          />

          <BenefitItem
            title="Enhance Security Posture"
            text="Improve your overall security posture with actionable recommendations from our security experts."
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, text }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex-none w-10 h-10 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-600">
            <path d="M12 2v20" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 8h14" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <h3 className="text-base font-semibold">{title}</h3>
          <p className="text-base mt-2">{text}</p>
        </div>
      </div>
    </div>
  );
}

function ServiceItem({ title, desc }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 flex gap-4 items-start">
      <div className="flex-none mt-1">
        <div className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 2l3 7h7l-5.5 4 2 7L12 17l-6.5 3 2-7L2 9h7l3-7z" stroke="#475569" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div>
        <h4 className="text-base font-medium">{title}</h4>
        <p className="text-base mt-1">{desc}</p>
      </div>
    </div>
  );
}

function BenefitItem({ title, text }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 flex gap-3 items-start">
      <div className="flex-none mt-1">
        <div className="w-8 h-8 rounded-full bg-green-50 border border-green-100 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17l-5-5" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div>
        <h5 className="text-base font-semibold">{title}</h5>
        <p className="text-base mt-1">{text}</p>
      </div>
    </div>
  );
}
