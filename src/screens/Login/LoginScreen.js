import React, { useState, useLayoutEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { handleLogin } from './handleLogin';

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
    <View>
      <Text>Iniciar sesión</Text>
      
      <View>
        <Text>Nombre de usuario</Text>
        <TextInput
          placeholder="Ingrese su nombre de usuario"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View>
        <Text>Contraseña</Text>
        <TextInput
          placeholder="Ingrese su contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        onPress={() => handleLogin(navigation, username, password)}
      >
        <Text>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
};