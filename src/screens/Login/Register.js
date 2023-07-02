//registro 
//aqui se redirige a el formulario de registro
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RegisterForm from '../../components/Account/RegisterForm'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

export default function Register() {
  return (
    <KeyboardAwareScrollView>
      <RegisterForm/>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({})