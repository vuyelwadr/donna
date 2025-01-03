import React from 'react';
import ContentDisplay from '../ContentDisplay';

export default function HeroFooter() {
  return (
    <div className="absolute bottom-8 text-center font-cormorant text-white w-full px-4">
      <ContentDisplay 
        sectionId="operatingHours"
        className="text-lg mb-2 drop-shadow-md"
      />
      <p className="drop-shadow-md">Serving all areas of Swakopmund</p>
    </div>
  );
}