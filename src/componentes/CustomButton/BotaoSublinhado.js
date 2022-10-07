import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";



export default function Descricao({texto, onPress}){
    return(
        <TouchableOpacity onPress={(onPress)} style={styles.contanier}>
            <Text style={styles.word}>{texto}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    word:{
        color: '#FF5353',
        fontWeight: '600', 
        fontSize: 14, 
        textDecorationLine: 'underline',
    }
});