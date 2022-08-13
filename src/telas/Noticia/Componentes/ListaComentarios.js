import React from "react";
import { FlatList, TouchableHighlight, Text, Image } from "react-native";
import { View } from "react-native";
import ImgTeste from '../../../assets/imgMapa.jpg'


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        imagem: ImgTeste,
        name: 'NomePessoa',
        comentario: 'Comentario'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        imagem: ImgTeste,
        name: 'NomePessoa',
        comentario: 'Comentario'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        imagem: ImgTeste,
        name: 'NomePessoa',
        comentario: 'Comentario'
    },
];

export default function ListaComentario() {
    return <>
        <FlatList
            data={DATA}
            renderItem={({ item, index, separators }) => (
                <TouchableHighlight
                    key={item.key}
                    onPress={() => this._onPress(item)}
                    onShowUnderlay={separators.highlight}
                    onHideUnderlay={separators.unhighlight}>


                    <View style={{ backgroundColor: 'white', flexDirection: "row" }}>
                    <Image source={ImgTeste} style={{width:'25%', height:'100%'}}/>
                        <View>
                            <Text>{item.name}</Text>
                            <Text>{item.comentario}</Text>
                        </View>
                        
                    </View>
                </TouchableHighlight>
            )}
            keyExtractor={item => item.id}
        />
    </>
}