import React from 'react';
import ProfilePicture from '../components/ProfilePicture';
import Subnavigation from '../components/AboutMeSubnavigation'; // New component for subnavigation
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'; // Import icons

const AboutMe = () => {
  const imageUrl = "https://picsum.photos/200"; // Replace with your profile picture URL or state if necessary

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
  const [activeInterest, setActiveInterest] = React.useState('Songs'); // Default to 'Songs' interest

  return (
    <div className="mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-screen-lg">
      <ProfilePicture imageUrl={imageUrl} alt="Profile Picture" />
      <div className="mt-8">
        <h2 id="about-me" className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg mb-8">
          Hi there! I'm Jaichuang Stellmacher, a passionate IT Solutions Analyst with a knack for transforming complex challenges into streamlined solutions. My journey began with a deep fascination for technology's transformative power, leading me from a dual major in MIS & Marketing to becoming a certified Full Stack Software Engineer.
        </p>

        {/* Career Highlights */}
        <div id="career-highlights" className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Career Highlights</h3>
          <p className="mb-4">Led a cross-functional team in implementing a cloud-based data governance solution, enhancing data accuracy and compliance for clients.</p>
          <p className="mb-4">Collaborated on a high-profile Cisco collaboration upgrade project, ensuring seamless integration and client satisfaction.</p>
        </div>

        {/* My Approach */}
        <div id="my-approach" className="mt-12">
          <h3 className="text-xl font-semibold mb-4">My Approach</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Passionate about leveraging technology to drive business outcomes.</li>
            <li>Committed to continuous learning and staying ahead in the rapidly evolving tech landscape.</li>
            <li>Dedicated to fostering collaborative environments where innovation thrives.</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div id="contact-information" className="mt-12">
          <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-lg mb-4">Interested in discussing technology solutions or exploring potential collaborations?</p>
            <a href="https://www.linkedin.com/in/jaichuang-stellmacher" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mb-2 flex items-center justify-center">
              <FaLinkedin className="mr-2" /> Connect on LinkedIn
            </a>
            <a href="mailto:jaijai.stell@gmail.com" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 mb-2 flex items-center justify-center">
              <FaEnvelope className="mr-2" /> Send an Email
            </a>
            <a href="https://github.com/jstellmacher" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 flex items-center justify-center">
              <FaGithub className="mr-2" /> View GitHub Profile
            </a>
          </div>
        </div>

        {/* Interests */}
        <div id="interests" className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Interests</h3>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <Subnavigation interests={interests} setActiveInterest={setActiveInterest} activeInterest={activeInterest} />
          </div>
        </div>

        {/* Showcase of interests */}
        <div id="active-interest-examples" className="mt-12">
          <h3 className="text-xl font-semibold mb-4">{activeInterest} Examples</h3>
          <ul className="flex flex-wrap gap-2">
            {interestExamples[activeInterest].map((example, index) => (
              <li key={index} className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full">
                {example}
              </li>
            ))}
          </ul>
        </div>

        {/* Featured Tableau Visualization */}
        <div id="tableau-visualization" className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Featured Tableau Visualization</h3>
          {/* Tableau embed iframe */}
          <iframe
            title="Tableau Visualization"
            width="100%"
            height="400"
            src={tableauEmbedUrl}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
