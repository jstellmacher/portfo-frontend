import React from 'react';
import StarryBackground from './StarryBackground';

const FuturisticBackdrop = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Darker gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-800 to-purple-900 opacity-80 mix-blend-overlay z-0"></div>

      {/* Sheen effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-20 z-10"></div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid grid-cols-12 gap-0 opacity-10 z-20">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-r border-gray-500"></div>
        ))}
      </div>
      <div className="absolute inset-0 grid grid-rows-12 gap-0 opacity-10 z-20">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-b border-gray-500"></div>
        ))}
      </div>

      {/* Rotating and pulsating elements */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 bg-blue-400 rounded-full opacity-20 mix-blend-overlay animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Smooth transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 transition-opacity duration-1000 z-40"></div>

      {/* Stars */}
      <StarryBackground numStars={200} />
    </div>
  );
};

export default FuturisticBackdrop;
