import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function DarkBackground({ children, className = '' }: Props) {
  return (
    <div className={`relative bg-brand-dark ${className}`}>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url(https://raw.githubusercontent.com/vuyelwadr/donna/main/files/darkBackgroundTransparent.png)'
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}