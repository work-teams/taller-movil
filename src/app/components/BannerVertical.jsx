import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default class BannerVertical extends Component {
    render() {
        return (
            <View style={styles.body}>

                <View style={styles.container}>
                    <View style={[styles.box, styles.boxImagen]}>
                    </View>

                    <View style={[styles.box, styles.boxLugar]}>
                        <Text style={[styles.text, styles.textLugar]}>
                            Caral
                        </Text>
                        <View style={[styles.box, styles.boxValoracion]}>
                            <Icon name="star" size={18} color='#F7B743'/>
                            <Text>4.6</Text>
                        </View>
                    </View>

                    <View style={[styles.box, styles.boxGPS]}>
                        <Icon name="google-maps" size={18} />
                        <Text style={[styles.text, styles.textGPS]}>
                            Perú
                        </Text>
                    </View>

                    <View style={[styles.box, styles.boxPrecio]}>
                        <View style={[styles.box]}>
                            <Icon name="currency-usd" size={18} color='#F98F56'/>
                            <Text style={[styles.text, styles.textPrecio]}>
                                40
                            </Text>
                            <Text>/Persona</Text>
                        </View>
                        <Icon name="heart" size={18} color='#F98F56' />
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#FFF',
    },
    container: {
        position: 'relative',
        width: 161,
        height: 208,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#F3F3F3',
        borderRadius: 12,
    },
    box: {
        flexDirection: 'row',
        backgroundColor: '#F6F6F6',
    },
    boxImagen: {
        width: 147,
        height: 117,
        borderRadius: 5,
        backgroundColor: '#D9D9D9',
    },
    boxLugar: {
        width: 147,
        justifyContent: 'space-between',
        backgroundColor: null,
    },
    boxGPS: {
        width: 147,
        justifyContent: 'flex-start',
        backgroundColor: null,

    },
    boxPrecio: {
        width: 147,
        justifyContent: 'space-between',
        backgroundColor: null,

    },
    text: {
        fontSize: 12,
    },
    textLugar: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 19,
    },
    textGPS: {
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: 400,
    },
    textPrecio: {
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 600,
        color: '#F98F56',
    },
});
