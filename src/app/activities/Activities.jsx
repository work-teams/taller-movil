import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Animated, Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import Header from "../components/Header";
import { FlatList } from "react-native";
import { places } from "../nearbyTouristPlaces/NearbyTouristPlaces";
import { Icon, IconComponentProvider } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const ExpandableViewActivities = ({ navigation, place }) => {
  const [height] = useState(new Animated.Value(290));
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    Animated.timing(height, {
      toValue: !isExpanded ? 800 : 290,
      duration: 150,
      useNativeDriver: false
    }).start();
  }, [isExpanded, height]);

  // console.log('rerendered');

  return (
    <Animated.View
      style={{ height, backgroundColor: "white", width: '100%', marginBottom: 10 }}
    >
      <TouchableHighlight
        onPress={() => { setIsExpanded(!isExpanded); }}
      >
        <Image
          source={{
            uri: place.imageId,
            height: 240,
          }}
          style={{ width: '100%' }}
          alt={place.name}
        />
      </TouchableHighlight>
      <View style={{ width: '100%', height: 50, flexDirection: 'row', justifyContent: 'center', paddingTop: 5 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{place.name}</Text>
      </View>
      {!isExpanded ?
        <View style={{ marginTop: 15, paddingHorizontal: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Información</Text>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatum itaque eaque laudantium sit et hic, facere minus pariatur vero maiores, blanditiis molestiae dolorem ex esse eum libero veniam exercitationem! Ipsa earum totam hic dignissimos ullam nemo nihil alias, beatae porro laudantium est illo libero veniam! Dolorum beatae, cum consequatur rem sed blanditiis doloremque quas officia vero autem, amet vitae architecto accusamus ratione explicabo distinctio debitis voluptatem nihil odio quasi adipisci voluptatum error? Sit nostrum recusandae, sunt sequi sed, quibusdam reiciendis quam facilis quae pariatur voluptates? Laboriosam unde temporibus placeat id amet. Id, aperiam. Nemo ipsam iure necessitatibus ab earum.</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{"\n"}Enlaces</Text>
          <View style={{ flexDirection: "row", padding: 20, justifyContent:"center" }}>
            <IconComponentProvider IconComponent={MaterialCommunityIcons}>
              <Icon style={styles.link} name="facebook" size={60} color="black" />
              <Icon style={styles.link} name="instagram" size={60} color="black" />
              <Icon style={styles.link} name="office-building" size={60} color="black" />
              <Icon style={styles.link} name="whatsapp" size={60} color="black" />
            </IconComponentProvider>
          </View>
        </View>
        : <View></View>
      }

    </Animated.View>
  );
};

const Activities = ({ navigation }) => {
  const onBack = () => {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title={"Actividades"} onBack={onBack}></Header>
      <View style={styles.activities}>
        <FlatList
          data={places}
          renderItem={({ item }) => (
            <ExpandableViewActivities place={item} navigation={navigation} />

          )}
          keyExtractor={item => item.id}
        />
      </View >
      <View style={styles.labelActivities} >
      </View>
    </View>
  );
};

export default Activities;

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flex: 1
  },
  description: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activities: {
    flex: 1
  },

  link:{
    marginHorizontal:10
  }

});

