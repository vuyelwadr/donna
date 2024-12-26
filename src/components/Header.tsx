import React from 'react';
import Logo from './Logo';
import { scrollToSection } from '../utils/scroll';

export default function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-brand-light py-6 px-4 fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div 
          className="flex items-center gap-4 cursor-pointer"
          onClick={scrollToTop}
        >
          <Logo size="md" />
          <div>
            <h1 className="font-alex-brush text-3xl text-brand-primary">
              Soothing Oasis
            </h1>
            <p className="font-cormorant text-sm text-brand-dark">
              Mobile Massage Therapist
            </p>
          </div>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8 font-cormorant text-lg text-brand-dark">
            <li>
              <button 
                onClick={() => scrollToSection('services')}
                className="hover:text-brand-primary transition-colors"
              >
                Services
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('booking')}
                className="hover:text-brand-primary transition-colors"
              >
                Book Now
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-brand-primary transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}