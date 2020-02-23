/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
// import HomeScreen from './src/screens/HomeScreen'
import Menu from './src/screens/Menu'
import { Provider } from 'react-redux'
import configureStore from './src/store'

const store = configureStore()
const App = () => {
  return (
    <Provider store={store}>
      <Menu></Menu>
    </Provider>
  );
};

export default App;


