import React, { Component } from 'react';
import Particles from 'react-particles-js';

import particlesConfig from './config/particles-config';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Yosk</h1>
        <Particles params={particlesConfig} className="particles" />
      </div>
    );
  }
}

export default App;
