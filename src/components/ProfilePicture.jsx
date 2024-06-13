// ProfilePicture.jsx
import React from 'react';

const ProfilePicture = ({ imageUrl, alt }) => {
  return (
    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
      <img src={imageUrl} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}

export default ProfilePicture;
