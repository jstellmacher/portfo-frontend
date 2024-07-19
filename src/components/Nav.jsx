import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

// Define Tailwind CSS style constants
const navStyles = `bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-r-1 shadow-2xl shadow-gray-500 rounded-r-xl border-opacity-20 text-white p-4 min-h-full fixed hide-on-small`;

const hiddenNavStyles = `hidden lg:block`;
const linkStyles = `hover:bg-blue-500 px-3 py-2 rounded`;
const activeLinkStyles = `bg-blue-500`;
const formStyles = `flex flex-col space-y-2 mt-2`;
const inputStyles = `px-3 py-2 rounded`;
const errorStyles = `text-red-500`;
const buttonStyles = `hover:bg-blue-500 px-3 py-2 rounded`;

const Nav = ({ isHidden }) => {
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
    <nav className={`${navStyles} ${isHidden ? hiddenNavStyles : ''}`}>
      <ul className="flex flex-col space-y-4">
        <li>
          <NavLink exact to="/" activeClassName={activeLinkStyles} className={linkStyles}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName={activeLinkStyles} className={linkStyles}>About</NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName={activeLinkStyles} className={linkStyles}>Projects</NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeClassName={activeLinkStyles} className={linkStyles}>Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName={activeLinkStyles} className={linkStyles}>Contact</NavLink>
        </li>
        <li>
          <NavLink to="/learned" activeClassName={activeLinkStyles} className={linkStyles}>Learned</NavLink>
        </li>

        {isAdmin ? (
          <li>
            <button onClick={handleLogout} className={buttonStyles}>Logout</button>
          </li>
        ) : (
          <li>
            <button onClick={toggleLoginForm} className={buttonStyles}>Login</button>
            {showLoginForm && (
              <form onSubmit={handleLogin} className={formStyles}>
                <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} className={inputStyles} />
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} className={inputStyles} />
                <button type="submit" className={buttonStyles}>Submit</button>
              </form>
            )}
            {error && <p className={errorStyles}>{error}</p>}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
