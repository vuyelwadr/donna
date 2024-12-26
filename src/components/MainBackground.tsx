import React from 'react';

export default function MainBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: 'url(https://raw.githubusercontent.com/vuyelwadr/donna/refs/heads/main/files/background1.png)',
          backgroundBlendMode: 'soft-light'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-light/80 to-brand-light/95" />
    </div>
  );
}