import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import ReactRouter from 'react-router';
import Home from './src/components/home';
import { Provider } from 'react-redux';
import { store } from './src/config/store'
import { BrowserRouter as Router } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Home />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
