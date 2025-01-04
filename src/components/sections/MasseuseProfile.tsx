import React from 'react';
import LightBackground from '../shared/LightBackground';
import Leaf from '../shared/Leaf';
import GlassCard from '../shared/GlassCard';
import GlassPanel from '../shared/GlassPanel';

export default function MasseuseProfile() {
  return (
    <LightBackground className="py-12 md:py-20 overflow-hidden">
      <Leaf position="left" className="top-10 -translate-x-1/2 hidden md:block" />
      <Leaf position="right" className="bottom-10 translate-x-1/2 hidden md:block" />
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="w-full md:flex-1">
            <GlassPanel>
              <GlassCard className="p-4 md:p-8" interactive={false}>
                <h2 className="font-cormorant text-3xl md:text-4xl text-brand-dark">Meet Your Therapist</h2>
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl text-brand-primary">Donna Naruses</h3>
                  <p className="text-brand-dark leading-relaxed text-sm md:text-base">
                    With over 12 years of experience and certifications from the International Therapy Examination Council (ITEC), 
                    I've dedicated my career to helping people find relief and relaxation through therapeutic massage.
                  </p>
                  <p className="text-brand-dark leading-relaxed text-sm md:text-base">
                    My specializations include deep tissue massage, Swedish massage, and aromatherapy. I believe in a holistic 
                    approach to wellness, combining traditional techniques with modern therapeutic methods.
                  </p>
                  <ul className="list-disc list-inside text-brand-dark text-sm md:text-base">
                    <li>Certified in Deep Tissue & Swedish Massage</li>
                    <li>Advanced Aromatherapy Practitioner</li>
                    <li>Sports Massage Specialist</li>
                  </ul>
                </div>
              </GlassCard>
            </GlassPanel>
          </div>
          <div className="w-full md:flex-1">
            <GlassPanel>
              <GlassCard interactive={false}>
                <img
                  src="/donnaOG.png"
                  alt="Donna Naruses"
                  className="w-full h-auto md:h-[500px] object-contain rounded-lg"
                />
              </GlassCard>
            </GlassPanel>
          </div>
        </div>
      </div>
    </LightBackground>
  );
}