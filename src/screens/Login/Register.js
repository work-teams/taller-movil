//registro 
//aqui se redirige a el formulario de registro
import React from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import RegisterForm from '../../components/Account/RegisterForm'



export default function Register() {
  return (
    <ScrollView>
        <RegisterForm/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})