import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="bg-brand-light py-8 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-heading text-2xl text-brand-primary mb-6">Contact Details</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-5 h-5 text-brand-primary" />
            <a href="mailto:soasisbusiness@gmail.com" className="text-brand-dark hover:text-brand-primary">
              soasisbusiness@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5 text-brand-primary" />
            <a href="tel:+264853824491" className="text-brand-dark hover:text-brand-primary">
              +264 85 382 4491
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MessageSquare className="w-5 h-5 text-brand-primary" />
            <span className="text-brand-dark">Telegram/WhatsApp/Call/SMS</span>
          </div>
          <p className="text-sm text-brand-primary font-semibold mt-4">
            Please note: Outcalls only
          </p>
        </div>
      </div>
    </div>
  );
}