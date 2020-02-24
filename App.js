/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import HomeScreen from './src/screens/HomeScreen'
import Menu from './src/screens/Menu'
import { Provider } from 'react-redux'
import store from './src/store'
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// const store = configureStore()

const Stack = createStackNavigator()

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen'>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Menu" option={{title: 'Menu'}} component={Menu} />
        </Stack.Navigator>
      {/* <Menu></Menu> */}
      </NavigationContainer>
    </Provider>
  );
};

export default App;


