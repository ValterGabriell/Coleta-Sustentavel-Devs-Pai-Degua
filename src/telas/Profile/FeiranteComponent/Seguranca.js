import React, { useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons'



export default function Seguranca() {


    return <>
        <View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.dadosPessoaisName}>{"Segurança"}</Text>
                <FontAwesome name="edit" style={{ alignSelf: 'center', marginTop: 8, marginLeft: 8 }}></FontAwesome>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row' }}>

                    <View style={styles.icon}>
                        <FontAwesome name="envelope-o" color={"#fff"} size={18} style={{ alignSelf: "center" }}></FontAwesome>
                    </View>
                    <Text style={styles.dadosPessoais}>{"Alterar Email"}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.icon}>
                        <FontAwesome name="key" color={"#fff"} size={18} style={{ alignSelf: "center" }}></FontAwesome>
                    </View>
                    <Text style={styles.dadosPessoais}>{"Alterar Senha"}</Text>
                </View>
            </View>




        </View>
    </>
}


const styles = StyleSheet.create({
    icon: {
        backgroundColor: "#cc0000", borderRadius: 32, width: 26, height: 21, marginLeft: 32, alignSelf: "center"
    },
    dadosPessoais: {
        alignSelf: "flex-start",
        fontWeight: "bold",
        fontSize: 18,
        lineHeight: 28,
        marginLeft: 8,
        color: "#000",
    },
    dadosPessoaisName: {
        alignSelf: "flex-start",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 38,
        marginTop: 4,
        marginLeft: 32,
        color: "#cc0000",
    }
})