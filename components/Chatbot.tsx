
import React, { useState, useRef, useEffect } from 'react';
import { getStreamingChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const QUICK_ACTIONS = [
  { label: '🕉️ Tirupati Trip', prompt: 'I want to book a trip to Tirupati Tirumala.' },
  { label: '💍 Wedding Bus', prompt: 'I need a luxury bus for a wedding event.' },
  { label: '🏔️ Ooty Tour', prompt: 'What are the packages for Ooty?' },
  { label: '🚐 Tempo Traveller', prompt: 'I want to inquire about a 12-seater Tempo Traveller.' },
];

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Namaste! Welcome to Sri Durga Travels. I am your personal travel assistant. How can I help you plan your journey today?' }
  ]);
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
  }, [messages, isTyping]);

  const handleSend = async (customPrompt?: string) => {
    const textToSend = customPrompt || input;
    if (!textToSend.trim() || isTyping) return;

    const userMsg: ChatMessage = { role: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    let streamText = '';
    // Add an empty model message that we will populate via streaming
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

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[90vw] sm:w-[400px] h-[600px] max-h-[80vh] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-5 text-white flex justify-between items-center shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl font-bold shadow-inner">
                  SD
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-orange-500 rounded-full"></div>
              </div>
              <div>
                <h4 className="font-bold text-lg leading-tight tracking-tight">Sri Durga Travels</h4>
                <p className="text-orange-100 text-xs font-medium">Online • AI Assistant</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="hover:bg-white/20 p-2 rounded-xl transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-6 bg-slate-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-orange-600 text-white rounded-tr-none' 
                    : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
                }`}>
                  <div className="whitespace-pre-wrap">{m.text}</div>
                </div>
              </div>
            ))}
            {isTyping && messages[messages.length-1].text === '' && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none shadow-sm">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-orange-300 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions Footer */}
          {!isTyping && messages.length < 5 && (
            <div className="px-5 py-3 bg-slate-50 flex flex-wrap gap-2 border-t border-slate-100">
              {QUICK_ACTIONS.map((action, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(action.prompt)}
                  className="text-xs font-bold py-2 px-3 bg-white border border-slate-200 rounded-full text-slate-600 hover:border-orange-500 hover:text-orange-600 transition-all shadow-sm"
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="p-5 bg-white border-t border-slate-100">
            <div className="flex items-center space-x-3 bg-slate-100 rounded-2xl px-4 py-2 focus-within:ring-2 focus-within:ring-orange-500/20 focus-within:bg-white transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your travel inquiry..."
                className="flex-1 bg-transparent border-none py-2 text-sm outline-none placeholder:text-slate-400"
              />
              <button
                disabled={!input.trim() || isTyping}
                onClick={() => handleSend()}
                className={`p-2.5 rounded-xl transition-all ${
                  input.trim() && !isTyping 
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-200 scale-100' 
                  : 'bg-slate-300 text-slate-500 scale-95 opacity-50'
                }`}
              >
                <svg className="w-5 h-5 transform rotate-90" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
            <p className="text-[10px] text-center text-slate-400 mt-3 font-medium uppercase tracking-widest">
              Available for support 24/7
            </p>
          </div>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-16 h-16 rounded-3xl shadow-2xl flex items-center justify-center transition-all duration-500 active:scale-95 group ${
          isOpen ? 'bg-slate-800 rotate-90' : 'bg-orange-600 hover:scale-105'
        }`}
      >
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-4 border-white flex items-center justify-center text-[10px] font-bold text-white">
            1
          </span>
        )}
        {isOpen ? (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="flex flex-col items-center">
             <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
             </svg>
          </div>
        )}
      </button>
    </div>
  );
};

export default Chatbot;
