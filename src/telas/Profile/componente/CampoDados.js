import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, Modal } from "react-native";
import { editarPerfilCatador } from '../../../services/requisicoes/apiDevs/usersCatador';

import { AntDesign } from '@expo/vector-icons';
import CustomButton from './../../../componentes/CustomButton/CustomButton';


export default function CampoDados({userId, cpf, phone}){

    const [cpfCnpj, setCpfCnpj] = useState(cpf)
    const [telefone, setTelefone] = useState(phone)


    const [ModalVisible, setModalVisible] = useState(false)

    return<>
        <View style={styles.dados}>
            <Text style={{color: '#FF5353',fontWeight: '600', fontSize: 16, marginStart: 16}}>Dados Pessoais</Text>
            <View style={{marginHorizontal: 16, marginTop: 10}}>
                <Text style={{fontWeight: '600'}}>CPF / CNPJ: {'14444452556-16'}</Text>
                <Text style={{fontWeight: '600'}}>Telefone / Whatsapp: {'+55 91 99999-9999'}</Text>
            </View>
            <AntDesign name="edit" size={20} color="#777778" onPress={() => {setModalVisible(true)}} style={styles.editar2}/>
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
                        editarPerfilCatador(userId, cpfCnpj, telefone)
                    }} text={"Salvar"} />

                    <CustomButton onPress={() => {
                        setModalVisible(false)
                    }} text={"Cancelar"} />
                </View>
            </Modal>

        }
    </>
}

const styles = StyleSheet.create({
    dados:{
        marginTop: 26,
    },
    editar2:{
        position: 'absolute',
        marginStart: 370,
        marginTop: 5,
    },
    dadosPessoais: {
        alignSelf: "flex-start",
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 28,
        marginLeft: 32,
        color: "#000",
    },
    textInput: {
        backgroundColor: "white",
        width: 320,
        height: 60,
        borderRadius: 16,
        marginVertical: 16,
        padding: 16,
        borderColor: "#FF5353",
        borderWidth: 1,
        fontWeight: '500',
        alignSelf: "center"
    },
})