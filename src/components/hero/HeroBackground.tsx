import React from 'react';

export default function HeroBackground() {
  return (
    <div className="absolute inset-0">
      <div 
        className="w-[200%] h-[200%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://raw.githubusercontent.com/vuyelwadr/donna/refs/heads/main/files/mainHeading.png)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10"></div>
    </div>
  );
}