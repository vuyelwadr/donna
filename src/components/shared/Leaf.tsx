import React from 'react';

interface LeafProps {
  position: 'left' | 'right';
  className?: string;
}

export default function Leaf({ position, className = '' }: LeafProps) {
  return (
    <div 
      className={`absolute z-20 ${position === 'left' ? 'left-0' : 'right-0'} ${className}`}
    >
      <img
        src="/leafTransparent.png"
        alt=""
        className={`w-64 h-auto ${position === 'right' ? 'transform scale-x-[-1]' : ''}`}
      />
    </div>
  );
}
