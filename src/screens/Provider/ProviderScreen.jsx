import React, { useLayoutEffect } from "react";
import { FlatList, ScrollView, Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import { getProviderUrl, getPlacesByProvider, getCategoryName } from "../../data/MockDataAPI";

export default function ProviderScreen(props) {
  const { navigation, route } = props;

  const providerId = route.params?.provider;
  const providerUrl = getProviderUrl(providerId);
  const providerName = route.params?.name;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.name,
    });
  }, []);

  const onPressPlace = (item) => {
    navigation.navigate("Place", { item });
  };

  const renderPlaces = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressPlace(item)}>
      <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressPlace(item)}>
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: item.photo_url }} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
        </View>
      </TouchableHighlight>
    </TouchableHighlight>
  );

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={{ borderBottomWidth: 0.4, marginBottom: 10, borderBottomColor: "grey" }}>
        <Image style={styles.photoProvider} source={{ uri: "" + providerUrl }} />
      </View>
      <Text style={styles.providerInfo}>Places with {providerName}:</Text>
      <View>
        <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={getPlacesByProvider(providerId)} renderItem={renderPlaces} keyExtractor={(item) => `${item.placeId}`} />
      </View>
    </ScrollView>
  );
}
