import { StyleSheet } from 'react-native';
import { PlaceCard } from '../../AppStyles';

const styles = StyleSheet.create({
  titleService: {
    fontWeight: 'bold',
    fontSize: 20
  },
  photoService: {
    width: '100%',
    height: 250,
    alignSelf: 'center'
  },
  photoContact: {
    flex: 0.2,
    marginHorizontal:10,
    justifyContent:'center',
    textAlign:'center'
  },
  contactContent: {
    paddingTop:20,
    flexDirection:'row',
    width:'100%',
    height:80,
    justifyContent:'center'
  },
  contactTitle:{
    marginLeft:10
  },
  serviceInfo: {
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
