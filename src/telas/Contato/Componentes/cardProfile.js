import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import profile from '../../../../assets/profile.png'

export default function CardProfile(){
    //nome,avatar
    return <View style={styles.contanier}>
        <Text style={styles.titulo}>Secretária Municipal do Meio Ambiente</Text>
        <Image source={profile} style={styles.image}/> 
    </View>
}


const styles = StyleSheet.create({
    contanier:{
        alignItems: 'center',
        padding: 10,
        marginBottom: 50,
    },

    titulo:{
        marginBottom: 20,
        fontWeight: '500',
    },

    image:{
        width: 150,
        height:150,
    }
})