import React from "react";
import { View,StyleSheet, Text, SafeAreaView} from "react-native";
import CustomButton from "../../../componentes/CustomButton/CustomButton";

//Componentes interno do app
import ButtonContact from "../../Contato/Componentes/ButtonContact";
import Descricao from "../../../componentes/Descricao";
import TopoPerfil from './TopoPerfil';

//icones
import { MaterialCommunityIcons } from '@expo/vector-icons';



//Pagina que o feirante visualiza o perfil do coletor

export default function PerfilUser({}){
    return<SafeAreaView style={styles.container}>
        <TopoPerfil/>

        <Text style={{textAlign: 'center', marginVertical: 10, color: '#FF5353'}}>Material que coleta</Text> 
        <View style={styles.material}>
            <View style={{marginStart: 10, alignItems: 'center', marginEnd: 10}}>
                <MaterialCommunityIcons name="leaf-circle" size={48} color="#FF5353"/>
                <Text>{'Orgânico'}</Text>
            </View>
        </View>

        <Descricao/>
        <Text style={styles.titulo}>Contato</Text>
        <ButtonContact/>
        <CustomButton text='Aceitar' onPress={() => {}}/>     
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
        marginHorizontal: '34%',
        flexDirection: 'row',
        alignItems: 'center',
    },

    fundoIcon:{
        width: 46,
        height: 46,
        backgroundColor: "#C60D0D",
        borderRadius: 50,
        alignItems: 'center',
        padding: 10,
        margin: 20
    },
    dados:{
        flexDirection: 'row',
        marginVertical: 16,
    },
    titulo:{
        color: '#FF5353',
        fontWeight: '600', 
        fontSize: 16, 
        marginStart: 16,
        marginTop: 20,
    }

})