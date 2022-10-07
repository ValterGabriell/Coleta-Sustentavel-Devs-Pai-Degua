import React, { useState } from "react";
import { View, Image, StyleSheet, Text, Modal, TextInput } from "react-native";
import { FontAwesome } from '@expo/vector-icons'
import CustomButton from "../../../componentes/CustomButton/CustomButton";
import { trocarNomeUser } from "../../../services/requisicoes/apiDevs/users";


export default function ViewFotoPerfilFeirante({ userId, fotoUser, nomeUser, emailUser }) {

    const [nameVisible, setnameVisible] = useState(false)
    const [newNAME, setnewNAME] = useState(nomeUser)

    return <>
        <View style={styles.container}>
            <Image source={fotoUser} style={styles.imagem} />
            <FontAwesome name="camera" size={18} style={styles.iconBellowThePhoto} ></FontAwesome>

            <View style={styles.viewNameBarraca}>
                <Text style={styles.nameBarraca}>{nomeUser}</Text>
                <FontAwesome name="edit" size={16} style={{ alignSelf: 'center', marginLeft: 8, marginTop: 8 }} onPress={() => {
                    setnameVisible(true)
                }}></FontAwesome>
            </View>


            <Text style={styles.email}>{emailUser}</Text>


            {nameVisible &&
                <Modal animationType="slide" visible={nameVisible}>
                    <View style={{marginTop:32}}>
                        <TextInput style={styles.textInput} placeholder={nomeUser} onChangeText={setnewNAME} clearButtonMode={"while-editing"}></TextInput>
                        <CustomButton onPress={() => {
                            setnameVisible(false)
                            trocarNomeUser(userId, newNAME)
                        }} text={"Salvar"} />

                        <CustomButton onPress={() => {
                            setnameVisible(false)
                        }} text={"Cancelar"} />
                    </View>
                </Modal>}


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
    }, textInput: {
        backgroundColor: "white",
        width: 320,
        height: 60,
        borderRadius: 16,
        marginVertical: 16,
        padding: 16,
        borderColor: "#0078AA",
        borderWidth: 1,
        fontWeight: '500',
        alignSelf: "center"
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

        flexDirection: 'row'
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