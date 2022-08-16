import React from "react";
import { View,Text,StyleSheet,Image } from "react-native";

export default function TopTreeItem({image, name, place, xp}){
    return <>
        <View>
            <Text>{place}</Text>
            <Image style={styles.imagem} source={image} />
            <Text>{name}</Text>
            <Text>{xp}</Text>
        </View>
    </>
}

const styles = StyleSheet.create({
    
    imagem:{
        width:50,
        height:50
    }
})