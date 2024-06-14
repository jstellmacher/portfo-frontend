// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import PortfolioCard from "./components/PortfolioCard";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
// import Blog from "./pages/Blog";
import "./styles.css";

function App() {
  return (
    <Router>
      <MainLayout>
        <PortfolioCard>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/Blog" element={<Blog />} /> */}
          </Routes>
        </PortfolioCard>
      </MainLayout>
    </Router>
  );
}

export default App;
