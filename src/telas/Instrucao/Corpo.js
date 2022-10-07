import React from "react";
import { Text, StyleSheet, View} from "react-native";



export default function Corpo({imagem, titulo, descricao}){
    return<View>
        <View style={{flexDirection: 'row'}}>
            <Image source={imagem}/>
            <Text>{titulo}</Text>
        </View>
        <Text>{descricao}</Text>
    </View>
}