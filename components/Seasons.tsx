
import React from 'react';
import { SEASONAL_SPECIALS } from '../constants';

const Seasons: React.FC = () => {
  return (
    <section id="seasons" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-600/10 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Season-Ready <span className="text-orange-500">Expertise</span></h2>
          <p className="text-xl text-slate-400 max-w-2xl">
            We understand the demands of Indian travel seasons. From high-energy festivals to serene summer breaks, we have you covered.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SEASONAL_SPECIALS.map((special) => (
            <div key={special.id} className={`${special.bgClass} p-10 rounded-3xl group cursor-default relative overflow-hidden`}>
              <div className="absolute -right-8 -bottom-8 opacity-10 scale-150 transform group-hover:rotate-12 transition-transform duration-700">
                <svg className="w-40 h-40 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <div className="text-sm font-bold bg-black/20 backdrop-blur-md px-4 py-1.5 rounded-full inline-block mb-6 uppercase tracking-wider">
                {special.months}
              </div>
              <h3 className="text-3xl font-bold mb-6">{special.title}</h3>
              <p className="text-white/80 leading-relaxed mb-8 text-lg">
                {special.description}
              </p>
              <div className="flex items-center space-x-2 text-sm font-bold">
                <span className="w-10 h-0.5 bg-white"></span>
                <span>ADVANCE BOOKING OPEN</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-xl font-bold mb-2">Planning for Dasara or Sankranti?</h4>
            <p className="text-slate-400">Demand is exceptionally high during festival weeks. Book at least 3 weeks in advance.</p>
          </div>
          <a href="#contact" className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all whitespace-nowrap">
            Check Availability
          </a>
        </div>
      </div>
    </section>
  );
};

export default Seasons;
