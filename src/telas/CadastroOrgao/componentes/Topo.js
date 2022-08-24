import React, { useState } from "react";
import { SafeAreaView, View, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { Button } from "react-native-paper";
import imgPerson from '../../../assets/profilePhoto.png'


export default function Forms() {
    const [instituicao, setinstituicao] = useState("")
    const [CNPJ, setCNPJ] = useState("")
    const [emailInstitucional, setEmailInstitucional] = useState("")
    const [senha, setSenha] = useState("")
    const [senhaAgain, setsenhaAgain] = useState("")
    const [image, setImage] = useState(imgPerson)

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
        });

        console.log(result.uri)
        setImage(result.uri)
    }

    function sendToDatabase() {
        if (instituicao || CNPJ || senha || senhaAgain || emailInstitucional === "") {
            alert('Preencha corretamente todos os campos')
        } else {
            alert("Save at database " + instituicao + '-' + CNPJ + '-' + emailInstitucional + '-' + senha + '-' + senhaAgain + '-' + image)
        }

    }


    return <>
        <SafeAreaView>
            <View>
                <Button onPress={pickImage}>Selecionar foto</Button>
                <TextInput
                    placeholder="Instituição / inscrição social"
                    style={styles.input}
                    onChangeText={setinstituicao}
                    value={instituicao}
                />

                <TextInput
                    placeholder="CNPJ"
                    style={styles.input}
                    onChangeText={setCNPJ}
                    value={CNPJ}
                />

                <TextInput
                    placeholder="Email institucional"
                    style={styles.input}
                    onChangeText={setEmailInstitucional}
                    value={emailInstitucional}
                />

                <TextInput
                    placeholder="Senha"
                    style={styles.input}
                    onChangeText={setSenha}
                    value={senha}
                    secureTextEntry={true}
                />

                <TextInput
                    placeholder="Insira novamente sua senha"
                    style={styles.input}
                    onChangeText={setsenhaAgain}
                    value={senhaAgain}
                    secureTextEntry={true}
                />

                <Button onPress={() => {
                    sendToDatabase()
                }}>Cadastrar</Button>

            </View>
        </SafeAreaView>
    </>
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: '80%',
        margin: 12,
        alignSelf: 'center',
        borderWidth: 1,
        padding: 10,
        borderRadius: 8
    },
    iconSendComment: {
        marginTop: 18
    },
    img: {
        width: 145,
        height: 145,
        borderRadius: 64,
        alignSelf: 'center',
        marginTop: 16
    }
})
