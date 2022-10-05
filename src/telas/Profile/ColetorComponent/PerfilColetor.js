import React from "react";
import { View, StyleSheet, Dimensions, Text, SafeAreaView, TouchableOpacity } from "react-native";

import Descricao from "../../../componentes/Descricao";
import CampoSecurity from '../componente/CampoSecurity';
import CampoDados from '../componente/CampoDados';
import TopoPerfil from './TopoPerfil';

//icones
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function PerfilColetor({}){
    return<SafeAreaView style={styles.container}>
        
        <TopoPerfil/>
        <Ionicons name="ios-notifications-outline" size={24} color="#777778" style={styles.notificacao} />

        <Text style={{textAlign: 'center', marginTop: 10, color: '#FF5353'}}>Material que coleta</Text> 

        <View style={styles.material}>
            <View style={{marginStart: 5, alignItems: 'center', marginEnd: 10}}>
                <MaterialCommunityIcons name="leaf-circle" size={38} color="#FF5353"/>
                <Text>{'Orgânico'}</Text>
            </View>
            <View  style={{marginStart: 10, alignItems: 'center'}}>
                <FontAwesome5 name="plus-circle" size={34} color="#C9C9C9" />
                <Text>{"Novo"}</Text>
            </View>
            <View  style={{marginStart: 30, alignItems: 'center'}}>
                <FontAwesome5 name="plus-circle" size={34} color="#C9C9C9" />
                <Text>{"Novo"}</Text>
            </View>
        </View>


        <TouchableOpacity onPress={() => {}} style={styles.editar2}>
            <AntDesign name="edit" size={20} color="#777778"/>
        </TouchableOpacity>
        <CampoDados/>
        <TouchableOpacity onPress={() => {}} style={styles.editar}>
            <AntDesign name="edit" size={20} color="#777778" />
        </TouchableOpacity>
        <Descricao/>
        <CampoSecurity/>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container:{

    },
    notificacao:{
        position: 'absolute',
        marginStart: 350,
        marginTop: 30,
    },

    material:{
        width: 315,
        marginHorizontal: 100,
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    editar:{
        position: 'absolute',
        marginStart: 370,
        marginTop: 510,
    },
    editar2:{
        position: 'absolute',
        marginStart: 370,
        marginTop: 386,
    }
})