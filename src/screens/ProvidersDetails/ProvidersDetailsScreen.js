import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import { getProviderName, getAllProviders } from "../../data/MockDataAPI";

export default function ProvidersDetailsScreen(props) {
  const { navigation, route } = props;

  const item = route.params?.providers;
  const providersArray = getAllProviders(item);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.title,
      headerTitleStyle: {
        fontSize: 16,
      },
    });
  }, []);

  const onPressProvider = (item) => {
    let name = getProviderName(item.providerId);
    let provider = item.providerId;
    navigation.navigate("Provider", { provider, name });
  };

  const renderProvider = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressProvider(item[0])}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item[0].photo_url }} />
        <Text style={styles.title}>{item[0].name}</Text>
        <Text style={{ color: "grey" }}>{item[1]}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={3} data={providersArray} renderItem={renderProvider} keyExtractor={(item) => `${item.placeId}`} />
    </View>
  );
}
