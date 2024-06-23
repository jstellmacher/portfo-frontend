// PortfolioCard.jsx
import React from 'react';

const PortfolioCard = ({ children }) => {
  return (
    <div className="rounded-lg  p-6 transform transition-transform duration-500 sm:px-6 lg:px-8 max-w-screen-lg min-h-[60vh] mx-auto bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm  border border-gray-300 bg-opacity-30 border-r-1 shadow-2xl shadow-gray-900 rounded-r-xl border-opacity-30">
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default PortfolioCard;
