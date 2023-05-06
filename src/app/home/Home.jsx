import React from 'react';
import {
  Button,
  Alert,
  TextInput
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Home = ({ navigation }) => {

  const onBack = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title='Principal' onBack={onBack}></Header>
      <View style ={styles.location}>
        <Text>Ubicación: <Icon name="google-maps" size={15}/>Lima, PE <Icon name="arrow-down-drop-circle-outline" size={14}/></Text>
        <Button title="Lugares cercanos" onPress={() => navigation.navigate('NearbyTouristPlaces')}></Button>
      </View>
    </View>
  );
}

export default Home

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flex: 1,
    backgroundColor: '#fff',
  },
  location:{
    padding:10
  }

});
