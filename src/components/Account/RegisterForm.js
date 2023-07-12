//formulario de registro de datos
import React, { useState } from 'react';
import styles from '../../../src/screens/Login/styles';
import { StyleSheet, TouchableOpacity,Text, View,TextInput } from 'react-native';

import { size } from 'lodash';
import { validateEmail } from '../../data/helpers';

export default function RegisterForm() {
  const [formData, setFormData] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirm, setErrorConfirm] = useState("")
    const [loading, setLoading] = useState(false)

    const onChange = (e, type) => {
        setFormData({ ...formData, [type]: e.nativeEvent.text })
    }

    const doRegisterUser = async() => {
        if (!validateData()) {
            return;
        }

        setLoading(true)
        const result = await registerUser(formData.email, formData.password)
        if (!result.statusResponse) {
            setLoading(false)
            setErrorEmail(result.error)
            return
        }

        const token = await getToken()
        const resultUser = await addDocumentWithId("users", { token }, getCurrentUser().uid)
        if (!resultUser.statusResponse) {
            setLoading(false)
            setErrorEmail(result.error)
            return
        }       

        setLoading(false)
        navigation.navigate("account")
    }

    const validateData = () => {
        setErrorConfirm("")
        setErrorEmail("")
        setErrorPassword("")
        let isValid = true

        if(!validateEmail(formData.email)) {
            setErrorEmail("Debes de ingresar un email válido.")
            isValid = false
        }

        if(size(formData.password) < 6) {
            setErrorPassword("Debes ingresar una contraseña de al menos seis carácteres.")
            isValid = false
        }

        if(size(formData.confirm) < 6) {
            setErrorConfirm("Debes ingresar una confirmación de contraseña de al menos seis carácteres.")
            isValid = false
        }

        if(formData.password !== formData.confirm) {
            setErrorPassword("La contraseña y la confirmación no son iguales.")
            setErrorConfirm("La contraseña y la confirmación no son iguales.")
            isValid = false
        }

        return isValid
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
          errorEmail={setErrorEmail}
          defaultValue={formData.email}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Contraseña</Text>
        <TextInput style={styles.input}
          placeholder="Ingrese su contraseña"
          secureTextEntry
          onChange={(e)=> onChange(e,"password")}
          errorMessage={setErrorPassword}
          defaultValue={formData.password}
          
          
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Confirme la contraseña</Text>
        <TextInput style={styles.input}
          placeholder="Ingrese su contraseña"
          secureTextEntry
          onChange={(e)=> onChange(e,"confirm")}
          errorMessage={setErrorConfirm}
          defaultValue={formData.confirm}
        />
      </View>

      <TouchableOpacity
		style={styles.button}
        onPress={() => doRegisterUser()}
      >
        <Text style={styles.buttonText}>Registrar Nuevo Usuario</Text>
        
      </TouchableOpacity>

    </View>
  )
}