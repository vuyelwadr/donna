import React from 'react';
import Logo from './Logo';
import { scrollToSection } from '../utils/scroll';
import { Lock } from 'lucide-react';

export default function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-brand-light py-4 sm:py-6 px-4 fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div 
          className="flex items-center gap-2 sm:gap-4 cursor-pointer"
          onClick={scrollToTop}
        >
          <Logo size="sm" className="w-8 h-8 sm:w-12 sm:h-12" />
          <div>
            <h1 className="font-alex-brush text-2xl sm:text-3xl text-brand-primary">
              Soothing Oasis
            </h1>
            <p className="font-cormorant text-xs sm:text-sm text-brand-dark">
              Mobile Massage Therapist
            </p>
          </div>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8 font-cormorant text-lg text-brand-dark items-center">
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
            <li>
              <a 
                href="/admin/login"
                className="flex items-center gap-2 text-brand-primary hover:text-brand-primary/80 transition-colors"
              >
                <Lock className="w-4 h-4" />
                <span>Admin</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
