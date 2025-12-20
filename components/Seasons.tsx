
import React from 'react';
import { SEASONAL_SPECIALS } from '../constants';

const DecorMap: Record<string, React.ReactNode> = {
  s1: <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" /></svg>,
  s2: <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>,
  s3: <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
};

const Seasons: React.FC = () => {
  return (
    <section id="seasons" className="py-32 relative bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-24 flex flex-col items-center text-center">
          <div className="w-px h-20 bg-gradient-to-b from-slate-100 to-sky-500 mb-8"></div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 uppercase tracking-tight">
            Peak <span className="text-sky-500">Logistics</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl leading-relaxed">
            Coordinated transport solutions for the specific demands of Indian travel seasons.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {SEASONAL_SPECIALS.map((special) => (
            <div key={special.id} className="p-12 rounded-[3rem] group cursor-default relative overflow-hidden bg-slate-50 border border-slate-100 hover:border-sky-100 transition-all card-hover">
              <div className="absolute -right-12 -bottom-12 opacity-[0.03] transform group-hover:scale-110 transition-transform duration-1000 text-slate-900">
                {DecorMap[special.id]}
              </div>
              <div className="text-[10px] font-extrabold bg-sky-50 border border-sky-100 px-6 py-2 rounded-full inline-block mb-8 uppercase tracking-[0.4em] text-sky-600">
                {special.months}
              </div>
              <h3 className="text-3xl font-bold mb-6 text-slate-900 uppercase tracking-tight leading-none">{special.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-12 text-base font-medium">
                {special.description}
              </p>
              <div className="flex items-center space-x-4 text-[9px] font-black uppercase tracking-[0.4em] text-slate-300">
                <span className="w-12 h-px bg-sky-200 group-hover:w-20 transition-all duration-500"></span>
                <span className="group-hover:text-sky-400 transition-colors">Verified Route</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Seasons;
