import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";

import Descricao from "../../../componentes/Descricao";
import CampoSecurity from '../componente/CampoSecurity';
import CampoDados from '../componente/CampoDados';
import TopoPerfil from './TopoPerfil';
import TopoPerfilEditavel from './TopoPerfilEditavel';

//icones
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


//colocar scrollview

export default function PerfilColetor({user}) {

    //Manipular a escolha dos residuos 

    const [material, setMaterial] = useState({})

    /*
    function Manipular(resp){
        if(resp == 'novo'){
            switch(tipo){
                case 'Plastico':

            }
        }
    }
    */

    return <SafeAreaView style={styles.container}>

        <TopoPerfilEditavel user={user} />
        <Ionicons name="ios-notifications-outline" size={24} color="#777778" style={styles.notificacao} onPress={() => { }} />

        <Text style={{ textAlign: 'center', marginTop: 10, color: '#FF5353' }}>Material que coleta</Text>

        <View style={styles.material}>
            <View style={{ marginStart: 5, alignItems: 'center', marginEnd: 10 }}>
                <MaterialCommunityIcons name="leaf-circle" size={38} color="#FF5353" />
                <Text>{'Orgânico'}</Text>
            </View>
            <View style={{ marginStart: 10, alignItems: 'center' }}>
                <FontAwesome5 name="plus-circle" size={34} color="#C9C9C9" onPress={() => { }} />
                <Text>{"Novo"}</Text>
            </View>
        </View>



        <AntDesign name="edit" size={20} color="#777778" onPress={() => { }} style={styles.editar2} />

        <CampoDados />

        <AntDesign name="edit" size={20} color="#777778" onPress={() => { }} style={styles.editar} />
        <Descricao />

        <TouchableOpacity style={styles.botao}>
            <MaterialIcons name="email" size={30} color="#FF5353" />
            <Text style={styles.subtitulo}>Alterar email</Text>
        </TouchableOpacity>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
            
    },
    notificacao: {
        position: 'absolute',
        marginStart: 350,
        marginTop: 30,
    },

    material: {
        //width: 315,
        marginHorizontal: 134,
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    editarTopo: {
        position: 'absolute',
        marginStart: 280,
        marginTop: 192,
    },
    editar: {
        position: 'absolute',
        marginStart: 370,
        marginTop: 510,
    },
    editar2: {
        position: 'absolute',
        marginStart: 370,
        marginTop: 386,
    }, botao: {
        flexDirection: 'row',
        marginVertical: 30,
        marginLeft:16,
        marginEnd: 40,
        alignItems: 'center',
    }

})