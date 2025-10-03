import React from 'react';

// --- Icon Components ---

// ISO 27001 Icon - Represents standards and security
const IsoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600 mb-6 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.016h-.008v-.016z" />
    </svg>
);

// CISSP Icon - Represents systems security
const CisspIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600 mb-6 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
);

// CEH Icon - Represents ethical hacking/code
const CehIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600 mb-6 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
);

// CISM Icon - Represents security management
const CismIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600 mb-6 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 012-2h4a2 2 0 012 2v1m-4 0h4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.5c-2.053 0-4.01.69-5.467 2.002a7.454 7.454 0 0010.934 0C16.01 16.19 14.053 15.5 12 15.5z" />
    </svg>
);


// Credential Card Component
const CredentialCard = ({ icon, title, description }) => (
  <div className="group bg-gray-50/50 hover:bg-white transition-all duration-300 ease-in-out rounded-xl shadow-sm hover:shadow-lg p-8 flex flex-col items-center justify-center text-center border border-gray-100/50">
    {icon}
    <h3 className="font-bold text-xl text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-500 text-base">{description}</p>
  </div>
);

// Main Credentials Component
const Credentials = () => {
  const credentialsData = [
    {
      title: 'ISO 27001',
      description: 'Information Security Management',
      icon: <IsoIcon />,
    },
    {
      title: 'CISSP',
      description: 'Certified Information Systems Security Professional',
      icon: <CisspIcon />,
    },
    {
      title: 'CEH',
      description: 'Certified Ethical Hacker',
      icon: <CehIcon />,
    },
    {
      title: 'CISM',
      description: 'Certified Information Security Manager',
      icon: <CismIcon />,
    },
  ];

  return (
    <div className="bg-white font-sans">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Security Credentials
          </h1>
          <p className="text-lg text-gray-600">
            Our expertise is backed by industry-recognized certifications and partnerships
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {credentialsData.map((credential, index) => (
            <CredentialCard
              key={index}
              icon={credential.icon}
              title={credential.title}
              description={credential.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Credentials;


