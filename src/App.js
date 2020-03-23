import React from 'react';
import './App.css';
import{ BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './content/Home';
import About from './content/About';
import Education from './content/Education';
import Skills from './content/Skills';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
        <Home />
        </Route>
        <Route path="/about">
        <About />
        </Route>
        <Route path="/education">
        <Education />
        </Route>
        <Route path="/skills">
        <Skills />
        </Route>
      </div>
    </Router>
    );
  }

export default App;