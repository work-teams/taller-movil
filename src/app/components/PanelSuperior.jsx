import { StatusBar } from "expo-status-bar";
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default class PanelSuperior extends Component {
    render() {
        return (

            <View style={styles.container}>

                <StatusBar style="auto" />
                
                <Text style={styles.text}>Locación</Text>

                <View style={styles.box1}>
                    <Icon name="google-maps" size={25} color='#FFF' />
                    <Text style={styles.titulo}>Lima, PE</Text>
                    <Icon name="chevron-down" size={18} color='#FFF' />
                </View>

                <View style={styles.box2}>
                    <View style={styles.boxSearch}>
                        <Icon name="magnify" size={18} color='#1FC9C2' />
                        <TextInput
                            style={styles.input}
                            placeholder="Buscar Hotel, Vuelos etc.."
                        />
                    </View>
                    <Icon name="tune" size={25} color='#FFF' />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        width: "100%",
        height: 200,
        justifyContent: 'center', // vertical
        borderBottomLeftRadius: 40,
        backgroundColor: '#1FC9C2',
        padding: 24,
    },
    text: {
        fontSize: 15,
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: 18,
        marginTop: 60,
        marginBottom: 6,
        color: '#FFF',
    },
    box1: {
        flexDirection: 'row',
        alignItems: 'baseline', // horizontal
        marginBottom: 20,
    },
    titulo: {
        fontSize: 17.5,
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: 21.18,
        color: '#FFF',
    },
    box2: {
        width: 315,
        flexDirection: 'row',
        justifyContent: 'space-between', // horizontal
        marginBottom: 25,
        // backgroundColor: 'blue',
    },
    boxSearch: {
        position: "relative",
        flexDirection: 'row',
        alignItems: 'center', // horizontal
        backgroundColor: '#FFF',
        borderRadius: 10,
        width: 250,
    },
    input: {
        width: 250,
        borderRadius: 10,
        backgroundColor: "#fff",
    },
});
