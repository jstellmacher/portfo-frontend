// FileUpload.jsx
import React, { useState } from 'react';

const FileUpload = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onFileSelect(file); // Pass the selected file to the parent component
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-2">Upload Profile Picture</h3>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="border border-gray-300 rounded px-3 py-2"
      />
    </div>
  );
};

export default FileUpload;
