import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

const Nav = () => {
  const { isAdmin, login, logout } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      login(username, password);
      setUsername('');
      setPassword('');
      setShowLoginForm(false);
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
    setShowLoginForm(!showLoginForm);
  };

  return (
    <nav className="bg-blue-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border-r-2 border-gray-500 text-white p-4 min-h-full fixed">
      <ul className="flex flex-col space-y-4">
        <li>
          <NavLink exact to="/" activeClassName="bg-blue-500" className="hover:bg-blue-500 px-3 py-2 rounded">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="bg-blue-500" className="hover:bg-blue-500 px-3 py-2 rounded">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="bg-blue-500" className="hover:bg-blue-500 px-3 py-2 rounded">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeClassName="bg-blue-500" className="hover:bg-blue-500 px-3 py-2 rounded">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="bg-blue-500" className="hover:bg-blue-500 px-3 py-2 rounded">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/learned" activeClassName="bg-blue-500" className="hover:bg-blue-500 px-3 py-2 rounded">Learned</NavLink>
        </li>

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
