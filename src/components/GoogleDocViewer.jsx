import React from 'react';

const GoogleDocViewer = ({ url }) => {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md flex justify-center">
      <iframe
        title="Google Doc"
        src={url}
        width="90%"
        height="800"
      ></iframe>
    </div>
  );
};

export default GoogleDocViewer;
