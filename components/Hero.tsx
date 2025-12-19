
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background with Dual Layer Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipOOj999Zn0MPkwf0319_PtrH9jiaqmPkCrONGvg=w141-h101-n-k-no-nu"
          alt="Sri Durga Luxury Bus Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/90"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="flex flex-col items-center">
          
          {/* Branded Pill exactly as in the image */}
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-white/5 border border-white/20 backdrop-blur-sm mb-12 animate-in fade-in slide-in-from-top-4 duration-1000">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f97316] mr-3 shadow-[0_0_10px_rgba(249,115,22,0.8)]"></span>
            <span className="text-[11px] font-extrabold tracking-[0.25em] uppercase text-white/90 font-sans">
              Madanapalle's Most Trusted
            </span>
          </div>
          
          {/* Main Title - Matching the Image Style */}
          <h1 className="text-6xl md:text-[140px] leading-[0.85] mb-8 text-white drop-shadow-2xl brand-title">
            Sri Durga <span className="bg-gradient-to-br from-[#FFD700] via-[#FDB813] to-[#B8860B] bg-clip-text text-transparent">Travels</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-14 font-medium tracking-wide max-w-3xl leading-relaxed animate-in fade-in duration-1000 delay-300">
            Madanapalle, Andhra Pradesh — Premium <span className="text-white italic">Pilgrimage</span> & Group Travel Services across India.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\s+/g, '').replace('+', '')}`}
              className="inline-flex items-center justify-center px-12 py-5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-2xl transition-all shadow-2xl shadow-orange-600/30 group active:scale-95"
            >
              <span className="text-lg">Book Your Journey</span>
              <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.229 3.481 8.404c0 6.556-5.332 11.888-11.888 11.888-2.01 0-3.988-.508-5.741-1.472l-6.243 1.697zm6.305-3.615l.33.196c1.42.842 3.053 1.288 4.729 1.288 5.176 0 9.388-4.212 9.388-9.388 0-2.507-.976-4.864-2.748-6.636s-4.13-2.747-6.64-2.747c-5.176 0-9.388 4.212-9.388 9.388 0 1.954.61 3.863 1.765 5.466l.215.298-1.01 3.689 3.779-.974z" />
              </svg>
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center justify-center px-12 py-5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl transition-all border border-white/30 backdrop-blur-md active:scale-95"
            >
              <span className="text-lg">Call Us: {CONTACT_INFO.phone}</span>
            </a>
          </div>
          
          {/* Feature Strip */}
          <div className="mt-20 pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-4xl">
            {[
              { label: 'Pilgrimage Special', icon: '🕉️' },
              { label: 'Marriage Transport', icon: '💍' },
              { label: 'Family Vacation', icon: '👨‍👩‍👧‍👦' },
              { label: 'All India Permit', icon: '🇮🇳' }
            ].map((feat, i) => (
              <div key={i} className="flex flex-col items-center group cursor-default">
                <span className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-md">{feat.icon}</span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-white transition-colors">{feat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
