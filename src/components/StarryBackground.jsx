// components/StarryBackground.jsx
import React from 'react';

const generateStars = (numStars) => {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    const style = {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 10}s`,
      animationDuration: `${2 + Math.random() * 2}s`,
    };
    stars.push(<div key={i} className="star" style={style}></div>);
  }
  return stars;
};

const StarryBackground = ({ numStars = 100 }) => {
  return <div className="stars-container">{generateStars(numStars)}</div>;
};

export default StarryBackground;
