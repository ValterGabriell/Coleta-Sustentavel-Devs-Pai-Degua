import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";

import Descricao from "../../../componentes/Descricao";
import CampoSecurity from '../componente/CampoSecurity';
import CampoDados from '../componente/CampoDados';
import TopoPerfil from './TopoPerfil';
import TopoPerfilEditavel from './TopoPerfilEditavel';

import CheckBoxPage from "./residuos";

//icones
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Plastico from '../../../assets/plasticoIcone.png';
import Organico from '../../../assets/OrganicoIcone.png';
//colocar scrollview

export default function PerfilColetor({user}) {

    //Manipular a escolha dos residuos 

    const [material, setMaterial] = useState()

   


    return <SafeAreaView style={styles.container}>


        <TopoPerfilEditavel user={user} />
        <Ionicons name="ios-notifications-outline" size={24} color="#777778" style={styles.notificacao} onPress={() => { }} />

        <Text style={styles.titulo}>Material que coleta</Text>
        <View style={{flexDirection: 'row', padding:10, alignSelf: 'center'}}>
            <Image source={Plastico} style={{marginStart: 16, width: 40, height: 40}}/>
            <Image source={Organico} style={{marginStart: 10, width: 40, height: 40}}/>
        
            <View style={styles.material}>
                <TouchableOpacity style={{alignItems: 'center' }} onPress={() => {}}>
                    <AntDesign name="pluscircleo" size={40} color="#777778"/>
                </TouchableOpacity>
            </View>
        </View>

        <CampoDados />
        <Descricao />
        <CampoSecurity/>

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
        marginStart: 16,
       
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
        marginTop: 485,
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
    },
    titulo: {
        color: '#FF5353',
        fontWeight: '600',
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:10,
        alignSelf: 'center',
    },

})