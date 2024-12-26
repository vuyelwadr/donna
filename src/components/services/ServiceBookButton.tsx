import React from 'react';
import { useBooking } from '../../context/BookingContext';
import { scrollToSection } from '../../utils/scroll';

interface Props {
  serviceName: string;
}

export default function ServiceBookButton({ serviceName }: Props) {
  const { setSelectedService, setIsPreselected } = useBooking();

  const handleBooking = () => {
    setSelectedService(serviceName);
    setIsPreselected(true);
    scrollToSection('booking');
  };

  return (
    <button 
      onClick={handleBooking}
      className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white py-2 rounded-full transition-colors"
      aria-label={`Book ${serviceName}`}
    >
      Book This Service
    </button>
  );
}