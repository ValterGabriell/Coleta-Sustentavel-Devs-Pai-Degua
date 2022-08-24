import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import results from "./results";
import ListItem from './ListItem';
import ButtonContact from './ButtonContact';
import CardProfile from './cardProfile';

export default function Componente(){



    return(
        <View style={StyleSheet.contanier}>
            <Text style={styles.titulo}>Contatos</Text>
            <CardProfile/>
            <ButtonContact/>
            <Text style={styles.selecione}>Selecione: </Text>
            <FlatList
                data={results}
                style={styles.lista}
                keyExtractor={item => item.id}
                renderItem = {(item) => {
                    return <ListItem/>
                }}  
                ListEmptyComponent = {
                    <Text>Nenhum contato salvo!</Text>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    contanier:{
        flex: 1,
        
    },

    titulo:{
        marginTop: 32,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom:40,
    },
    separate:{
        height: 1,
        width: '100%',
        backgroundColor: '#CCC',
    },

    lista:{
        marginTop: 10,
    },

    selecione:{
        marginStart: 30,
    }

})