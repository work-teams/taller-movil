import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Home from '../components/PanelSuperior';
import PanelSuperior from '../components/PanelSuperior';
import EnlacesTransporte from '../components/EnlacesTransporte';
import BannerVertical from '../components/BannerVertical';
import BannerHorizontal from '../components/BannerHorizontal';
import MenuInferior from '../components/MenuInferior';

export default class App extends Component {
  render() {
    return (
      <View style={styles.body}>
        <PanelSuperior />

        <EnlacesTransporte />

        <View style={styles.containerTexto}>
          <Text style={styles.textTitle}>Cerca de mi</Text>
          <Text style={styles.text}>Ver todo</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.containerVertical}>
            <BannerVertical />
            <BannerVertical />
          </View>

          <View style={styles.containerTexto}>
            <Text style={styles.textTitle}>Popular para mi</Text>
            <Text style={styles.text}>Ver todo</Text>
          </View>

          <View style={styles.containerHorizontal}>
            <BannerHorizontal />
          </View>
        </View>

        <MenuInferior />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  containerTexto: {
    width: '100%',
    justifyContent: 'space-between',
    paddingLeft: 17,
    paddingRight: 17,
    flexDirection: 'row',
  },
  containerVertical: {
    width: '100%',
    height: '58%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  containerHorizontal: {
  },
  text: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 17,
    color: '#F88E56',
  },
  textTitle: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 24,
  },
});
