import React from 'react';
import { Calendar } from 'lucide-react';

export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen">
      {/* Background image */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://raw.githubusercontent.com/vuyelwadr/donna/refs/heads/main/files/mainHeading.png)'
          }}
        />
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="font-alex-brush text-6xl md:text-7xl lg:text-8xl text-center mb-4 drop-shadow-lg">
          Soothing Oasis
        </h1>
        <p className="font-cormorant text-2xl md:text-3xl mb-4 text-center drop-shadow-md">
          Mobile Massage Therapist
        </p>
        <p className="text-xl mb-8 max-w-2xl text-center font-cormorant drop-shadow-md">
          Experience the ultimate relaxation with our premium in-home massage services
        </p>
        <button
          onClick={scrollToBooking}
          className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 rounded-full flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
        >
          <Calendar className="w-5 h-5" />
          Book Now
        </button>
        
        <div className="absolute bottom-8 text-center font-cormorant">
          <p className="text-lg mb-2 drop-shadow-md">Operating Hours: Monday - Saturday, 8:00 AM - 8:00 PM</p>
          <p className="drop-shadow-md">Serving all areas of Swakopmund</p>
        </div>
      </div>
    </div>
  );
}