import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
    marginHorizontal:10
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    fontSize: 16
  },
  button: {
    marginTop: 20,
    backgroundColor: '#FB9057',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 280,
    height: 40,
    borderRadius: 20
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: "center"
  },
  
  buttonRegister:{
    color:"#442484",
    fontWeight : "bold"
  },
  textAcount:{
    marginHorizontal: 20,
    marginVertical:1
  }
});

export default styles;
