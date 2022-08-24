import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Chip } from 'react-native-paper';

export default function HeaderComponent({ nomeUser }) {
    return <>
       
        <View style={styles.container}>
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
        marginLeft: 16,
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
        marginRight: 101,
        marginLeft:16
    }
})