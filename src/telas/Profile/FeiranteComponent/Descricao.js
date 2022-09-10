import React, { useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons'



export default function Descricao() {

    const text = "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment"
    return <>
        <View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.dadosPessoaisName}>{"Descrição"}</Text>
                <FontAwesome name="edit" style={{ alignSelf: 'center', marginTop: 8, marginLeft: 8 }}></FontAwesome>
            </View>

            <View>
                    <Text style={styles.dadosPessoais}>{text}</Text>
            </View>




        </View>
    </>
}


const styles = StyleSheet.create({

    dadosPessoais: {
        alignSelf: "flex-start",
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 28,
        marginLeft: 32,
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