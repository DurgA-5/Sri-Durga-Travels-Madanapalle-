import React from 'react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen pt-28 lg:pt-0 flex items-center bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0ea5e9 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content */}
          <div className="space-y-8 lg:space-y-10 animate-in fade-in slide-in-from-left-8 duration-1000 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center space-x-3 px-4 py-2 bg-sky-50 rounded-full">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
              <span className="text-[10px] sm:text-xs font-bold text-sky-600 uppercase tracking-widest">Pan-India Travel Excellence</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Reliable <br className="hidden sm:block" />
              Journeys <br className="hidden sm:block" />
              <span className="text-[#0ea5e9]">Every Mile.</span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-lg">
              Madanapalle's premium choice for pilgrimage, weddings, and group tours. Experience comfort that feels like home.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="#planner" 
                className="bg-[#1d63ed] hover:bg-blue-700 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-2xl text-base sm:text-lg font-bold shadow-2xl shadow-blue-200 transition-all flex items-center justify-center group w-full sm:w-auto"
              >
                Plan My Trip
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a 
                href={`tel:${CONTACT_INFO.phone}`} 
                className="bg-white border-2 border-slate-100 hover:border-[#1d63ed] hover:text-[#1d63ed] text-slate-800 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl text-base sm:text-lg font-bold transition-all flex items-center justify-center w-full sm:w-auto"
              >
                Call Now
              </a>
            </div>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-4">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=${i + 40}`} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-4 border-white shadow-sm" alt="user" />
                  ))}
                </div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                  <span className="text-slate-900 font-black">10,000+</span> Happy Souls
                </p>
              </div>
              
              <div className="h-10 w-px bg-slate-100 hidden sm:block"></div>
              
              <div className="flex items-center space-x-3 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                <span className="text-lg font-bold text-slate-800"></span>
                <div className="flex flex-col">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5FqrS9OkN5XrA5_GXcN7OV-SoLIl0KPwoQ&s" className="w-5 h-5" alt="Google" />
             
                  <div className="flex text-yellow-400 text-[8px]">★★★★★</div>
                  <span className="text-[7px] font-black text-slate-400 uppercase tracking-widest">Verified 5-Star</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Image Container */}
          <div className="relative animate-in fade-in zoom-in duration-1000 delay-200 hidden lg:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-sky-200/40 rounded-[4rem] blur-[80px] -z-10"></div>
            
            <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl bg-white p-6 group">
              <img 
                src="https://lh3.googleusercontent.com/lAvDDon0fPnnB6Kxe0Yo9Q80qHwJKw5TrdPx-gtRxxCzHqV33CLoqQIhkKPige65rSxKARenOYFqzeAx=s265-w265-h265" 
                alt="Sri Durga Travels Fleet" 
                className="w-full h-auto rounded-[2.5rem] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute bottom-10 left-10 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/50 flex items-center space-x-4 animate-in slide-in-from-bottom-4 duration-1000 delay-500">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Fleet Safety</p>
                  <p className="text-lg font-black text-slate-900 leading-none">100% Certified</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;