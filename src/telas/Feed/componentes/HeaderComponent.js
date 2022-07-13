import React from "react";
import { View, Text, Image, StyleSheet, RadioButton } from "react-native";
import Profile from '../../../assets/profile.png'


export default function HeaderComponent({ nomeUser}) {
    return <>
        <View style={styles.container}>
            <Image source={Profile} style={styles.imagem} />
            <Text style={styles.texto}>Olá, {nomeUser}!</Text>
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 8,
    },
    imagem: {
        width: 32,
        height: 32
    },
    texto: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 4,
        marginLeft: 4
    }
})