import React from 'react';

const stats = [
  {
    title: '24/7 Available',
    desc: 'We prioritize your safety by offering round-the-clock security services. With our team of highly trained security professionals available 24/7, you can have peace of mind knowing we are always here to respond promptly to any security concerns.',
    icon: 'fa-clock'
  },
  {
    title: 'Expert Team',
    desc: 'Our team is composed of highly trained and skilled professionals dedicated to ensuring the safety and security of our clients. Equipped with years of industry experience to handle a range of needs with efficiency.',
    icon: 'fa-user-tie'
  },
  {
    title: 'Cutting-Edge Technology',
    desc: 'We pride ourselves on staying ahead with cutting-edge technology. Our use of innovative tools and systems ensures that your property and assets are well-protected at all times with modern surveillance and reporting.',
    icon: 'fa-microchip'
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="bg-md-red py-24 text-white relative overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] [background-size:30px_30px] [background-position:0_0,15px_15px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="uppercase text-[10px] font-black tracking-[0.4em] opacity-80 mb-3 block">Professional Standards</span>
          <h2 className="text-[15px] font-black mb-4 uppercase tracking-widest">Experienced Security Professionals</h2>
          <div className="w-12 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-[12px] font-medium max-w-2xl mx-auto opacity-80 leading-relaxed">
            With years of dedicated service, our team brings unmatched expertise in security operations, ensuring top-tier protection and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((s, i) => (
            <div key={i} className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-500">
                <i className={`fa-solid ${s.icon}`}></i>
              </div>
              <h3 className="text-[15px] font-black mb-4 uppercase tracking-tight">{s.title}</h3>
              <p className="text-[12px] leading-relaxed font-light opacity-80">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
