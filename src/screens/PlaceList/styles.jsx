import { StyleSheet } from 'react-native';
import { PlaceCard } from '../../AppStyles';

const styles = StyleSheet.create({
  container: PlaceCard.container,
  photo: PlaceCard.photo,
  title: PlaceCard.title,
  category: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center'
  },
});

export default styles;