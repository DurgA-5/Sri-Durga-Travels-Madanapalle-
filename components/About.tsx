
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50">
              <img
                src="https://images.unsplash.com/photo-1594145064047-b8923a9d945a?auto=format&fit=crop&q=80&w=1000"
                alt="Decorated Travel Groups"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -left-10 bg-gradient-to-br from-orange-600 to-orange-700 p-10 rounded-3xl text-white shadow-2xl hidden sm:block border-4 border-white">
              <p className="text-5xl font-black mb-1">20+</p>
              <p className="text-xs font-bold uppercase tracking-[0.2em]">Years of Trust</p>
              <p className="text-[10px] opacity-70 mt-4 font-bold uppercase">Since 2004</p>
            </div>
          </div>
          
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-widest mb-6">
              Our Legacy
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              A Trusted Name in <br/>
              <span className="text-orange-600 underline decoration-orange-200 underline-offset-8">Madanapalle</span> Travel
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Based in the heart of Madanapalle, Sri Durga Travels has been the first choice for families, pilgrims, and wedding groups for over two decades. We don't just provide vehicles; we provide peace of mind.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium text-slate-800">
              Whether it's a decorated car for a once-in-a-lifetime wedding or a luxury bus for a spiritual pilgrimage to Sabarimala, we handle every detail with care.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="text-3xl mr-4 text-orange-600">🕉️</div>
                <div>
                  <h4 className="font-bold text-slate-900">Pilgrimage Experts</h4>
                  <p className="text-sm text-slate-500">Specializing in Tirupati, Sabarimala, and Shirdi routes.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-3xl mr-4 text-orange-600">💍</div>
                <div>
                  <h4 className="font-bold text-slate-900">Wedding Fleet</h4>
                  <p className="text-sm text-slate-500">Decorated premium cars and guest buses for events.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-3xl mr-4 text-orange-600">🛡️</div>
                <div>
                  <h4 className="font-bold text-slate-900">Safe & Secure</h4>
                  <p className="text-sm text-slate-500">Experienced drivers and regular vehicle inspections.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-3xl mr-4 text-orange-600">🇮🇳</div>
                <div>
                  <h4 className="font-bold text-slate-900">Pan-India Permits</h4>
                  <p className="text-sm text-slate-500">Seamless travel across all Indian states and regions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
