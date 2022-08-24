import React, { useEffect, useState } from "react";
import { FlatList, TouchableHighlight, Text, StyleSheet } from "react-native";
import { View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { getAllComments } from '../../../services/requisicoes/comments'
import { useIsFocused } from '@react-navigation/native';

const DATA = [
    {
        local: 'Feira do peixe',
        atendida: true,
        name: 'Iury',
        descricao: 'lorem ipisulum'
    },
    {
        local: 'Mulheres da coxinha',
        atendida: false,
        name: 'Gabriel',
        descricao: 'lorem ipisulum'
    },
    {
        local: 'açai da vanessa',
        atendida: false,
        name: 'Rebecca',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        local: 'açai da vanessa',
        atendida: false,
        name: 'Rebecca',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    }, {
        local: 'Feira do peixe',
        atendida: true,
        name: 'Iury',
        descricao: 'lorem ipisulum'
    },
    {
        local: 'Mulheres da coxinha',
        atendida: false,
        name: 'Gabriel',
        descricao: 'lorem ipisulum'
    },
    {
        local: 'açai da vanessa',
        atendida: false,
        name: 'Rebecca',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        local: 'açai da vanessa',
        atendida: false,
        name: 'Rebecca',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
]

export default function ListaDenuncia({ props, isComumUser }) {

    const [comment, setComment] = useState([])
    
    useEffect(() => {
        (async () => {
            const result = await getAllComments()
            setComment(result)
        })()

    }, [])


    return <>
        {!isComumUser ?
            <FlatList
                data={comment}
                renderItem={({ item, index, separators }) => (

                    <TouchableHighlight

                        style={styles.item}
                        key={item.key}
                        onPress={() => props.navigation.navigate('NoticiaOrgaos', {
                            titulo: item.name,
                            place: item.local,
                            atendida: item.atendida

                        })}
                        onShowUnderlay={separators.highlight}
                        onHideUnderlay={separators.unhighlight}>

                        <View style={styles.viewOne}>
                            <View style={styles.viewTwo}>
                                <Text style={styles.txtName}>{item.email}</Text>
                                <Text style={styles.txtComent}>{item.name}</Text>
                                <Text style={styles.txtComent}>{item.body}</Text>
                            </View>

                            {
                                item.atendida ?

                                    <Ionicons name='checkmark' size={32} color='green' />

                                    :

                                    <Ionicons name='close' size={32} color='red' />

                            }



                        </View>
                    </TouchableHighlight>
                )}
                keyExtractor={item => item.id}
            /> :
            <FlatList
                data={DATA}
                renderItem={({ item, index, separators }) => (

                    <TouchableHighlight

                        style={styles.item}
                        key={item.key}
                        onShowUnderlay={separators.highlight}
                        onHideUnderlay={separators.unhighlight}>

                        <View style={styles.viewOne}>
                            <View style={styles.viewTwo}>
                                <Text style={styles.txtName}>{item.local}</Text>
                                <Text style={styles.txtComent}>{item.name}</Text>
                                <Text style={styles.txtComent}>{item.descricao}</Text>
                            </View>

                            {
                                item.atendida ?

                                    <Ionicons name='checkmark' size={32} color='green' />

                                    :

                                    <Ionicons name='close' size={32} color='red' />

                            }



                        </View>
                    </TouchableHighlight>
                )}
                keyExtractor={item => item.id}
            />


        }

    </>
}

const styles = StyleSheet.create({
    item: {
        padding: 8
    },
    viewOne: {
        backgroundColor: 'white', flexDirection: "row", backgroundColor: "#D3D3D3", borderRadius: 16
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
        marginLeft: 8, marginBottom: 2
    },
    icon: {
        marginLeft: 8,
        marginRight: 8
    }
})