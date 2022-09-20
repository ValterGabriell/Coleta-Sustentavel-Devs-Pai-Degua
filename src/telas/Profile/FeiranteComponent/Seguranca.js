import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text, Modal, TextInput, Button } from "react-native";
import { FontAwesome } from '@expo/vector-icons'
import CustomButton from "../../../componentes/CustomButton/CustomButton";
import { trocarEmailUsuario } from "../../../services/requisicoes/apiDevs/users";
import { trocarSenhaUsuario } from "../../../services/requisicoes/apiDevs/users";


export default function Seguranca() {


    const [emailVisible, setEmailVisible] = useState(false)
    const [senhaVisible, setsenhaVisible] = useState(false)

    const [newEmail, setNewEmail] = useState("")
    const [newPassword, setnewPassword] = useState("")





    return <>
        <View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.dadosPessoaisName}>{"Segurança"}</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>


                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => {
                    setEmailVisible(true)
                }}>
                    <View style={styles.icon}>
                        <FontAwesome name="envelope-o" color={"#fff"} size={18} style={{ alignSelf: "center" }}></FontAwesome>
                    </View>
                    <Text style={styles.dadosPessoais}>{"Alterar Email"}</Text>
                </TouchableOpacity>



                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => {
                    setsenhaVisible(true)
                }}>
                    <View style={styles.icon}>
                        <FontAwesome name="key" color={"#fff"} size={18} style={{ alignSelf: "center" }}></FontAwesome>
                    </View>
                    <Text style={styles.dadosPessoais}>{"Alterar Senha"}</Text>
                </TouchableOpacity>


            </View>
        </View>


        {emailVisible && <Modal animationType="slide" visible={emailVisible}>

            <View style={{ marginTop: 32 }}>
                <TextInput style={styles.textInput} placeholder={"Digite seu novo email"} onChangeText={setNewEmail} clearButtonMode={"while-editing"}></TextInput>
                <CustomButton onPress={() => {
                    setEmailVisible(false)
                    trocarEmailUsuario(newEmail)
                }} text={"Salvar email"} />

                <CustomButton onPress={() => {
                    setEmailVisible(false)
                }} text={"Cancelar"} />
            </View>

        </Modal>}

        {senhaVisible && <Modal animationType="slide" visible={senhaVisible}>
            <View style={{ marginTop: 32 }}>
                <TextInput style={styles.textInput} placeholder={"Digite sua nova senha"} onChangeText={setnewPassword} secureTextEntry={true} clearButtonMode={"while-editing"}></TextInput>
                <CustomButton onPress={() => {
                    setsenhaVisible(false)
                    trocarSenhaUsuario(newPassword)
                }} text={"Salvar senha"} />

                <CustomButton onPress={() => {
                    setsenhaVisible(false)
                }} text={"Cancelar"} />
            </View>
        </Modal>}



    </>
}


const styles = StyleSheet.create({
    icon: {
        backgroundColor: "#cc0000", borderRadius: 32, width: 26, height: 21, marginLeft: 32, alignSelf: "center"
    },
    textInput: {
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
    dadosPessoais: {
        alignSelf: "flex-start",
        fontWeight: "bold",
        fontSize: 18,
        lineHeight: 28,
        marginLeft: 8,
        color: "#000",
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