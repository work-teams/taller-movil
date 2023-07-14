import React, { useLayoutEffect } from "react";
import { FlatList, ScrollView, Text, View, Image, TouchableHighlight, TouchableOpacity, Linking } from "react-native";
import styles from "./styles";
import { getServiceUrl, getPlacesByService, getCategoryName, getServiceDescription } from "../../data/handleFirebase";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ServiceScreen(props) {
  const { navigation, route } = props;

  const serviceId = route.params?.service;
  const serviceUrl = getServiceUrl(serviceId);
  const description = getServiceDescription(serviceId);
  const serviceName = route.params?.name;
  const facebookURL = 'https://www.facebook.com';
  const instagramURL = 'https://www.instagram.com';
  const twitterURL = 'https://www.twitter.com';

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.name,
    });
  }, []);

  const onPressPlace = (item) => {
    navigation.navigate("Lugar", { item });
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

  function handleFacebookPress() {
    Linking.canOpenURL(facebookURL)
      .then(supported => {
        if (supported) {
          Linking.openURL(facebookURL); // Abre la URL en el navegador predeterminado del dispositivo
        } else {
          console.log('No se puede abrir la URL de Facebook');
        }
      })
      .catch(error => console.log(error));
  };

  function handleInstagramPress() {
    Linking.canOpenURL(instagramURL)
      .then(supported => {
        if (supported) {
          Linking.openURL(instagramURL); // Abre la URL en el navegador predeterminado del dispositivo
        } else {
          console.log('No se puede abrir la URL de Facebook');
        }
      })
      .catch(error => console.log(error));
  };

  function handleTwitterPress() {
    Linking.canOpenURL(twitterURL)
      .then(supported => {
        if (supported) {
          Linking.openURL(twitterURL); // Abre la URL en el navegador predeterminado del dispositivo
        } else {
          console.log('No se puede abrir la URL de Facebook');
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={{ borderBottomWidth: 0.4, marginBottom: 10, borderBottomColor: "grey" }}>
        <Image style={styles.photoService} source={{ uri: "" + serviceUrl }} />
      </View>
      <View>
        <Text style={styles.serviceInfo}>Descripción</Text>
      </View>
      <View>
        <Text style={styles.contactTitle}>{description}</Text>
      </View>
      <View>
        <Text style={styles.serviceInfo}>Enlaces de contacto:</Text>
      </View>
      <View style={styles.contactContent}>
        <TouchableOpacity style={styles.photoContact} onPress={handleFacebookPress}>
          <Icon name="facebook" size={50} color="#3b5998" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.photoContact} onPress={handleInstagramPress}>
          <Icon name="instagram" size={50} color="#833AB4" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.photoContact} onPress={handleTwitterPress}>
          <Icon name="twitter" size={50} color="#00acee" />
        </TouchableOpacity>
      </View>
      <Text style={styles.serviceInfo}>Lugares con {serviceName}:</Text>
      <View>
        <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={getPlacesByService(serviceId)} renderItem={renderPlaces} keyExtractor={(item) => `${item.placeId}`} />
      </View>
    </ScrollView>
  );
}
