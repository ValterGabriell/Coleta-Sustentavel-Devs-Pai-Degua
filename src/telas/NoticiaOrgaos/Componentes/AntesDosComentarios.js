import React, { useState, useEffect } from "react";
import { Chip } from 'react-native-paper';
import { Button } from "react-native-paper";
import {  Text, StyleSheet } from "react-native";
import { View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';




export default function AntesDosComentarios({isAtendida}) {

    const [txtBtn, setTxtBtn] = useState("Aceitar")
    const [txtStatus, setTxtStatus] = useState("Não atendida")
    const [icon, setIcon] = useState("close")
    const [color, setColor] = useState("red")


    useEffect(() => {
        if(isAtendida !== false){
            setTxtStatus("Atendida")
            setIcon("checkmark")
            setColor('green')
            setTxtBtn("ja atendida")
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
                <Ionicons name={icon} size={32} color={color} />
             
            </View>
          

        </View>
        <Button>{txtBtn}</Button>

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