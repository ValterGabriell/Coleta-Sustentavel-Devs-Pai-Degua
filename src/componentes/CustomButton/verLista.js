import React from "react";
import { View, Text, StyleSheet } from "react-native";



export default function Descricao({}){
    return(
        <View style={styles.contanier}>
            <Text style={styles.titulo}>Descrição</Text>
            <Text style={{marginHorizontal: 16,marginTop: 10}}>
            {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            }
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    contanier:{
        marginTop: 30,
    },
    titulo:{
        color: '#FF5353',
        fontWeight: '600', 
        fontSize: 16, 
        marginStart: 16
    }
});