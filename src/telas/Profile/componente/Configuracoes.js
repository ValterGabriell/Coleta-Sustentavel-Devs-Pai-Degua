import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

export default function Configurações({props }) {
    return <>
      <View style={styles.container}>
        <View style={styles.containerDown}>
              <Text style={styles.textoConfig} onPress={()=>{props.navigation.navigate('RankingScreen')}}>Configurações de privacidade</Text>
              <Text style={styles.textoConfig}>Notificações</Text>
              <Text style={styles.textoConfig}>Configurações de tema</Text>
        </View>
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        borderBottomLeftRadius: 56,
        borderBottomRightRadius: 56,
        elevation: 10,
        shadowRadius: 10,
        shadowColor: "#00213b",
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 10
        }
    },
    textoConfig:{
        fontSize:16,
        margin:12
    }
})