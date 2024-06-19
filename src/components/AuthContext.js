// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false); // Default to false for non-admin

  const login = () => {
    // Implement your login logic here
    setIsAdmin(true); // Example: Set isAdmin to true upon successful login
  };

  const logout = () => {
    // Implement your logout logic here
    setIsAdmin(false); // Example: Set isAdmin to false upon logout
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
