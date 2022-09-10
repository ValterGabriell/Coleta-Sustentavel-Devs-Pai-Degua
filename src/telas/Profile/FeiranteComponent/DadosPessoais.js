import React, { useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons'



export default function DadosPessoais() {

    const [cpfCnpj, setCpfCnpj] = useState('03856573232')
    const [telefone, setTelefone] = useState('91986123187')
    const [endereco, setEndereco] = useState('Rua antonio freire')

    return <>
        <View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.dadosPessoaisName}>{"Dados Pessoais"}</Text>
                <FontAwesome name="edit" style={{ alignSelf: 'center', marginTop: 8, marginLeft: 8 }}></FontAwesome>
            </View>

            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.dadosPessoais}>{"CPF / CNPJ:"}</Text>
                    <Text style={{marginLeft:8, marginTop:4}}>{cpfCnpj}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.dadosPessoais}>{"Telefone / Whatsapp:"}</Text>
                    <Text style={{marginLeft:8, marginTop:4}}>{telefone}</Text>
                </View>

                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.dadosPessoais}>{"Endereço:"}</Text>
                    <Text style={{marginLeft:8, marginTop:4}}>{endereco}</Text>
                </View>   

            </View>




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
    },

})