//formulario de registro de datos
import React, { useState } from 'react';
import styles from '../../../src/screens/Login/styles';
import { StyleSheet, TouchableOpacity,Text, View,TextInput } from 'react-native';

export default function RegisterForm() {
    const [formData,setFormData] = useState(defaultFormValues)
    
    const defaultFormValues=() => {
        return {email : "",password : "",confirm:""}
    };

    const onChange = (e,type) => {
        setFormData({...formData,[type]:e.nativeEvent.text})
    }
  
    return (
    <View>
        <Text style={styles.title}>  </Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Nombre de usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su nombre de usuario"
          onChange={(e)=> onChange(e,"email")}
          keyboardType='email-address'
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Contraseña</Text>
        <TextInput style={styles.input}
          placeholder="Ingrese su contraseña"
          secureTextEntry
          onChange={(e)=> onChange(e,"password")}
          
          
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Confirme la contraseña</Text>
        <TextInput style={styles.input}
          placeholder="Ingrese su contraseña"
          secureTextEntry
          onChange={(e)=> onChange(e,"confirm")}
        />
      </View>

      <TouchableOpacity
		style={styles.button}
        onPress={() => console.log(formData)}
      >
        <Text style={styles.buttonText}>Registrar Nuevo Usuario</Text>
        
      </TouchableOpacity>

    </View>
  )
}