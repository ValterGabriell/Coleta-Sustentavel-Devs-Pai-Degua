import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Profile from '../../../assets/profile.png'
import { Chip } from 'react-native-paper';


export default function HeaderComponent({ nomeUser }) {
    return <>
        <View style={styles.container}>
            <Image source={Profile} style={styles.imagem} />
            <Text style={styles.texto}>Olá, {nomeUser}!</Text>
        </View>
        <Chip
          icon="information"
          mode="outlined"
          selectedColor="black"
          onPress={() => alert('Information chip pressed')}>
          Ordernar por gravidade
        </Chip>
     
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