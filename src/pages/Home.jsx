// Home.jsx
import React from 'react';
import ProfilePicture from '../components/ProfilePicture';

const Home = () => {
  return (
    <div>
      <ProfilePicture imageUrl="https://via.placeholder.com/150" alt="Profile Picture" />
      <h2 className="text-xl font-semibold">Welcome to My Portfolio</h2>
      <p className="mt-4">This is the home page content.</p>
    </div>
  );
}

export default Home;
