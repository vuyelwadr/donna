import React from 'react';

interface Props {
  variant?: 'light' | 'dark';
  className?: string;
}

export default function BackgroundDecoration({ variant = 'light', className = '' }: Props) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <div className="absolute inset-0 opacity-10">
        {/* Lotus pattern background */}
        <div className="absolute top-0 left-0 w-32 h-32 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src="/lotus-pattern.svg"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 transform translate-x-1/2 translate-y-1/2">
          <img
            src="/lotus-pattern.svg"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      
      {/* Leaf decorations */}
      <div className="absolute top-10 right-10 w-24 h-24">
        <img
          src="/leaf-decoration.svg"
          alt=""
          className="w-full h-full object-contain opacity-20"
        />
      </div>
      <div className="absolute bottom-10 left-10 w-24 h-24 transform rotate-180">
        <img
          src="/leaf-decoration.svg"
          alt=""
          className="w-full h-full object-contain opacity-20"
        />
      </div>
    </div>
  );
}