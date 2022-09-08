import React from "react";
import { Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons'


export default function HeaderComponentCatadorDisponivel() {

    return <>
        <View style={{ flexDirection: 'row' }}>
            <Text style={{
                marginTop: 8,
                marginLeft: 8,
                fontWeight: 'bold'
            }}>Coletores disponiveis</Text>

            <FontAwesome name="circle" color={"#7CFC00"} style={{marginTop:12, marginLeft:8}}></FontAwesome>

        </View>


    </>




}