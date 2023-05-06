import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Alert, TouchableHighlight, Animated, FlatList, SafeAreaView, SectionList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import { Surface, Stack, Icon, IconComponentProvider } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const ExpandableViewNearbyTouristPlaces = ({ navigation, place }) => {
  const [height] = useState(new Animated.Value(380));
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    Animated.timing(height, {
      toValue: !isExpanded ? 800 : 380,
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
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
        <IconComponentProvider IconComponent={MaterialCommunityIcons}>
          <Icon name="star" size={30} color="gold" />
          <Icon name="star" size={30} color="gold" />
          <Icon name="star" size={30} color="gold" />
          <Icon name="star-outline" size={30} color="gold" />
          <Icon name="star-outline" size={30} color="gold" />
        </IconComponentProvider>
        <TouchableHighlight underlayColor="#dddddd" onPress={() => { Alert.alert("Ver reseñas") }} style={styles.buttonReview}>
          <Text style={{ paddingHorizontal: 10, paddingVertical: 5, color: '#FB9057', fontSize: 12 }}>Ver Reseñas</Text>
        </TouchableHighlight>
      </View>
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
        <TouchableHighlight
          underlayColor="#dddddd"
          onPress={() => {
            navigation.navigate('Activities', { title: place.name });
            setIsExpanded(true);
          }}
          style={styles.buttonViewActivities}>
          <Text style={{ paddingHorizontal: 10, paddingVertical: 5, color: '#ffffff' }}>Actividades</Text>
        </TouchableHighlight>
      </View>
      {!isExpanded ?
        <View style={{ marginTop: 15, paddingHorizontal: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Descripción</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, facilis minus! Esse id velit voluptas. Magnam unde molestiae impedit incidunt ad quasi doloremque! Asperiores ducimus consectetur dolorem hic nemo dignissimos deserunt, perspiciatis ullam nesciunt nihil dolor commodi temporibus distinctio veniam saepe perferendis inventore nobis. Sunt aliquid cum quasi accusantium temporibus molestiae, hic consequuntur fugit architecto, quidem odio rerum magni laudantium nesciunt voluptatibus in accusamus?</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{"\n"}Fotos del destino</Text>
        </View>
        : <View></View>
      }

    </Animated.View>
  );
};

const NearbyTouristPlaces = ({ navigation }) => {
  const onBack = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title='Lugares cercanos' onBack={onBack}></Header>
      <View style={styles.places}>
        <FlatList
          data={places}
          renderItem={({ item }) => (
            <ExpandableViewNearbyTouristPlaces place={item} navigation={navigation} />

          )}
          keyExtractor={item => item.id}
        />
      </View >
    </View>
  );
}

export default NearbyTouristPlaces

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flex: 1,
  },
  places: {
    flex: 1
  },
  buttonReview: {
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: '#FB9057',
    borderWidth: 1,
    marginLeft: 10
  },
  buttonViewActivities: {
    borderRadius: 10,
    backgroundColor: '#FB9057'
  }

});

export const places = [{
  id: 0, // Used in JSX as a key
  name: 'Costa Verde',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'https://elcomercio.pe/resizer/eo8vfPVhLxPUqrXmP29YexXP1yw=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/JTY5T2CCERGOBFHVFDZZPEEHEI.jpg'
}, {
  id: 1, // Used in JSX as a key
  name: 'Barranco',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'https://faro.travel/blog/wp-content/uploads/2018/08/Distrito-de-Barranco-Lima-1024x684.jpg'
}, {
  id: 2, // Used in JSX as a key
  name: 'Centro hístorico de Lima',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'https://www.lima2019.pe/sites/default/files/2019-08/Portada.jpg'
}, {
  id: 3, // Used in JSX as a key
  name: 'Churin',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSew8tmcl_FQ0kle9CzS5TGxhBrwU7PCqxZm9jMpozuX-h2OBGYYGs2CSqd6aSrydDK4Jc&usqp=CAU'
}, {
  id: 4, // Used in JSX as a key
  name: 'Viñak',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'https://elcomercio.pe/resizer/D-K5aCKEpj3BisfD8JBaGC0eIMM=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/PH6GE2ACRJFOHF25H2O6DA3DQY.jpg'
}];