import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import LightBackground from '../shared/LightBackground';
import Leaf from '../shared/Leaf';

export default function ContactDetails() {
  return (
    <section id="contact" className="relative">
      <LightBackground className="py-20 overflow-hidden">
        <Leaf position="left" className="top-1/4 -translate-x-1/2 rotate-[30deg]" />
        <Leaf position="right" className="bottom-1/4 translate-x-1/2 -rotate-[30deg]" />
        
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-cormorant text-4xl text-center text-brand-dark mb-12">Contact Details</h2>
          <div className="bg-white/80 rounded-lg p-8 shadow-lg space-y-6">
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-6 h-6 text-brand-primary" />
              <a href="mailto:soasisbusiness@gmail.com" className="text-brand-dark hover:text-brand-primary transition-colors">
                soasisbusiness@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-6 h-6 text-brand-primary" />
              <a href="tel:+264853824491" className="text-brand-dark hover:text-brand-primary transition-colors">
                +264 85 382 4491
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MessageSquare className="w-6 h-6 text-brand-primary" />
              <span className="text-brand-dark">Telegram/WhatsApp/Call/SMS</span>
            </div>
            <p className="text-center text-brand-primary font-semibold mt-6">
              Please note: Outcalls only
            </p>
          </div>
        </div>
      </LightBackground>
    </section>
  );
}