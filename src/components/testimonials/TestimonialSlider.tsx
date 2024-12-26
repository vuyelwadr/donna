import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';
import type { Testimonial } from '../../data/testimonials';

interface Props {
  testimonials: Testimonial[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function TestimonialSlider({ testimonials, currentIndex, onPrev, onNext }: Props) {
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
      
      <button
        onClick={onPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
      >
        <ChevronLeft className="w-6 h-6 text-[#7C9082]" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
      >
        <ChevronRight className="w-6 h-6 text-[#7C9082]" />
      </button>
    </div>
  );
}