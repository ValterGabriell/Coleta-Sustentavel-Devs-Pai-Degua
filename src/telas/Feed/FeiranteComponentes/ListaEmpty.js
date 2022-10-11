import React from "react";
import { Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons'


export default function ListaEmpty() {

    return <>
        <View style={{ flexDirection: 'row' }}>
            <Text style={{
                marginTop: 8,
                marginLeft: 8,
                fontWeight: 'bold'
            }}>Nenhum item na lista</Text>

            <FontAwesome name="bars" color={"#00CCCC"} style={{marginTop:12, marginLeft:8}}></FontAwesome>

        </View>


    </>




}