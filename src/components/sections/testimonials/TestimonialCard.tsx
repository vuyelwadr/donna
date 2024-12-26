import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  date: string;
  rating: number;
  text: string;
  image: string;
}

export default function TestimonialCard({ name, date, rating, text, image }: TestimonialProps) {
  return (
    <div className="bg-white/80 rounded-lg p-6 shadow-lg">
      <div className="flex flex-col items-center text-center">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full object-cover mb-4"
        />
        <div className="flex gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-brand-primary text-brand-primary" />
          ))}
        </div>
        <p className="text-brand-dark mb-4">{text}</p>
        <p className="font-semibold text-brand-primary">{name}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
  );
}