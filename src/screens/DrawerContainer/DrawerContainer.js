import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";

export default function DrawerContainer(props) {
  const { navigation } = props;
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <MenuButton
          title="INICIO"
          source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("Inicio");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="CATEGORÍAS"
          source={require("../../../assets/icons/category.png")}
          onPress={() => {
            navigation.navigate("Categorías");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="BUSCAR"
          source={require("../../../assets/icons/search.png")}
          onPress={() => {
            navigation.navigate("Search");
            navigation.closeDrawer();
          }}
        />
      </View>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
