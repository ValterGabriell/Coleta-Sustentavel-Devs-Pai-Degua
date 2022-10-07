import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons'


export default function HeaderComponent({ nomeUser }) {
    return <>

        <View style={styles.container}>
            <Text style={styles.toolbarName}>Olá, {nomeUser}!</Text>
            <FontAwesome name="question-circle-o" size={32} color={"#FF0000"} style={{ marginRight: 16 }} onPress={ () =>{}}/>
        </View>
        
    </>

}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginLeft: 16,
    },
    imagem: {
        marginLeft: 12
    },
    toolbarName: {
        fontSize: 20,
        fontWeight: "bold"
    }
   
})