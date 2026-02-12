import React from 'react';

const challenges = [
  {
    title: 'Customer Theft',
    desc: 'More than £770 million has been lost to customer theft alone in recent years.',
    stat: '£770M+'
  },
  {
    title: 'Police Presence',
    desc: 'There are 16% fewer officers since 2010 - the lowest level since the 1980s.',
    stat: '-16%'
  },
  {
    title: 'Anti-social Behaviour',
    desc: '1.4 million incidents of anti-social behaviour were recorded by police in 2018.',
    stat: '1.4M'
  }
];

const Challenges: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-16">
          <span className="text-gray-500 uppercase text-[10px] font-black tracking-[0.4em] block mb-3">Security Landscape</span>
          <h2 className="text-[15px] font-black mb-4 uppercase tracking-widest text-gray-900 leading-tight">Current Challenges & Risks</h2>
          <div className="w-12 h-1 bg-md-red mx-auto mb-6"></div>
          <p className="text-gray-600 text-[12px] font-medium max-w-3xl mx-auto leading-relaxed">
            We recognize the evolving risks that have the potential to affect your operations. We utilize our sector-based knowledge to provide you with robust, associated solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {challenges.map((c, i) => (
            <div key={i} className="flex flex-col items-center p-10 bg-slate-50 rounded-2xl border border-gray-100 relative group hover:bg-white hover:shadow-xl transition-all duration-500">
              <span className="absolute top-4 right-6 text-[15px] font-black text-md-red opacity-20 group-hover:opacity-100 transition-opacity">
                {c.stat}
              </span>
              <div className="w-14 h-14 rounded-xl bg-md-red text-white flex items-center justify-center text-xl mb-6 shadow-lg shadow-red-900/20">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3 className="text-[15px] font-black mb-4 uppercase tracking-tight text-gray-800">{c.title}</h3>
              <p className="text-gray-500 text-[12px] font-medium leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
