import React, { Component } from 'react';

import './App.css';
import Login from './components/Login/Login';
import HomePage from './components/Homepage/HomePage';
import authenticate from './components/authentication/authenticate';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConditionalView />
      </div>
    );
  }
}

const ConditionalView = authenticate(HomePage)(Login);

export default App;
