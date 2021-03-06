import 'typename-monkey-patch';


import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import ReactRouter from 'react-router';
import Home from './src/components/home';
import { Provider } from 'react-redux';
import { store } from './src/config/store'
import { ApolloProvider } from 'react-apollo';
import { HashRouter as Router } from 'react-router-dom';
import { client } from './src/config/apolloClient';
import HttpsRedirect from 'react-https-redirect';


class App extends Component {
  render() {
    return (
      <HttpsRedirect>
        <ApolloProvider client={ client }>
          <Provider store={ store }>
            <Router>
              <div className="App">
                <Home />
              </div>
            </Router>
          </Provider>
        </ApolloProvider >
      </HttpsRedirect>
    );
  }
}

export default App;
