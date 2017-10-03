import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./components/Home"
import User from "./components/User"
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={User} />
        </div>
      </Router>
    );
  }
}

export default App;
