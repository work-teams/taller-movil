import React from 'react';
import {
  Button,
  Alert,
  TextInput
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Login = ({navigation}) => {

  const [user, onChangeUser] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header }>
        <Text style={styles.titleLogin}>Turist App</Text>
      </View>
      <View style={styles.formLogin}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUser}
          value={user}
          placeholder="Usuario"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Contraseña"
          autoComplete='password'
          secureTextEntry={true}
        />
        <View style={styles.buttonLoginContainer}>
          <Button
            style={styles.buttonLogin}
            title="Iniciar"
            color ='#FB9057'
            onPress={() => navigation.navigate('Home')}
          />
        </View>

      </View>



    </View>
  );
}

export default Login

const styles = StyleSheet.create({
  container: {
    padding: 0,
    height:50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  header: {
    width: '100%',
    paddingBottom: 20,
    height: 176,
    left: 0,
    top: 0,
    backgroundColor: '#1FC9C2',
    alignItems: 'center',
    justifyContent: "flex-end",
  },
  titleLogin: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  },
  formLogin: {
    margin: '40%',
    padding: 40,
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    // margin: 12,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10
  },
  buttonLoginContainer: {
    marginTop: 50,
    width:'100%'
  },
  buttonLogin:{
  }

});
