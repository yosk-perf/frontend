import React, { Component } from 'react';
import Particles from 'react-particles-js';

import particlesConfig from './config/particles-config';
import AppContent from './components/presentational/AppContent';
import NavBar from './components/presentational/NavBar';
import YoskContainer from "./components/containers/yosk-container";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles params={particlesConfig} className="particles" />
          <AppContent className="App-content">
            <YoskContainer/>
          </AppContent>
        <NavBar />
      </div>
    );
  }
}

export default App;
