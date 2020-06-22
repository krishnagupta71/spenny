import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/scenes/homePage'
import { Provider } from 'react-redux'
import  Store from './src/store'

export default function App() {
  return (

    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

