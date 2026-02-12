import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Cinematic Background Zoom Container */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 animate-zoom"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.45)), url("/assets/hero-bg.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#1a1a1a'
          }}
        />
        {/* Subtle Overlay Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      {/* Floating Badge (Decorative) */}
      <div className="absolute top-24 right-[10%] hidden xl:block animate-float pointer-events-none">

      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <div className="reveal-item">
          {/* Sub-badge */}


          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black max-w-5xl mx-auto leading-[1.1] mb-8 tracking-tight drop-shadow-2xl">
            Elevating <span className="text-md-red hero-glow">Safety</span> & <br className="hidden md:block" /> Security Standards
          </h1>
          <p className="text-sm md:text-lg font-medium mb-12 opacity-80 max-w-2xl mx-auto leading-relaxed text-gray-200">
            MD Security Services provides professional guarding solutions tailored for businesses that demand absolute excellence and reliability.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-md-red text-white px-10 py-5 rounded-md font-bold text-[14px] hover:bg-red-700 transition transform hover:scale-105 active:scale-95 shadow-2xl shadow-red-900/40 group"
            >
              Contact Us Today
              <i className="fa-solid fa-arrow-right-long transition-transform group-hover:translate-x-1"></i>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-3 glass-card text-white px-10 py-5 rounded-md font-bold text-[14px] hover:bg-white/10 transition transform hover:scale-105 active:scale-95 group"
            >
              <i className="fa-solid fa-shield-halved text-md-red opacity-80"></i>
              Our Solutions
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <a href="#about" className="flex flex-col items-center gap-3 text-white/40 hover:text-white transition-all group">
          <span className="text-[9px] font-black uppercase tracking-[0.5em] font-inter opacity-60">Explore</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1.5 group-hover:border-white/40 transition-colors">
            <div className="w-1 h-2 bg-md-red rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
