import React from "react";
import { FontAwesome } from '@expo/vector-icons'
import { Image, Text, StyleSheet } from "react-native";
import { View } from "react-native";



export default function HeaderNoticia({local, imagem}) {
    return <>
        <Image source={imagem} style={styles.imgTitle} />
        <View style={{ flexDirection: "row" }}>
            <FontAwesome size={16} style={styles.mapMarker} name="map-marker"></FontAwesome>
            <Text style={styles.txtLocal}>{local}</Text>
            <View style={styles.sharedAndStar}>
                <FontAwesome style={{marginRight:8}} size={16} name="star-o"></FontAwesome>
                <FontAwesome size={16} name="share-alt"></FontAwesome>
            </View>

        </View>

    </>
}

const styles = StyleSheet.create({
    imgTitle: {
        height: '25%',
        width: '95%',
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 8
    },
    mapMarker: {
        margin: 4,
        marginLeft:12,
        padding: 5
    },
    txtLocal: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 6
    },
    sharedAndStar:{
        flexDirection:'row',
        marginTop:4,
        marginLeft:188,
        padding:5,
    }
})