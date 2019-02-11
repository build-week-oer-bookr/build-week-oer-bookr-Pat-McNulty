import React, { Component } from 'react';

import './App.css';
import Login from './components/Login/Login';
import HomePage from './components/Homepage/HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <HomePage />
      </div>
    );
  }
}

export default App;
