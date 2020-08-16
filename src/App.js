import React from 'react';
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import About from './components/About'
import Post from './components/Post'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/:post_id" component={Post}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
