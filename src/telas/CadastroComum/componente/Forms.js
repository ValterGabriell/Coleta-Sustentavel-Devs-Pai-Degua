import React, { useState } from "react";
import { SafeAreaView, View, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { Button } from "react-native-paper";
import imgPerson from '../../../assets/profilePhoto.png'
import { postScarvenger } from '../../../services/requisicoes/apiDevs/users'


export default function Forms(props) {
    const [name, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [phone, setPhone] = useState("")
    const [cpf, setCpf] = useState("")
    const [photo, setPhoto] = useState()



    async function sendToDatabase() {
        postScarvenger({ name, email, password, photo, phone, cpf, props })
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
        });


        setPhoto(result.uri)
    }

    return <>
        <SafeAreaView>
            <ScrollView>
            <View>
                <Image style={styles.img} source={{uri:photo}} />
                <Button onPress={pickImage}>Selecionar foto</Button>
                <TextInput
                    placeholder="Nome"
                    style={styles.input}
                    onChangeText={setNome}
                    value={name}
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
                    onChangeText={setpassword}
                    value={password}
                    secureTextEntry={true}
                    keyboardType={"numeric"}
                />

                <TextInput
                    placeholder="Telefone"
                    style={styles.input}
                    onChangeText={setPhone}
                    value={phone}
                    secureTextEntry={true}
                    keyboardType={"numeric"}
                />

                <TextInput
                    placeholder="CPF"
                    style={styles.input}
                    onChangeText={setCpf}
                    value={cpf}
                    secureTextEntry={true}
                    keyboardType={"numeric"}
                />

                <Button onPress={() => {
                    sendToDatabase()
                }}>Cadastrar</Button>

            </View>
            </ScrollView>
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
