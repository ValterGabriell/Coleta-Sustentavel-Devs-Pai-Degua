import React from "react";
import { View, TouchableOpacity, StyleSheet, Image, Text } from "react-native";

import lixoVeropa from '../../../assets/lixoVeropa.jpg'

const Item = ({ id, userId, titulo, ideal_time,merchant_id, on_the_way, description, localization, props,price }) => (


    <View style={styles.contanier}>
        <TouchableOpacity
            onPress={() => {
                props.navigation.navigate("AnaliseColeta", {
                    scarvengerId: userId,
                    requestId: id,
                    titulo: titulo,
                    on_the_way:on_the_way
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


export default function ItemRenderCatador({ id, userId, titulo, ideal_time,merchant_id, on_the_way, description, localization, props,price }) {
    return Item({ id, userId, titulo, ideal_time,merchant_id, on_the_way, description, localization, props,price })
}

const styles = StyleSheet.create({
    contanier: {
        marginVertical: 12,
        alignItems: 'center',
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