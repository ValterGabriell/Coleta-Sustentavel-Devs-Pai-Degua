import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";



export default function GoogleMaps() {

    return (
        <View>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: -1.4519576253104869,
                    longitude: -48.503270684731284,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
                
            > 

                <Marker pinColor={'blue'} coordinate={{latitude:-1.45195762531048, longitude:-48.5032706847}} />
                <Marker pinColor={'red'} coordinate={{latitude:-1.44195762531048, longitude:-48.5032706847}} />
                <Marker pinColor={'orange'} coordinate={{latitude:-1.43195762531048, longitude:-48.5032706847}} />
                <Marker pinColor={'green'} coordinate={{latitude:-1.42195762531048, longitude:-48.5032706847}} />
            </MapView>
        </View>

    );
}

const styles = StyleSheet.create({
    map: {
        height: 400,
    },
})