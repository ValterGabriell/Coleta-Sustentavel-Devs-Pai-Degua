import React from "react";
import { FontAwesome } from '@expo/vector-icons'
import { Image,Text } from "react-native";
import { View } from "react-native";
import imgMapa from '../../../assets/imgMapa.jpg'


export default function HeaderNoticia() {
    return <>
        <Image source={imgMapa} style={{height:'25%'}} />
        <View style={{flexDirection:"row"}}>
            <FontAwesome name="map-marker"></FontAwesome>
            <Text>blablabla</Text>
            <FontAwesome name="star-o"></FontAwesome>
            <FontAwesome name="share-alt"></FontAwesome>
        </View>

    </>
}