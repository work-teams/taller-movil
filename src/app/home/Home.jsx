import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import Home from '../components/PanelSuperior';
import PanelSuperior from '../components/PanelSuperior';
import EnlacesTransporte from '../components/EnlacesTransporte';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PanelSuperior />
        <EnlacesTransporte />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  text: {
    // fontSize: 20,
    // textAlign: 'center',
    // margin: 10,
  },
});
