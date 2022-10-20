import React, {useState}from "react";
import { View, StyleSheet, Dimensions, Text, SafeAreaView, TouchableOpacity,Image } from "react-native";

import Descricao from "../../../componentes/Descricao";
import CampoSecurity from '../componente/CampoSecurity';
import CampoDados from '../componente/CampoDados';
import TopoPerfilEditavel from './TopoPerfilEditavel';

import {materialColeta} from '../../../services/requisicoes/apiDevs/usersCatador';
//icones
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



//colocar scrollview

export default function PerfilColetor(user){

    //Manipular a escolha dos residuos 

    const [material, setMaterial] = useState({})
    const [escolhe, setEscolher] = useState()

    async function alteraMaterial(){
        const resultado = await materialColeta()

        if(resultado){
            setMaterial(resultado)
        }
        else{
            return{}
        }
    }

    
    return<SafeAreaView style={styles.container}>
        
        <TopoPerfilEditavel user={user}/>
        <Ionicons name="ios-notifications-outline" size={24} color="#777778" style={styles.notificacao} />
        

        <Text style={{textAlign: 'center', marginTop: 10, color: '#FF5353'}}>Material que coleta</Text> 

        <View style={styles.material}>
    
            <View style={{marginStart: 5, alignItems: 'center', marginEnd: 10}}>
                <MaterialCommunityIcons name="leaf-circle" size={38} color="#FF5353"/>
                <Text>{'Orgânico'}</Text>
            </View>
            <TouchableOpacity  style={{marginStart: 10, alignItems: 'center'}} onPress={() => {}}>
                <FontAwesome5 name="plus-circle" size={34} color="#C9C9C9"/>
                <Text>{"Novo"}</Text>
            </TouchableOpacity>
        </View>

        <CampoDados/>
        
        <AntDesign name="edit" size={20} color="#777778" onPress={() => {}} style={styles.editar}/>
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
        //width: 315,
        marginHorizontal: 134,
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
   
    editar:{
        position: 'absolute',
        marginStart: 370,
        marginTop: 485,
    },
    

})