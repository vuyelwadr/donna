import React from 'react';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import HeroFooter from './HeroFooter';

export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <HeroBackground />
      <HeroContent onBookingClick={scrollToBooking} />
      <HeroFooter />
    </div>
  );
}
