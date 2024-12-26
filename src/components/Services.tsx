import React from 'react';
import { Clock, DollarSign } from 'lucide-react';
import DarkBackground from './shared/DarkBackground';
import { services } from '../data/services';
import ServiceBookButton from './services/ServiceBookButton';

export default function Services() {
  return (
    <section id="services" className="relative">
      <DarkBackground className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl text-center text-white mb-8">Our Services</h2>
          
          {services.map((category) => (
            <div key={category.category} className="mb-12 last:mb-0">
              <h3 className="font-heading text-2xl text-brand-secondary mb-6 text-center">{category.category}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {category.items.map((service) => (
                  <div key={service.name} className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <h4 className="font-heading text-xl text-brand-primary mb-4">{service.name}</h4>
                    
                    {service.durations.map((duration, index) => (
                      <div key={index} className="flex items-center gap-4 mb-2 text-brand-dark">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{duration.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          <span>N$ {duration.price}</span>
                        </div>
                      </div>
                    ))}
                    
                    <p className="text-brand-dark my-4">{service.description}</p>
                    <div className="mb-6">
                      <h5 className="font-semibold mb-2 text-brand-dark">Benefits:</h5>
                      <ul className="list-disc list-inside text-brand-dark">
                        {service.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <ServiceBookButton serviceName={service.name} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DarkBackground>
    </section>
  );
}