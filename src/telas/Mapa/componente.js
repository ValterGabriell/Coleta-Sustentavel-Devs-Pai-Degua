import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getRequest } from "../../services/requisicoes/apiDevs/requisicoes";
import lixoveropa from '../../assets/lixoVeropa.jpg';
import { DATA_COLETA_SESMA } from "../../services/constantes/MapConstant";

export default function GoogleMaps({ props }) {

    const [valorClicado, setValorClicado] = useState({})
    const [press, setPress] = useState(false)
    const [requests, setrequest] = useState([])
    const [arrayToMarker, setNewArray] = useState([])


    useEffect(() => {
        (async () => {
          
            const result = await getRequest()
            setrequest(result)
            
         
            
        })()
    }, [])


    //O elemento filho n consegue passar dados para o elemento pai, entao tive que jogar a tela de cima do mapa e a botao detalhes aqui pra dentro pra funcionar a programacao reativa
    return (
        <View>
            <View style={styles.LinkEndereco}>
                <Text style={styles.titulo} maxFontSizeMultiplier={1.3}>{press ? valorClicado.title : 'Encontre os pontos'}</Text>
                <TouchableOpacity style={styles.mapa}>
                    <MaterialCommunityIcons name="google-maps" size={22} color="#FF5353" />
                    <Text style={{ color: '#FF5353', fontSize: 14 }} maxFontSizeMultiplier={1.3}>{press ? valorClicado.localization : "Clique em um marcador"}</Text>
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
                {requests.map((item) => (
                    <Marker
                        key={item.id}
                        calloutAnchor={{
                            x: 1.9,
                            y: 0.8,
                        }}
                        coordinate={{
                            latitude: Number(item.localization.split(",", 2)[0]),
                            longitude: Number(item.localization.split(",", 2)[1]),
                        }}
                        pinColor={item.gravidade === 10 && item.gravidade === 20 ? 'orange' : item.gravidade === 10 ? 'green' : 'red'}
                        onPress={() => {
                            setValorClicado(item)
                            setPress(true)
                        }}
                        image={''}
                        title={'Barraca Da Joana'}
                        description={'Coleta de 2 kg de plastico'}
                    >
                        <Callout tooltip >
                            <View>
                                <View style={styles.balao}>
                                    <Text style={styles.texto} maxFontSizeMultiplier={1.1}>{item.title}</Text>
                                    <Text style={styles.subtitulo} maxFontSizeMultiplier={1.1}>{item.description}</Text>
                                    <Image source={lixoveropa} style={styles.imagem} />
                                </View>
                                <View style={styles.arrowBorder} />
                                <View style={styles.arrow} />
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
        height: '100%',
    },
    calloutText: {
        fontSize: 14,
    },

    LinkEndereco: {
        marginBottom: 10,
        color: '#2E7D32',
        marginHorizontal: 16,
    },
    titulo: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10,
        marginHorizontal: 8,
    },
    mapa: {
        flexDirection: 'row',
    },
    balao: {
        flexDirection: 'column',
        width: 150,
        alignSelf: 'flex-start',
        backgroundColor: 'white',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: 10,
    },
    arrow: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#fff',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -32,
    },
    arrowBorder: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#007a87',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -0.5,
    },
    texto: {
        fontSize: 12,
        marginBottom: 5,
        fontWeight: '600',
    },
    subtitulo: {
        fontSize: 12,
        marginBottom: 5,
        fontWeight: '500',
        color: '#FF5353'
    },
    imagem: {
        width: 120,
        height: 80,
    }
})