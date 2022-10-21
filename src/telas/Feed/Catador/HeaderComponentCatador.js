import React from "react";
import { View, Text, StyleSheet } from "react-native";



export default function HeaderComponentCatador({ nomeUser, props }) {
    return <>
       
       
       <View style={styles.container}>
            <Text style={styles.toolbarName}>Olá, {nomeUser}!</Text>

        
          
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
        fontWeight: "700"
    }

})