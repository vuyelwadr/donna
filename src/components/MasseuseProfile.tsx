import React from 'react';
import LightBackground from '../shared/LightBackground';
import Leaf from '../shared/Leaf';

export default function MasseuseProfile() {
  return (
    <LightBackground className="pb-0 overflow-hidden">
      <Leaf position="left" className="top-10 -translate-x-1/2" />
      <Leaf position="right" className="bottom-10 translate-x-1/2" />
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="font-cormorant text-4xl text-brand-dark">Meet Your Therapist</h2>
            <div className="space-y-4">
              <h3 className="text-2xl text-brand-primary">Sarah Anderson</h3>
              <p className="text-brand-dark leading-relaxed">
                With over 12 years of experience and certifications from the International Therapy Examination Council (ITEC), 
                I've dedicated my career to helping people find relief and relaxation through therapeutic massage.
              </p>
              <p className="text-brand-dark leading-relaxed">
                My specializations include deep tissue massage, Swedish massage, and aromatherapy. I believe in a holistic 
                approach to wellness, combining traditional techniques with modern therapeutic methods.
              </p>
              <ul className="list-disc list-inside text-brand-dark">
                <li>Certified in Deep Tissue & Swedish Massage</li>
                <li>Advanced Aromatherapy Practitioner</li>
                <li>Sports Massage Specialist</li>
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80"
              alt="Sarah Anderson"
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </LightBackground>
  );
}
