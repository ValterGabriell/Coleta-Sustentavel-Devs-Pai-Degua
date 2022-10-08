import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons'


export default function HeaderComponent({ nomeUser, props }) {
    return <>


        <View style={styles.container}>
            <Text style={styles.toolbarName}>Olá, {nomeUser}!</Text>
            <FontAwesome name="question-circle-o" size={32} color={"#FF5353"} onPress={ () =>{
                props.navigation.navigate("Instrucao")
            }}/>
        </View>
        
    </>

}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    toolbarName: {
        fontSize: 20,
        fontWeight: "500"
    }
   
})