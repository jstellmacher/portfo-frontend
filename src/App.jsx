// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import MainLayout from './components/MainLayout';
import BlogLayout from './components/BlogLayout';
import PortfolioCard from './components/PortfolioCard';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import PageIndex from './components/PageIndex'; // Import PageIndex component
import './styles.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<MainLayout><PortfolioCard><Home /></PortfolioCard></MainLayout>} />

          {/* About Route */}
          <Route path="/about" element={
            <MainLayout>
              <div className="flex justify-center"> {/* Center the content */}
                <PageIndex />
                <PortfolioCard>
                  <About />
                </PortfolioCard>
              </div>
            </MainLayout>
          } />

          {/* Projects Route */}
          <Route path="/projects" element={<MainLayout><PortfolioCard><Projects /></PortfolioCard></MainLayout>} />

          {/* Blog Route */}
          <Route path="/blog" element={<MainLayout><BlogLayout><Blog /></BlogLayout></MainLayout>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
