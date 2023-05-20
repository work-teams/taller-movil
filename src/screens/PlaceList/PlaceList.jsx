import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import { getPlaces, getCategoryName } from "../../data/MockDataAPI";

export default function PlacesListScreen(props) {
  const { navigation, route } = props;

  const item = route?.params?.category;
  const placesArray = getPlaces(item.id);

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

  const onPressPlace = (item) => {
    navigation.navigate("Place", { item });
  };

  const renderPlaces = ({ item }) => (
    <TouchableHighlight style={styles.container} underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressPlace(item)}>
      <View>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={placesArray} renderItem={renderPlaces} keyExtractor={(item) => `${item.placeId}`} />
    </View>
  );
}