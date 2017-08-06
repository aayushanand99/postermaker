// app/index.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import reducers from './reducers';
import reduxPromise from 'redux-promise';
import AppWithNavigationState from './AppNavigator';


const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
const App1 = () => {
  return (
  <Provider store={createStoreWithMiddleware(reducers)}>
   <AppWithNavigationState /> 
  </Provider>
  );
}

export default App1;