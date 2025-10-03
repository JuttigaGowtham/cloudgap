import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for routing
import { CloudLogo } from './Footer';



const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false); // State for dropdown
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNavbar(false); // Scrolling down, hide navbar
      } else {
        setShowNavbar(true); // Scrolling up, show navbar
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Define navigation links
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/technologies', label: 'Technologies' }, 
    { to: '/credentials', label: 'Security' }, 
    { to: '/values', label: 'Values' }, 
    { to: '/contact', label: 'Contact' }, 
  ];

  // Define services for dropdown (matches Services component)
  const serviceLinks = [
    { to: '/digital', label: 'Digital Transformation' },
    { to: '/data', label: 'Data & AI Analytics' },
    { to: '/cybersecurity', label: 'Cybersecurity Services' },
    { to: '/penetration', label: 'Penetration Testing' },
    { to: '/aiframwork', label: 'AI Framework Accreditation' },
    { to: '/security', label: 'Security Compliance' },
    { to: '/risk', label: 'Risk Assessment' },
  ];

  return (
    <nav
      className={`bg-white sticky top-0 z-50 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ willChange: 'transform' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center space-x-2" aria-label="Cloudgap Home">
              <CloudLogo />
              <span className="text-2xl font-bold text-gray-800">
                Cloud<span className="text-blue-500">gap</span>
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out ${
                      isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                    }`
                  }
                  aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                >
                  {link.label}
                </NavLink>
              ))}
              {/* Services Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <button
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out focus:outline-none"
                  aria-expanded={isServicesDropdownOpen}
                  aria-haspopup="true"
                >
                  Services
                </button>
                <div
                  className={`absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10 transition-all duration-200 ${
                    isServicesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                >
                  <div className="py-1">
                    {serviceLinks.map((service) => (
                      <NavLink
                        key={service.to}
                        to={service.to}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-blue-600 ${
                            isActive ? 'text-blue-600 bg-green-50' : ''
                          }`
                        }
                        onClick={() => setIsServicesDropdownOpen(false)} // Close dropdown on click
                        aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                      >
                        {service.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-blue-600 bg-green-50' : 'text-gray-600 hover:bg-green-50 hover:text-blue-600'
                }`
              }
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
          {/* Mobile Services Dropdown */}
          <div className="px-3 py-2">
            <button
              className="w-full text-left text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              aria-expanded={isServicesDropdownOpen}
              aria-haspopup="true"
            >
              Services
            </button>
            <div className={`${isServicesDropdownOpen ? 'block' : 'hidden'} pl-4 space-y-1`}>
              {serviceLinks.map((service) => (
                <NavLink
                  key={service.to}
                  to={service.to}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-sm font-medium ${
                      isActive ? 'text-blue-600 bg-green-50' : 'text-gray-600 hover:bg-green-50 hover:text-blue-600'
                    }`
                  }
                  onClick={() => {
                    setIsMobileMenuOpen(false); // Close mobile menu
                    setIsServicesDropdownOpen(false); // Close dropdown
                  }}
                  aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                >
                  {service.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;