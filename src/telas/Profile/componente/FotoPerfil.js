import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";



export default function FotoPerfil({ fotoUser, nomeUser, emailUser }) {
    return <>
        <View style={styles.container}>
            <Image source={fotoUser} style={styles.imagem} />
            <Text style={styles.username}>{nomeUser}</Text>
            <Text style={styles.email} >{emailUser}</Text>
            <Text style={styles.ranking} >8 no ranking</Text>
         
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
        alignItems: "flex-start",
        marginTop: 16,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
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
        marginBottom: 4
    },
    ranking: {
        alignSelf: "center",
        fontSize: 14,
        lineHeight: 15,  marginBottom: 4
    },
    imagem: {
        marginTop: 30,
        alignSelf: "center",
        width: 120,
        height: 120,
        borderRadius: 64
    }
})