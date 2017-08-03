// app/index.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './containers/container1';
import reducers from './reducers';
import reduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
const App1 = () => {
  return (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App1;