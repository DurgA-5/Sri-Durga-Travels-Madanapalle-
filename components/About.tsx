
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-[100px] opacity-60 z-0"></div>
            <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white z-10">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipPJ5LZZswAv5cZLJlbP0XkDKmx7arjlTjqMEwzX=w1080-h1440-n-k-no-nu"
                alt="Sri Durga History"
                className="w-full h-auto object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            <div className="absolute -bottom-10 -right-6 bg-[#1d63ed] p-10 rounded-[3rem] shadow-2xl z-20 border-8 border-white group hover:scale-105 transition-transform">
              <div className="text-center text-white">
                <p className="text-5xl font-black tracking-tighter">20+</p>
                <p className="text-[10px] font-black uppercase tracking-widest mt-1 opacity-80">Years in service</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-10 relative z-10 text-center lg:text-left">
            <div>
              <div className="inline-block px-4 py-1.5 bg-slate-50 text-slate-500 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">Our Legacy</div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                A Pillar of Trust in <span className="text-[#1d63ed]">Madanapalle.</span>
              </h2>
            </div>
            
            <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Founded with a mission to simplify group travel, Sri Durga Travels has evolved into the region's most reliable fleet service, specializing in long-distance pilgrimage and high-profile events.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
              {[
                { title: 'Safe Drivers', desc: 'Specialized for high-altitude & night routes.' },
                { title: 'Elite Fleet', desc: 'New-generation coaches for max comfort.' },
                { title: 'Live Support', desc: 'Real-time tracking for every journey.' },
                { title: 'Customized', desc: 'Tailored schedules for your unique needs.' }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-[#1d63ed] flex-shrink-0 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-sm uppercase tracking-tight">{item.title}</h4>
                    <p className="text-xs text-slate-400 font-bold leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
                }}
                className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#1d63ed] transition-all shadow-2xl inline-block"
              >
                Book Our Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
