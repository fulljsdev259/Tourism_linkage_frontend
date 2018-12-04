import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import Home from './src/components/home';
import { Provider } from 'react-redux';
import { store } from './src/config/store'

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <Home />
        </div>
      </Provider>
    );
  }
}

export default App;
