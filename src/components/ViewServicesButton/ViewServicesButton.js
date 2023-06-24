import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default function ViewServicesButton (props) {
    return (
      <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={props.onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>Ver servicios</Text>
        </View>
      </TouchableHighlight>
    );
}

ViewServicesButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};
