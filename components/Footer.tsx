
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-white font-black text-[10px] tracking-tight">SDT</div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Sri Durga <span className="text-sky-500">Travels</span>
              </span>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed">
              Madanapalle's most trusted travel partner. Providing safe, comfortable, and affordable transportation for over two decades.
            </p>
            
            <a 
              href="https://share.google/DYaARwLNb5PHIqR6y" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm hover:border-sky-200 transition-all w-fit group"
            >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5FqrS9OkN5XrA5_GXcN7OV-SoLIl0KPwoQ&s" className="w-5 h-5" alt="Google" />
              <div>
                <div className="flex text-yellow-400 text-[10px]">★★★★★</div>
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-sky-600 transition-colors">Google Verified</div>
              </div>
            </a>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-sky-500 transition-colors shadow-sm font-bold">f</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-sky-500 transition-colors shadow-sm font-bold">in</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-slate-500 hover:text-sky-600 font-medium transition-colors">Home</a></li>
              <li><a href="#services" className="text-slate-500 hover:text-sky-600 font-medium transition-colors">Services</a></li>
              <li><a href="#fleet" className="text-slate-500 hover:text-sky-600 font-medium transition-colors">Our Fleet</a></li>
              <li><a href="#planner" className="text-slate-500 hover:text-sky-600 font-medium transition-colors">Trip Planner</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Popular Routes</h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li>Madanapalle to Tirupati</li>
              <li>Sabarimala Pilgrimage</li>
              <li>Ooty Hill Station Tour</li>
              <li>Bangalore Airport Pickup</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 mt-1">📍</span>
                <span className="text-slate-500 font-medium text-sm leading-relaxed">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3">📞</span>
                <a href={`tel:${CONTACT_INFO.phone}`} className="font-bold text-slate-900 hover:text-sky-600 transition-all">
                  {CONTACT_INFO.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-16 rounded-[2rem] overflow-hidden shadow-sm border border-slate-200 h-[350px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.7925717345242!2d78.50518749999999!3d13.5483125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb26544a4e0628d%3A0x2edba4d64a07e88a!2sSRI%20DURGA%20TOURS%20%26%20TRAVELS!5e0!3m2!1sen!2sin!4v1766133873207!5m2!1sen!2sin" 
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" 
          ></iframe>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-semibold">
          <p>© {new Date().getFullYear()} Sri Durga Travels. Excellence in Motion.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
