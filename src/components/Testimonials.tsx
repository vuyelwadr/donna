import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

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
    <div className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-cormorant text-4xl text-center text-[#333333] mb-12">Client Testimonials</h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
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
              ))}
            </div>
          </div>
          
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-[#7C9082]" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-[#7C9082]" />
          </button>
        </div>
      </div>
    </div>
  );
}