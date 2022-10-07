import React, { useState } from "react";
import { SafeAreaView, View, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { Button } from "react-native-paper";
import imgPerson from '../../../assets/profilePhoto.png'
import {postMerchant} from '../../../services/requisicoes/apiDevs/users'


export default function Forms({props}) {
    const [name, setname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpf, setCPF] = useState("")
    const [phone, setPhone] = useState("")
    const [photo, setPhoto] = useState("imagem")

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
        });

        console.log(result.uri)
        setImage(result.uri)
    }

    async function sendToDatabase() {
       postMerchant(name, email, password, photo, phone, cpf, props)
    }


    return <>
        <SafeAreaView>
            <View>
                <Button onPress={pickImage}>Selecionar foto</Button>
                <TextInput
                    placeholder="Nome"
                    style={styles.input}
                    onChangeText={setname}
                    value={name}
                />

                <TextInput
                    placeholder="Email"
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    
                />

                <TextInput
                    placeholder="Passoword"
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={true}
                    
                    
                />

                <TextInput
                    placeholder="Telefone"
                    style={styles.input}
                    onChangeText={setPhone}
                    value={phone}
                    
                />

                <TextInput
                    placeholder="Cpf"
                    style={styles.input}
                    onChangeText={setCPF}
                    value={cpf}
                
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
