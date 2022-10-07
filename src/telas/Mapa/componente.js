import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Detalhe from "./buttonMais";
import { DATA_COLETA_SESMA } from '../../services/constantes/MapConstant'

export default function GoogleMaps({ props }) {

    const [valorClicado, setValorClicado] = useState({})
    const [press, setPress] = useState(false)

    //O elemento filho n consegue passar dados para o elemento pai, entao tive que jogar a tela de cima do mapa e a botao detalhes aqui pra dentro pra funcionar a programacao reativa
    return (
        <View>
            <View style={styles.LinkEndereco}>
                <Text style={styles.titulo}>{press ? valorClicado.name : "Clique em um marcador"}</Text>
                <TouchableOpacity style={styles.mapa}>
                    <MaterialCommunityIcons name="google-maps" size={22} color="#0078AA" />
                    <Text style={{ color: '#0078AA' }}>{valorClicado.latitude} {valorClicado.longitude}</Text>
                </TouchableOpacity>
            </View>


            <MapView style={styles.map}
                initialRegion={{
                    latitude: -1.4529576253104869,
                    longitude: -48.503270684731284,
                    latitudeDelta: 0.0121,
                    longitudeDelta: 0.0121
                }}

            >
                {DATA_COLETA_SESMA.map((item) => (
                    <Marker
                        key={item.id}
                        calloutAnchor={{
                            x: 1.9,
                            y: 0.8,
                        }}
                        coordinate={{
                            latitude: Number(item.latitude),
                            longitude: Number(item.longitude),
                        }}
                        pinColor={item.gravidade === 10 && item.gravidade === 20 ? 'orange' : item.gravidade === 10 ? 'green' : 'red'}
                        onPress={() => {
                            setValorClicado(item)
                            setPress(true)
                        }}
                    >
                        <Callout>

                        </Callout>
                    </Marker>
                ))}

            </MapView>
            <Text>Legenda</Text>
            <View>
                    <Text>Material Reciclável Misturado - verde</Text>
            </View>


            <Detalhe text='Detalhes do local' onPress={() => {
                props.navigation.navigate("FeedScreen")
                alert("Clicado: " + valorClicado.id)
            }} />

        </View>

    );
}

const styles = StyleSheet.create({
    map: {
        height: 400,
    },
    calloutText: {
        fontSize: 12
    },
    LinkEndereco: {
        marginBottom: 10,
        color: '#2E7D32',
    }, titulo: {
        fontSize: 20,
        fontWeight: '500',

    },
    mapa: {
        flexDirection: 'row',
    },



})