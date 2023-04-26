import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/app/home/Home';
import Login from './src/app/login/Login';
import Main from './src/app/Main';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
      <Main></Main>
    </>
  );
}
