// Nav.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

const Nav = () => {
  const { isAdmin, login, logout } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(false); // State to toggle login form visibility

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      login(username, password);
      setUsername('');
      setPassword('');
      setShowLoginForm(false); // Hide the login form after successful login
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogout = () => {
    logout();
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm); // Toggle login form visibility
  };

  return (
    <nav className="bg-gray-900 text-white p-4 min-h-full"> {/* Ensure it takes up the full height */}
      <ul className="flex flex-col space-y-4">
        <li>
          <Link to="/" className="hover:bg-blue-500 px-3 py-2 rounded">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:bg-blue-500 px-3 py-2 rounded">About</Link>
        </li>
        <li>
          <Link to="/projects" className="hover:bg-blue-500 px-3 py-2 rounded">Projects</Link>
        </li>
        <li>
          <Link to="/blog" className="hover:bg-blue-500 px-3 py-2 rounded">Blog</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:bg-blue-500 px-3 py-2 rounded">Contact</Link>
        </li>
        {/* Conditional rendering based on isAdmin state */}
        {isAdmin ? (
          <li>
            <button onClick={handleLogout} className="hover:bg-blue-500 px-3 py-2 rounded">Logout</button>
          </li>
        ) : (
          <li>
            <button onClick={toggleLoginForm} className="hover:bg-blue-500 px-3 py-2 rounded">Login</button>
            {showLoginForm && (
              <form onSubmit={handleLogin} className="flex flex-col space-y-2 mt-2">
                <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} className="px-3 py-2 rounded" />
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} className="px-3 py-2 rounded" />
                <button type="submit" className="hover:bg-blue-500 px-3 py-2 rounded">Submit</button>
              </form>
            )}
            {error && <p className="text-red-500">{error}</p>}
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
