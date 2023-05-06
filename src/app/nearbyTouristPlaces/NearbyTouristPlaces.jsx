import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Alert, TouchableHighlight } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import { Surface, Stack } from "@react-native-material/core";

const NearbyTouristPlaces = ({ navigation }) => {
  const onBack = () => {
    navigation.goBack();
  }

  const listItems = people.map(person =>

    <Surface
      elevation={2}
      category="large"
      style={{ width: '100%', height: 380 }}
    >
      <TouchableHighlight
        onPress={() => { navigation.navigate('DescriptionTouristPlace',{title: person.name}) }}
      >
        <Image
          source={{
            uri: person.imageId,
            height: 240,
            width: '100%'
          }}
          alt={person.name}
        />
      </TouchableHighlight>

      <Text>Hola</Text>
    </Surface>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title='Lugares cercanos' onBack={onBack}></Header>
      <ScrollView style={styles.places}>
        <Stack fill center spacing={10}>
          {listItems}
        </Stack>
      </ScrollView>
    </View>
  );
}

export default NearbyTouristPlaces

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flex: 1,
    backgroundColor: '#fff',
  },
  places: {
    paddingVertical: 10,
    paddingHorizontal: 20,

  }

});

export const people = [{
  id: 0, // Used in JSX as a key
  name: 'Costa Verde',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'https://elcomercio.pe/resizer/eo8vfPVhLxPUqrXmP29YexXP1yw=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/JTY5T2CCERGOBFHVFDZZPEEHEI.jpg'
}, {
  id: 1, // Used in JSX as a key
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'https://faro.travel/blog/wp-content/uploads/2018/08/Distrito-de-Barranco-Lima-1024x684.jpg'
}, {
  id: 2, // Used in JSX as a key
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'https://www.lima2019.pe/sites/default/files/2019-08/Portada.jpg'
}, {
  id: 3, // Used in JSX as a key
  name: 'Percy Lavon Julian',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSew8tmcl_FQ0kle9CzS5TGxhBrwU7PCqxZm9jMpozuX-h2OBGYYGs2CSqd6aSrydDK4Jc&usqp=CAU'
}, {
  id: 4, // Used in JSX as a key
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'https://elcomercio.pe/resizer/D-K5aCKEpj3BisfD8JBaGC0eIMM=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/PH6GE2ACRJFOHF25H2O6DA3DQY.jpg'
}];

export function getImageUrl(person) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    's.jpg'
  );
}