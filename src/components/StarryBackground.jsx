// components/StarryBackground.jsx
import React from 'react';

const generateStars = (numStars) => {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    const style = {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 10}s`,
      animationDuration: `${3 + Math.random() * 3}s`,
    };
    stars.push(<div key={i} className="star" style={style}></div>);
  }
  return stars;
};

const StarryBackground = ({ numStars = 200 }) => {
  return <div className="stars-container">{generateStars(numStars)}</div>;
};

export default StarryBackground;
