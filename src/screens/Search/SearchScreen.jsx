import React, { useEffect, useLayoutEffect, useState } from "react";
import { FlatList, Text, View, Image, TouchableHighlight, Pressable } from "react-native";
import styles from "./styles";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName, getPlacesByPlaceName, getPlacesByCategoryName } from "../../data/MockDataAPI";
import { TextInput } from "react-native-gesture-handler";

export default function SearchScreen(props) {
  const { navigation } = props;

  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerTitle: () => (
        <View style={styles.searchContainer}>
          <Image style={styles.searchIcon} source={require("../../../assets/icons/search.png")} />
          <TextInput
            style={styles.searchInput}
            onChangeText={handleSearch}
            placeholder="Buscar lugares turísticos"
            value={value}
          />
          <Pressable onPress={() => handleSearch("")}>
            <Image style={styles.closeIcon} source={require("../../../assets/icons/close.png")} />
          </Pressable>
        </View>
      ),
      headerRight: () => <View />,
    });
  }, [value]);

  useEffect(() => { }, [value]);

  const handleSearch = (text) => {
    setValue(text);
    var placeArray1 = getPlacesByPlaceName(text);
    var placeArray2 = getPlacesByCategoryName(text);
    var aux = placeArray1.concat(placeArray2);
    var placeArray = [...new Set(aux)];

    if (text == "") {
      setData([]);
    } else {
      setData(placeArray);
    }
  };

  const onPressPlace = (item) => {
    //TODO: Agregar Vista PlaceScreen
    navigation.navigate("Place", { item });
  };

  const renderPlaces = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressPlace(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}  >{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={data} renderItem={renderPlaces} keyExtractor={(item) => `${item.placeId}`} />
    </View>
  );
}
