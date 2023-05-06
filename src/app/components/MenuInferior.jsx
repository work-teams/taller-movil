import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default class MenuInferior extends Component {
    render() {
        return (
            <View style={styles.body}>

                <View style={styles.container}>
                    <View style={[styles.box, styles.boxInicio]}>
                        <Icon name="home" size={36} color='#1FC9C2' />
                        <Text style={styles.text}>Inicio</Text>
                    </View>

                    <View style={styles.box}>
                        <Icon name="heart" size={35} color='#BFC0C2' />
                    </View>

                    <View style={styles.box}>
                        <Icon name="briefcase" size={36} color='#BFC0C2' />
                    </View>

                    <View style={styles.box}>
                        <Icon name="account" size={41} color='#BFC0C2' />
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#FFF',
    },
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 79,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#FFF',
    },
    box: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    boxInicio: {
        width: 89,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingRight: 10,
        borderRadius: 100,
        backgroundColor: '#D2F4F3',
    },
    text: {
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 15,
        color: '#1FC9C2',
    },
});
