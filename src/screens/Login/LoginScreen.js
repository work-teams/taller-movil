import React, { useState, useLayoutEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { handleLogin } from './handleLogin';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

export default LoginScreen = (props) => {
  const { navigation } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

	useLayoutEffect(() => {
    navigation.setOptions({
			headerTitle: () => (
        <View/>
      ),
    });
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Nombre de usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su nombre de usuario"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Contraseña</Text>
        <TextInput
					style={styles.input}
          placeholder="Ingrese su contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <CreateAccount/>

      <TouchableOpacity
				style={styles.button}
        onPress={() => handleLogin(navigation, username, password)}
      >
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
};

function CreateAccount(props){
  const navigation = useNavigation()
  return(
    <Text style={styles.textAcount}>
      ¿Aun no tienes tu cuenta?{' '}
      <Text 
        style={styles.buttonRegister}
         onPress={()=>navigation.navigate("register") }>
          Regístrarte
      </Text>

    </Text>
  )
}