import React, { useState } from 'react';
import { Calendar, Clock, MessageSquare } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    requirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-[#F5F7F6] py-20 px-4" id="booking">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-cormorant text-4xl text-center text-[#333333] mb-12">Book Your Session</h2>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#333333] mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#7C9082] focus:ring-1 focus:ring-[#7C9082] outline-none"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label className="block text-[#333333] mb-2" htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#7C9082] focus:ring-1 focus:ring-[#7C9082] outline-none"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label className="block text-[#333333] mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#7C9082] focus:ring-1 focus:ring-[#7C9082] outline-none"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label className="block text-[#333333] mb-2" htmlFor="service">Service</label>
              <select
                id="service"
                name="service"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#7C9082] focus:ring-1 focus:ring-[#7C9082] outline-none"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                <option value="deep-tissue">Deep Tissue Massage</option>
                <option value="swedish">Swedish Relaxation</option>
                <option value="aromatherapy">Aromatherapy Massage</option>
              </select>
            </div>
            
            <div>
              <label className="block text-[#333333] mb-2" htmlFor="date">Preferred Date</label>
              <input
                type="date"
                id="date"
                name="date"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#7C9082] focus:ring-1 focus:ring-[#7C9082] outline-none"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label className="block text-[#333333] mb-2" htmlFor="time">Preferred Time</label>
              <input
                type="time"
                id="time"
                name="time"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#7C9082] focus:ring-1 focus:ring-[#7C9082] outline-none"
                value={formData.time}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="mt-6">
            <label className="block text-[#333333] mb-2" htmlFor="requirements">Special Requirements</label>
            <textarea
              id="requirements"
              name="requirements"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#7C9082] focus:ring-1 focus:ring-[#7C9082] outline-none"
              value={formData.requirements}
              onChange={handleChange}
            ></textarea>
          </div>
          
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-between items-center">
            <button
              type="submit"
              className="w-full md:w-auto bg-[#7C9082] hover:bg-[#6A7A6F] text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-all"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </button>
            
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              WhatsApp Me
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}