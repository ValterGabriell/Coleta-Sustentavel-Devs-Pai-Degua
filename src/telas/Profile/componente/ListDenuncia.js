import React, { useState } from "react";
import { FlatList, TouchableHighlight, Text, Image, StyleSheet } from "react-native";
import { View } from "react-native";
const DATA = [
    {
        local: 'Feira do peixe',
        status: false,
        name: 'Iury',
        descricao: 'lorem ipisulum'
    },
    {
        local: 'Mulheres da coxinha',
        status: false,
        name: 'Gabriel',
        descricao: 'lorem ipisulum'
    },
    {
        local: 'açai da vanessa',
        status: false,
        name: 'Rebecca',
        descricao: 'lorem ipisulum'
    },
]

export default function ListaDenuncia() {

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
                        <View style={styles.viewTwo}>
                            <Text style={styles.txtName}>{item.local}</Text>
                            <Text style={styles.txtComent}>{item.name}</Text>
                            <Text style={styles.txtComent}>{item.descricao}</Text>

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
    icon: {
        marginLeft: 8,
        marginRight: 8
    }
})