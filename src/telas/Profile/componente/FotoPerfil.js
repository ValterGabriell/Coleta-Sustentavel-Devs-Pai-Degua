import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";


export default function FotoPerfil({ fotoUser, nomeUser, emailUser, props }) {
    return <>
        <View style={styles.container}>
            <Image source={fotoUser} style={styles.imagem} />
            <Text style={styles.username}>{nomeUser}</Text>
            <Text style={styles.email} >{emailUser}</Text>
            <Button variant="contained" color="#FF0000" onPress={()=>{props.navigation.navigate('TestHome')}}>Editar perfil</Button>
        </View>

        <View style={styles.containerDown}>
              <Text style={styles.textoConfig} >Configurações de privacidade</Text>
              <Text  style={styles.textoConfig}>Notificações</Text>
              <Text  style={styles.textoConfig}>Configurações de tema</Text>
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
    containerDown: {
        alignItems:"flex-start",
        marginTop:16,
        borderTopLeftRadius:24,
        borderTopRightRadius:24,
        backgroundColor: "#FFF",
        elevation: 10,
        shadowRadius: 10,
        shadowColor: "#00213b",
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 10
        }
    },
    username: {
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 24,
        lineHeight: 38,
        marginTop: 4
    },
    email: {
        alignSelf: "center",
        fontSize: 14,
        lineHeight: 15,
        marginBottom: 24
    },
    imagem: {
        marginTop: 30,
        alignSelf: "center",
        width: 120,
        height: 120,
        borderRadius: 64
    },
    textoConfig:{
        fontSize:16,
        margin:12
    }
})