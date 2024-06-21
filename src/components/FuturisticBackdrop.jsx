// components/FuturisticBackdrop.jsx
import React from 'react';
import StarryBackground from './StarryBackground';

const FuturisticBackdrop = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-black to-vibrant-blue opacity-75 mix-blend-overlay z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-purple to-blue-600 opacity-50"></div>
      <StarryBackground numStars={200} /> {/* Add stars */}
    </div>
  );
};

export default FuturisticBackdrop;
