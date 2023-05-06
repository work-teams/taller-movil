import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default class BannerHorizontal extends Component {
    render() {
        return (
            <View style={styles.body}>

                <View style={styles.container}>
                    <View style={[styles.box, styles.boxImagen]}>
                    </View>

                    <View style={[styles.boxContenido]}>
                        <View style={[styles.box, styles.boxLugar]}>
                            <Text style={[styles.text, styles.textLugar]}>
                                Huacachina
                            </Text>
                            <View style={[styles.box, styles.boxValoracion]}>
                                <Icon name="star" size={18} color='#F7B743' />
                                <Text>4.5</Text>
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
                                <Icon name="currency-usd" size={18} color='#F98F56' />
                                <Text style={[styles.text, styles.textPrecio]}>
                                    40
                                </Text>
                                <Text>/Persona</Text>
                            </View>
                            <Icon name="heart" size={18} color='#F98F56' />
                        </View>
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
        // backgroundColor: '#FFF',
    },
    container: {
        width: 331,
        height: 98,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#F3F3F3',
        borderRadius: 12,
        flexDirection: 'row',
    },
    box: {
        flexDirection: 'row',
        backgroundColor: '#F6F6F6',
    },
    boxContenido: {
        width: 185,
        height: 69,
        justifyContent: 'space-between'
    },
    boxImagen: {
        width: 113,
        height: 80,
        borderRadius: 5,
        backgroundColor: '#D9D9D9',
    },
    boxLugar: {
        justifyContent: 'space-between',
        backgroundColor: null,
    },
    boxGPS: {
        justifyContent: 'flex-start',
        backgroundColor: null,

    },
    boxPrecio: {
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
