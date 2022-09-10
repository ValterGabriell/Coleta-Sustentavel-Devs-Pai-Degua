import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons'



export default function ViewFotoPerfilFeirante({ fotoUser, nomeBarraca, emailUser }) {
    return <>
        <View style={styles.container}>
            <Image source={fotoUser} style={styles.imagem} />
            <FontAwesome name="camera" size={18} style={styles.iconBellowThePhoto}></FontAwesome>
            
            <View style={styles.viewNameBarraca}>
                <Text style={styles.nameBarraca}>{nomeBarraca}</Text>
                <FontAwesome name="edit" size={16} style={{alignSelf:'center', marginLeft:8, marginTop:8}}></FontAwesome>
            </View>


            <Text style={styles.email} >{emailUser}</Text>
          
        </View>
    </>
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#d3d3d3",
        elevation: 10,
        shadowRadius: 10,
        shadowColor: "#00213b",
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 10
        }
    },
    iconBellowThePhoto: {
        alignSelf: 'center'
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
    nameBarraca: {
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 38,
        marginTop: 4,
        color: "#cc0000",
    },
    viewNameBarraca: {
        alignSelf: "center",
        
        flexDirection:'row'
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
        lineHeight: 15, marginBottom: 4
    },
    imagem: {
        marginTop: 30,
        alignSelf: "center",
        width: 120,
        height: 120,
        borderRadius: 64
    }
})