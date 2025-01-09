import React from 'react';
import LightBackground from '../../shared/LightBackground';
import TestimonialCard from './TestimonialCard';
import Leaf from '../../shared/Leaf';

const testimonials = [
  {
    name: "Maria",
    date: "February 2024",
    rating: 5,
    text: "Sarah's deep tissue massage was exactly what I needed. Her technique is exceptional, and she really listens to your needs.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    name: "James",
    date: "January 2024",
    rating: 5,
    text: "The convenience of having a professional massage at home is unmatched. The service was professional and relaxing.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    name: "Lisa",
    date: "December 2023",
    rating: 5,
    text: "Best massage experience in Swakopmund! Sarah's aromatherapy massage helped me sleep better than I have in months.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  }
];

export default function Testimonials() {
  return (
    <LightBackground className="py-20 overflow-hidden">
      <Leaf position="right" className="top-10 translate-x-1/2 rotate-45" />
      <Leaf position="left" className="bottom-10 -translate-x-1/2 -rotate-45" />
      
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-cormorant text-4xl text-center text-brand-dark mb-12">
          Client Testimonials
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </LightBackground>
  );
}
