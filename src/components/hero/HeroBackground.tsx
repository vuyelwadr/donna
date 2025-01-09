import React from 'react';

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div 
        className="w-full h-full absolute top-0 left-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/mainHeading.png)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10"></div>
    </div>
  );
}
