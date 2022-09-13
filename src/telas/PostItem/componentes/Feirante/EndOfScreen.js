import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function EndOfScreen({ material, estado, horario, qtd }) {
    return <>
        <View style={{height:1, backgroundColor:"#cc0000", width:"85%", alignSelf:"center"}}></View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={styles.txtTitle}>Material:</Text>
            <Text style={styles.txtLocalizacao}>{qtd} - {material}</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={styles.txtTitle}>Estado:</Text>
            <Text style={styles.txtLocalizacao}>{estado}</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={styles.txtTitle}>Horario:</Text>
            <Text style={styles.txtLocalizacao}>{horario}</Text>
        </View>

    </>
}

const styles = StyleSheet.create({
    txtTitle: {
        color: "#696969",
        marginTop: 32,
        fontWeight: "bold"
    },
    txtLocalizacao: {
        alignSelf: "flex-end",
        color: "#cc0000",
        marginLeft: 8,
        fontWeight: "bold"
    }
})