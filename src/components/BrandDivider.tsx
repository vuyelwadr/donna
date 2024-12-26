import React from 'react';
import Logo from './Logo';

export default function BrandDivider() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="h-px bg-brand-secondary w-24" />
      <Logo size="sm" className="mx-4" />
      <div className="h-px bg-brand-secondary w-24" />
    </div>
  );
}