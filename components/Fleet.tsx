
import React from 'react';

const fleetItems = [
  {
    title: 'Luxury AC Buses',
    description: 'Our flagship 40-50 seater coaches in our signature orange & white branding. Perfect for large pilgrim groups and long-distance tours.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNQqrrjxplMD1HcoTQvYelbXtP0RqNSVKdxWdE0=w141-h118-n-k-no-nu',
    tag: 'Large Groups'
  },
  {
    title: 'Wedding & Event Cars',
    description: 'Premium sedans and SUVs like Swift and Innova, available with traditional floral and banana leaf decorations for auspicious occasions.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipPXhvEsDQ1yIOF3MSNNECyuFcISLB60gPFEdKfk=w141-h141-n-k-no-nu',
    tag: 'Wedding Special'
  },
  {
    title: 'Force Tempo Travellers',
    description: 'Versatile 12-17 seater branded travellers. Ideal for medium families, airport transfers, and spiritual yatras to places like Sabarimala.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy1y0k7GkO92gsRk-FlIxrq3xnUMpsx6hMBGPeBMb1y9z3H-YwUTvcVo8vjB1zmCNiMjx-dsoymhtVQhZS9lmjmDAHeMgLu9zfrgO7JFUSCjrd4NGVXbg6hr82GNVZux3g61mn7=w141-h141-n-k-no-nu',
    tag: 'Family Tours'
  },
  {
    title: 'Decorated Pilgrim Coaches',
    description: 'Special white luxury coaches designed for grand temple visits, featuring full amenities and traditional event-ready appearances.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipMjYFtqxiJzSrnygvbhBmwpfmMqZabmduoz_c_-=s680-w680-h510-rw',
    tag: 'Event Ready'
  }
];

const Fleet: React.FC = () => {
  return (
    <section id="fleet" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our <span className="text-orange-600">Premium Fleet</span></h2>
            <p className="text-lg text-slate-600">
              From our signature orange buses to traditionally decorated wedding cars, we maintain every vehicle to the highest standards of safety and comfort.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center px-6 py-3 rounded-full border-2 border-orange-600 text-orange-600 font-bold hover:bg-orange-600 hover:text-white transition-all">
            Get a Quote for Your Trip
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {fleetItems.map((item, idx) => (
            <div key={idx} className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-600/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg shadow-lg">
                    {item.tag}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Available 24/7</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="text-orange-400 text-xs">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Branding Note inspired by your "Sri Durga" Bus Image */}
        <div className="mt-16 bg-slate-50 p-8 rounded-3xl border border-dashed border-slate-300 flex flex-col md:flex-row items-center gap-8">
          <div className="w-20 h-20 bg-orange-600 rounded-2xl flex items-center justify-center text-3xl shadow-xl shadow-orange-200">
            🚐
          </div>
          <div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Look for the "Sri Durga" Branding</h4>
            <p className="text-slate-600">All our vehicles feature our signature branding and contact details for your safety. Our drivers are professionals who understand the geography of All-India routes perfectly.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
