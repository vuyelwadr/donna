import React from 'react';
import { Clock, DollarSign } from 'lucide-react';

const services = [
  {
    name: "Deep Tissue Massage",
    duration: "60 min",
    price: 850,
    description: "Targeted deep pressure massage focusing on chronic muscle tension and knots.",
    benefits: ["Pain relief", "Improved mobility", "Stress reduction", "Better posture"]
  },
  {
    name: "Swedish Relaxation",
    duration: "90 min",
    price: 950,
    description: "Gentle, flowing strokes to promote total body relaxation and wellness.",
    benefits: ["Stress relief", "Better sleep", "Improved circulation", "Mental clarity"]
  },
  {
    name: "Aromatherapy Massage",
    duration: "75 min",
    price: 900,
    description: "Therapeutic massage enhanced with essential oils for mind-body balance.",
    benefits: ["Emotional balance", "Enhanced relaxation", "Natural healing", "Skin benefits"]
  }
];

export default function Services() {
  return (
    <div className="bg-[#F5F7F6] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-cormorant text-4xl text-center text-[#333333] mb-12">My Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.name} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="font-cormorant text-2xl text-[#7C9082] mb-4">{service.name}</h3>
              <div className="flex items-center gap-4 mb-4 text-[#333333]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{service.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  <span>NAD {service.price}</span>
                </div>
              </div>
              <p className="text-[#333333] mb-4">{service.description}</p>
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-[#333333]">Benefits:</h4>
                <ul className="list-disc list-inside text-[#333333]">
                  {service.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <button className="w-full bg-[#A5C4C7] hover:bg-[#8FADB0] text-white py-2 rounded-full transition-colors">
                Book This Service
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}