// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import PortfolioCard from "./components/PortfolioCard";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import "./styles.css";
import BlogLayout from "./components/BlogLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><PortfolioCard><Home /></PortfolioCard></MainLayout>} />
        <Route path="/about" element={<MainLayout><PortfolioCard><About /></PortfolioCard></MainLayout>} />
        <Route path="/projects" element={<MainLayout><PortfolioCard><Projects /></PortfolioCard></MainLayout>} />
        <Route path="/blog" element={<MainLayout><BlogLayout><Blog /></BlogLayout></MainLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
