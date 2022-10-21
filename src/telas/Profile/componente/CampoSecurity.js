import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

//Componente do campo de segurança
export default function CampoSecurity() {
    return (
        <View style={{ marginVertical: 20 }}>
            <Text style={styles.titulo}>Segurança</Text>
            <View style={{ marginHorizontal: 50, flexDirection: 'row' }}>
              
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titulo: {
        color: '#FF5353',
        fontWeight: '600',
        fontSize: 16,
        marginStart: 16,
    },
    botao: {
        flexDirection: 'row',
        marginVertical: 30,
        marginEnd: 40,
        alignItems: 'center',
    },
    subtitulo: {
        color: 'black',
        fontWeight: '400',
        fontSize: 14,
        marginStart: 5,
    },
})