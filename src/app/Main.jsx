import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home/Home';
import Login from './login/Login';
import Header from './components/Header';
import PanelSuperior from './components/PanelSuperior';
import EnlacesTransporte from './components/EnlacesTransporte';
import BannerVertical from './components/BannerVertical';
import MenuInferior from './components/MenuInferior';

const Stack = createNativeStackNavigator();

const Main = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Header"
          component={Header}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="PanelSuperior"
          component={PanelSuperior}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="EnlacesTransporte"
          component={EnlacesTransporte}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="BannerVertical"
          component={BannerVertical}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="MenuInferior"
          component={MenuInferior}
          options={{
            headerShown: false
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main