import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";


const DATA = [{
    gravidade: 30,
    id: 1,
    latitude: -1.4519576253104869,
    longitude: -48.503270684731284,
    name: "barraca da zé",
    bio: "teste 3"
},
{
    gravidade: 15,
    id: 2,
    latitude: -1.452576253104869,
    longitude: -48.503270684731284,
    name: "lanche da matilda",
    bio: "teste 2"
},
{
    gravidade: 45,
    id: 3,
    latitude: -1.453576253104869,
    longitude: -48.503270684731284,
    name: "acai do seu joao",
    bio: "teste 1"

}

]


export default function GoogleMaps() {


    return (
        <View>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: -1.4529576253104869,
                    longitude: -48.503270684731284,
                    latitudeDelta: 0.0121,
                    longitudeDelta: 0.0121
                }}

            >
                {DATA.map((item) => (
                    <Marker
                        key={item.id}
                        calloutAnchor={{
                            x: 2.9,
                            y: 0.8,
                        }}
                        coordinate={{
                            latitude: Number(item.latitude),
                            longitude: Number(item.longitude),
                        }}
                        pinColor={item.gravidade > 10 && item.gravidade < 20 ? 'orange' : item.gravidade < 10 ? 'green' : 'red'}

                    >
                        <Callout>
                            <View style={styles.calloutContainer}>
                                <Text style={styles.calloutText}>{item.name}</Text>
                                <Text style={styles.calloutSmallText}>{item.bio}</Text>
                            </View>
                        </Callout>
                    </Marker>
                ))}

            </MapView>
        </View>

    );
}

const styles = StyleSheet.create({
    map: {
        height: 400,
    },
})