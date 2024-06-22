import React, { useState } from 'react';
import ProfilePicture from '../components/ProfilePicture';
import { useAuth } from '../components/AuthContext';
import Subnavigation from '../components/HomeSubnavigation';
import KeyQualificationsCard from '../components/KeyQualificationsCard';
import ProfessionalExperienceCard from '../components/ProfessionalExperienceCard';
import CertificationsCard from '../components/CertificationsCard';
import TechnicalSkillsCard from '../components/TechnicalSkillsCard';
import EducationCard from '../components/EducationCard'; // Import correct component

const Home = () => {
  const { isAdmin } = useAuth();

  const [imageUrl, setImageUrl] = useState("/lol_Jai_dumb.png"); // Use the local image

  const handleFileSelect = (file) => {
    const url = URL.createObjectURL(file);
    setImageUrl(url);
  };

  // State to manage active section
  const [activeSection, setActiveSection] = useState('keyQualifications'); // Default to 'keyQualifications' section

  return (
    <div className="mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-screen-lg">
      <ProfilePicture imageUrl={imageUrl} alt="Profile Picture" isAdmin={isAdmin} />
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold text-gray-900">Welcome to My Portfolio</h2>
          <a
            href="https://docs.google.com/document/d/1VLkC0Zy2qz4mmUR__-OPIQ1Gn7AhhFv5b41P0xn1PIc/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
          >
            Resume
          </a>
        </div>
        <p className="text-lg mb-4 bg-white rounded-lg p-4">
          I'm Jaichuang Stellmacher, a detail-oriented IT Solutions Analyst with a strong foundation in cloud infrastructure, data management, and digital solutions. My journey spans from a B.Sc. in Business Administration (MIS & Marketing) to becoming a certified Full Stack Software Engineer.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-1">
            <Subnavigation setActiveSection={setActiveSection} activeSection={activeSection} />
          </div>
          <div className="sm:col-span-2">
            {/* Conditional rendering based on activeSection */}
            {activeSection === 'keyQualifications' && <KeyQualificationsCard isAdmin={isAdmin} />}
            {activeSection === 'professionalExperience' && <ProfessionalExperienceCard isAdmin={isAdmin} />}
            {activeSection === 'education' && <EducationCard isAdmin={isAdmin} />}
            {activeSection === 'certifications' && <CertificationsCard isAdmin={isAdmin} />}
            {activeSection === 'technicalSkills' && <TechnicalSkillsCard isAdmin={isAdmin} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
