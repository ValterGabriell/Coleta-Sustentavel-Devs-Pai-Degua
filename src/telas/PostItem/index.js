import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import HeaderOfScreen from "./componentes/Feirante/HeaderOfScreen";
import MiddleOfScreen from "./componentes/Feirante/MiddleOfScreen";
import EndOfScreen from "./componentes/Feirante/EndOfScreen";
import LottieView from 'lottie-react-native'

export default function PostItem(props) {
    const titulo = props.route.params.titulo
    const imagem = props.route.params.imagem
    const material = props.route.params.material
    const descricao = props.route.params.descricao
    const localizacao = props.route.params.localizacao
    const estado = "Bom"
    const horario = "10h - 12h"
    const qtd = "2k"
    const [loading, setLoading] = useState()
    const [finished, setfinished] = useState()


    var changeStatusOfColect = () => {

        var isGoingThere = true
        setLoading(isGoingThere)
    }

    var changeStatusIfIsFinished = () => {
        let isFinished = false
        setfinished(isFinished)
    }

    useEffect(() => {
        changeStatusOfColect()
        changeStatusIfIsFinished()
    }, [])


    return <>
        <HeaderOfScreen titulo={titulo} localizacao={localizacao} />
        <MiddleOfScreen imagem={imagem} descricao={descricao} />
        <EndOfScreen material={material} estado={estado} horario={horario} qtd={qtd} />

        {
            //se ainda ninguem aceitou a requisicao
            !loading ?
                <>
                    <View style={{ flex: 2 }}>
                        <LottieView source={require('../../assets/113756-ball-loader.json')} autoPlay loop />
                    </View>
                    <Text style={styles.txtLoading}>Aguardando coletor...</Text>
                </>
                : !finished ? //se alguem aceitou mas nao finalizou

                    <><View style={{ flex: 1 }}>
                        <LottieView source={require('../../assets/113683-biker-animation.json')} autoPlay loop />
                    </View>
                        <Text style={styles.txtLoading}>Coletor à caminho!</Text>

                    </>
                    ://se alguem  finalizou
                    <><View style={{ flex: 1 }}>
                        <LottieView source={require('../../assets/94227-ok-simple.json')} autoPlay loop />
                    </View>
                        <Text style={styles.txtLoading}>Coleta finalizada!</Text>

                    </>
        }


    </>
}


const styles = StyleSheet.create({
    txtLoading: {
        color: "#004444",
        fontWeight: "bold",
        alignSelf: "center",
        flex: 1
    }
});