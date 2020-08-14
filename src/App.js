import React from 'react';
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
      </div>
    </Router>
  );
}

export default App;
