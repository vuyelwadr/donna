import React, { useState, useEffect } from 'react';
import LightBackground from '../shared/LightBackground';
import TestimonialSlider from './TestimonialSlider';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <LightBackground className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-cormorant text-4xl text-center text-[#333333] mb-12">
          Client Testimonials
        </h2>
        
        <TestimonialSlider
          testimonials={testimonials}
          currentIndex={currentIndex}
          onPrev={prev}
          onNext={next}
        />
      </div>
    </LightBackground>
  );
}