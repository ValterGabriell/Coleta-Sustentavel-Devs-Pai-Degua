import React from "react";
import { FlatList, TouchableHighlight, Text, Image, StyleSheet } from "react-native";
import { View } from "react-native";
import ImgTeste from '../../../assets/imgMapa.jpg'


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        imagem: ImgTeste,
        name: 'Iury',
        comentario: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        imagem: ImgTeste,
        name: 'Rebeca',
        comentario: 'Mutio bom esse app nossa que app magnifico' 
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        imagem: ImgTeste,
        name: 'Gabriel',
        comentario: 'ola brasil hexa'
    },
];

export default function ListaComentario() {
    return <>
        <FlatList
            data={DATA}
            renderItem={({ item, index, separators }) => (
                <TouchableHighlight
                    style={styles.item}
                    key={item.key}
                    onPress={() => alert('item clicado')}
                    onShowUnderlay={separators.highlight}
                    onHideUnderlay={separators.unhighlight}>


                    <View style={styles.viewOne}>
                        <Image source={ImgTeste} style={styles.img} />
                        <View>
                            <Text style={styles.txtName}>{item.name}</Text>
                            <Text style={styles.txtComent}>{item.comentario}</Text>
                        </View>

                    </View>
                </TouchableHighlight>
            )}
            keyExtractor={item => item.id}
        />
    </>
}

const styles = StyleSheet.create({
    item: {
        padding: 8
    },
    viewOne: {
        backgroundColor: 'white', flexDirection: "row", height: 40
    },
    img: {
        width: '12%', height: '100%', borderRadius: 16
    },
    txtName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8
    },
    txtComent: {
        marginLeft: 8
    }
})
