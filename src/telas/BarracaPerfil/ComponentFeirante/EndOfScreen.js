import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons'

export default function EndOfScreen({ descricao }) {
    const [isClicked, setIsClicked] = useState(false)
    const [color, setColor] = useState("#696969")
    const [color2, setColor2] = useState("#696969")
    const [color3, setColor3] = useState("#696969")


    function changeButtonColor(button) {

    
        if (button === 1) {
            if (!isClicked) {
                setIsClicked(true)
                setColor("#cc0000")
            } else {
                setIsClicked(false)
                setColor("#696969")
            }
        }

        if (button === 2) {
            if (!isClicked) {
                setIsClicked(true)
                setColor2("#cc0000")
            } else {
                setIsClicked(false)
                setColor2("#696969")
            }
        }

        if (button === 3) {
            if (!isClicked) {
                setIsClicked(true)
                setColor3("#cc0000")
            } else {
                setIsClicked(false)
                setColor3("#696969")
            }
        }
    }

    return <>




        <ScrollView>
            <Text style={styles.txtDescricaoEContato} >Descrição</Text>
            <Text style={styles.txtDescricao}>{descricao}</Text>
            <Text style={styles.txtDescricaoEContato} >Contato</Text>

            <View style={styles.viewLocal}>
                <TouchableOpacity onPress={() => {
                    changeButtonColor(1)
                }} >
                    <FontAwesome color={color} name="phone" size={45}></FontAwesome>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    changeButtonColor(2)
                }} >
                    <FontAwesome color={color2} name="envelope-o" size={45}></FontAwesome>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    changeButtonColor(3)
                }} >
                    <FontAwesome color={color3} name="whatsapp" size={45}></FontAwesome>
                </TouchableOpacity>

            </View>
        </ScrollView>
    </>

}

const styles = StyleSheet.create({
    imagem: {
        width: "95%",
        height: "25%",
        borderRadius: 24,
        alignSelf: 'center'
    },
    txtDescricaoEContato: {
        color: "#cc0000",
        fontSize: 20,
        marginLeft: 16,
        marginTop: 32,
        fontWeight: '400'
    },
    txtDescricao: {
        marginLeft: 16,
        fontSize: 16,
        marginTop: 4
    },
    viewLocal: {
        flexDirection: 'row',
        marginLeft: 32,
        marginRight: 32,
        marginTop: 24,
        justifyContent: "space-between"
    },
    txtLocalEHora: {
        fontSize: 16,
        marginLeft: 8,
        alignSelf: "center",
        color: "#696969"
    }
})