import React from 'react';
import { useAuth } from '../auth/AuthContext';

const Login = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    // Replace with actual login logic (e.g., API call)
    login(); // Calls the login function from AuthContext
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
