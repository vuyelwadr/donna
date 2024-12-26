import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function LightBackground({ children, className = '' }: Props) {
  return (
    <div className={`relative ${className}`}>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{
          backgroundImage: 'url(https://raw.githubusercontent.com/vuyelwadr/donna/refs/heads/main/files/lightPlainBackground.png)'
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}