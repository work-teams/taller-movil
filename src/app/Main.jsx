import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home/Home';
import Login from './login/Login';
import Header from './components/Header';
import NearbyTouristPlaces from './nearbyTouristPlaces/NearbyTouristPlaces';
import Activities from './activities/Activities';

const Stack = createNativeStackNavigator();

const Main = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
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
          name="NearbyTouristPlaces"
          component={NearbyTouristPlaces}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Activities"
          component={Activities}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main