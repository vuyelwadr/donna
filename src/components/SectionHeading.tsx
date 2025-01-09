import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({ children, className = '' }: Props) {
  return (
    <div className={`relative text-center mb-12 ${className}`}>
      <h2 className="font-alex-brush text-4xl md:text-5xl text-brand-primary relative z-10">
        {children}
      </h2>
      {/* Decorative underline */}
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-32 h-1">
        <img
          src="/decorative-line.svg"
          alt=""
          className="w-full h-full object-contain opacity-80"
        />
      </div>
    </div>
  );
}
