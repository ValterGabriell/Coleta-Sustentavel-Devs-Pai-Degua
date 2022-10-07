import React, { useState } from "react";
import { View, Modal, TextInput, StyleSheet, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons'
import CustomButton from "../../../componentes/CustomButton/CustomButton";
import { trocarCpfAndPhoneUsuario } from "../../../services/requisicoes/apiDevs/users";


export default function DadosPessoais({ userId, cpf, phone }) {

    const [cpfCnpj, setCpfCnpj] = useState(cpf)
    const [telefone, setTelefone] = useState(phone)


    const [ModalVisible, setModalVisible] = useState(false)

    return <>
        <View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.dadosPessoaisName}>{"Dados Pessoais"}</Text>
                <FontAwesome name="edit" style={{ alignSelf: 'center', marginTop: 8, marginLeft: 8 }} onPress={() => {
                    setModalVisible(true)
                }}></FontAwesome>
            </View>

            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.dadosPessoais}>{"CPF / CNPJ:"}</Text>
                    <Text style={{ marginLeft: 8, marginTop: 4 }}>{cpf}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.dadosPessoais}>{"Telefone / Whatsapp:"}</Text>
                    <Text style={{ marginLeft: 8, marginTop: 4 }}>{phone}</Text>
                </View>

            </View>



            {ModalVisible &&

                <Modal animationType="slide" visible={ModalVisible}>
                    <View style={{ marginTop: 16 }}>
                        <Text style={styles.dadosPessoais}>{"CPF / CNPJ:"}</Text>
                        <TextInput style={styles.textInput} placeholder={cpf} keyboardType={"numeric"} onChangeText={setCpfCnpj} clearButtonMode={"while-editing"}></TextInput>

                        <Text style={styles.dadosPessoais}>{"Telefone / Whatsapp:"}</Text>
                        <TextInput style={styles.textInput} placeholder={phone} keyboardType={"numeric"} onChangeText={setTelefone} clearButtonMode={"while-editing"}></TextInput>

                    
                        <CustomButton onPress={() => {
                            setModalVisible(false)
                            trocarCpfAndPhoneUsuario(userId, cpfCnpj, telefone)
                        }} text={"Salvar"} />

                        <CustomButton onPress={() => {
                            setModalVisible(false)
                        }} text={"Cancelar"} />
                    </View>
                </Modal>


            }




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
    },
    dadosPessoaisName: {
        alignSelf: "flex-start",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 38,
        marginTop: 4,
        marginLeft: 32,
        color: "#cc0000",
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

})