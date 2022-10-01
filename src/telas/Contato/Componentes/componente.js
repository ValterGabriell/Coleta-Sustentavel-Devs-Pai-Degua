import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ButtonContact from './ButtonContact';
import CardProfile from './cardProfile';
import ListOrgs from './List';


export default function Componente() {

   


    return (
        <View style={StyleSheet.contanier}>
            <Text style={styles.titulo}>Contatos</Text>
            <CardProfile />
            <ButtonContact />
            <Text style={styles.selecione}>Selecione: </Text>
            <ListOrgs />
        </View>
    );
}

const styles = StyleSheet.create({
    contanier: {
        flex: 1,

    },

    titulo: {
        marginTop: 32,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 40,
    },
    separate: {
        height: 1,
        width: '100%',
        backgroundColor: '#CCC',
    },

    lista: {
        marginTop: 10,
    },

    selecione: {
        marginStart: 30,
    }

})