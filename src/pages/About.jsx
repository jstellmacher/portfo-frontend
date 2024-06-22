import React, { useState } from 'react';
import ProfilePicture from '../components/ProfilePicture';
import CareerHighlights from '../components/CareerHighlights';
import MyApproach from '../components/MyApproach';
import GetInTouch from '../components/GetInTouch';
import FeaturedTableau from '../components/FeaturedTableau';
import AboutMeSubnavigation from '../components/AboutMeSubnavigation';
import FilteredInterests from '../components/FilteredInterests';

const AboutMe = () => {
  const [activeSection, setActiveSection] = useState('aboutMe');
  const [activeInterest, setActiveInterest] = useState('Songs');

  const interests = [
    'Songs',
    'Food',
    'Activities',
    'Travel',
    'Hobbies',
    'Skills'
  ];

  const interestExamples = {
    'Songs': ['Please Please Please - Sabrina Carpenter', 'In My Life - The Beatles', 'Break My Heart Again - Laufey', 'Telephone Line - Electric Light Orchestra'],
    'Food': ['Italian Cuisine', 'Japanese Sushi', 'Thai Food', 'Quesadilla', 'Paella', 'Crepes'],
    'Activities': ['Hiking', 'Swimming', 'Cooking'],
    'Travel': ['Europe', 'Asia', 'South America', 'Central America', 'North America'],
    'Hobbies': ['Hiking', 'Coding', 'Friends'],
    'Skills': ['Coding', 'Data Analysis', 'Project Management']
  };

  return (
    <div className="mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-screen-lg">
      <ProfilePicture imageUrl="/lol_Jai_dumb.png" alt="Profile Picture" />

      <div className="mt-8">
        {/* Render About Me section if activeSection is 'aboutMe' */}
        {activeSection === 'aboutMe' && (
          <div id="about-me" className="bg-gray-200 p-4 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg mb-8">
              Hi there! I'm Jaichuang Stellmacher, a passionate IT Solutions Analyst with a knack for transforming complex challenges into streamlined solutions. My journey began with a deep fascination for technology's transformative power, leading me from a dual major in MIS & Marketing to becoming a certified Full Stack Software Engineer.
            </p>
          </div>
        )}

        {/* Render AboutMeSubnavigation component */}
        <AboutMeSubnavigation setActiveSection={setActiveSection} activeSection={activeSection} />

        {/* Conditionally render other sections */}
        {activeSection === 'careerHighlights' && <CareerHighlights />}
        {activeSection === 'myApproach' && <MyApproach />}
        {activeSection === 'filteredInterests' && (
          <FilteredInterests
            interests={interests}
            setActiveInterest={setActiveInterest}
            activeInterest={activeInterest}
            interestExamples={interestExamples}
          />
        )}

        {activeSection === 'featuredTableau' && (
          <FeaturedTableau tableauEmbedUrl="https://public.tableau.com/views/YourVisualization" />
        )}

        <GetInTouch />
      </div>
    </div>
  );
};

export default AboutMe;
