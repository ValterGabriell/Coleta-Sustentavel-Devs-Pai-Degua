import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";



export default function GoogleMaps(){

    return(
        <View>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: -1.4519576253104869,
                    longitude: -48.503270684731284,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
            />     
        </View>

    );
}

const styles = StyleSheet.create({
    map:{
        height: 400,
    },
})