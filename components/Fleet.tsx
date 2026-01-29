
import React from 'react';

const fleetItems = [
  {
    title: 'Orange Executive',
    description: 'Bespoke 40-50 seater luxury coaches with AC and high-quality reclining seats.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNQqrrjxplMD1HcoTQvYelbXtP0RqNSVKdxWdE0=w1080-h1080-n-k-no-nu',
    status: 'High Demand'
  },
  {
    title: 'Wedding Sedans',
    description: 'Premium decorated cars (Swift/Innova) for wedding processions and VIP transfers.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipPXhvEsDQ1yIOF3MSNNECyuFcISLB60gPFEdKfk=w1080-h1080-n-k-no-nu',
    status: 'Available'
  },
  {
    title: 'Force Traveller',
    description: 'Perfect for group vacations (12-17 Seater) with ample luggage space.',
    image: 'https://lh3.googleusercontent.com/FMpRW_KpoMnb8KG6OiSweL5OahOOwPi6V-aepu5AONxeGcnw7GCfaLeIAVLg6m58g3V0Sb5cUuizAuax=s265-w265-h265',
    status: 'Best Seller'
  },
  {
    title: 'Mini Tourist',
    description: 'Compact comfort for local sightseeing and short temple visits.',
    image: 'https://lh3.googleusercontent.com/p/AF1QipMjYFtqxiJzSrnygvbhBmwpfmMqZabmduoz_c_-=s1080-w1080-h810-rw',
    status: 'Available'
  }
];

const Fleet: React.FC = () => {
  return (
    <section id="fleet" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Our Signature Fleet</h2>
            <p className="text-lg text-slate-600 font-medium italic">Regularly sanitized and mechanically vetted vehicles.</p>
          </div>
          <div className="flex space-x-4">
             <div className="px-4 py-2 bg-white rounded-full border border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center">
               <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Verified Fleet
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {fleetItems.map((item, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 pleasant-shadow card-hover group flex flex-col h-full">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4">
                  <span className={`text-[10px] font-bold px-3 py-1 rounded-full text-white ${item.status === 'High Demand' ? 'bg-orange-500' : item.status === 'Best Seller' ? 'bg-sky-500' : 'bg-green-500'}`}>
                    {item.status}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400">DAILY TOURS</span>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="text-sky-500 text-xs">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
