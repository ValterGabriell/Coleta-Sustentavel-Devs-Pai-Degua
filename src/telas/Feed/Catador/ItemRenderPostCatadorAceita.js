import React from "react";
import { View, TouchableOpacity, StyleSheet, Image, Text } from "react-native";

import lixoVeropa from '../../../assets/lixoVeropa.jpg'

const Item = ({ id, userId, titulo, ideal_time,merchant_id, on_the_way, description, localization, props,price,requestByScarvengerId, aceita }) => (


    <View style={styles.contanier}>
        <TouchableOpacity
            onPress={() => {
                props.navigation.navigate("AnaliseColeta", {
                    scarvengerId: userId,
                    requestId: id,
                    titulo: titulo,
                    on_the_way:on_the_way,
                    requestByScarvengerId:requestByScarvengerId,
                    aceita:aceita
                })

            }
            }>
            <View style={styles.viewOne}>
                <Image source={lixoVeropa} style={styles.imgLixo}></Image>
                <View style={{ marginStart: 16 }}>
                    <Text style={styles.txtName}>{titulo}</Text>
                    <Text style={styles.distancia}>Preço: {price}</Text>
                    <Text style={styles.txtData}>{"Horário: " + ideal_time}</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>

);


export default function ItemRenderCatadorAceita({ id, userId, titulo, ideal_time,merchant_id, on_the_way, description, localization, props,price,requestByScarvengerId, aceita }) {
    return Item({ id, userId, titulo, ideal_time,merchant_id, on_the_way, description, localization, props,price,requestByScarvengerId, aceita })
}

const styles = StyleSheet.create({
    contanier: {
        marginBottom: 12,
        marginTop:12,
        marginLeft:16
        
    },
    viewOne: {
        flexDirection: 'row',
    },
    imgLixo: {
        width: 100,
        height: 70,
        borderRadius: 16,

    },
    title: {
        fontSize: 32,

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
        alignSelf: 'flex-end',
        marginLeft: 8,
        color: '#454545'
    },
    distancia: {
        marginStart: 8,
        marginTop: 12,
        fontSize: 12,
    }
});