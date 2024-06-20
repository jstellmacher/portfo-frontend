// Home.jsx
import React from 'react';
import ProfilePicture from '../components/ProfilePicture';
import { useAuth } from '../components/AuthContext';
import SkillCard from '../components/SkillCard';
import EducationCard from '../components/EducationCard';

const Home = () => {
  const { isAdmin } = useAuth();
  const imageUrl = "https://picsum.photos/200"; // Replace with your default image URL or state if necessary

  // Dummy data (replace with your actual data)
  const skills = [
    'Cloud Infrastructure Management',
    'Identity and Access Management (IAM)',
    'Agile Project Management',
    'Full Stack Web Development',
    'Data Migration and Database Management'
  ];

  const education = [
    'Bachelor of Science in Business Administration (BSBA) from the University of Arizona, with dual majors in Management Information Systems (MIS) and Marketing.',
    'Certified Full Stack Software Engineer from Flatiron Coding Bootcamp.'
  ];

  return (
    <div className="mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-screen-lg">
      <ProfilePicture imageUrl={imageUrl} alt="Profile Picture" isAdmin={isAdmin} />
      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h2>
        <p className="text-lg mb-4">
          I'm Jaichuang Stellmacher, a detail-oriented IT Solutions Analyst with a strong foundation in cloud infrastructure, data management, and digital solutions. My journey spans from a B.Sc. in Business Administration (MIS & Marketing) to becoming a certified Full Stack Software Engineer.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SkillCard isAdmin={isAdmin} skills={skills} />
          <EducationCard isAdmin={isAdmin} education={education} />
        </div>
      </div>
    </div>
  );
}

export default Home;
