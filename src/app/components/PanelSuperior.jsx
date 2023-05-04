import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TextInput } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default class PanelSuperior extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />
                <View style={styles.container}>
                    <Text style={styles.text}>Locación</Text>

                    <View style={styles.containerGPS}>
                        <Icon name="google-maps" size={18} />
                        <Text style={styles.textGPS}>Lima, PE</Text>
                        <Icon name="chevron-down" size={18} />
                    </View>

                    <View style={styles.containerBusqueda}>
                        <Icon name="magnify" size={18} />
                        <TextInput
                            style={styles.inputBusqueda}
                            placeholder='Buscar Hotel, Vuelos etc...'
                        >
                        </TextInput>
                        <Icon name="tune" size={18} />
                    </View>
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        //position: 'absolute',
        width: '100%',
        height: 200,
        left: 0,
        top: 0,
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    containerGPS: {
        flexDirection: 'row',
        //justifyContent: 'flex-start',
        backgroundColor: '#FFF'
    },
    containerBusqueda: {
        flexDirection: 'row',
        //justifyContent: 'flex-start',
        backgroundColor: 'skyblue'
    },
    text: {
        fontSize: 15,
        textAlign: 'left',
        //margin: 10,
    },
    textGPS: {
        fontSize: 17.5,
        textAlign: 'left',
        //margin: 10,
    },
    inputBusqueda: {
        width: 120,
        //height: 1,
        fontSize: 5,
        //font: 10
        margin: 0,
        // borderWidth: 1,
        // borderColor: '#dcdcdc',
        padding: 0,
        marginBottom: 0,
        // borderRadius: 10
    },
});
