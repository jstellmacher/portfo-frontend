// components/FeaturedTableau.jsx
import React from 'react';

const FeaturedTableau = ({ tableauEmbedUrl }) => (
  <div id="tableau-visualization" className="mt-12 bg-gray-200 p-4 rounded-lg shadow-md mb-8">
    <h3 className="text-xl font-semibold mb-4">Featured Tableau Visualization</h3>
    <iframe
      title="Tableau Visualization"
      width="100%"
      height="400"
      src={tableauEmbedUrl}
      allowFullScreen
    ></iframe>
  </div>
);

export default FeaturedTableau;
