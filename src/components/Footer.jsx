import React from "react";

// A more stylized cloud logo with a gradient for a premium feel
export const CloudLogo = () => (
    <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#0066E6', stopOpacity: 1}} />
            </linearGradient>
        </defs>
        <path d="M47.16 16.52C46.16 9.92 40.52 4.6 33.32 4.6c-4.8 0-9.04 2.6-11.44 6.52C16.88 10.72 12 14.8 12 20.2c0 5.48 4.44 9.96 9.92 9.96h24.84c4.56 0 8.24-3.72 8.24-8.28 0-4.52-3.64-8.2-8.16-8.36z" fill="url(#logoGradient)"/>
    </svg>
);

// The main Footer component with a new, enhanced premium UI
function Footer() {
    return (
        <div className="relative">
            {/* Curved Top Shape Divider */}
            <div className="absolute top-0 w-full h-24 sm:h-32 md:h-40 lg:h-48" style={{ transform: 'translateY(-100%)' }}>
                <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path fill="#0d1117" d="M0,224L80,218.7C160,213,320,203,480,186.7C640,171,800,149,960,160C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </div>
            
            <footer className="w-full bg-[#0d1117] text-white pt-32 pb-12 px-4 md:px-16 relative overflow-hidden">
                 {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="p" width="100" height="100" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M50 0V100M0 50H100" stroke="white" strokeWidth="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#p)"/></svg>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10">

                    {/* Column 1: Brand, Contact, & Social */}
                    <div className="lg:col-span-1 flex flex-col gap-8">
                         <div className="flex items-center gap-3">
                            <CloudLogo />
                            <span className="text-4xl font-extrabold tracking-tight">Cloud<span className="text-blue-500">gap</span></span>
                        </div>
                        <p className="text-gray-400">Pioneering the future of cloud solutions with innovation and excellence.</p>
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                <span className="text-gray-300 hover:text-white transition-colors">hello@cloudgap.ai</span>
                            </div>
                             <div className="flex items-center gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                <span className="text-gray-300">+44 20 1234 5678</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 mt-4">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transform transition-transform duration-300 hover:scale-125"><svg width="24" height="24" fill="currentColor" className="text-gray-400 hover:text-blue-500 transition-colors duration-300" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="transform transition-transform duration-300 hover:scale-125"><svg width="28" height="28" fill="currentColor" className="text-gray-400 hover:text-sky-400 transition-colors duration-300" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.514 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z"/></svg></a>
                        </div>
                    </div>
                    
                    {/* Columns 2 & 3: Links, Legal, and Newsletter */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-12">
                         <div>
                            <h3 className="text-xl font-semibold mb-6 text-gray-200">Quick Links</h3>
                            <ul className="space-y-4 text-base text-gray-400">
                                {['Home', 'About', 'Services', 'Experience', 'Contact'].map((item) => (
                                     <li key={item}><a href={`#${item.toLowerCase().replace(' ', '')}`} className="hover:text-white transition-all duration-300 hover:underline hover:pl-2 block">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                         <div>
                            <h3 className="text-xl font-semibold mb-6 text-gray-200">Legal</h3>
                            <ul className="space-y-4 text-base text-gray-400">
                                 {['Privacy Policy', 'Cookie Policy', 'Terms & Conditions'].map((item) => (
                                     <li key={item}><a href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-white transition-all duration-300 hover:underline hover:pl-2 block">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                         <div className="sm:col-span-1">
                            <h3 className="text-xl font-semibold mb-6 text-gray-200">Join Our Newsletter</h3>
                            <p className="text-gray-400 mb-4 text-sm">Get the latest updates on cloud technology and innovation.</p>
                            <form className="flex">
                                <input type="email" placeholder="Your email" className="w-full px-4 py-2 text-white bg-gray-800 border border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-r-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="mt-20 border-t border-gray-700/50 pt-8 text-center text-sm text-gray-500 relative z-10">
                    &copy; {new Date().getFullYear()} Cloudgap. All rights reserved. Built with passion.
                </div>
            </footer>
        </div>
    );
}


// Main App component to render the footer
export default function App() {
    return (
        <div className="bg-gray-100 font-sans antialiased">
           
            {/* Page content of varying length to demonstrate the footer's placement */}
            <div className="h-64 bg-gray-100"></div>
            <Footer />
        </div>
    );
}

