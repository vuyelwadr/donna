import React from 'react';
import LightBackground from '../shared/LightBackground';
import Leaf from '../shared/Leaf';
import GlassCard from '../shared/GlassCard';
import GlassPanel from '../shared/GlassPanel';

export default function MasseuseProfile() {
  return (
    <LightBackground className="py-20 overflow-hidden">
      <Leaf position="left" className="top-10 -translate-x-1/2" />
      <Leaf position="right" className="bottom-10 translate-x-1/2" />
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <GlassPanel>
              <GlassCard className="p-8" interactive={false}>
                <h2 className="font-cormorant text-4xl text-brand-dark">Meet Your Therapist</h2>
                <div className="space-y-4">
                  <h3 className="text-2xl text-brand-primary">Donna Naruses</h3>
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
              </GlassCard>
            </GlassPanel>
          </div>
          <div className="flex-1">
            <GlassPanel>
              <GlassCard interactive={false}>
                <img
                  src="/donnaOG.png"
                  alt="Sarah Anderson"
                  className="w-full h-[500px] object-contain rounded-lg"
                />
              </GlassCard>
            </GlassPanel>
          </div>
        </div>
      </div>
    </LightBackground>
  );
}
