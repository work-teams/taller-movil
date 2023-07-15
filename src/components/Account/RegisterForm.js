//formulario de registro de datos
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput } from 'react-native';
import { insertUser } from '../../data/handleFirebase';
import styles from '../../../src/screens/Login/styles';

export default function RegisterForm() {
  const [formData, setFormData] = useState(defaultFormValues)

  const defaultFormValues = () => {
    return { username: "", password: "", confirm: "" }
  };

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text })
  }

  const handleRegister = async () => {
    try {
      const newUser = await insertUser(username, password);
      if (newUser) {
        Alert.alert('Inicio de sesión exitoso');
      } else {
        Alert.alert('Error', 'Nombre de usuario o contraseña incorrectos');
      }
    } catch (error) {
      Alert.alert('Error', 'Nombre de usuario o contraseña incorrectos');
    }
  };

  return (
    <View>
      <Text style={styles.title}>  </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Nombre de usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su nombre de usuario"
          onChange={(e) => onChange(e, "username")}
          keyboardType='username-address'
          errorUsername={setErrorUsername}
          defaultValue={formData.username}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Contraseña</Text>
        <TextInput style={styles.input}
          placeholder="Ingrese su contraseña"
          secureTextEntry
          onChange={(e) => onChange(e, "password")}


        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Confirme la contraseña</Text>
        <TextInput style={styles.input}
          placeholder="Ingrese su contraseña"
          secureTextEntry
          onChange={(e) => onChange(e, "confirm")}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
      >
        <Text style={styles.buttonText}>Registrar Nuevo Usuario</Text>

      </TouchableOpacity>

    </View>
  )
}