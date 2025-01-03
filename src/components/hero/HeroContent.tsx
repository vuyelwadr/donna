import React from 'react';
import { Calendar } from 'lucide-react';
import ContentDisplay from '../ContentDisplay';

interface Props {
  onBookingClick: () => void;
}

export default function HeroContent({ onBookingClick }: Props) {
  return (
    <div className="relative h-full flex flex-col items-center justify-center text-white px-4 text-center">
      <h1 className="font-alex-brush text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 drop-shadow-lg">
        Soothing Oasis
      </h1>
      <p className="font-cormorant text-xl sm:text-2xl md:text-3xl mb-4 drop-shadow-md">
        Mobile Massage Therapist
      </p>
      <ContentDisplay 
        sectionId="hero"
        className="text-lg sm:text-xl mb-8 max-w-2xl drop-shadow-md"
      />
      <button
        onClick={onBookingClick}
        className="bg-brand-primary hover:bg-brand-primary/90 text-white px-6 sm:px-8 py-3 rounded-full flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
      >
        <Calendar className="w-5 h-5" />
        <span className="whitespace-nowrap">Book Now</span>
      </button>
    </div>
  );
}