import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons'
import { logout } from "../../../services/requisicoes/apiDevs/users";


export default function HeaderComponentCatador({ nomeUser, props }) {
    return <>
       
       
       <View style={styles.container}>
            <Text style={styles.toolbarName}>Olá, {nomeUser}!</Text>

        
            
            <FontAwesome name="sign-out" size={32} color={"#000"} style={{ marginRight: 16 }} onPress={() => {
                logout(props)
            }} />



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