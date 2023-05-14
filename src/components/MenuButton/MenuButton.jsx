import React from "react";
import { TouchableHighlight, Image, Text, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

export default function MenuButton(props) {
  const { title, onPress, source } = props;

  return (
    <TouchableHighlight onPress={onPress} underlayColor="rgba(128, 128, 128, 0.1)">
      <View>
        <Image source={source} />
        <Text>{title}</Text>
      </View>
    </TouchableHighlight>
  );
}

MenuButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
