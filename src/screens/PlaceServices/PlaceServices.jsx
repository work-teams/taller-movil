import React, { useLayoutEffect } from "react";
import { View, Text } from "react-native";

export default function PlaceServicesScreen(props) {
  const { navigation, route } = props;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        color: '#ffffff',
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        paddingTop: 12,
        flex: 1,
      },
      title: route.params?.title,
      headerRight: () => <View />,
    });
  }, []);
  return (
    <View>
      <Text>Servicios</Text>
    </View>
  );
}