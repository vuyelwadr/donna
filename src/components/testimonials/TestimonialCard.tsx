import React from 'react';
import { Star } from 'lucide-react';
import type { Testimonial } from '../../data/testimonials';

interface Props {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="w-full flex-shrink-0 px-4">
      <div className="flex flex-col items-center text-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-20 h-20 rounded-full object-cover mb-4"
        />
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-[#E6D5B8] text-[#E6D5B8]" />
          ))}
        </div>
        <p className="text-[#333333] mb-4">{testimonial.text}</p>
        <p className="font-semibold text-[#7C9082]">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.date}</p>
      </div>
    </div>
  );
}
