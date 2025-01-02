import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}

export default function GlassCard({ children, className = '', interactive = true }: Props) {
  return (
    <div className={`relative ${interactive ? 'group' : ''}`}>
      {/* Visual effects layer - no interference with content */}
      {interactive && (
        <div
          className="
            absolute inset-0 rounded-lg transition-all duration-300
            bg-white/80 backdrop-blur-sm
            group-hover:bg-white/90 group-hover:backdrop-blur-md
            pointer-events-none
            before:absolute before:inset-0 
            before:bg-gradient-to-br before:from-white/10 before:to-transparent 
            before:opacity-0 group-hover:before:opacity-100
            before:transition-opacity
            after:absolute after:inset-0 
            after:bg-gradient-to-tr after:from-white/20 
            after:via-transparent after:to-transparent 
            after:opacity-0 group-hover:after:opacity-100
            after:transition-opacity
          "
        />
      )}

      {/* Content container - handles transforms */}
      <div
        className={`
          relative rounded-lg shadow-lg
          ${interactive ? `
            group-hover:shadow-xl
            group-hover:scale-[1.02] group-hover:-rotate-1
            transition-all duration-300 ease-out
          ` : ''}
          ${className}
        `}
      >
        {/* Actual content - fully interactive */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}