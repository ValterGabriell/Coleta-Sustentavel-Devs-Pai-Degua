import React from "react";
import { View, TouchableOpacity, StyleSheet, Image, Text } from "react-native";


/*
   const id = props.route.params.id
    const titulo = props.route.params.titulo
    const imagem = props.route.params.imagem
    const descricao = props.route.params.descricao
    const localizacao = props.route.params.localizacao
    const estado = props.route.params.state
    const horario = props.route.params.data
    const qtd = props.route.params.quantidade

*/ 


const Item = ({ id, titulo,description, photo, props,localization, state, ideal_time,amount}) => (

    <View>
        <View >
            <TouchableOpacity
                style={styles.item}
                onPress={() => {
                   props.navigation.navigate("AnaliseColeta",{
                    id:id,
                    titulo: titulo,
                    localizacao:localization,
                    imagem: photo,
                    data:ideal_time,
                    descricao: descricao,
                    state:state,
                    quantidade:amount
                   })     
                }
                }>
                <View style={styles.viewOne}>
                    <Image source={photo} style={styles.imgLixo}></Image>
                    <View>
                        <Text style={styles.txtName}>{description}</Text>
                        <Text style={styles.txtComent}>{description}</Text>
                        <Text style={styles.txtData}>{ideal_time}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    </View>
);

export default function ItemRender({ id, titulo, description, photo, props,localization, state, ideal_time,amount}) {
    return Item({ id, titulo, description, photo, props,localization,state,ideal_time,amount})
}

const styles = StyleSheet.create({
    viewOne: {
        flexDirection: 'row',
    },
    imgLixo: {
        width: 95,
        height: 60,
        borderRadius:16
    },
    title: {
        fontSize: 32
    },
    item: {
        padding: 8
    },
    txtName: {
        marginLeft: 8,
        fontWeight: 'bold',
        fontSize: 18
    },
    txtComent: {
        marginLeft: 8,
        fontSize: 14
    },
    txtData: {
        marginRight: 8,
        fontSize: 14,
        alignSelf:'flex-end',
        marginLeft:8
    }
});