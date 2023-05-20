import { StyleSheet } from 'react-native';
import { PlaceCard } from '../../AppStyles';

const styles = StyleSheet.create({
  titleProvider: {
    fontWeight: 'bold',
    fontSize: 20
  },
  photoProvider: {
    width: '100%',
    height: 250,
    alignSelf: 'center'
  },
  providerInfo: {
    color: 'black',
    margin: 10,
    fontSize: 19,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  container: PlaceCard.container,
  photo: PlaceCard.photo,
  title: PlaceCard.title,
  category: PlaceCard.category
});

export default styles;
