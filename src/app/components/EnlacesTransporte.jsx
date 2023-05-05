import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default class EnlacesTransporte extends Component {
    render() {
        return (
            <View style={styles.body}>

                <View style={styles.container}>
                    <View style={styles.box}>
                        <Icon name="home-city-outline" size={18} />
                        <Text>Hotel</Text>
                    </View>

                    <View style={styles.box}>
                        <Icon name="airplane" size={18} />
                        <Text>Avión</Text>
                    </View>

                    <View style={styles.box}>
                        <Icon name="train" size={18} />
                        <Text>Tren</Text>
                    </View>

                    <View style={styles.box}>
                        <Icon name="dots-horizontal-circle" size={18} />
                        <Text>Más</Text>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    container: {
        width: 328,
        height: 93,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    box: {
        width: 70,
        height: 70,
        padding: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
