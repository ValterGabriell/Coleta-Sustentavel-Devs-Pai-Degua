import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons'
import { Chip } from 'react-native-paper';


export default function HeaderComponent({ nomeUser }) {
    return <>
        <View style={styles.container}>
            <FontAwesome name="user" size={23} color="#000" style={styles.imagem} />
            <Text style={styles.texto}>Olá, {nomeUser}!</Text>
        </View>
        <View style={{marginTop:4}}>
            <Chip style={styles.chip}
                icon="information"
                mode="outlined"
                selectedColor="black"
                onPress={() => alert('Information chip pressed')}>
                Gravidade
            </Chip>
        </View>


    </>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 0,
    },
    imagem: {
        marginLeft: 12
    },
    texto: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 0,
        marginLeft: 8
    },
    chip: {
        padding: 2,
        marginRight: 125
    }
})