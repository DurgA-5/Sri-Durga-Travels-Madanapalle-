import React from 'react';

const ServiceArea: React.FC = () => {
  return (
    <section id="network" className="py-20 lg:py-24 bg-white overflow-hidden border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Map with Network Markers */}
          <div className="order-2 lg:order-1 relative flex justify-center items-center scale-90 sm:scale-100">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-50/30 rounded-full blur-[100px] opacity-60 -z-10"></div>
            
            <div className="relative w-full max-w-[450px]">
              <img 
                src="https://i.pinimg.com/736x/6b/d2/bd/6bd2bded700f4ce14189cd4565ac7e3b.jpg" 
                alt="Pan-India Service Map"
                className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)] opacity-90 grayscale-[0.2]"
              />

              {/* Network Markers (Scaled for consistency) */}
              
              {/* North */}
              <div className="absolute top-[22%] left-[38%] group">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-600 border-2 border-white shadow-md"></span>
                </span>
              </div>

              {/* South - Core HQ */}
              <div className="absolute bottom-[20%] left-[36%] group">
                <span className="relative flex h-6 w-6">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-6 w-6 bg-blue-800 border-2 border-white shadow-xl"></span>
                </span>
                <div className="absolute left-8 top-1/2 -translate-y-1/2 bg-slate-900 text-[8px] sm:text-[10px] text-white px-3 py-1 rounded-full shadow-2xl opacity-100 whitespace-nowrap z-30">
                   HQ: Madanapalle
                </div>
              </div>

              {/* West */}
              <div className="absolute top-[52%] left-[20%] group">
                <span className="relative flex h-4 w-4 bg-blue-600 rounded-full border-2 border-white shadow-md"></span>
              </div>

              {/* East */}
              <div className="absolute top-[42%] right-[22%] group">
                <span className="relative flex h-4 w-4 bg-blue-600 rounded-full border-2 border-white shadow-md"></span>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="order-1 lg:order-2 space-y-8 lg:space-y-10 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center space-x-3">
              <div className="flex -space-x-1">
                <div className="w-6 h-4 bg-orange-400 rounded-sm"></div>
                <div className="w-6 h-4 bg-white border rounded-sm"></div>
                <div className="w-6 h-4 bg-green-500 rounded-sm"></div>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Trusted Since 2004</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              National Pride. <br className="hidden sm:block" />
              <span className="text-orange-500">Local</span> <span className="text-sky-500">Heart.</span>
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
              From the Himalayas to Kanyakumari, our fleet connects every corner of India with safety and precision. 
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              {[
                { val: '28', label: 'States', color: 'text-orange-600' },
                { val: '8', label: 'UTs', color: 'text-slate-900' },
                { val: '24/7', label: 'Support', color: 'text-sky-600' },
                { val: 'ALL', label: 'India', color: 'text-green-600' }
              ].map((stat, i) => (
                <div key={i} className="bg-slate-50 p-5 rounded-[2rem] border border-slate-100 text-center">
                  <p className={`text-2xl font-black ${stat.color}`}>{stat.val}</p>
                  <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <button 
              onClick={() => document.getElementById('planner')?.scrollIntoView({behavior: 'smooth'})} 
              className="group flex items-center justify-center space-x-4 bg-slate-900 text-white px-8 py-4 rounded-[1.5rem] hover:bg-sky-600 transition-all w-full sm:w-auto"
            >
              <span className="font-bold text-[10px] sm:text-xs uppercase tracking-widest">Route Expert</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;