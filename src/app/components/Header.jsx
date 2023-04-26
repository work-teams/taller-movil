import React from 'react';
import {
  Button,
  Alert,
  TextInput
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppBar, IconButton } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Header = ({ onBack, title }) => {



  return (
    <AppBar
      style={styles.header}
      title={title}
      centerTitle={true}
      leading={props => (
        <IconButton
          icon={props => <Icon name="arrow-left" {...props} />} {...props}
          onPress={onBack} />
      )}
      trailing={props => (
        <IconButton
          icon={props => <Icon name="menu" {...props} />}
          {...props}
        />
      )}
    />

  );
}

export default Header

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingTop: 25,
    paddingBottom: 0,
    height: 80,
    left: 0,
    top: 0,
    backgroundColor: '#1FC9C2',
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  }

});
