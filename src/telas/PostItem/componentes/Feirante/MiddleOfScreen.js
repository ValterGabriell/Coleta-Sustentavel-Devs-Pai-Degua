import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";


export default function MiddleOfScreen({ imagem, descricao }) {
    return <>
        <Image source={imagem} style={styles.img} />
        <Text style={styles.txtDescricao}>{descricao}</Text>


    </>
}

const styles = StyleSheet.create({
    txtDescricao: {
        marginLeft: 16,
        marginTop: 16,
        fontSize:16,
        marginBottom:32
    },
    img:{
        marginTop:8,
        width:"90%",
        height:"35%",
        alignSelf:"center",
        borderRadius:16
        
    }
})