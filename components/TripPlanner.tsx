
import React, { useState } from 'react';
import { getStreamingChatResponse } from '../services/geminiService';

const TripPlanner: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [groupSize, setGroupSize] = useState('Family');
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState('');
  const [copied, setCopied] = useState(false);

  const generatePlan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!destination.trim()) return;

    setLoading(true);
    setItinerary('');
    
    const prompt = `Generate a 3-day travel itinerary for a ${groupSize} trip to ${destination} starting from Madanapalle. Include suggested places to visit and which Sri Durga vehicle would be best (Bus/Innova/Tempo). Keep it concise and practical. Do not use markdown bolding.`;
    
    try {
      const streamer = getStreamingChatResponse(prompt);
      for await (const chunk of streamer) {
        setItinerary(prev => prev + chunk);
      }
    } catch (err) {
      setItinerary("Could not generate plan. Please try again or call us!");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(itinerary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="planner" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sky-50 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-200/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Smart <span className="text-sky-600">Trip Planner</span>
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                Not sure where to start? Let our AI assistant create the perfect itinerary for you in seconds.
              </p>
              
              <form onSubmit={generatePlan} className="bg-white p-8 rounded-3xl shadow-lg space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Destination</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Tirupati, Ooty, Sabarimala"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-4 focus:ring-sky-100 focus:border-sky-500 transition-all outline-none font-medium"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Group Type</label>
                    <select 
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-4 focus:ring-sky-100 outline-none font-medium"
                      value={groupSize}
                      onChange={(e) => setGroupSize(e.target.value)}
                    >
                      <option>Family</option>
                      <option>Corporate</option>
                      <option>Spiritual Group</option>
                      <option>Wedding Guests</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button 
                      type="submit" 
                      disabled={loading}
                      className="w-full btn-primary py-4 rounded-2xl flex items-center justify-center space-x-2 disabled:opacity-50"
                    >
                      {loading ? (
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      ) : (
                        <>
                          <span>Generate Plan</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            
            <div className={`transition-all duration-500 ${itinerary ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4'}`}>
              <div className="bg-white rounded-3xl shadow-xl p-8 min-h-[450px] flex flex-col border border-sky-100">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>
                    </div>
                    <h3 className="font-bold text-slate-900 uppercase tracking-tight text-xs">Verified Itinerary</h3>
                  </div>
                  {itinerary && (
                    <button 
                      onClick={copyToClipboard}
                      className="text-[10px] font-bold text-sky-600 hover:bg-sky-50 px-3 py-1 rounded-lg transition-colors border border-sky-100"
                    >
                      {copied ? 'COPIED!' : 'COPY PLAN'}
                    </button>
                  )}
                </div>
                
                {itinerary ? (
                  <div className="flex-1 overflow-y-auto max-h-[500px] pr-2 custom-scrollbar">
                    <div className="text-slate-700 text-sm leading-relaxed whitespace-pre-wrap font-medium">
                      {itinerary}
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 text-slate-400">
                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-300">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <p className="font-medium text-sm">Input your destination for a <br/> clean, easy-to-read itinerary.</p>
                  </div>
                )}
                
                {itinerary && !loading && (
                  <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pricing Ready</p>
                    <button onClick={() => window.open(`https://wa.me/919441451026?text=I'd like to book a trip to ${destination}. My itinerary is: ${itinerary.substring(0, 100)}...`)} className="text-sky-600 font-bold hover:underline flex items-center text-sm uppercase tracking-wide">
                      Confirm Fleet & Quote
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripPlanner;
