import React from 'react';
import { Star } from 'lucide-react';
import GlassCard from '../../shared/GlassCard';

interface TestimonialProps {
  name: string;
  date: string;
  rating: number;
  text: string;
  image: string;
}

export default function TestimonialCard({ name, date, rating, text, image }: TestimonialProps) {
  return (
    <GlassCard className="p-6">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-4 group">
          <div className="overflow-hidden rounded-full">
            <img
              src={image}
              alt={name}
              className="w-20 h-20 object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="flex gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-brand-primary text-brand-primary" />
          ))}
        </div>
        <p className="text-brand-dark mb-4">{text}</p>
        <p className="font-semibold text-brand-primary">{name}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </GlassCard>
  );
}
