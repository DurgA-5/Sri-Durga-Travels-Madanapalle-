import React, { useState, useRef, useEffect } from 'react';
import { getStreamingChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const LANGUAGES = [
  { id: 'telugu', label: 'తెలుగు', sub: 'Telugu', greeting: 'నమస్కారం! శ్రీ దుర్గా ట్రావెల్స్‌కు స్వాగతం. మీ ప్రయాణాన్ని ప్లాన్ చేయడంలో నేను మీకు ఎలా సహాయపడగలను?' },
  { id: 'hindi', label: 'हिन्दी', sub: 'Hindi', greeting: 'नमस्ते! श्री दुर्गा ट्रेवल्स में आपका स्वागत है। मैं आपकी यात्रा की योजना बनाने में आपकी कैसे मदद कर सकता हूँ?' },
  { id: 'tamil', label: 'தமிழ்', sub: 'Tamil', greeting: 'வணக்கம்! శ్రీ దుర్గా ట్రావెల్స్‌కు స్వాగతం. మీ ప్రయాణాన్ని ప్లాన్ చేయడంలో నేను మీకు ఎలా సహాయపడగలను?' },
  { id: 'kannada', label: 'ಕನ್ನಡ', sub: 'Kannada', greeting: 'నమస్కారం! శ్రీ దుర్గా ట్రావెల్స్‌కు స్వాగతం. మీ ప్రయాణాన్ని ప్లాన్ చేయడంలో నేను మీకు ఎలా సహాయపడగలను?' },
  { id: 'english', label: 'English', sub: 'Global', greeting: 'Namaste! Welcome to Sri Durga Travels. How can I help you plan your journey today?' },
  { id: 'malayalam', label: 'മലയാളം', sub: 'Malayalam', greeting: 'നമസ്കാരം! ശ്രീ ദുർഗ ട്രാവൽസിലേക്ക് സ്വാഗതം. നിങ്ങളുടെ യാത്ര പ്ലാൻ ചെയ്യാൻ എനിക്ക് എങ്ങനെ സഹായിക്കാനാകും?' },
];

const QUICK_ACTIONS = [
  { label: 'Pilgrimage', prompt: 'Tell me about pilgrimage tours.' },
  { label: 'Wedding Bus', prompt: 'I want to book a bus for a wedding.' },
  { label: 'Tempo Pricing', prompt: 'What are the rates for Tempo Traveller?' },
];

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping, selectedLang]);

  const selectLanguage = (langId: string) => {
    const lang = LANGUAGES.find(l => l.id === langId);
    if (lang) {
      setSelectedLang(langId);
      setMessages([{ role: 'model', text: lang.greeting }]);
    }
  };

  const handleSend = async (customPrompt?: string) => {
    const textToSend = customPrompt || input;
    if (!textToSend.trim() || isTyping) return;

    const userMsg: ChatMessage = { role: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    let streamText = '';
    setMessages(prev => [...prev, { role: 'model', text: '' }]);

    const streamer = getStreamingChatResponse(textToSend);
    
    for await (const chunk of streamer) {
      streamText += chunk;
      setMessages(prev => {
        const newMsgs = [...prev];
        newMsgs[newMsgs.length - 1] = { role: 'model', text: streamText };
        return newMsgs;
      });
    }
    
    setIsTyping(false);
  };

  const resetChat = () => {
    setSelectedLang(null);
    setMessages([]);
    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[92vw] sm:w-[380px] lg:w-[400px] h-[75vh] sm:h-[600px] bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-500">
          
          {/* Header */}
          <div className="bg-[#1d63ed] p-5 sm:p-6 text-white flex justify-between items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <div className="flex items-center space-x-3 sm:space-x-4 relative z-10">
              <div className="w-10 h-8 sm:w-12 sm:h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center font-black text-[9px] sm:text-[10px] tracking-tighter">SDT</div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm tracking-tight">
                  {selectedLang ? 'Smart Assistant' : 'Travel Guide'}
                </h4>
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  <p className="text-[9px] sm:text-[10px] text-blue-100 font-bold uppercase tracking-widest">
                    {selectedLang ? 'Online' : 'Choose Language'}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 relative z-10">
              {selectedLang && (
                <button 
                  onClick={resetChat}
                  className="p-1.5 sm:p-2 hover:bg-white/10 rounded-xl transition-colors"
                  title="Change Language"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
                </button>
              )}
              <button onClick={() => setIsOpen(false)} className="p-1.5 sm:p-2 hover:bg-white/10 rounded-xl transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          </div>

          {!selectedLang ? (
            /* Language Selection Screen */
            <div className="flex-1 bg-white p-6 sm:p-8 flex flex-col items-center justify-center overflow-y-auto">
              <div className="text-center mb-8 sm:mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-[1.5rem] sm:rounded-[2rem] bg-blue-50 text-[#1d63ed] mb-4 sm:mb-6">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Select Language</h3>
                <p className="text-xs sm:text-sm font-medium text-slate-400 mt-2">Pick a language to start your journey</p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.id}
                    onClick={() => selectLanguage(lang.id)}
                    className="flex flex-col items-center justify-center p-4 sm:p-5 bg-slate-50 border-2 border-transparent rounded-[1.5rem] sm:rounded-[2rem] hover:border-[#1d63ed] hover:bg-white hover:shadow-xl transition-all group"
                  >
                    <span className="text-lg sm:text-xl font-black text-slate-800 group-hover:text-[#1d63ed]">{lang.label}</span>
                    <span className="text-[8px] sm:text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">{lang.sub}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Main Chat View */
            <>
              <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 sm:space-y-6 bg-slate-50 custom-scrollbar">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}>
                    <div className={`max-w-[90%] p-4 sm:p-5 rounded-[1.5rem] sm:rounded-[2rem] text-xs sm:text-sm font-medium leading-relaxed tracking-tight shadow-sm ${
                      m.role === 'user' 
                        ? 'bg-[#1d63ed] text-white rounded-tr-none' 
                        : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
                    }`}>
                      <div className="whitespace-pre-wrap">{m.text}</div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                   <div className="flex justify-start">
                     <div className="bg-white p-4 sm:p-5 rounded-[1.5rem] sm:rounded-[2rem] rounded-tl-none shadow-sm border border-slate-100 flex space-x-1.5">
                       <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-200 rounded-full animate-bounce"></div>
                       <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-300 rounded-full animate-bounce delay-100"></div>
                       <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                     </div>
                   </div>
                )}
              </div>

              {/* Chat Actions Area */}
              <div className="px-4 sm:px-6 py-3 sm:py-4 bg-white border-t border-slate-50">
                {!isTyping && messages.length < 3 && (
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    {QUICK_ACTIONS.map((action, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(action.prompt)}
                        className="text-[8px] sm:text-[9px] font-bold py-2 px-3 sm:px-4 bg-blue-50 text-[#1d63ed] border border-blue-100 rounded-full hover:bg-[#1d63ed] hover:text-white transition-all uppercase tracking-widest"
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                )}

                {/* Input Area */}
                <div className="flex items-center space-x-2 bg-slate-100 rounded-[1.2rem] sm:rounded-[1.5rem] px-4 py-1.5 sm:px-5 sm:py-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask us anything..."
                    className="flex-1 bg-transparent border-none py-2 text-xs sm:text-sm outline-none font-medium placeholder:text-slate-400"
                  />
                  <button
                    disabled={!input.trim() || isTyping}
                    onClick={() => handleSend()}
                    className="p-1.5 sm:p-2 text-[#1d63ed] disabled:opacity-20"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 transform rotate-90" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Chat"
        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-slate-900 scale-90' : 'bg-[#1d63ed] hover:scale-110'
        }`}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <div className="relative">
             <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
             </svg>
             <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-[#1d63ed] rounded-full animate-pulse"></span>
          </div>
        )}
      </button>
    </div>
  );
};

export default Chatbot;