
import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';

const IconMap: Record<string, React.ReactNode> = {
  address: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  phone: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
  email: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', destination: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Booking Inquiry: ${formData.destination}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nPhone: ${formData.phone}\nTrip: ${formData.destination}\nMessage: ${formData.message}`);
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-100 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2 space-y-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Plan Your Journey</h2>
              <p className="text-lg text-slate-600 font-medium">Have questions or want a direct quote? Reach out to our Madanapalle office directly.</p>
            </div>
            
            <div className="space-y-8">
              {[
                { label: 'Visit Our Office', val: CONTACT_INFO.address, key: 'address' },
                { label: 'Customer Hotline', val: CONTACT_INFO.phone, key: 'phone' },
                { label: 'Official Email', val: CONTACT_INFO.email, key: 'email' }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-sky-600 shadow-sm border border-slate-100">
                    {IconMap[item.key]}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">{item.label}</h4>
                    <p className="text-lg font-bold text-slate-800 leading-tight tracking-tight">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-8 bg-sky-600 rounded-[2rem] text-white space-y-4 shadow-xl">
              <h4 className="text-xl font-bold uppercase tracking-tight">24/7 WhatsApp Expert</h4>
              <p className="text-sky-100 text-sm font-medium leading-relaxed">Direct connection to our logistics manager for instant fleet availability.</p>
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\s+/g, '').replace('+', '')}`} 
                className="inline-flex items-center space-x-2 bg-white text-sky-600 px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform text-sm uppercase tracking-wider"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.656zm6.222-4.032c1.503.893 3.129 1.364 4.788 1.365 5.279 0 9.574-4.295 9.576-9.574 0-2.559-1.004-4.945-2.813-6.756-1.813-1.811-4.203-2.81-6.755-2.812-5.279 0-9.573 4.293-9.576 9.573-.001 1.838.524 3.597 1.516 5.118l-.995 3.637 3.73-.978zm11.751-8.12c-.279-.14-1.647-.812-1.903-.905-.256-.092-.441-.139-.627.139-.186.279-.718.905-.881 1.09-.163.186-.325.21-.604.07-.279-.14-1.18-.435-2.247-1.386-.83-.741-1.391-1.656-1.554-1.935-.163-.279-.017-.429.122-.569.126-.125.279-.325.418-.488.139-.163.186-.279.279-.465.093-.186.046-.349-.023-.488-.07-.139-.627-1.511-.859-2.07-.226-.543-.454-.469-.627-.478-.163-.008-.348-.01-.533-.01-.186 0-.488.07-.744.349-.256.279-.976.953-.976 2.325 0 1.372 1.001 2.698 1.14 2.884.139.186 1.97 3.007 4.773 4.213.667.287 1.188.458 1.594.587.67.213 1.279.183 1.761.111.538-.079 1.647-.674 1.88-1.325.233-.651.233-1.209.163-1.325-.07-.116-.256-.186-.535-.326z" /></svg>
                <span>WhatsApp Expert</span>
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 uppercase tracking-tight">Rapid Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 ml-1 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" name="name" required value={formData.name} onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-sky-500 transition-all font-medium text-sm"
                    placeholder="E.g. Rajesh Kumar"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 ml-1 uppercase tracking-wider">Mobile Number</label>
                  <input 
                    type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-sky-500 transition-all font-medium text-sm"
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 ml-1 uppercase tracking-wider">Preferred Route & Date</label>
                <input 
                  type="text" name="destination" required value={formData.destination} onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-sky-500 transition-all font-medium text-sm"
                  placeholder="Where and when?" 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 ml-1 uppercase tracking-wider">Requirement Details</label>
                <textarea 
                  name="message" rows={4} value={formData.message} onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-sky-500 transition-all font-medium resize-none text-sm leading-relaxed"
                  placeholder="Tell us about the trip (number of passengers, vehicle type, etc.)"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full btn-primary py-5 rounded-2xl text-sm font-bold shadow-xl uppercase tracking-[0.2em]"
              >
                {submitted ? 'Request Received' : 'Initialize Booking'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
