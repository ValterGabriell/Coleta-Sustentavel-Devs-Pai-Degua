import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons'

export default function HeaderOfScreen({ titulo, email, imagem, local, horario }) {
    return <>
        <Text style={styles.txtTitle} >{titulo}</Text>
        <Text style={styles.txtEmail}>{email}</Text>
        <Image source={imagem} style={styles.imagem} />
        <View style={styles.viewLocal}>
            <FontAwesome color={"#696969"} name="map" size={20}></FontAwesome>
            <Text style={styles.txtLocalEHora}>{local}</Text>
        </View>

        <View style={styles.viewLocal}>
            <FontAwesome name="clock-o" size={24} color={"#696969"}></FontAwesome>
            <Text style={styles.txtLocalEHora}>{horario}</Text>
        </View>
    </>
}

const styles = StyleSheet.create({
    imagem: {
        width: "95%",
        height: "25%",
        borderRadius: 24,
        alignSelf: 'center'
    },
    txtTitle: {
        color: "#cc0000",
        fontSize: 20,
        alignSelf: "center",
        marginTop: 32
    },
    txtEmail: {
        alignSelf: "center",
        marginBottom: 16
    },
    viewLocal:{
        flexDirection:'row',
        marginLeft:16,
        marginTop:24
    },
    txtLocalEHora:{
        fontSize: 16,
        marginLeft:8,
        alignSelf: "center",
        color:"#696969"
    }
})