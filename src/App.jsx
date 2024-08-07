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
import Contact from './pages/Contact';
import Learned from './pages/Learned';
import CollapsibleNav from './components/CollapsibleNav';
import './styles.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app-container">
          <CollapsibleNav /> {/* Only show this on smaller screens */}
          <Routes>
            <Route path="/" element={<MainLayout><PortfolioCard><Home /></PortfolioCard></MainLayout>} />
            <Route path="/about" element={<MainLayout><PortfolioCard><About /></PortfolioCard></MainLayout>} />
            <Route path="/projects" element={<MainLayout><PortfolioCard><Projects /></PortfolioCard></MainLayout>} />
            <Route path="/blog" element={<MainLayout><BlogLayout><Blog /></BlogLayout></MainLayout>} />
            <Route path="/contact" element={<MainLayout><PortfolioCard><Contact /></PortfolioCard></MainLayout>} />
            <Route path="/learned" element={<MainLayout><PortfolioCard><Learned /></PortfolioCard></MainLayout>} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
