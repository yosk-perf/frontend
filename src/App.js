import React, { Component } from 'react';
import Particles from 'react-particles-js';
import {Layout} from 'antd';
import particlesConfig from './config/particles-config';
import {MobxRouter} from 'mobx-router';
import NavBar from './components/presentational/nav-bar/nav-bar';

import './App.css';

const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
          <Layout>
              <Content>
                  <Particles params={particlesConfig} className="particles" />
                  <MobxRouter/>
              </Content>
              <NavBar />
          </Layout>
      </div>
    );
  }
}

export default App;
