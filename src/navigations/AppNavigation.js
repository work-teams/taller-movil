import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer' 
import HomeScreen from '../screens/Home/HomeScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import PlaceScreen from '../screens/Place/PlaceScreen';
import PlacesListScreen from '../screens/PlacesList/PlacesListScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import ServiceScreen from '../screens/Service/ServiceScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import ServicesDetailsScreen from '../screens/ServicesDetails/ServicesDetailsScreen';

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
            paddingTop:12
          }
      }}
    >
      <Stack.Screen name='Inicio' component={HomeScreen} />
      <Stack.Screen name='Categorías' component={CategoriesScreen}/>
      <Stack.Screen name='Lugar' component={PlaceScreen}/>
      <Stack.Screen name='PlacesList' component={PlacesListScreen} />
      <Stack.Screen name='Service' component={ServiceScreen} />
      <Stack.Screen name='Search' component={SearchScreen} />
      <Stack.Screen name='ServicesDetails' component={ServicesDetailsScreen} />
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