// ProfilePicture.jsx
import React, { useState } from 'react';
import FileUpload from './FileUpload'; // Assuming FileUpload component is in the same directory

const ProfilePicture = ({ imageUrl, alt, isAdmin }) => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState(imageUrl);

  const handleFileSelect = (file) => {
    const url = URL.createObjectURL(file);
    setImagePreviewUrl(url);
    // Implement upload logic to API here if needed
  };

  return (
    <div className="flex items-start">
      <img
        src={imagePreviewUrl}
        alt={alt}
        className="rounded-full h-32 w-32 object-cover border-4 border-gray-200 hover:border-blue-500 transition duration-300"
      />
      {isAdmin && (
        <div className="ml-4">
          <FileUpload onFileSelect={handleFileSelect} />
        </div>
      )}
    </div>
  );
};

export default ProfilePicture;
