import React from "react";
import { useNavigate } from "react-router-dom"; // <-- import
import digitalImg from "../../assets/digital.jpg"; 
import dataImg from "../../assets/data.jpg";
import cyberImg from "../../assets/cyber.jpg";
import testingImg from "../../assets/testing.jpg";
import aiImg from "../../assets/ai.jpg";
import securityImg from "../../assets/security.jpg";
import riskImg from "../../assets/risk.jpg";

const Services = () => {
  const navigate = useNavigate(); // <-- hook for navigation

  const services = [
    {
      title: "Digital Transformation",
      image: digitalImg, 
      overlayImage: digitalImg,
      route: "/digital", // <-- add route here
    },
    {
      title: "Data & AI Analytics",
      image: dataImg,
      overlayImage: dataImg,
      route: "/data", // <-- add route here
    },
    {
      title: "Cybersecurity Services",
      image: cyberImg,
      overlayImage: cyberImg,
      route: "/cybersecurity", // <-- add route here
    },
    {
      title: "Penetration Testing",
      image: testingImg,
      overlayImage: testingImg,
      route: "/penetration", // <-- add route here
    },
    {
      title: "AI Framework Accreditation",
      image: aiImg,
      overlayImage: aiImg,
      route: "/aiframwork", // <-- add route here
    },
    {
      title: "Security Compliance",
      image: securityImg,
      overlayImage: securityImg,
      route: "/security", // <-- add route here
    },
    {
      title: "Risk Assessment",
      image: riskImg,
      overlayImage: riskImg,
      route: "/risk", 
    },
  ];

  return (
    <div className="bg-white min-h-screen w-full flex items-center justify-center font-sans">
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 w-full">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight">
              Our Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 font-light">
              Specialized solutions to transform and secure your business.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-3xl p-6 flex flex-col h-[360px] transition-all duration-300 hover:bg-gray-100 cursor-pointer"
                onClick={() => service.route && navigate(service.route)} // <-- navigate on click
              >
                {/* Image Container */}
                <div className="relative flex-grow flex items-center justify-center mb-4">
                  <img
                    src={service.image}
                    alt={`${service.title} showcase`}
                    className="absolute w-60 h-auto rounded-lg shadow-md transform -rotate-6 transition-all duration-400 ease-in-out group-hover:rotate-[-10deg] group-hover:scale-110"
                  />
                  <img
                    src={service.overlayImage}
                    alt={`${service.title} example`}
                    className="absolute w-60 h-auto rounded-lg shadow-lg transform rotate-3 transition-all duration-400 ease-in-out group-hover:rotate-[5deg] group-hover:scale-110"
                  />
                </div>

                {/* Service Title */}
                <h3 className="text-left text-lg font-medium text-gray-800 mt-auto">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
