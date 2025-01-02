import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function GlassPanel({ children, className = '' }: Props) {
  return (
    <div 
      className={`
        relative group
        before:absolute before:inset-0 
        before:bg-gradient-to-tr before:from-white/10 before:via-transparent before:to-transparent 
        before:opacity-0 before:group-hover:opacity-100
        before:transition-all before:duration-300
        after:absolute after:inset-0 
        after:bg-gradient-to-br after:from-white/5 after:via-transparent after:to-transparent 
        after:opacity-0 after:group-hover:opacity-100
        after:transition-all after:duration-300
        ${className}
      `}
    >
      <div className="transform transition-transform duration-300 ease-out group-hover:scale-[1.02] group-hover:-rotate-1">
        {children}
      </div>
    </div>
  );
}