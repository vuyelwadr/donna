import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-light py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-4 mb-6 md:mb-0">
          <Logo size="sm" />
          <div>
            <p className="font-alex-brush text-xl">Soothing Oasis</p>
            <p className="text-sm font-cormorant">Mobile Massage Therapist</p>
          </div>
        </div>
        <p className="text-sm text-brand-secondary">&copy; {new Date().getFullYear()} Soothing Oasis. All rights reserved.</p>
      </div>
    </footer>
  );
}