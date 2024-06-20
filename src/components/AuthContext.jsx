// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false); // Default to false for non-admin

  const login = (username, password) => {
    // Check if the username and password match your criteria
    if (username === 'Jai' && password === 'sushi1998') {
      setIsAdmin(true); // Set isAdmin to true upon successful login
    } else {
      setIsAdmin(false); // Set isAdmin to false if credentials are incorrect
      throw new Error('Invalid username or password');
    }
  };

  const logout = () => {
    setIsAdmin(false); // Set isAdmin to false upon logout
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
