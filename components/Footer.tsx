import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <span className="text-3xl font-black text-white leading-none">M</span>
                <span className="text-3xl font-black text-md-red leading-none">D</span>
                <div className="ml-2 border-l-2 border-white/20 pl-2 leading-tight">
                  <div className="text-[10px] font-bold text-white uppercase tracking-tighter">Security</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Services</div>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-[12px] leading-relaxed">
              Leading the way in professional guarding solutions. We provide elite security services tailored to protect your assets, people, and peace of mind.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-md-red transition-all duration-300">
                <i className="fa-brands fa-facebook-f text-sm"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-md-red transition-all duration-300">
                <i className="fa-brands fa-x-twitter text-sm"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-md-red transition-all duration-300">
                <i className="fa-brands fa-instagram text-sm"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-md-red transition-all duration-300">
                <i className="fa-brands fa-linkedin-in text-sm"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[15px] font-bold mb-8 relative inline-block uppercase tracking-wider">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-md-red"></span>
            </h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors text-[12px] flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-md-red opacity-0 group-hover:opacity-100 transition-opacity"></span> About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors text-[12px] flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-md-red opacity-0 group-hover:opacity-100 transition-opacity"></span> Our Services</a></li>
              <li><a href="#why-us" className="text-gray-400 hover:text-white transition-colors text-[12px] flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-md-red opacity-0 group-hover:opacity-100 transition-opacity"></span> Why Choose Us</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition-colors text-[12px] flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-md-red opacity-0 group-hover:opacity-100 transition-opacity"></span> Meet Our Team</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors text-[12px] flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-md-red opacity-0 group-hover:opacity-100 transition-opacity"></span> Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-[15px] font-bold mb-8 relative inline-block uppercase tracking-wider">
              Our Expertise
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-md-red"></span>
            </h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-[12px]">Manned Guarding</li>
              <li className="text-gray-400 text-[12px]">Event Security</li>
              <li className="text-gray-400 text-[12px]">Retail Security</li>
              <li className="text-gray-400 text-[12px]">Corporate Security</li>
              <li className="text-gray-400 text-[12px]">CCTV Monitoring</li>
            </ul>
          </div>

          {/* Column 4: Contact & Support */}
          <div>
            <h4 className="text-[15px] font-bold mb-8 relative inline-block uppercase tracking-wider">
              Connect With Us
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-md-red"></span>
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-md-red/10 p-2 rounded-lg">
                  <i className="fa-solid fa-phone text-md-red"></i>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Phone Number</p>
                  <p className="text-[12px] font-semibold">07484549759</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-md-red/10 p-2 rounded-lg">
                  <i className="fa-solid fa-envelope text-md-red"></i>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Email Address</p>
                  <p className="text-[12px] font-semibold">info@mdsecurity.co.uk</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-md-red/10 p-2 rounded-lg">
                  <i className="fa-solid fa-location-dot text-md-red"></i>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Office Location</p>
                  <p className="text-[12px] font-semibold">London, United Kingdom</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[10px] font-medium uppercase tracking-widest">
            &copy; {currentYear} MD Security Services. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
