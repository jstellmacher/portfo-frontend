import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import { FiMenu, FiX } from 'react-icons/fi';

const CollapsibleNav = () => {
  const { isAdmin, login, logout } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Style constants
  const navButtonStyles = `fixed top-4 right-4 z-50 bg-transparent border-none text-white cursor-pointer text-3xl p-3 lg:hidden`;

  const navContainerStyles = `flex flex-col p-4 space-y-4 bg-white bg-opacity-30 backdrop-blur-md border border-white border-opacity-20 rounded-lg shadow-lg text-white`;
  const navItemStyles = `block px-4 py-2 rounded-lg hover:bg-blue-500`;
  const activeLinkStyles = `bg-blue-500 text-white`;
  const formStyles = `flex flex-col space-y-2 mt-2`;
  const inputStyles = `px-3 py-2 rounded-lg border border-gray-300 bg-white bg-opacity-80`;
  const buttonStyles = `bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg`;
  const errorStyles = `text-red-500 text-sm`;
  const navOpenStyles = `fixed inset-0 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-40`;
  const navClosedStyles = `fixed inset-0 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-40`;

  // Event handlers
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

  const toggleNav = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('nav-open', !isOpen); // Toggle body class for hiding original nav
  };

  return (
    <>
      <button className={navButtonStyles} onClick={toggleNav}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
      <nav className={`${isOpen ? navOpenStyles : navClosedStyles}`}>
        <div className={navContainerStyles}>
          <ul className="flex flex-col space-y-4">
            <li>
              <NavLink exact to="/" activeClassName={activeLinkStyles} className={navItemStyles}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName={activeLinkStyles} className={navItemStyles}>About</NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeClassName={activeLinkStyles} className={navItemStyles}>Projects</NavLink>
            </li>
            <li>
              <NavLink to="/blog" activeClassName={activeLinkStyles} className={navItemStyles}>Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName={activeLinkStyles} className={navItemStyles}>Contact</NavLink>
            </li>
            <li>
              <NavLink to="/learned" activeClassName={activeLinkStyles} className={navItemStyles}>Learned</NavLink>
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
        </div>
      </nav>
    </>
  );
};

export default CollapsibleNav;
