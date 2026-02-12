
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="fixed w-full z-50 bg-white shadow-sm py-3">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-3xl font-black text-blue-900 leading-none">M</span>
            <span className="text-3xl font-black text-md-red leading-none">D</span>
            <div className="ml-2 border-l-2 border-gray-200 pl-2 leading-tight">
              <div className="text-[10px] font-bold text-blue-900 uppercase tracking-tighter">Security</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Services</div>
            </div>
          </div>
        </div>

        {/* Status Badges Section - Balanced and Centered */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-4">
          <a
            href="https://www.mi5.gov.uk/threats-and-advice/terrorism-threat-levels"
            target="_blank"
            rel="noopener noreferrer"
            className="badge-red flex items-center gap-2 hover:bg-red-700 transition !text-[10px] py-1 px-3"
          >
            <span>UK Threat Level-MI5</span>
          </a>
          <a href="#contact" className="badge-dark hover:bg-black transition !text-[10px] py-1 px-3">
            We are Hiring!
          </a>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-bold text-gray-500 uppercase tracking-widest text-[12px]">
          <a href="#about" className="hover:text-md-red transition">About</a>
          <a href="#services" className="hover:text-md-red transition">Services</a>
          <a href="#why-us" className="hover:text-md-red transition">Why Us</a>
          <a href="#team" className="hover:text-md-red transition">Team</a>
          <a href="#contact" className="hover:text-md-red transition">Contact</a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-600 text-xl">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
