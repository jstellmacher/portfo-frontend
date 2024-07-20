import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

// Define Tailwind CSS style constants
const navStyles = `bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-r-1 shadow-2xl shadow-gray-500 rounded-r-xl border-opacity-20 text-white p-4 min-h-full fixed hide-on-small`;
const hiddenNavStyles = `hidden lg:block`;
const linkStyles = `hover:bg-blue-500 px-3 py-2 rounded`;
const activeLinkStyles = `bg-blue-500`;
const errorStyles = `text-red-500 mt-2`;
const buttonStyles = `hover:bg-blue-500 px-3 py-2 rounded`;
const formInputStyles = `block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`;
const formButtonStyles = `inline-flex justify-center px-4 py-2 mt-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`;

const Nav = ({ isHidden }) => {
  const { isAdmin, login, logout } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      setUsername("");
      setPassword("");
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
    <nav className={`${navStyles} ${isHidden ? hiddenNavStyles : ""}`}>
      <ul className="flex flex-col space-y-4">
        <li>
          <NavLink
            exact
            to="/"
            activeClassName={activeLinkStyles}
            className={linkStyles}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            activeClassName={activeLinkStyles}
            className={linkStyles}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            activeClassName={activeLinkStyles}
            className={linkStyles}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            activeClassName={activeLinkStyles}
            className={linkStyles}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            activeClassName={activeLinkStyles}
            className={linkStyles}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/learned"
            activeClassName={activeLinkStyles}
            className={linkStyles}
          >
            Learned
          </NavLink>
        </li>

        {isAdmin ? (
          <li>
            <button onClick={handleLogout} className={buttonStyles}>
              Logout
            </button>
          </li>
        ) : (
          <li>
            <button onClick={toggleLoginForm} className={buttonStyles}>
              {showLoginForm ? "Close Login" : "Login"}
            </button>
            {showLoginForm && (
              <form onSubmit={handleLogin} className="flex flex-col space-y-2 mt-2">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={handleUsernameChange}
                  className={formInputStyles}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  className={formInputStyles}
                />
                <button type="submit" className={formButtonStyles}>
                  Submit
                </button>
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
