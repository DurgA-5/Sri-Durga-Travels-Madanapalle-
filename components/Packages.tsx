
import React, { useState, useMemo } from 'react';
import { PACKAGES } from '../constants';

const Categories = ['All', 'Pilgrimage', 'Hill Station', 'City', 'Heritage'] as const;

const Packages: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredPackages = useMemo(() => {
    return PACKAGES.filter(pkg => {
      const matchesSearch = pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           pkg.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || pkg.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <section id="packages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Popular <span className="text-orange-600">Destinations</span></h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our curated travel experiences. Search for your next spiritual yatra or a relaxing holiday.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-wrap justify-center gap-2">
            {Categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat 
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-200' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search destination (e.g. Sabarimala, Ooty)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all shadow-sm pl-12"
            />
            <svg className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredPackages.map((pkg) => (
              <div key={pkg.id} className="group relative rounded-2xl overflow-hidden shadow-lg aspect-[3/4] bg-slate-100 animate-in fade-in duration-500">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent opacity-90"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400 px-2 py-1 bg-white/10 backdrop-blur-md rounded">
                      {pkg.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1 leading-tight">{pkg.name}</h3>
                  <div className="flex items-center text-slate-300 text-sm mb-4">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {pkg.location}
                  </div>
                  
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-slate-200 h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 mb-4">
                      {pkg.description}
                    </p>
                  </div>
                  
                  <a 
                    href="#contact" 
                    className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    Plan This Trip
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No destinations found</h3>
            <p className="text-slate-600">Try searching for a different location or category.</p>
            <button 
              onClick={() => {setSearchTerm(''); setActiveCategory('All');}}
              className="mt-6 text-orange-600 font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Packages;
