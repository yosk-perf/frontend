import React, { Component } from 'react';
import Particles from 'react-particles-js';

import particlesConfig from './config/particles-config';
import AppContent from './components/presentational/AppContent';
import NavBar from './components/presentational/NavBar';
import YoskForm from './components/presentational/yosk-form';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles params={particlesConfig} className="particles" />
          <AppContent className="App-content">
              {/* Place here all cards*/}
          </AppContent>
        <NavBar />
          <div className="big-yosk">
              <YoskForm/>
          </div>
      </div>
    );
  }
}

export default App;
