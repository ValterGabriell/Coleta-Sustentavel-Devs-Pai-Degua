import React, { useState } from "react";
import { FlatList, TouchableHighlight, Text, Image, StyleSheet } from "react-native";
import { View } from "react-native";
import ImgTeste from '../../../assets/imgMapa.jpg'
import { FontAwesome } from '@expo/vector-icons'


const DATA = [
    {
        qtdPost: 28,
        imagem: ImgTeste,
        name: 'Iury',
        qtdComment: 14,
        qtdStar: 84
    },
    {
        qtdPost: 16,
        imagem: ImgTeste,
        name: 'Gabriel',
        qtdComment: 13,
        qtdStar: 21
    },
    {
        qtdPost: 220,
        imagem: ImgTeste,
        name: 'Rebecca',
        qtdComment: 1,
        qtdStar: 50
    },
];

export default function ListaRanking() {

    const [size, setSize] = useState()


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
                        <View style={styles.viewTwo}>
                            <Text style={styles.txtName}>{item.name}</Text>

                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesome size={16} style={styles.icon} name="clipboard"></FontAwesome>
                                <Text style={styles.txtComent}>{item.qtdComment}</Text>
                                <FontAwesome size={16} style={styles.icon} name="comments-o"></FontAwesome>
                                <Text style={styles.txtComent}>{item.qtdPost}</Text>
                                <FontAwesome size={16} style={styles.icon} name="star-o"></FontAwesome>
                                <Text style={styles.txtComent}>{item.qtdStar}</Text>
                            </View>

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
        backgroundColor: 'white', flexDirection: "row"
    },
    viewTwo: {
        width: '85%', marginLeft: 4
    },
    img: {
        width: 45, height: 45, borderRadius: 16, marginTop: 4
    },
    txtName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8
    },
    txtComent: {
        marginLeft: 0
    },
    icon:{
        marginLeft:8,
        marginRight:8
    }
})
