import React from 'react';
import { Calendar } from 'lucide-react';

export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80"
          alt="Massage therapy setting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-center mb-6">
          Professional Massage Therapy in Your Swakopmund Home
        </h1>
        <p className="text-xl mb-8 max-w-2xl text-center">
          Experience the ultimate relaxation with our premium in-home massage services
        </p>
        <button 
          onClick={scrollToBooking}
          className="bg-[#7C9082] hover:bg-[#6A7A6F] text-white px-8 py-3 rounded-full flex items-center gap-2 transition-all"
        >
          <Calendar className="w-5 h-5" />
          Book Now
        </button>
        
        <div className="absolute bottom-8 text-center">
          <p className="text-lg mb-2">Operating Hours: Monday - Saturday, 8:00 AM - 8:00 PM</p>
          <p>Serving all areas of Swakopmund</p>
        </div>
      </div>
    </div>
  );
}