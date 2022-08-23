import React, { useState } from "react";
import { SafeAreaView, View, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { Button } from "react-native-paper";
import imgPerson from '../../../assets/profilePhoto.png'


export default function Forms() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
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
        if (nome || email || senha || senhaAgain === "") {
            alert('Preencha corretamente todos os campos')
        } else {
            alert("Save at database " + nome + '-' + email + '-' + senha + '-' + senhaAgain + '-' + image)
        }

    }


    return <>
        <SafeAreaView>
            <View>
                <Button onPress={pickImage}>Selecionar foto</Button>
                <TextInput
                    placeholder="Nome"
                    style={styles.input}
                    onChangeText={setNome}
                    value={nome}
                />

                <TextInput
                    placeholder="Email"
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                />

                <TextInput
                    placeholder="Senha"
                    style={styles.input}
                    onChangeText={setSenha}
                    value={senha}
                />

                <TextInput
                    placeholder="Insira novamente sua senha"
                    style={styles.input}
                    onChangeText={setsenhaAgain}
                    value={senhaAgain}
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
