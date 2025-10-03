
import React, { useState, useEffect, useRef } from 'react';
import { CloudLogo } from './Footer';

// Navbar Component
const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
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

    return (
    <nav
        className={`bg-white sticky top-0 z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
        style={{ willChange: 'transform' }}
    >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center space-x-2" aria-label="Cloudgap Home">
                            <CloudLogo />
                            <span className="text-2xl font-bold text-gray-800">Cloud<span className="text-blue-500">gap</span></span>
                        </a>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-6">
                            <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out">Home</a>
                            <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out">About</a>
                            <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out">Services</a>
                            <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out">AI Solutions</a>
                            <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out">Projects</a>
                            <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out">Blogs</a>
                            <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out">Technologies</a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={toggleMobileMenu} type="button" className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-blues-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" aria-controls="mobile-menu" aria-expanded={isMobileMenuOpen}>
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger Icon */}
                            <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* Close Icon */}
                            <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu, show/hide based on menu state. */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="#" className="text-gray-600 hover:bg-green-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
                    <a href="#" className="text-gray-600 hover:bg-green-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">About</a>
                    <a href="#" className="text-gray-600 hover:bg-green-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Services</a>
                    <a href="#" className="text-gray-600 hover:bg-green-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">AI Solutions</a>
                    <a href="#" className="text-gray-600 hover:bg-green-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Projects</a>
                    <a href="#" className="text-gray-600 hover:bg-green-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Blogs</a>
                    <a href="#" className="text-gray-600 hover:bg-green-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Technologies</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
