
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Plan', href: '#planner', id: 'planner' },
    { name: 'Fleet', href: '#fleet', id: 'fleet' },
    { name: 'Packages', href: '#packages', id: 'packages' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Active section detection
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 bg-[#1d63ed] rounded-xl flex items-center justify-center text-white font-black text-xs tracking-tighter shadow-blue-200 shadow-lg group-hover:scale-110 transition-transform">SDT</div>
            <span className="text-xl font-black tracking-tight text-slate-900">
              Sri Durga <span className="text-[#1d63ed]">Travels</span>
            </span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 ${
                  activeSection === link.id 
                    ? 'text-[#1d63ed] bg-blue-50' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pl-4">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="bg-[#1d63ed] hover:bg-blue-700 text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest shadow-xl shadow-blue-100 transition-all active:scale-95 block"
              >
                Book Trip
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-2xl bg-slate-50 text-slate-900 border border-slate-100"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-[110] flex flex-col p-8 animate-in slide-in-from-top duration-300">
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#1d63ed] rounded-xl flex items-center justify-center text-white font-black text-xs">SDT</div>
              <span className="text-xl font-black text-slate-900">Sri Durga Travels</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-3 bg-slate-50 rounded-2xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <div className="flex-1 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-4xl font-black tracking-tighter block py-2 transition-all ${
                  activeSection === link.id ? 'text-[#1d63ed] pl-4' : 'text-slate-400'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="mt-auto space-y-4">
             <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="bg-[#1d63ed] w-full block text-center py-5 rounded-[2rem] text-lg font-black text-white shadow-2xl shadow-blue-100"
            >
              Contact Support
            </a>
            <p className="text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">Madanapalle • India</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
