import { StatusBar } from "expo-status-bar";
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Alert, TextInput } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container2}>
                    <Text style={styles.text}>Locación</Text>
                    <Icon name="google-maps" size={18} position="absolute" left={27} top={93} color='#FFF' />
                    <Text style={styles.titulo}>Lima, PE</Text>
                    <Icon name="chevron-down" size={18} position="absolute" left={129} top={93} color='#FFF' />

                    <Icon name="magnify" size={18} position="absolute" left={37} top={145} color='#FFF' />
                    <TextInput
                        style={styles.input}
                        // onChangeText={onChangeUser}
                        // value={user}
                        placeholder="Buscar Hotel, Vuelos etc.."
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    container2: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1FC9C2',
    },
    text: {
        position: "absolute",
        width: 64,
        height: 18,
        left: 16,
        top: 47,
        fontWeight: 400,
        fontSize: 15,
        lineHeight: 18,
        textAlign: 'center',
        margin: 10,
        color: '#FFF',
    },
    titulo: {
        position: "absolute",
        width: 72,
        height: 21,
        left: 48,
        top: 91,

        fontSize: 17.5,
        lineHeight: 21,
        color: '#FFF',
    },
    input: {
        position: "absolute",
        width: 270,
        height: 43,
        left: 67,
        top: 132,
        fontSize: 14,
        color: '#FFF',
        //backgroundColor: "#fff",
        //lineHeight: 21,
    },
});
