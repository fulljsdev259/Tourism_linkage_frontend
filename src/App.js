import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './src/components/home';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
