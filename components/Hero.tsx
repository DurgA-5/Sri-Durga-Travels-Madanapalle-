
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background with Dual Layer Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000"
          alt="Sri Durga Luxury Bus Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-slate-900/50"></div>
        {/* Dynamic gradient for aesthetic depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/80"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="flex flex-col items-center">
          {/* Branded Pill */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-white">Madanapalle's Most Trusted</span>
          </div>
          
          {/* Main Title - Matching the Gold aesthetic from the image */}
          <h1 className="text-6xl md:text-8xl font-black mb-4 leading-tight text-white drop-shadow-2xl">
            Sri Durga <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500 bg-clip-text text-transparent">Travels</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-200 mb-12 font-medium tracking-wide max-w-3xl">
            Madanapalle, Andhra Pradesh — Your Gateway to Sacred Journeys & Family Adventures across India.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\s+/g, '').replace('+', '')}`}
              className="inline-flex items-center justify-center px-10 py-5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-2xl transition-all shadow-2xl shadow-orange-600/30 group"
            >
              <span className="text-lg">Book Your Journey</span>
              <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.229 3.481 8.404c0 6.556-5.332 11.888-11.888 11.888-2.01 0-3.988-.508-5.741-1.472l-6.243 1.697zm6.305-3.615l.33.196c1.42.842 3.053 1.288 4.729 1.288 5.176 0 9.388-4.212 9.388-9.388 0-2.507-.976-4.864-2.748-6.636s-4.13-2.747-6.64-2.747c-5.176 0-9.388 4.212-9.388 9.388 0 1.954.61 3.863 1.765 5.466l.215.298-1.01 3.689 3.779-.974z" />
              </svg>
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center justify-center px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl transition-all border border-white/30 backdrop-blur-md"
            >
              <span className="text-lg">Call Us: {CONTACT_INFO.phone}</span>
            </a>
          </div>
          
          {/* Feature Strip */}
          <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl">
            {[
              { label: 'Pilgrimage Special', icon: '🕉️' },
              { label: 'Marriage Transport', icon: '💍' },
              { label: 'Family Vacation', icon: '👨‍👩‍👧‍👦' },
              { label: 'All India Permit', icon: '🇮🇳' }
            ].map((feat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-2xl mb-2">{feat.icon}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">{feat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
