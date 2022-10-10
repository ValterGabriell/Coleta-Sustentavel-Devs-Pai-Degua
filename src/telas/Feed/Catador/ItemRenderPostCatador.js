import React from "react";
import { View, TouchableOpacity, StyleSheet, Image, Text} from "react-native";

import lixoVeropa from '../../../assets/lixoVeropa.jpg'

//id, titulo,description, photo, props,localization, state, ideal_time,amount


/*
    id = {item.id}
    titulo = {item.titulo}
    distancia = {item.distancia}
    data = {item.data}
*/ 

const Item = ({props, titulo,distancia, data}) => (

 
    <View style={styles.contanier}>
        <TouchableOpacity
            style={styles.item} 
            onPress={() => {props.navigation.navigate('AnaliseColeta')}}>
            <View style={styles.viewOne}>
                <Image source={lixoVeropa} style={styles.imgLixo}></Image>
                <View style={{marginStart:10}}>
                    <Text style={styles.txtName}>{titulo}</Text>
                    <Text style={styles.distancia}>Distância: {distancia}</Text>
                    <Text style={styles.txtData}>{data}</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>

);

export default function ItemRenderCatador({ props, titulo,distancia, data}) {
    return Item({props, titulo,distancia, data})
}

const styles = StyleSheet.create({
    contanier:{
        marginVertical:10,
    },
    viewOne: {
        flexDirection: 'row',
    },
    imgLixo: {
        width: 100,
        height: 70,
        borderRadius:16
    },
    title: {
        fontSize: 32,
        
    },
    item: {
        padding: 8
    },
    txtName: {
        marginLeft: 8,
        fontWeight: '500',
        fontSize: 16,
        color: '#454545',
    },
    txtComent: {
        marginLeft: 8,
        fontSize: 14,
        color: '#454545'
    },
    txtData: {
        marginRight: 8,
        fontSize: 12,
        alignSelf:'flex-end',
        marginLeft:8,
        color: '#454545'
    },
    distancia:{
        marginStart: 8,
        marginTop:12,
        fontSize: 12,
    }
});