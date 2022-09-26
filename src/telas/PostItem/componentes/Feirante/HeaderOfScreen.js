import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons'

export default function HeaderOfScreen({ titulo, localizacao }) {
    return <>
        <Text style={styles.txtTitle}>{titulo}</Text>
        <View style={{ flexDirection: 'row', marginTop:4 }}>
            <FontAwesome name="map-marker" style={{marginLeft:16, alignSelf:'center'}} size={16} color={"#696969"}></FontAwesome>
            <Text style={styles.txtLocalizacao}>{localizacao}</Text>
        </View>

    </>
}

const styles = StyleSheet.create({
    txtTitle: {
        color: "#cc0000",
        marginLeft: 16,
        fontSize:20,
        marginTop: 4,
        marginBottom: 4
    },
    txtLocalizacao: {
        marginLeft: 8,
        fontWeight:'bold',
        color:"#696969"
    }
})