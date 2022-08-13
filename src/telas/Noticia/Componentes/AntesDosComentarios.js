import React, { useState, useEffect } from "react";
import { Chip } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons'
import { Image, Text, StyleSheet } from "react-native";
import { View } from "react-native";
import imgMapa from '../../../assets/imgMapa.jpg'



export default function AntesDosComentarios() {

    const [atendida, setAtendida] = useState(false)
    const [txtStatus, setTxtStatus] = useState("Não atendida")
    const [icon, setIcon] = useState("ban")


    useEffect(() => {
        if(atendida !== false){
            setTxtStatus("Atendida")
            setIcon("check-square-o")
        }
       
    }, [])
    return <>
        <View style={{ flexDirection: "row" }}>
            <Chip style={styles.chip}
                icon="information"
                mode="outlined"
                selectedColor="black"
                onPress={() => alert('Information chip pressed')}>
                Gravidade
            </Chip>
            <View style={styles.viewStatus}>
                <Text style={styles.txtStatus}>{txtStatus}</Text>
                <FontAwesome size={16} style={styles.iconStatus} name={icon}></FontAwesome>
            </View>

        </View>

    </>
}

const styles = StyleSheet.create({
    chip: {
        padding: 2,
        marginRight: 102,
        marginLeft: 12
    },
    viewStatus:{
        flexDirection:'row'
    },
    txtStatus:{
        fontSize:16,
        fontWeight:'300',
        marginTop:4
    },
    iconStatus:{
        marginTop:8,
        marginLeft:8
    }
})