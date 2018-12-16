import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import ReactRouter from 'react-router';
import Home from './src/components/home';
import { Provider } from 'react-redux';
import { store } from './src/config/store'
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import { client } from './src/config/apolloClient'
import Demo from './army/armyDemo';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={ client }>
        <Provider store={ store }>
          <Router>
            <div className="App">
              {/*<Demo />*/ }
              <Home />
            </div>
          </Router>
        </Provider>
      </ApolloProvider >
    );
  }
}

export default App;
