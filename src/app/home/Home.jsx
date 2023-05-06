import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import Home from '../components/PanelSuperior';
import PanelSuperior from '../components/PanelSuperior';
import EnlacesTransporte from '../components/EnlacesTransporte';
import BannerVertical from '../components/BannerVertical';

export default class App extends Component {
  render() {
    return (
      <View style={styles.body}>
        <PanelSuperior />
        <EnlacesTransporte />
        <View style={styles.container}>
          <BannerVertical />
          <BannerVertical />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FFF',
  },
  container: {
    flexDirection: 'row',
    // flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  text: {
    // fontSize: 20,
    // textAlign: 'center',
    // margin: 10,
  },
});
