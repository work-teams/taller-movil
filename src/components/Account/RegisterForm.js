//formulario de registro de datos
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput } from 'react-native';
import { handleRegister } from './handleRegister'
import styles from '../../../src/screens/Login/styles';

export default function RegisterForm() {
  const [formData, setFormData] = useState(defaultFormValues)

  const defaultFormValues = () => {
    return { email: "", password: "", confirm: "" }
  };

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text })
  }

  return (
    <View>
      <Text style={styles.title}>  </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Nombre de usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su nombre de usuario"
          onChange={(e) => onChange(e, "email")}
          keyboardType='email-address'
          errorEmail={setErrorEmail}
          defaultValue={formData.email}
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
        onPress={() => handleRegister(email, password)} //console.log(formData)
      >
        <Text style={styles.buttonText}>Registrar Nuevo Usuario</Text>

      </TouchableOpacity>

    </View>
  )
}