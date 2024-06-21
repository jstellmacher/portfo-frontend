// pages/AboutMe.jsx
import React, { useState } from 'react';
import ProfilePicture from '../components/ProfilePicture';
import CareerHighlights from '../components/CareerHighlights';
import MyApproach from '../components/MyApproach';
import GetInTouch from '../components/GetInTouch';
import FilteredInterests from '../components/FilteredInterests';
import FeaturedTableau from '../components/FeaturedTableau';

const AboutMe = () => {
  const [imageUrl, setImageUrl] = useState("/lol_Jai_dumb.png"); // Use the local image

  // Tableau embed URL (replace with your Tableau visualization embed URL)
  const tableauEmbedUrl = "https://public.tableau.com/views/YourVisualization";

  // Dummy data for interests: Songs, Food, Activities, etc.
  const interests = [
    'Songs',
    'Food',
    'Activities',
    'Travel',
    'Hobbies',
    'Skills'
  ];

  // Dummy data for each interest's example subsections
  const interestExamples = {
    'Songs': ['Please Please Please - Sabrina Carpenter', 'In My Life - The Beatles', 'Break My Heart Again - Laufey', 'Telephone Line - Electric Light Orchestra'],
    'Food': ['Italian Cuisine', 'Japanese Sushi', 'Thai Food', 'Quesadilla', 'Paella', 'Crepes'],
    'Activities': ['Hiking', 'Swimming', 'Cooking'],
    'Travel': ['Europe', 'Asia', 'South America', 'Central America', 'North America'],
    'Hobbies': ['Hiking', 'Coding', 'Friends'],
    'Skills': ['Coding', 'Data Analysis', 'Project Management']
  };

  // State to manage active subsection
  const [activeInterest, setActiveInterest] = useState('Songs'); // Default to 'Songs' interest

  return (
    <div className="mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-screen-lg">
      <ProfilePicture imageUrl={imageUrl} alt="Profile Picture" />
      <div className="mt-8">
        <h2 id="about-me" className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg mb-8">
          Hi there! I'm Jaichuang Stellmacher, a passionate IT Solutions Analyst with a knack for transforming complex challenges into streamlined solutions. My journey began with a deep fascination for technology's transformative power, leading me from a dual major in MIS & Marketing to becoming a certified Full Stack Software Engineer.
        </p>

        <CareerHighlights />
        <MyApproach />
        <GetInTouch />

        <FilteredInterests
          interests={interests}
          setActiveInterest={setActiveInterest}
          activeInterest={activeInterest}
          interestExamples={interestExamples}
        />

        <FeaturedTableau tableauEmbedUrl={tableauEmbedUrl} />
      </div>
    </div>
  );
}

export default AboutMe;
