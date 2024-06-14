// PortfolioCard.jsx
import React from 'react';

const PortfolioCard = ({ children }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-500 max-w-screen-md h-3/5 mx-auto">
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default PortfolioCard;
