import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native";
import { TextInput } from "react-native";
import { FontAwesome } from '@expo/vector-icons'
import { Button } from "react-native-paper";
import { View } from "react-native";
export default function FormularioDenuncia(props) {
    const uri = props.route.params.uri
    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")

    function sendToDatabase(){
        let location = "-1.452280, -48.503702"
        if(titulo != "" && descricao != "" && location != "" && uri != ""){
            alert("Salvar no banco de dados: " + titulo + " - " + descricao + " - " + location + " - " + uri)
            props.navigation.navigate('FeedScreen')
        }else{
            alert("Preencha tudo corretamente")
        }

        setTitulo("")
        setDescricao("")
       


        
    }

    return <>
        <SafeAreaView>
            <ScrollView>
                <View style={{ flexDirection: "row" }}>
                    <FontAwesome style={styles.iconPerson} name="user-o" size={20} color="#000" />
                    <Text style={styles.txtMain}>Olá, user!</Text>
                </View>

                <TextInput
                    placeholder="Digite aqui seu título!"
                    style={styles.input}
                    onChangeText={setTitulo}
                    value={titulo}
                />
                <Image style={styles.imgModal} source={{ uri }} />

                <View style={{ flexDirection: "row" }}>
                    <FontAwesome style={styles.iconPerson} name="map-marker" size={20} color="#000" />
                    <Text style={styles.txtCoordenadas}>-1.452280, -48.503702</Text>
                </View>

                <TextInput
                    placeholder="Descreva sua denúncia"
                    style={styles.input}
                    onChangeText={setDescricao}
                    value={descricao}
                />
                <Button onPress={sendToDatabase}>Enviar</Button>

    
            </ScrollView>
        </SafeAreaView>
    </>
}

const styles = StyleSheet.create({
    txtMain: {
        fontSize: 24,
        marginLeft: 8,
        marginTop: 16
    },
    txtCoordenadas: {
        fontSize: 16,
        marginLeft: 8,
        marginTop: 20,
        alignSelf: "center"
    },
    imgModal: {
        width: '95%', height: 350, borderRadius: 20, marginLeft: 8, marginRight: 8
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    iconPerson: {
        marginTop: 24,
        marginLeft: 16
    },
})