import React, { Component } from 'react';
import Particles from 'react-particles-js';

import particlesConfig from './config/particles-config';
import NavBar from './components/presentational/NavBar';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles params={particlesConfig} className="particles" />
        <NavBar />
      </div>
    );
  }
}

export default App;
