// ProfilePicture.jsx
import React from 'react';

const ProfilePicture = ({ imageUrl, alt }) => {
  return (
    <img
      src={imageUrl}
      alt={alt}
      className="rounded-full h-32 w-32 object-cover border-4 border-gray-200 hover:border-blue-500 transition duration-300"
    />
  );
};

export default ProfilePicture;
