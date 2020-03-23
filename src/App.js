import React from 'react';
import './App.css';
import{ BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './content/Home';
import About from './content/About'

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
      </div>
    </Router>
    );
  }

export default App;