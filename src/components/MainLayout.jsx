import React from 'react';
import FuturisticBackdrop from './FuturisticBackdrop';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <FuturisticBackdrop />
      <div className="flex flex-col flex-grow">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
