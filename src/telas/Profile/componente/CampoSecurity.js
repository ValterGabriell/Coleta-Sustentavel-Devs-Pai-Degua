import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

//Componente do campo de segurança
export default function CampoSecurity(){
    return(
        <View style={{marginVertical: 20}}>
            <Text style={styles.titulo}>Segurança</Text>
            <View style={{marginHorizontal: 50, flexDirection: 'row'}}>
                <TouchableOpacity style={styles.botao}>
                    <MaterialIcons name="email" size={30} color="#FF5353" />
                    <Text style={styles.subtitulo}>Alterar email</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row', marginVertical: 30, alignItems:'center'}}>
                    <MaterialCommunityIcons name="shield-key" size={30} color="#FF5353" />
                    <Text style={styles.subtitulo}>Alterar a senha</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titulo:{
        color: '#FF5353',
        fontWeight: '600', 
        fontSize: 16, 
        marginStart: 16,
    },
    botao:{
        flexDirection: 'row',
        marginVertical: 30,
        marginEnd: 40,
        alignItems:'center',
    },
    subtitulo:{
        color: 'black',
        fontWeight: '400',
        fontSize: 14,
        marginStart: 5,
    },
})