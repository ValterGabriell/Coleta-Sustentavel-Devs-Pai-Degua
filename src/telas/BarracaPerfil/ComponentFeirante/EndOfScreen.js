import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons'

export default function EndOfScreen({ descricao }) {
    const [check, setCheck] = useState('nulo')


    var arrayButtonsIcon = [
        "phone",
        "envelope-o",
        "whatsapp"
    ]
    var arrayButtonsId = [
        0, 1, 2
    ]


    function handleCheck(value) {
        if (check === value) {
            setCheck('nulo')
        } else {
            setCheck(value)
        }

    }




    return <>




        <ScrollView>
            <Text style={styles.txtDescricaoEContato} >Descrição</Text>
            <Text style={styles.txtDescricao}>{descricao}</Text>
            <Text style={styles.txtDescricaoEContato} >Contato</Text>

            <View style={styles.viewLocal}>

                {arrayButtonsId.map((value) => (
                    <TouchableOpacity key={value} onPress={() => {
                        handleCheck(value)
                    }} >
                        {
                            check === value ? <FontAwesome color={"#cc0000"} name={arrayButtonsIcon[value]} size={45}></FontAwesome> : <FontAwesome color={"#696969"} name={arrayButtonsIcon[value]} size={45}></FontAwesome>
                        }

                    </TouchableOpacity>
                ))}


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