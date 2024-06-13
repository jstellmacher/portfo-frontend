// MainLayout.jsx
import React from 'react';
import FuturisticBackdrop from './FuturisticBackdrop';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav'; // Import the Nav component

const MainLayout = ({ children }) => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <FuturisticBackdrop />
      <div className="relative z-10 flex flex-col flex-grow">
        <Header />
        <div className="flex flex-grow"> {/* Container for both the Nav and the main content */}
          <Nav /> {/* Include the Nav component */}
          <div className="flex-grow p-4"> {/* Adjusted main container */}
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
