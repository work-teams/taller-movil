import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import SearchScreen from '../screens/Search/SearchScreen';
import PlaceScreen from '../screens/Place/Place';
import PlacesListScreen from '../screens/PlaceList/PlaceList';
import PlaceServicesScreen from '../screens/PlaceServices/PlaceServices';

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center',
          flex: 1,
        },
        headerStyle: { backgroundColor: '#1FC9C2' }
      }}
    >
      <Stack.Screen name='Search' component={SearchScreen}/>
      <Stack.Screen name='Categories' component={CategoriesScreen} options={{ title: 'Categorías'}}/>
      <Stack.Screen name='Place' component={PlaceScreen}/>
      <Stack.Screen name='PlacesList' component={PlacesListScreen} />
      <Stack.Screen name='PlaceServices' component={PlaceServicesScreen} />
    </Stack.Navigator>
  );
}



const Drawer = createDrawerNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerPosition='left'
      initialRouteName='Main'
      drawerStyle={{
        width: 250
      }}
      screenOptions={{ headerShown: false }}
      drawerContent={({ navigation }) => <DrawerContainer navigation={navigation} />}
    >
      <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>
  );
}


export default function AppContainer() {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  );
}


console.disableYellowBox = true;