import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
