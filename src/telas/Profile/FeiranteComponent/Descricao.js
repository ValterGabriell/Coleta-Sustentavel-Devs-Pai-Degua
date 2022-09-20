import React, { useState } from "react";
import { View, Image, StyleSheet, Text, Modal, TextInput } from "react-native";
import { FontAwesome } from '@expo/vector-icons'
import CustomButton from "../../../componentes/CustomButton/CustomButton";



export default function Descricao() {

    const [newDESC, setnewDESC] = useState("On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment")
    const [descVisible, setdescVisible] = useState(false)



    return <>
        <View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.dadosPessoaisName}>{"Descrição"}</Text>
                <FontAwesome name="edit" style={{ alignSelf: 'center', marginTop: 8, marginLeft: 8 }} onPress={() => {
                    setdescVisible(true)
                }}></FontAwesome>
            </View>

            <View>
                <Text style={styles.dadosPessoais}>{newDESC}</Text>
            </View>


            {descVisible &&
                <Modal animationType="slide" visible={descVisible}>
                    <View style={{ marginTop: 32 }}>
                        <TextInput style={styles.textInput} placeholder={"Digite o novo nome da barraca"} onChangeText={setnewDESC} multiline={true} clearButtonMode={"while-editing"}>{newDESC}</TextInput>
                        <CustomButton onPress={() => {
                            setdescVisible(false)
                        }} text={"Salvar"} />

                        <CustomButton onPress={() => {
                            setdescVisible(false)
                        }} text={"Cancelar"} />
                    </View>
                </Modal>}



        </View>
    </>
}


const styles = StyleSheet.create({

    dadosPessoais: {
        alignSelf: "flex-start",
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 28,
        marginLeft: 32,
        color: "#000",
    }, textInput: {
        backgroundColor: "white",
        width: 320,
        height: 220,
        borderRadius: 16,
        marginVertical: 16,
        padding: 16,
        borderColor: "#0078AA",
        borderWidth: 1,
        fontWeight: '500',
        alignSelf: "center"
    },
    dadosPessoaisName: {
        alignSelf: "flex-start",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 38,
        marginTop: 4,
        marginLeft: 32,
        color: "#cc0000",
    }
})