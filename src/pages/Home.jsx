// Home.jsx
import React, { useState } from 'react';
import ProfilePicture from '../components/ProfilePicture';
import FileUpload from '../components/FileUpload';

const Home = ({ isAdmin }) => {
  const [imageUrl, setImageUrl] = useState("https://picsum.photos/200");

  const handleFileSelect = (file) => {
    const url = URL.createObjectURL(file);
    setImageUrl(url);
  };

  return (
    <div className="mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-screen-lg">
      <ProfilePicture imageUrl={imageUrl} alt="Profile Picture" />
      {isAdmin && <FileUpload onFileSelect={handleFileSelect} />}
      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h2>
        <p className="text-lg mb-4">
          I'm Jaichuang Stellmacher, a detail-oriented IT Solutions Analyst with a strong foundation in cloud infrastructure, data management, and digital solutions. My journey spans from a B.Sc. in Business Administration (MIS & Marketing) to becoming a certified Full Stack Software Engineer.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-100 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Key Skills</h3>
            <ul className="list-disc list-inside">
              <li>Cloud Infrastructure Management</li>
              <li>Identity and Access Management (IAM)</li>
              <li>Agile Project Management</li>
              <li>Full Stack Web Development</li>
              <li>Data Migration and Database Management</li>
            </ul>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p>Bachelor of Science in Business Administration (BSBA) from the University of Arizona, with dual majors in Management Information Systems (MIS) and Marketing.</p>
            <p>Certified Full Stack Software Engineer from Flatiron Coding Bootcamp.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
