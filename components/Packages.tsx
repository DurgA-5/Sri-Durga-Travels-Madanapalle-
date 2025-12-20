
import React, { useState, useMemo } from 'react';
import { PACKAGES } from '../constants';

const Categories = ['All', 'Pilgrimage', 'Hill Station', 'City', 'Heritage'] as const;

const Packages: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredPackages = useMemo(() => {
    return PACKAGES.filter(pkg => {
      return activeCategory === 'All' || pkg.category === activeCategory;
    });
  }, [activeCategory]);

  const handlePackageClick = (e: React.MouseEvent, pkgName: string) => {
    e.preventDefault();
    const plannerElem = document.getElementById('planner');
    if (plannerElem) {
      window.scrollTo({
        top: plannerElem.offsetTop - 80,
        behavior: 'smooth'
      });
      // Small delay to focus the input if needed
      setTimeout(() => {
        const input = document.querySelector('input[placeholder*="e.g. Tirupati"]') as HTMLInputElement;
        if (input) {
          input.value = pkgName;
          // Trigger React state update manually if necessary, or just rely on user interaction
          input.focus();
        }
      }, 800);
    }
  };

  return (
    <section id="packages" className="py-24 bg-white border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-[#1d63ed] rounded-full text-[10px] font-black uppercase tracking-widest mb-2">
            Explore India
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Handpicked <br className="sm:hidden" /> <span className="text-[#1d63ed]">Experiences.</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            Discover the soul of India through our carefully curated spiritual and leisure circuits.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-slate-50 rounded-[2rem] w-fit mx-auto border border-slate-100">
            {Categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3.5 rounded-[1.5rem] text-xs font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? 'bg-white text-[#1d63ed] shadow-lg shadow-blue-50 border border-blue-50' 
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredPackages.slice(0, 8).map((pkg) => (
            <div key={pkg.id} className="group relative rounded-[3rem] overflow-hidden aspect-[3/4] shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-slate-100">
              <img
                src={pkg.image}
                alt={pkg.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-2">{pkg.category}</p>
                <h3 className="text-2xl font-black mb-1 leading-tight">{pkg.name}</h3>
                <div className="flex items-center text-white/70 text-xs mb-8">
                  <svg className="w-4 h-4 mr-1 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                  {pkg.location}
                </div>
                
                <a 
                  href="#planner" 
                  onClick={(e) => handlePackageClick(e, pkg.name)}
                  className="bg-white text-slate-900 text-center py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl"
                >
                  Plan This Trip
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20 p-12 bg-slate-50 rounded-[3rem] border border-slate-100 border-dashed">
          <p className="text-slate-500 font-bold mb-6 italic text-lg">Looking for something entirely unique?</p>
          <a 
            href="#planner" 
            onClick={(e) => {
               e.preventDefault();
               document.getElementById('planner')?.scrollIntoView({behavior: 'smooth'});
            }}
            className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#1d63ed] transition-all shadow-2xl"
          >
            Create Custom Itinerary
          </a>
        </div>
      </div>
    </section>
  );
};

export default Packages;
