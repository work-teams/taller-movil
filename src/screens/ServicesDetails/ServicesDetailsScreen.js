import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import { getServiceName, getAllServices } from "../../data/MockDataAPI";

export default function ServicesDetailsScreen(props) {
  const { navigation, route } = props;

  const item = route.params?.services;
  const servicesArray = getAllServices(item);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.title,
      headerTitleStyle: {
        fontSize: 16,
      },
    });
  }, []);

  const onPressService = (item) => {
    let name = getServiceName(item.serviceId);
    let service = item.serviceId;
    navigation.navigate("Service", { service, name });
  };

  const renderService = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressService(item[0])}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item[0].photo_url }} />
        <Text style={styles.title}>{item[0].name}</Text>
        <Text style={{ color: "grey" }}>{item[1]}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={3} data={servicesArray} renderItem={renderService} keyExtractor={(item) => `${item.placeId}`} />
    </View>
  );
}
