import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";


export default function CampoDados({}){
    return(
        <View style={styles.dados}>
            <Text style={{color: '#FF5353',fontWeight: '600', fontSize: 16, marginStart: 16}}>Dados Pessoais</Text>
            <View style={{marginHorizontal: 16, marginTop: 10}}>
                <Text style={{fontWeight: '600'}}>CPF / CNPJ: {'14444452556-16'}</Text>
                <Text style={{fontWeight: '600'}}>Telefone / Whatsapp: {'+55 91 99999-9999'}</Text>
                <Text style={{fontWeight: '600'}}>Endereço: {'Av. Presidente Vargas, nº 336'}</Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    dados:{
        marginTop: 26,
    },
})