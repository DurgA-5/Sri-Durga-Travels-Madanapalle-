
import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    destination: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Booking Inquiry: ${formData.destination || 'New Trip'}`);
    const body = encodeURIComponent(
      `Trip Inquiry from Sri Durga Travels Website\n\n` +
      `--------------------------------------------\n` +
      `Full Name: ${formData.name}\n` +
      `Phone Number: ${formData.phone}\n` +
      `Destination & Date: ${formData.destination}\n` +
      `Message: ${formData.message}\n` +
      `--------------------------------------------\n\n` +
      `Sent via website contact form.`
    );

    // Open user's email client
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
    
    setSubmitted(true);
    setFormData({ name: '', phone: '', destination: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Get in <span className="text-orange-600">Touch</span></h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Have a specific requirement? Or want to customize a tour package? Send us a message or visit our office in Madanapalle.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-orange-100 p-3 rounded-xl text-orange-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-900">Office Location</h4>
                  <p className="text-slate-600">{CONTACT_INFO.address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-orange-100 p-3 rounded-xl text-orange-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-900">Call Us</h4>
                  <p className="text-slate-600">
                    <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-orange-600 transition-colors">
                      {CONTACT_INFO.phone}
                    </a>
                  </p>
                  <p className="text-slate-600">
                    <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-orange-600 transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-xl text-green-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.229 3.481 8.404c0 6.556-5.332 11.888-11.888 11.888-2.01 0-3.988-.508-5.741-1.472l-6.243 1.697zm6.305-3.615l.33.196c1.42.842 3.053 1.288 4.729 1.288 5.176 0 9.388-4.212 9.388-9.388 0-2.507-.976-4.864-2.748-6.636s-4.13-2.747-6.64-2.747c-5.176 0-9.388 4.212-9.388 9.388 0 1.954.61 3.863 1.765 5.466l.215.298-1.01 3.689 3.779-.974z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-900">WhatsApp Booking</h4>
                  <p className="text-slate-600">Fastest response for quick bookings.</p>
                  <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\s+/g, '').replace('+', '')}`} className="text-green-600 font-bold hover:underline">
                    Chat Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <h3 className="text-2xl font-bold mb-6">Booking Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 outline-none transition-all" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 outline-none transition-all" 
                    placeholder="+91 00000 00000" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Destination & Travel Date</label>
                <input 
                  type="text" 
                  name="destination"
                  required
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 outline-none transition-all" 
                  placeholder="e.g. Sabarimala, Dec 15th" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message (Passengers, Vehicle type, etc.)</label>
                <textarea 
                  name="message"
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 outline-none transition-all" 
                  placeholder="Tell us more about your trip..."
                ></textarea>
              </div>
              
              {submitted ? (
                <div className="w-full bg-green-100 text-green-700 py-4 rounded-xl font-bold text-center animate-in fade-in zoom-in duration-300">
                  Opening your email app... Thank you!
                </div>
              ) : (
                <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg">
                  Send Inquiry via Email
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
