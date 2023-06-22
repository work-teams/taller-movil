import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer' 
import HomeScreen from '../screens/Home/HomeScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import PlaceScreen from '../screens/Place/PlaceScreen';
import PlacesListScreen from '../screens/PlacesList/PlacesListScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import ProviderScreen from '../screens/Provider/ProviderScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import ProvidersDetailsScreen from '../screens/ProvidersDetails/ProvidersDetailsScreen';

 const Stack = createStackNavigator();

function MainNavigator() {
  return(
    <Stack.Navigator
      screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1,
          }
      }}
    >
      <Stack.Screen name='Inicio' component={HomeScreen} />
      <Stack.Screen name='Categorías' component={CategoriesScreen}/>
      <Stack.Screen name='Lugar' component={PlaceScreen}/>
      <Stack.Screen name='PlacesList' component={PlacesListScreen} />
      <Stack.Screen name='Provider' component={ProviderScreen} />
      <Stack.Screen name='Search' component={SearchScreen} />
      <Stack.Screen name='ProvidersDetails' component={ProvidersDetailsScreen} />
    </Stack.Navigator>
  )
} 



 const Drawer = createDrawerNavigator();

function DrawerStack() {
  return(
    <Drawer.Navigator
      drawerPosition='left'
      initialRouteName='Main'
      drawerStyle={{
        width: 250
      }}
      screenOptions={{headerShown: false}}
      drawerContent={({navigation})=> <DrawerContainer navigation={navigation}/>}
    >
      <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>
  )
} 


 export default function AppContainer() {
  return(
    <NavigationContainer>
      <DrawerStack/>
    </NavigationContainer>
  )
} 
 

console.disableYellowBox = true;