import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';


export default function Descricao({ }) {
    return (
        <View style={styles.contanier}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.titulo}>Descrição</Text>
                <TouchableOpacity onPress={() => { }} style={styles.editarTopo}>
                    <AntDesign name="edit" size={18} color="#777778" />
                </TouchableOpacity>
            </View>

            <Text style={{ marginHorizontal: 16, marginTop: 10 }}>
                {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                }
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    contanier: {
        marginTop: 26,
    },
    titulo: {
        color: '#FF5353',
        fontWeight: '600',
        fontSize: 16,
        marginStart: 16
    }
})