import React from 'react';
import FuturisticBackdrop from './FuturisticBackdrop';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav'; // Import the Nav component

const MainLayout = ({ children }) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-red-900">
      <FuturisticBackdrop />
      <Header />
      <div className="relative z-10 flex-grow flex">
        <Nav className="bg-gray-900 text-white p-4 min-h-full fixed w-64 top-0 z-50" />
        <main className="flex-grow p-4 overflow-auto">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
