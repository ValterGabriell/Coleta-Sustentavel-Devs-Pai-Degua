
import React from "react";
import { FlatList, TouchableHighlight, Text, StyleSheet } from "react-native";
import { View } from "react-native";


export default function ListaBarracasAtendidas({props, comment}) {
    return <>
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
                            <Text style={styles.txtComent}>{item.body}</Text>
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
