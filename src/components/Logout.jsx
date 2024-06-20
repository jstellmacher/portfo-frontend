import React from 'react';
import { useAuth } from '../auth/AuthContext';

const Logout = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    // Replace with actual logout logic (e.g., API call)
    logout(); // Calls the logout function from AuthContext
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
