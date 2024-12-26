import React from 'react';
import { Calendar } from 'lucide-react';

interface Props {
  onBookingClick: () => void;
}

export default function HeroContent({ onBookingClick }: Props) {
  return (
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
        onClick={onBookingClick}
        className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 rounded-full flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
      >
        <Calendar className="w-5 h-5" />
        Book Now
      </button>
    </div>
  );
}