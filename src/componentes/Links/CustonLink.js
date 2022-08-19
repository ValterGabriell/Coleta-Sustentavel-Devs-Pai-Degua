import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function CustomLink({text, onPress, type}){

    return (<TouchableOpacity style={estilos.linkContainer} onPress={onPress} type={type}>
        <Text style={estilos.registro}>{text}</Text>
    </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    linkContainer:{
        marginVertical: 10,
        alignItems: 'center',
    },

    registro:{
        color: '#717171',
    }
})