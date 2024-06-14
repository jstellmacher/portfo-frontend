// Nav.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
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
      </ul>
    </nav>
  );
}

export default Nav;
