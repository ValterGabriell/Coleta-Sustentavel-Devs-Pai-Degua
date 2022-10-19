import React from "react";
import { Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons'


export default function ListaEmpty() {

    return <>
        <View style={{ flexDirection: 'row' }}>
            <Text style={{
                marginLeft:16,
                fontWeight: 'bold'
                
            }}>Nenhum item na lista</Text>

            <FontAwesome name="" color={"#00CCCC"} style={{marginTop:12, padding:16}}></FontAwesome>

        </View>


    </>




}