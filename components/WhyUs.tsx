import React from 'react';

const features = [
  {
    title: 'Our Vision',
    desc: 'Our vision is to offer top-notch security solutions tailored to meet the diverse needs of our clients. We strive to provide reliable and efficient security services to ensure our clients feel safe and secure at all times.',
    icon: 'fa-eye'
  },
  {
    title: 'Our Mission',
    desc: 'At MD Security Services, our mission is to provide clients with reliable and effective security solutions tailored to their specific needs. With a focus on professionalism and attention to detail, we strive to ensure the safety and peace of mind of our clients.',
    icon: 'fa-bullseye'
  },
  {
    title: 'Personalized Approach',
    desc: 'We understand that every client has unique security needs. That\'s why we offer tailored security services to meet individual requirements and provide peace of mind.',
    icon: 'fa-handshake'
  }
];

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-md-red/30"></span>
            <span className="text-md-red uppercase text-[10px] font-black tracking-[0.4em]">Why MD Security</span>
            <span className="w-8 h-[1px] bg-md-red/30"></span>
          </div>
          <h2 className="text-[15px] font-black text-gray-900 uppercase tracking-widest">Why We Stand Out In The Industry</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-md-red/30 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-0 bg-md-red group-hover:h-full transition-all duration-500"></div>

              <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-md-red text-2xl mb-6 group-hover:bg-md-red group-hover:text-white transition-colors duration-500">
                <i className={`fa-solid ${f.icon}`}></i>
              </div>

              <h3 className="text-[15px] font-black mb-4 uppercase tracking-tight text-gray-800">{f.title}</h3>
              <p className="text-gray-600 text-[12px] leading-relaxed font-medium">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
